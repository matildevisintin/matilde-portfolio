import { IconCode, IconLayout, IconSparkles } from './Icons'
import { Reveal } from './Reveal'

const pillars = [
  {
    title: 'Technical Rigor',
    blurb:
      'Engineering background with a focus on materials science and mechanical behavior. I bring structured thinking to complex industrial challenges.',
    Icon: IconLayout,
    tag: 'Materials Science',
  },
  {
    title: 'Circular Innovation',
    blurb:
      'Translating circular economy concepts into practical recycling pathways for thermoset composites and wind energy systems.',
    Icon: IconCode,
    tag: 'Sustainability',
  },
  {
    title: 'International Mindset',
    blurb:
      'Educated in Italy and Denmark. Comfortable working in multicultural environments and delivering results in high-pressure settings.',
    Icon: IconSparkles,
    tag: 'Global Profile',
  },
]

export function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            About & Work Ethic
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            A Future Innovation Leader
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-zinc-400 md:text-base">
            I am driven by curiosity and a strong interest in solving real industrial sustainability challenges. 
            My approach combines technical rigor with the resilience and discipline developed through diverse 
            academic and professional experiences.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, blurb, Icon, tag }, i) => (
            <Reveal key={title} delayMs={70 * i}>
              <li>
                <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-[var(--color-accent-strong)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {tag}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-zinc-400">
                    {blurb}
                  </p>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
