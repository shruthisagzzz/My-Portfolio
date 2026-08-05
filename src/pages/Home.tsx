import { useTypewriter } from "../hooks/useTypewriter";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import MagneticButton from "../components/ui/MagneticButton";
import SkillsNetwork from "../components/ui/SkillsNetwork";
import {
  roles,
  skillCategories,
  experience,
  achievements,
  testimonials,
  resumeSummary,
  profile,
} from "../data/portfolio";



export default function Home() {
  const typed = useTypewriter(roles);


  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] text-[var(--text-muted)] mb-6 tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[var(--success)]">
                <span className="absolute inset-[-4px] rounded-full border border-[var(--success)] animate-ping" />
              </span>
              OPEN TO FULL-TIME SWE ROLES · BENGALURU / REMOTE
            </div>

            <h1 className="font-[var(--font-serif)] font-semibold leading-[1.02] tracking-tight text-[clamp(40px,6.4vw,76px)]">
              Shruthi Sagar —<br />
              <span className="italic font-medium text-[var(--gold)]">building</span> full-stack products
              <br />
              with data at the core.
            </h1>

            <div className="mt-6 h-8 flex items-center font-mono text-[clamp(16px,2vw,20px)] text-[var(--violet)]">
              {typed}
              <span className="inline-block w-[2px] h-[1em] bg-[var(--violet)] ml-0.5 animate-[blink_1s_step-end_infinite]" />
            </div>

            <p className="mt-6 max-w-[520px] text-[var(--text-muted)] text-[17px]">
              Computer Science (Data Science) undergraduate at Atria Institute of Technology.
              I ship responsive React &amp; Node applications, design REST APIs, and bring a
              data-driven lens to product decisions — currently building for e-commerce
              clients at PANDAeCe.
            </p>

            <div className="mt-9 flex gap-4 flex-wrap">
              <MagneticButton href={profile.resumeUrl} variant="primary">Download Resume</MagneticButton>
              <MagneticButton to="/contact" variant="ghost">Contact Me</MagneticButton>
            </div>

            <div className="mt-10 flex gap-5 items-center">
              <a href={profile.github} target="_blank" rel="noreferrer" className="magnetic w-10 h-10 border border-[var(--border)] rounded-full flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5 transition-all" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.28 1.84 1.28 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.15 0-1.36.47-2.47 1.24-3.34-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6.01 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.71.24 2.97.12 3.28.77.87 1.24 1.98 1.24 3.34 0 4.78-2.81 5.83-5.49 6.14.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z"/></svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="magnetic w-10 h-10 border border-[var(--border)] rounded-full flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
              </a>
              <a href={`mailto:${profile.email}`} className="magnetic w-10 h-10 border border-[var(--border)] rounded-full flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5 transition-all" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 9L2.4 6.25A1 1 0 0 1 3 6h18a1 1 0 0 1 .6.25L12 13Z"/></svg>
              </a>
            </div>
          </div>

          <RevealOnScroll>
            <div className="rounded-[20px] border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--panel-2)] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex justify-between items-center mb-4 font-mono text-xs text-[var(--text-dim)]">
                <span>profile.card()</span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-[var(--panel)] to-[var(--bg-soft)]">
               <img
  src="/images/me.jpeg"
  alt={profile.name}
  className="w-full h-full object-cover"
