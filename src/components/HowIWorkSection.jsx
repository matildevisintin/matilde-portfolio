import { IconCode, IconLayout, IconSparkles } from './Icons'
import { Reveal } from './Reveal'

const pillars = [
  {
    title: 'Laboratory-grade data fidelity',
    blurb:
      'Measurements you can defend in a contentious review—repeatable protocols, sober uncertainty, minimal hand-waving.',
    Icon: IconLayout,
    tag: 'Chemical Integrity',
  },
  {
    title: 'Digital rapid prototyping',
    blurb:
      'Assistive tooling (protocols augmented by vibe-coding discipline) speeds screening without bypassing QA gates Ops actually trust.',
    Icon: IconCode,
    tag: 'Scalable Pilot',
  },
  {
    title: 'ISO-aligned industrial hygiene',
    blurb:
      'Compliance isn’t ornamentation—it’s procurement survival. Structured traceability framing that maps to audits, contracts, insurer questions.',
    Icon: IconSparkles,
    tag: 'Standards-conscious',
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
            For Jacob Petersen — operational pragmatists
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            How I Work: Zero Academic Ego
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-zinc-400 md:text-base">
            I&apos;m built to integrate like a{' '}
            <span className="font-semibold text-zinc-200">
              plug-and-play assistant for technical delivery
            </span>
            : fast cycles, ruthless prioritisation on what gates a decision, no
            performative genius. Copenhagen taught me cynicism—the kind that
            keeps projects inside reality, not metaphysics.
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
