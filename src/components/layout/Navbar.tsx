import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MagneticButton from "../ui/MagneticButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 border-b ${
          scrolled
            ? "bg-[rgba(10,13,20,0.75)] backdrop-blur-xl border-[var(--border)] py-3"
            : "border-transparent py-5"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link to="/" className="font-mono font-semibold text-sm flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
            SHRUTHI.SAGAR
          </Link>

          <div className="hidden md:flex gap-9 text-sm text-[var(--text-muted)]">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative py-1 transition-colors hover:text-[var(--text)] ${
                    isActive ? "text-[var(--gold)]" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton to="/contact" variant="ghost" className="hidden md:inline-flex !py-2.5 !px-5 !text-xs">
              Let's talk
            </MagneticButton>
            <button
              className="flex md:hidden flex-col gap-[5px] w-6"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 bg-white rounded transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`h-0.5 bg-white rounded transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-white rounded transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[190] bg-[rgba(8,10,15,0.98)] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className="font-[var(--font-serif)] text-3xl"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
