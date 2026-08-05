import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const pct = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[300] bg-gradient-to-r from-[var(--gold)] to-[var(--violet)] transition-[width] duration-100"
      style={{ width: `${pct}%` }}
    />
  );
}
