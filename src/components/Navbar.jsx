import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#insights', label: 'Insights' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const sectionIds = links.map(({ href }) => href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:py-5">
        
        {/* LOGO */}
        <a href="#home" className="flex flex-col min-w-0" onClick={() => setOpen(false)}>
          <span className="text-[14px] font-bold tracking-tight text-[var(--color-ink)] md:text-[16px]">
            MATILDE VISINTIN
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--color-ink)]/70 hidden sm:block">
            Materials Engineer
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-x-8 text-[11px] font-bold uppercase tracking-[0.15em]">
            {links.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`transition-all duration-300 hover:text-[var(--color-ink)] hover:-translate-y-0.5 block ${
                      isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink)]/50'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href="/cv-matilde-visintin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-ink)]/50 transition-all duration-300 hover:text-[var(--color-ink)] hover:-translate-y-0.5 block"
              >
                Resume
              </a>
            </li>
            <li className="ml-2">
              <a
                href="#contact"
                className="inline-flex h-9 items-center justify-center rounded-full border border-[var(--color-ink)] px-5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-ink)] hover:text-white hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-ink)] lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 lg:hidden h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-ink)]">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-1">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="/cv-matilde-visintin.pdf" target="_blank" onClick={() => setOpen(false)} className="block py-1">
                Resume
              </a>
            </li>
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center rounded-full border-2 border-[var(--color-ink)] px-6 text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
