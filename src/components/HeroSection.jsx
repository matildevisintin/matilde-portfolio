import { quickFacts } from '../data/quickFacts'
import { user } from '../data/user'

const heroFacts = quickFacts.filter((fact) => fact?.value).slice(0, 3)

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] px-5 pb-28 pt-14 md:pb-36 md:pt-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <p className="hero-fade text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
          DTU Alumna · Materials Engineering · Circular Transition
        </p>
        <h1 className="hero-fade hero-fade-delay-1 mt-8 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-[3.35rem]">
          {user.name}
        </h1>
        <p className="hero-fade hero-fade-delay-2 mt-6 max-w-3xl text-lg font-normal leading-relaxed text-[var(--color-ink)] md:text-xl opacity-90">
          {user.bioShort}
        </p>

        <div className="hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-ink)] px-8 text-sm font-semibold text-white transition-[transform,opacity] duration-300 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
          <a
            href={user.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-8 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-ink)] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
