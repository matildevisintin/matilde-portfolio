export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-10">
      <p className="mx-auto max-w-6xl text-center text-[13px] text-zinc-500">
        © {year} Matilde Visintin. Strategic materials · composites end-of-life ·
        AI-assisted protocols.
      </p>
    </footer>
  )
}
