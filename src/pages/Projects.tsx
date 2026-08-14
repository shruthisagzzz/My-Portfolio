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

          <p className="text-[var(--text-muted)] max-w-[600px]">
            Software, AI, and data-driven systems built around real-world
            problems.
          </p>
        </RevealOnScroll>

        <div className="mt-10 space-y-7">

          {projects.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 100}>

              <div className="border border-[var(--border)] rounded-[18px] overflow-hidden bg-[var(--panel)] hover:border-[var(--border-strong)] transition-colors">

                {/* PROJECT IMAGE */}
                <div className="relative h-[240px] md:h-[300px] overflow-hidden bg-[var(--panel-2)]">

                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} project screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--panel-2)] to-[var(--bg-soft)]">
                      <span className="font-[var(--font-serif)] text-7xl text-[var(--border-strong)]">
                        {p.num}
                      </span>
                    </div>
                  )}

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Project number */}
                  <div className="absolute top-5 left-5">
                    <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white">
                      PROJECT {p.num}
                    </span>
                  </div>

                </div>

                {/* PROJECT CONTENT */}
                <div className="p-8 md:p-9">

                  <h3 className="text-[23px] mb-2.5">
                    {p.title}
                  </h3>

                  <p className="text-[15px] text-[var(--text-muted)] mb-5">
                    {p.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-strong)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="grid md:grid-cols-2 gap-x-10">

                    {[
                      ["Problem", p.problem],
                      ["Solution", p.solution],
                      ["Features", p.features],
                      ["Challenges", p.challenges],
                    ].map(([label, text]) => (
                      <div key={label} className="mb-5">

                        <b className="font-mono text-[11px] uppercase tracking-wide text-[var(--gold)] block mb-1.5">
                          {label}
                        </b>

                        <p className="text-sm text-[var(--text-muted)]">
                          {text}
                        </p>

                      </div>
                    ))}

                  </div>

                  {/* LINKS */}
                  <div className="flex gap-3 flex-wrap mt-5">

                    {p.githubUrl && p.githubUrl !== "#" && (
                      <MagneticButton
                        href={p.githubUrl}
                        variant="ghost"
                        className="!py-2.5 !px-4.5 !text-[13px]"
                      >
                        GitHub ↗
                      </MagneticButton>
                    )}

                    {/* {p.caseStudyUrl && p.caseStudyUrl !== "#" && (
                      <MagneticButton
                        href={p.caseStudyUrl}
                        variant="ghost"
                        className="!py-2.5 !px-4.5 !text-[13px]"
                      >
                        Live Demo ↗
                      </MagneticButton>
                    )} */}

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