/>  
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--violet-soft),transparent_60%)]" />
                <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,13,20,0.7)] backdrop-blur-md border border-[var(--border)] rounded-[10px] px-3.5 py-3 font-mono text-xs text-[var(--text-muted)]">
                  📍 {profile.location}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-[var(--border)] mt-4 rounded-xl overflow-hidden">
                {[
                  ["15+", "Components Built"],
                  ["10+", "Stores Shipped"],
                  ["7.8", "CGPA"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-[var(--panel)] p-3.5 text-center">
                    <b className="font-[var(--font-serif)] text-xl block text-[var(--gold)]">{n}</b>
                    <span className="text-[11px] font-mono uppercase tracking-wide text-[var(--text-dim)]">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* NETWORK — the skills particle simulation gets its own moment */}
      <section id="network" className="py-24 md:py-32 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">LIVE SKILL MAP</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">
              How everything connects
            </h2>
            <p className="text-[var(--text-muted)] max-w-[560px]">
              Every category and skill builds itself into the graph one node at a time, then
              settles into a gently drifting network. Hover a node for emphasis.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="rounded-[20px] border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--panel-2)] p-6 mt-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex justify-between items-center mb-4 font-mono text-xs text-[var(--text-dim)]">
                <span>network.status()</span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                </div>
              </div>
              <SkillsNetwork />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SKILLS (chips fallback for SEO / accessibility / mobile legibility) */}
      <section id="skills" className="py-24 md:py-32 bg-[var(--bg-soft)] relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">CAPABILITIES</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">
              Skills &amp; tech stack
            </h2>
            <p className="text-[var(--text-muted)] max-w-[560px]">
              The full breakdown behind the network graph above.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden mt-10">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="bg-[var(--panel)] p-6 hover:bg-[var(--panel-2)] transition-colors">
                  <div className="w-8 h-8 rounded-[9px] bg-[var(--gold-soft)] text-[var(--gold)] flex items-center justify-center mb-4">
                    {cat.icon}
                  </div>
                  <h4 className="text-[15px] font-semibold mb-3">{cat.label}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span key={item} className="font-mono text-[11.5px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 md:py-32 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">CAREER PATH</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">Experience</h2>
            <p className="text-[var(--text-muted)] max-w-[560px]">Six-plus months of shipping production e-commerce and web applications.</p>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="mt-10">
              {experience.map((item, i) => (
                <div
                  key={item.title}
                  className={`grid md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-8 border-t border-[var(--border)] ${
                    i === experience.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="font-mono text-[12.5px] text-[var(--text-dim)] pt-1">{item.date}</div>
                  <div>
                    <h3 className="text-xl mb-1">{item.title}</h3>
                    <span className="text-[var(--gold)] text-sm font-mono block mb-3">{item.org}</span>
                    <ul className="space-y-2">
                      {item.points.map((p) => (
                        <li key={p} className="relative pl-5 text-[14.5px] text-[var(--text-muted)]">
                          <span className="absolute left-0 text-[var(--violet)]">→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[var(--violet-soft)] text-[var(--violet)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24 md:py-32 bg-[var(--bg-soft)] relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">RECOGNITION</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">Achievements &amp; certifications</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {achievements.map((a) => (
                <div key={a.title} className="border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--gold)] hover:-translate-y-1 transition-all">
                  <div className="text-2xl mb-3">{a.icon}</div>
                  <h4 className="text-[15px] mb-1.5 font-semibold">{a.title}</h4>
                  <span className="font-mono text-xs text-[var(--text-dim)]">{a.meta}</span>
                  {a.description && <p className="text-[13px] text-[var(--text-muted)] mt-2">{a.description}</p>}
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-14 border border-[var(--border)] rounded-2xl p-7">
              <h4 className="flex justify-between items-center font-semibold text-[15px] mb-4">
                GitHub-style contribution activity
                <span className="font-mono text-xs text-[var(--text-dim)] font-normal">connect the GitHub API to populate live</span>
              </h4>
            <div className="grid grid-cols-[repeat(26,1fr)] sm:grid-cols-[repeat(52,1fr)] gap-[3px]">
  {Array.from({ length: 52 * 7 }).map((_, i) => (
    <div
      key={i}
      className="aspect-square rounded-sm bg-[var(--panel-2)] hover:bg-[var(--gold)] transition-colors"
    />
  ))}
</div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-24 md:py-32 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">CV</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-8">Resume</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center border border-[var(--border)] rounded-[20px] p-8 md:p-11 bg-gradient-to-br from-[var(--panel)] to-[var(--bg-soft)]">
              <div>
                <h3 className="text-xl mb-4">A Summary of my resume</h3>
                <ul className="space-y-2.5">
                  {resumeSummary.map((s) => (
                    <li key={s} className="relative pl-6 text-[14.5px] text-[var(--text-muted)]">
                      <span className="absolute left-0 text-[var(--success)]">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <MagneticButton href={profile.resumeUrl} variant="primary" className="!px-8 !py-4 !text-[15px]">
                  ⬇ Download Resume (PDF)
                </MagneticButton>
                <p className="text-xs text-[var(--text-dim)] mt-3 font-mono">Link this to your hosted resume file</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 bg-[var(--bg-soft)] relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <RevealOnScroll>
            <div className="eyebrow">WHAT PEOPLE SAY</div>
            <h2 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-8">Testimonials</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="border border-[var(--border)] rounded-2xl p-7">
                  <div className="font-[var(--font-serif)] text-5xl text-[var(--gold)] opacity-40 leading-none mb-1">"</div>
                  <p className="text-[15px] text-[var(--text-muted)] mb-5">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-[var(--violet-soft)] text-[var(--violet)] flex items-center justify-center font-[var(--font-serif)] font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <b className="text-sm block">{t.name}</b>
                      <span className="text-xs text-[var(--text-dim)] font-mono">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
