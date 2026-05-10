import { Reveal } from './Reveal'

const checkpoints = [
  {
    headline: 'English-First Communication',
    copy:
      'C1 proficiency with experience in international research environments. Capable of translating technical findings into clear, actionable business insights.',
  },
  {
    headline: 'Disciplined & Resilient',
    copy:
      'Proven work ethic shaped by academic rigor and professional roles in diverse sectors. I am used to managing multiple priorities and delivering high-quality output.',
  },
  {
    headline: 'Technical Ambition',
    copy:
      'Highly proactive attitude towards learning and innovation. Focused on high-potential areas like wind energy recycling and circular material systems.',
  },
]

export function StrategicFitSection() {
  return (
    <section id="strategic-fit" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              Strategic Value Proposition
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              Why I am the Right Fit
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
              I bring a unique combination of{' '}
              <span className="font-semibold text-zinc-200">
                technical credibility and international mindset
              </span>{' '}
              to your team. My goal is to support innovation leaders in 
              navigating the complexities of circular economy transitions.
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
                  The Bottom Line
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                  Partner with me to bridge{' '}
                  <span className="text-zinc-200">
                    technical engineering rigor
                  </span>{' '}
                  and{' '}
                  <span className="text-zinc-200">
                    sustainable innovation
                  </span>. 
                  I am ready to contribute to projects that require a disciplined, international-minded approach to circular economy challenges.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
