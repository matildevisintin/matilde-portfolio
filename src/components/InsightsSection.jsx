import { insights } from '../data/insights'
import { Reveal } from './Reveal'

export function InsightsSection() {
  return (
    <section id="insights" className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Thought Leadership
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Why Circular Economy in Materials Engineering Matters
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-muted)]">
            Technical rigor is essential for successful circular economy transitions. We must look beyond the 'green' label to the fundamental behavior of materials at scale.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {insights.map((insight, i) => (
            <Reveal key={insight.id} delayMs={100 * i}>
              <article className="group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-all hover:border-[var(--color-accent)] hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <time className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">
                    {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="h-px w-4 bg-[var(--color-border)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">
                    {insight.readingTime} min read
                  </span>
                </div>
                
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  <a href="#contact">
                    {insight.title}
                  </a>
                </h3>
                
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {insight.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-accent-dim)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]"
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
