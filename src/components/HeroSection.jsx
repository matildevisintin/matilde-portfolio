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
          For Emma Larsen · EBITDA · Sustainability profitability
        </p>
        <p className="hero-fade hero-fade-delay-1 mt-3 max-w-prose text-sm font-medium text-zinc-400">
          Capital-facing narrative: composites waste stops being silent OPEX bleed
          and becomes a staged path to recovered value—if diligence can trust the
          chemistry and the QA trail.
        </p>
        <h1 className="hero-fade hero-fade-delay-1 mt-8 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-[3.35rem]">
          Accelerating Composites Circularity: Turning Waste into Industrial
          Profit
        </h1>
        <p className="hero-fade hero-fade-delay-2 mt-8 max-w-3xl text-lg font-normal leading-relaxed text-zinc-400 md:text-xl">
          Strategic Materials Engineer bridging the gap between North Sea
          operational reality and ESG balance sheet reviews.
        </p>
        <div className="hero-fade hero-fade-delay-3 mt-8 max-w-3xl rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 text-[15px] leading-relaxed text-zinc-300 md:p-8">
          <p className="font-medium text-[var(--color-ink)]">
            The Anti-Commodity Hammer
          </p>
          <p className="mt-3">
            BEng Materials Engineering (
            <span className="text-zinc-400">University of Trieste</span>), MSc
            Materials Engineering (
            <span className="text-zinc-400">DTU, Denmark</span>). I don&apos;t
            sell boilerplate “engineering hours.” I sell{' '}
            <span className="text-[var(--color-ink)]">
              technical closure on complex-material end-of-life
            </span>
            —turning stranded composite arisings (incl. wind blades) into
            economically legible circularity plays using{' '}
            <span className="text-[var(--color-ink)]">
              AI-assisted, protocol-first execution
            </span>{' '}
            (built with discipline, not vibes-for-vibes&apos; sake).
          </p>
        </div>
        <div className="hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#case-studies"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-sm font-semibold text-zinc-950 transition-[transform,color] duration-300 hover:bg-[var(--color-accent-strong)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-8 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
