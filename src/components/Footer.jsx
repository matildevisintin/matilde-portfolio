export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8">
      <p className="mx-auto max-w-6xl text-center text-[13px] text-neutral-500">
        © {year} Matilde. Tutti i diritti riservati.
      </p>
    </footer>
  )
}
