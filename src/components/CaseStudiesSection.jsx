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
      id="projects"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Featured Projects — Research & Industry
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
            A hybrid look into technical research and circular economy systems. 
            Focused on bridging the gap between academic rigor and industrial scalability.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delayMs={80 * i}>
              <li>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50">
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-strong)]">
                        {cs.type}
                      </span>
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                      {cs.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                      {cs.description}
                    </p>
                    
                    <div className="mt-8 grid gap-6 border-t border-[var(--color-border)] pt-8">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">The Challenge</h4>
                        <p className="mt-2 text-[14px] text-zinc-400">{cs.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Technical Approach</h4>
                        <p className="mt-2 text-[14px] text-zinc-400">{cs.approach}</p>
                      </div>
                    </div>

                    <a
                      href={cs.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
                    >
                      View Project Details
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
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
