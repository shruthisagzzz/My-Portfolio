import RevealOnScroll from "../components/ui/RevealOnScroll";
import MagneticButton from "../components/ui/MagneticButton";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="pt-32 pb-24 md:pb-32 relative z-10">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <RevealOnScroll>
          <div className="eyebrow">SELECTED WORK</div>
          <h1 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">
            Engineering projects
          </h1>
          <p className="text-[var(--text-muted)] max-w-[560px]">
            Applied machine learning and IoT systems built around real-world data problems.
          </p>
        </RevealOnScroll>

        <div className="mt-10 space-y-7">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 100}>
              <div className="border border-[var(--border)] rounded-[18px] overflow-hidden bg-[var(--panel)] hover:border-[var(--border-strong)] transition-colors grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative bg-gradient-to-br from-[var(--panel-2)] to-[var(--bg-soft)] p-8 flex flex-col justify-between min-h-[260px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--gold-soft),transparent_60%)]" />
                  <div className="relative z-10 font-[var(--font-serif)] text-5xl text-[var(--border-strong)]">{p.num}</div>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-strong)] text-[var(--text-muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-9">
                  <h3 className="text-[23px] mb-2.5">{p.title}</h3>
                  <p className="text-[15px] text-[var(--text-muted)] mb-5">{p.description}</p>

                  {[
                    ["Problem", p.problem],
                    ["Solution", p.solution],
                    ["Features", p.features],
                    ["Challenges", p.challenges],
                  ].map(([label, text]) => (
                    <div key={label} className="mb-4">
                      <b className="font-mono text-[11px] uppercase tracking-wide text-[var(--gold)] block mb-1.5">{label}</b>
                      <p className="text-sm text-[var(--text-muted)]">{text}</p>
                    </div>
                  ))}

                  <div className="flex gap-3 flex-wrap mt-5">
                    <MagneticButton href={p.githubUrl ?? "#"} variant="ghost" className="!py-2.5 !px-4.5 !text-[13px]">GitHub</MagneticButton>
                    <MagneticButton to="/contact" variant="ghost" className="!py-2.5 !px-4.5 !text-[13px]">Case Study</MagneticButton>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
