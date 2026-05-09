import { caseStudies } from '../data/caseStudies'
import { Reveal } from './Reveal'

const cardSurfaces = [
  'bg-gradient-to-br from-teal-950/55 via-[var(--color-surface-card)] to-zinc-950',
  'bg-gradient-to-br from-zinc-900 via-teal-950/35 to-[var(--color-surface-card)]',
  'bg-gradient-to-br from-[var(--color-surface-card)] via-zinc-900 to-teal-950/50',
]

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Business cases — not school projects
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Case Studies
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
            Narratives aimed at capex-ready discussions: bounded claims, tangible
            levers — not generic “portfolio pieces.” Metrics are directional
            where proprietary; tighten with your datasets when under NDA.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delayMs={80 * i}>
              <li>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] transition-[box-shadow,border-color] duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/40">
                  <div
                    className={`aspect-[16/10] relative overflow-hidden ${cardSurfaces[i % cardSurfaces.length]}`}
                    aria-hidden
                  >
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-200/90">
                        {cs.kicker}
                      </p>
                      <div className="mt-3 flex flex-wrap items-end gap-2">
                        <span className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                          {cs.metric}
                        </span>
                        <span className="max-w-[12rem] text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                          {cs.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                      {cs.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[14px] leading-relaxed text-zinc-400">
                      {cs.description}
                    </p>
                    <a
                      href={cs.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
                    >
                      Request appendix / briefing
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
