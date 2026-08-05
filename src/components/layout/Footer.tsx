import { Link } from "react-router-dom";
import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] pt-12 pb-8">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <Link to="/" className="font-mono font-semibold text-sm flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
            SHRUTHI.SAGAR
          </Link>
          <div className="flex gap-7 flex-wrap text-sm text-[var(--text-muted)]">
            <Link to="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
            <Link to="/projects" className="hover:text-[var(--gold)] transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link>
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--gold)] transition-colors">Email</a>
          </div>
          <a
            href="#top"
            className="magnetic w-[38px] h-[38px] rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-xs font-mono text-[var(--text-dim)]">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span>Built with care in Bengaluru.</span>
        </div>
      </div>
    </footer>
  );
}
