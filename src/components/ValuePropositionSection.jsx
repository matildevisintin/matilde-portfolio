import { user } from '../data/user'
import { Reveal } from './Reveal'

export function ValuePropositionSection() {
  return (
    <section id="about" className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
              Background & Resilience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              High Workload Management
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-ink)] opacity-80">
              My professional discipline is built on the ground. I combine technical engineering rigor with the resilience developed through years of managing high-pressure environments.
            </p>
          </Reveal>
          
          <Reveal className="lg:col-span-7" delayMs={150}>
            <div className="space-y-6">
              <p className="text-[17px] leading-relaxed text-[var(--color-ink)] font-medium">
                {user.bioLong}
              </p>
              <div className="h-px w-20 bg-[var(--color-ink)] opacity-30" />
              <p className="text-[15px] leading-relaxed text-[var(--color-ink)] opacity-80 italic">
                I apply the same grit to technical engineering that I used to manage complex dynamics in the service sector and academic tutoring while maintaining excellence. This is my foundation for leading industrial transitions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
