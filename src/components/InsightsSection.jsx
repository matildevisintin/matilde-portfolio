import { insights } from '../data/insights'
import { Reveal } from './Reveal'

export function InsightsSection() {
  return (
    <section id="insights" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Thought Leadership — Circular Economy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Insights & Perspectives
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
            Exploring the intersection of materials engineering, industrial sustainability, 
            and circular systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {insights.map((insight, i) => (
            <Reveal key={insight.id} delayMs={100 * i}>
              <article className="group relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 transition-all hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <time className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="text-zinc-700">/</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    {insight.readingTime} min read
                  </span>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  <a href="#contact">
                    {insight.title}
                  </a>
                </h3>
                
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                  {insight.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
