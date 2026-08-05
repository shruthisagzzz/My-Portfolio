import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
}

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    const el = ref.current as HTMLElement | null;
    if (el) el.style.transform = "translate(0,0)";
  };

  const base =
    "magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-shadow duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-[var(--gold)] text-[#1a1204] hover:shadow-[0_10px_30px_-8px_rgba(242,169,59,0.5)]"
      : "border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold)]";
  const classes = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link ref={ref} to={to} onMouseMove={handleMove} onMouseLeave={handleLeave} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} onMouseMove={handleMove} onMouseLeave={handleLeave} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
    >
      {children}
    </button>
  );
}
