import { useState, type FormEvent } from "react";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import MagneticButton from "../components/ui/MagneticButton";
import { profile } from "../data/portfolio";

const infoItems = [
  { icon: "✉", label: "Email", value: profile.email },
  { icon: "📍", label: "Location", value: profile.location },
  { icon: "🔗", label: "LinkedIn", value: profile.linkedin.replace("https://", "") },
  { icon: "💻", label: "GitHub", value: profile.github.replace("https://", "") },
];

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    setTimeout(() => {
      setStatus("✓ Message captured locally — connect EmailJS or a backend endpoint to send it.");
      form.reset();
    }, 700);
  }

  return (
    <section className="pt-32 pb-24 md:pb-32 relative z-10">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <RevealOnScroll>
          <div className="eyebrow">GET IN TOUCH</div>
          <h1 className="font-[var(--font-serif)] font-semibold text-[clamp(28px,4vw,42px)] mt-3 mb-4">
            Let's build something.
          </h1>
          <p className="text-[var(--text-muted)] max-w-[560px]">
            Open to full-time Software Engineer, Frontend, and Full Stack roles — reach out any time.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 mt-10">
          <RevealOnScroll delay={100}>
            <div>
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-4 items-start py-4.5 border-t border-[var(--border)] ${
                    i === infoItems.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[var(--gold-soft)] text-[var(--gold)] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <b className="block text-sm mb-0.5">{item.label}</b>
                    <span className="text-[13px] text-[var(--text-dim)]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)] block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[var(--panel)] border border-[var(--border)] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--panel-2)] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)] block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[var(--panel)] border border-[var(--border)] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--panel-2)] transition-colors"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)] block mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Role / opportunity"
                  className="w-full bg-[var(--panel)] border border-[var(--border)] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--panel-2)] transition-colors"
                />
              </div>
              <div className="mb-4">
                <label className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)] block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full bg-[var(--panel)] border border-[var(--border)] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--panel-2)] transition-colors resize-none"
                />
              </div>
              <MagneticButton type="submit" variant="primary">Send Message →</MagneticButton>
              <div className="mt-3.5 text-[13px] font-mono text-[var(--success)] min-h-[18px]">{status}</div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
