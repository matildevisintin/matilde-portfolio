import { user } from '../data/user'
import { Reveal } from './Reveal'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] px-6 pb-24 pt-20 md:pb-32 md:pt-28"
    >
      {/* Background Aura */}
      <div className="aura-bg" />
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--color-ink)] opacity-40">
            International Materials Engineering · Circular Innovation
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {user.name}
          </h1>
          <div className="mt-8 max-w-3xl">
            <p className="text-lg font-medium leading-relaxed text-[var(--color-ink-muted)] md:text-xl lg:text-[1.35rem] opacity-80">
              {user.bioShort}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--color-ink)] px-10 text-[14px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/cv-matilde-visintin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[var(--color-ink)] bg-transparent px-10 text-[14px] font-bold text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-ink)] hover:text-white hover:-translate-y-1 active:translate-y-0"
            >
              View Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
