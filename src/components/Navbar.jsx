import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Chi sono' },
  { href: '#projects', label: 'Progetti' },
  { href: '#contact', label: 'Contatti' },
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
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:py-5"
        aria-label="Navigazione principale"
      >
        <a
          href="#home"
          className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          Matilde<span className="text-neutral-400">.</span>
        </a>

        <ul className="hidden gap-10 text-[13px] font-medium uppercase tracking-[0.12em] text-neutral-600 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors duration-300 hover:text-[var(--color-ink)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-neutral-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Apri menu</span>
          <span aria-hidden>{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 md:hidden"
        >
          <ul className="flex flex-col gap-5 text-sm font-medium uppercase tracking-wider text-neutral-800">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-1"
                  onClick={() => setOpen(false)}
                >
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
