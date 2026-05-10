import { useEffect, useState } from 'react'
import { user } from '../data/user'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#insights', label: 'Insights' },
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
          <span className="font-bold">MATILDE</span> VISINTIN
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)]">
            {links.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`transition-colors duration-300 hover:opacity-70 ${
                      isActive ? 'text-[var(--color-ink)] border-b border-[var(--color-ink)]' : 'opacity-60'
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
                className="opacity-60 transition-colors duration-300 hover:opacity-100"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-ink)] lg:hidden"
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
          <ul className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-ink)]">
            {links.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`block py-1 ${isActive ? 'font-bold' : 'opacity-70'}`}
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
                className="block py-1 opacity-70"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          <span aria-hidden className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-10 lg:hidden"
        >
          <ul className="flex flex-col gap-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)]">
            {links.map(({ href, label }) => {
              if (label === 'Resume') {
                return (
                  <li key={href}>
                    <a
                      href={user.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="block py-2"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                )
              }
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`block py-2 ${isActive ? 'text-[var(--color-accent)]' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li className="pt-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white"
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
