export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-2 border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-16">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className="text-[14px] font-black text-[var(--color-ink)] uppercase tracking-widest">
          © {year} Matilde Visintin.
        </p>
        <p className="text-[12px] font-black uppercase tracking-[0.3em] text-[var(--color-ink)]">
          DTU 2026/27 — Engineering the Future
        </p>
      </div>
    </footer>
  )
}
