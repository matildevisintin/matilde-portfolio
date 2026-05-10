import { useEffect, useState } from 'react'
import { user } from '../data/user'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#how-i-work', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const sectionIds = links.map(({ href }) => href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
            {links.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`transition-colors duration-300 hover:text-[var(--color-accent)] ${
                      isActive ? 'text-[var(--color-accent)]' : ''
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={user.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                View Resume
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-950 transition-colors duration-300 hover:bg-[var(--color-accent-strong)]"
          >
            Get In Touch
          </a>
        </div>

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
            {links.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`block py-1 ${isActive ? 'text-[var(--color-accent)]' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={user.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="block py-1"
                onClick={() => setOpen(false)}
              >
                View Resume
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-950"
                onClick={() => setOpen(false)}
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
