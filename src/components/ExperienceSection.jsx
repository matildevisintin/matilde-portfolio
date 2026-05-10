import { experiences } from '../data/experience'
import { Reveal } from './Reveal'

export function ExperienceSection() {
  return (
    <section id="work-ethic" className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Professional Foundation & Work Ethic
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Beyond the Engineering Lab
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-muted)]">
            Mapping diverse experiences to the technical and personal rigor required in high-potential innovation roles.
          </p>
        </Reveal>

        <div className="mt-20 space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delayMs={i * 100}>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-bold text-[var(--color-ink)]">{exp.role}</h3>
                  <p className="mt-1 font-medium text-[var(--color-accent)]">{exp.company}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{exp.startDate} — {exp.endDate}</p>
                </div>
                
                <div className="lg:col-span-8">
                  <p className="text-lg leading-relaxed text-[var(--color-ink)]">
                    {exp.description}
                  </p>
                  
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {exp.softSkills.map((skill) => (
                      <div key={skill.name} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
                        <h4 className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                          {skill.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {i < experiences.length - 1 && (
                <div className="mt-12 h-px w-full bg-[var(--color-border)] opacity-50" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
