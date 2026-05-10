import { insights } from '../data/insights'
import { Reveal } from './Reveal'

export function InsightsSection() {
  return (
    <section id="insights" className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-60">
            Thought Leadership
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Technical Insights
          </h2>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
            Technical rigor is essential for successful circular economy transitions. We must look beyond the 'green' label to the fundamental behavior of materials at scale.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {insights.map((insight, i) => (
            <Reveal key={insight.id} delayMs={100 * i}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <time className="text-[10px] font-black uppercase tracking-widest text-[var(--color-ink)] opacity-30">
                    {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="h-px w-4 bg-[var(--color-border)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-ink)] opacity-30">
                    {insight.readingTime} min read
                  </span>
                </div>
                
                <h3 className="mt-6 text-xl font-bold leading-tight text-[var(--color-ink)] md:text-2xl">
                  <a href="#contact" className="hover:opacity-70 transition-opacity">
                    {insight.title}
                  </a>
                </h3>
                
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                  {insight.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[var(--color-ink)] opacity-60"
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
