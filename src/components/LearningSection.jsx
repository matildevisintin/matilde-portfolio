import { learningThemes } from '../data/learning'
import { Reveal } from './Reveal'

export function LearningSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
            Continuous Growth
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            What I&apos;m Learning
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {learningThemes.map((theme, i) => (
            <Reveal key={theme.id} delayMs={i * 100}>
              <li className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-shadow hover:shadow-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] opacity-60">
                  {theme.status}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                  {theme.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed opacity-80">
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
