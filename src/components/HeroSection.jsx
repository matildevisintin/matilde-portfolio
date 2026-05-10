import { quickFacts } from '../data/quickFacts'
import { user } from '../data/user'

const heroFacts = quickFacts.filter((fact) => fact?.value).slice(0, 3)

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] px-5 pb-28 pt-14 md:pb-36 md:pt-20"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--color-accent-dim)] blur-3xl motion-reduce:opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-900/25 blur-3xl motion-reduce:opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="hero-fade text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
          Materials Engineering · Circular Economy
        </p>
        <h1 className="hero-fade hero-fade-delay-1 mt-8 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-[3.35rem]">
          {user.name}
        </h1>
        <p className="hero-fade hero-fade-delay-2 mt-6 max-w-3xl text-lg font-normal leading-relaxed text-zinc-400 md:text-xl">
          {user.title}
        </p>
        <p className="hero-fade hero-fade-delay-2 mt-4 max-w-3xl text-[15px] leading-relaxed text-zinc-400 md:text-base">
          {user.bioShort}
        </p>

        <div className="hero-fade hero-fade-delay-3 mt-8 flex flex-wrap gap-3">
          {heroFacts.map((fact) => (
            <span
              key={fact.id}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-300"
            >
              {fact.value}
            </span>
          ))}
        </div>

        <div className="hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-sm font-semibold text-zinc-950 transition-[transform,color] duration-300 hover:bg-[var(--color-accent-strong)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
          <a
            href={user.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-8 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 active:translate-y-0"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
