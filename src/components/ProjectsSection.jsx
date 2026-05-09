import { projects } from '../data/projects'
import { Reveal } from './Reveal'

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Portfolio
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Una selezione di progetti — placeholder da sostituire con case study
            reali.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.id} delayMs={80 * i}>
              <li>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/5">
                  <div
                    className={`aspect-[16/10] bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}
                    aria-hidden
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-neutral-600 backdrop-blur">
                        Immagine placeholder
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {project.description}
                    </p>
                    <a
                      href={project.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition-colors group-hover:text-neutral-600"
                    >
                      Vedi progetto
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
