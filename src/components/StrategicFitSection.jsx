import { Reveal } from './Reveal'

const checkpoints = [
  {
    headline: 'C2 English · executive clarity',
    copy:
      'Writing and presentation tuned for board-adjacent discussions: crisp causal chains, disciplined terminology, fewer adjectives pretending to be analysis.',
  },
  {
    headline: 'Operational credibility',
    copy:
      'Experience shaped by three years commuting between countries and sustaining performance in demanding service-sector roles — execution under fatigue, timelines that don\'t forgive theatre.',
  },
  {
    headline: 'Resilience packaged as professionalism',
    copy:
      '“Grit” isn’t motivational wallpaper here. It’s proof you can rely on throughput when stakeholder pressure spikes and spreadsheets get uncomfortable.',
  },
]

export function StrategicFitSection() {
  return (
    <section id="strategic-fit" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              For Brigitte Hansen — strategic clarity
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              The Strategic Fit
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
              Crystal clear proposition: bridge{' '}
              <span className="font-semibold text-zinc-200">
                ESG liabilities → recoverable economics
              </span>{' '}
              with material evidence that survives diligence—not aspiration
              slide art. Tone is controlled, cynical where useful, optimised
              for profit-and-loss coherence.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="space-y-6">
              {checkpoints.map(({ headline, copy }, i) => (
                <Reveal key={headline} delayMs={90 * i}>
                  <li className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                      {headline}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                      {copy}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10" delayMs={260}>
              <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 px-8 py-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Summary line for stakeholder routing
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                  Hire me where composite waste stops being cheap to ignore but
                  expensive to misunderstand — and you need somebody who speaks
                  both{' '}
                  <span className="text-zinc-200">
                    Chemical Integrity / ISO traceability
                  </span>{' '}
                  and{' '}
                  <span className="text-zinc-200">
                    Operational EBITDA narratives
                  </span>{' '}
                  without flinching.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
