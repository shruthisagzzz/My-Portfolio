import RevealOnScroll from "../components/ui/RevealOnScroll";
import { education } from "../data/portfolio";

const traits = [
  { title: "Detail-oriented", desc: "Pixel-perfect, cross-browser builds" },
  { title: "Fast learner", desc: "Grasps new stacks quickly" },
  { title: "Collaborative", desc: "Thrives in agile client teams" },
  { title: "Analytical", desc: "Data-first problem solving" },
];

export default function About() {
  return (
    <section className="pt-32 pb-24 md:pb-32 relative z-10">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--panel-2)] flex items-center justify-center">
             <img
  src="/images/me.jpeg"
  alt="Shruthi Sagar"
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--violet-soft),transparent_60%)]" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,13,20,0.7)] backdrop-blur-md border border-[var(--border)] rounded-[10px] px-3.5 py-3 font-mono text-xs text-[var(--text-muted)]">
                📍 Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5 mt-8">
              {traits.map((t) => (
                <div key={t.title} className="border border-[var(--border)] rounded-xl p-4 hover:bg-[var(--panel)] hover:border-[var(--border-strong)] transition-colors">
                  <h4 className="text-sm font-semibold mb-1">{t.title}</h4>
                  <p className="text-[13px] text-[var(--text-dim)]">{t.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <div className="eyebrow">ABOUT ME</div>
              <h1 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-6 leading-[1.1]">
                A full-stack developer<br />with a data scientist's mind.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="space-y-4 text-[var(--text-muted)] text-[16px]">
                <p>
                  I'm <strong className="text-[var(--text)] font-semibold">Shruthi Sagar</strong>, a Computer
                  Science (Data Science) undergraduate at{" "}
                  <strong className="text-[var(--text)] font-semibold">Atria Institute of Technology, Bengaluru</strong>{" "}
                  (2022–2026), with over six months of hands-on full-stack development experience. My work spans{" "}
                  <strong className="text-[var(--text)] font-semibold">React.js, Node.js, and Shopify/WordPress</strong>{" "}
                  ecosystems, building responsive interfaces and REST APIs for real commercial clients.
                </p>
                <p>
                  What sets my approach apart is the data science lens I bring to engineering — from evaluating
                  machine learning models to visualizing insights in Power BI and Tableau. I care about writing
                  components that are reusable, interfaces that feel considered, and systems that scale.
                </p>
                <p>
                  My career objective is simple: join a team building meaningful software, keep learning at the
                  intersection of <strong className="text-[var(--text)] font-semibold">web development and applied
                  machine learning</strong>, and grow into an engineer who ships dependable, user-centric products.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="mt-12 pl-7 border-l border-[var(--border)] relative">
                {education.map((item, i) => (
                  <div key={item.title} className={`relative ${i === education.length - 1 ? "" : "pb-8"}`}>
                    <span className="absolute -left-[33px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--gold)]" />
                    <div className="font-mono text-xs text-[var(--gold)] tracking-wide">{item.year}</div>
                    <h4 className="text-base mt-1.5 mb-1">{item.title}</h4>
                    <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
