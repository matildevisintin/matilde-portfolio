import { quickFacts } from '../data/quickFacts'
import { user } from '../data/user'

const heroFacts = quickFacts.filter((fact) => fact?.value).slice(0, 3)

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] px-5 pb-28 pt-14 md:pb-40 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-[var(--color-accent-dim)] blur-[120px] motion-reduce:opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-900/20 blur-[100px] motion-reduce:opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl text-center md:text-left">
        <p className="hero-fade text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-strong)]">
          International Materials Engineering · Circular Innovation
        </p>
        <h1 className="hero-fade hero-fade-delay-1 mt-10 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-6xl lg:text-7xl">
          {user.name}
        </h1>
        <p className="hero-fade hero-fade-delay-2 mt-8 max-w-3xl text-xl font-medium leading-relaxed text-zinc-300 md:text-2xl">
          {user.title}
        </p>
        <p className="hero-fade hero-fade-delay-2 mt-6 max-w-2xl text-[16px] leading-relaxed text-zinc-400 md:text-lg">
          {user.bioShort}
        </p>

        <div className="hero-fade hero-fade-delay-3 mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-10 text-[15px] font-bold text-zinc-950 transition-all duration-300 hover:bg-[var(--color-accent-strong)] hover:-translate-y-1 active:translate-y-0"
          >
            Get In Touch
          </a>
          <a
            href={user.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-700 bg-transparent px-10 text-[15px] font-bold text-zinc-200 transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 active:translate-y-0"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
