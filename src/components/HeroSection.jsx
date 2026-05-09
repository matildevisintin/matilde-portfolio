export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-28 pt-16 md:pb-36 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-neutral-200/50 blur-3xl motion-reduce:opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-neutral-300/40 blur-3xl motion-reduce:opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="hero-fade text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Portfolio professionale
        </p>
        <h1 className="hero-fade hero-fade-delay-1 mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] md:text-6xl lg:text-7xl">
          Ciao, sono{' '}
          <span className="text-neutral-900">Matilde</span>
          <span className="text-neutral-300">.</span>
        </h1>
        <p className="hero-fade hero-fade-delay-2 mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted)] md:text-xl">
          Trasformo idee in esperienze digitali essenziali: design che respira,
          codice chiaro e una comunicazione che suona autentica. Lavoro con
          cura maniacale per dettaglio e ritmo.
        </p>
        <div className="hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Vedi Progetti
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-8 text-sm font-medium text-[var(--color-ink)] transition-all duration-300 hover:border-neutral-400 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  )
}
