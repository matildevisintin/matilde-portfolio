import { user } from '../data/user'
import { Reveal } from './Reveal'

export function ValuePropositionSection() {
  const pillars = [
    {
      title: "English-First Communication",
      content: "C1 proficiency with experience in international research environments. Capable of translating technical findings into business insights."
    },
    {
      title: "Disciplined & Resilient",
      content: "Proven work ethic shaped by academic rigor. Expert in managing multiple priorities and delivering high-quality output."
    },
    {
      title: "Technical Ambition",
      content: "Proactive attitude towards innovation. Focused on high-potential areas like wind energy and circular material systems."
    }
  ];

  return (
    <section id="about" className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
            Professional Profile
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Strategic Engineering & Leadership
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Pillars */}
          <div className="lg:col-span-7 grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((pillar, index) => (
              <Reveal key={index} delayMs={index * 100}>
                <div className="group border-l-2 border-[var(--color-ink)]/20 pl-8 transition-all duration-300 hover:border-[var(--color-ink)]">
                  <h4 className="text-[14px] font-black uppercase tracking-widest text-[var(--color-ink)]">
                    {pillar.title}
                  </h4>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)] font-medium">
                    {pillar.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Bio Quote */}
          <Reveal className="lg:col-span-5" delayMs={200}>
            <div className="h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 shadow-sm flex items-center">
              <p className="text-lg leading-relaxed text-[var(--color-ink)] font-medium md:text-xl italic opacity-80">
                "{user.bioLong}"
              </p>
            </div>
          </Reveal>
        </div>

        {/* Full-width Foundation Block */}
        <Reveal className="mt-16" delayMs={300}>
          <div className="rounded-3xl border-2 border-[var(--color-ink)]/10 bg-[var(--color-surface-card)] p-10 md:p-14 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 md:items-center">
              <div className="shrink-0">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-ink)] opacity-30">
                  Foundation
                </h4>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-xl leading-relaxed text-[var(--color-ink-muted)] font-medium md:text-2xl">
                  My professional discipline is built on the ground. I apply the same grit to technical engineering that I used to manage complex dynamics in the service sector and academic tutoring while maintaining excellence.
                </p>
                <p className="text-lg font-bold text-[var(--color-ink)] uppercase tracking-wider">
                  This is my foundation for leading industrial transitions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
