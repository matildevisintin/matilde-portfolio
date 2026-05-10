import { learningThemes } from '../data/learning'
import { Reveal } from './Reveal'

export function LearningSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
            Continuous Growth
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Focus Areas
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {learningThemes.map((theme, i) => (
            <Reveal key={theme.id} delayMs={i * 100}>
              <li className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--color-ink)] opacity-40">
                  {theme.status}
                </p>
                <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)] md:text-2xl">
                  {theme.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)] font-medium">
                  {theme.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
