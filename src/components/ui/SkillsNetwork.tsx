import { useEffect, useRef } from "react";
import { skillCategories } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";

interface Node {
  id: string;
  label: string;
  isAnchor: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  revealed: boolean;
  revealedAt: number;
}

interface Edge {
  a: string;
  b: string;
  anchorLink: boolean;
  revealed: boolean;
}

const CANVAS_HEIGHT = 460;

/**
 * Canvas-based particle simulation that reveals one skill node at a time and
 * draws a connecting edge as each node appears, then settles into an ambient,
 * gently-drifting network. Category "anchor" nodes (gold) form a ring; each
 * anchor's individual skills (violet) orbit around it and link back to it.
 * Every revealed node keeps its label rendered permanently next to it and
 * the label travels with the node as it drifts — nothing is hover-only.
 */
export default function SkillsNetwork() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(wrapRef, 0.3);

  useEffect(() => {
    if (!inView) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function cw() {
      return canvas!.clientWidth;
    }
    function ch() {
      return canvas!.clientHeight;
    }

    function resizeCanvas() {
      const rect = wrap!.getBoundingClientRect();
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = CANVAS_HEIGHT + "px";
      canvas!.width = rect.width * dpr;
      canvas!.height = CANVAS_HEIGHT * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ---------- build node graph ----------
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const byId = new Map<string, Node>();
    const centerX = () => cw() / 2;
    const centerY = () => ch() / 2;
    const anchorRadius = () => Math.min(cw(), ch()) * 0.34;

    skillCategories.forEach((cat, i) => {
      const angle = (i / skillCategories.length) * Math.PI * 2 - Math.PI / 2;
      const n: Node = {
        id: cat.id,
        label: cat.label,
        isAnchor: true,
        x: centerX() + Math.cos(angle) * anchorRadius(),
        y: centerY() + Math.sin(angle) * anchorRadius(),
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        r: 6,
        revealed: false,
        revealedAt: 0,
      };
      nodes.push(n);
      byId.set(n.id, n);
    });

    skillCategories.forEach((cat, i) => {
      const next = skillCategories[(i + 1) % skillCategories.length];
      edges.push({ a: cat.id, b: next.id, anchorLink: true, revealed: false });
    });

    skillCategories.forEach((cat, i) => {
      const angle = (i / skillCategories.length) * Math.PI * 2 - Math.PI / 2;
      const ax = centerX() + Math.cos(angle) * anchorRadius();
      const ay = centerY() + Math.sin(angle) * anchorRadius();
      // push skill nodes further out from their anchor so labels have room
      const childR = anchorRadius() * 0.62;

      cat.items.forEach((item, j) => {
        const spread = 0.46;
        const childAngle = angle + (j - (cat.items.length - 1) / 2) * spread;
        const id = `${cat.id}-${j}`;
        const n: Node = {
          id,
          label: item,
          isAnchor: false,
          x: ax + Math.cos(childAngle) * childR,
          y: ay + Math.sin(childAngle) * childR,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: 3,
          revealed: false,
          revealedAt: 0,
        };
        nodes.push(n);
        byId.set(n.id, n);
        edges.push({ a: cat.id, b: id, anchorLink: false, revealed: false });
      });
    });

    // reveal order: each anchor, then its children, moving around the ring
    const order: string[] = [];
    skillCategories.forEach((cat) => {
      order.push(cat.id);
      cat.items.forEach((_, j) => order.push(`${cat.id}-${j}`));
    });

    let revealIndex = 0;
    let lastReveal = performance.now();
    const revealInterval = 65;

    let mouseX = -9999;
    let mouseY = -9999;

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }
    function onLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    function frame(t: number) {
      if (t - lastReveal > revealInterval && revealIndex < order.length) {
        const id = order[revealIndex];
        const n = byId.get(id);
        if (n) {
          n.revealed = true;
          n.revealedAt = t;
        }
        edges.forEach((e) => {
          if (e.a === id || e.b === id) {
            const otherId = e.a === id ? e.b : e.a;
            const other = byId.get(otherId);
            if (other?.revealed) e.revealed = true;
          }
        });
        revealIndex++;
        lastReveal = t;
      }

      ctx!.clearRect(0, 0, cw(), ch());

      nodes.forEach((n) => {
        if (!n.revealed) return;
        n.x += n.vx;
        n.y += n.vy;
        const bound = 26;
        if (n.x < bound || n.x > cw() - bound) n.vx *= -1;
        if (n.y < bound || n.y > ch() - bound) n.vy *= -1;
      });

      // structural edges (grow into place as they're revealed)
      edges.forEach((e) => {
        if (!e.revealed) return;
        const a = byId.get(e.a)!;
        const b = byId.get(e.b)!;
        const grow = Math.min(1, (t - Math.max(a.revealedAt, b.revealedAt)) / 260);
        ctx!.strokeStyle = e.anchorLink
          ? `rgba(242,169,59,${0.32 * grow})`
          : `rgba(139,124,246,${0.24 * grow})`;
        ctx!.lineWidth = e.anchorLink ? 1.3 : 1;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(a.x + (b.x - a.x) * grow, a.y + (b.y - a.y) * grow);
        ctx!.stroke();
      });

      // ambient proximity links between nearby revealed leaves
      const leaves = nodes.filter((n) => n.revealed && !n.isAnchor);
      for (let i = 0; i < leaves.length; i++) {
        for (let j = i + 1; j < leaves.length; j++) {
          const a = leaves[i];
          const b = leaves[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 40) {
            ctx!.strokeStyle = "rgba(237,239,244,0.05)";
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // draw nodes first, labels in a second pass so text always sits on top
      nodes.forEach((n) => {
        if (!n.revealed) return;
        const age = Math.min(1, (t - n.revealedAt) / 300);
        const dist = Math.hypot(n.x - mouseX, n.y - mouseY);
        const isHover = dist < (n.isAnchor ? 15 : 9);

        const r = n.r * age * (isHover ? 1.6 : 1);
        ctx!.globalAlpha = age;
        ctx!.fillStyle = n.isAnchor ? "#f2a93b" : isHover ? "#ffffff" : "#8b7cf6";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = 1;
      });

      nodes.forEach((n) => {
        if (!n.revealed) return;
        const age = Math.min(1, (t - n.revealedAt) / 300);
        const dist = Math.hypot(n.x - mouseX, n.y - mouseY);
        const isHover = dist < (n.isAnchor ? 15 : 9);
        const alignRight = n.x > centerX();

        if (n.isAnchor) {
          ctx!.font = "600 11px 'JetBrains Mono', monospace";
          ctx!.fillStyle = `rgba(242,169,59,${0.9 * age})`;
          ctx!.textAlign = alignRight ? "left" : "right";
          ctx!.fillText(n.label, n.x + (alignRight ? 10 : -10), n.y + 4);
        } else {
          ctx!.font = isHover ? "600 9.5px 'JetBrains Mono', monospace" : "500 9px 'JetBrains Mono', monospace";
          ctx!.fillStyle = isHover
            ? `rgba(255,255,255,${age})`
            : `rgba(196,190,250,${0.72 * age})`;
          ctx!.textAlign = alignRight ? "left" : "right";
          ctx!.fillText(n.label, n.x + (alignRight ? 7 : -7), n.y + 3);
        }
      });

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [inView]);

  return (
    <div
      ref={wrapRef}
      className="relative rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--panel-2)] p-2 overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full" />
      <div className="absolute top-4 left-4 font-mono text-[11px] text-[var(--text-dim)] pointer-events-none">
        skills.network()
      </div>
    </div>
  );
}
