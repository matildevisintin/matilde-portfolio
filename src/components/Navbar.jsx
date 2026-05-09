import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#how-i-work', label: 'How I Work' },
  { href: '#strategic-fit', label: 'Strategic Fit' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:py-5"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="min-w-0 truncate text-[14px] font-semibold tracking-tight text-[var(--color-ink)] md:text-[15px]"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--color-accent)]">M.</span>{' '}
          Visintin
        </a>

        <ul className="hidden flex-wrap justify-end gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] text-zinc-300 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          <span aria-hidden>{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-wider text-zinc-200">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="block py-1" onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
