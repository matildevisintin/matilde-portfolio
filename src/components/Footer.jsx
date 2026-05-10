export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-[12px] font-bold text-[var(--color-ink)] uppercase tracking-widest">
          © {year} Matilde Visintin
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)]/50">
          Materials Engineer | Circular Innovation
        </p>
      </div>
    </footer>
  )
}
