import { caseStudies } from '../data/caseStudies'
import { Reveal } from './Reveal'

export function CaseStudiesSection() {
  return (
    <section
      id="projects"
      className="relative border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:py-32 bg-grain overflow-hidden"
    >
      <div className="watermark-fiber -left-10 bottom-0 w-80 h-80 opacity-5 -rotate-12" />
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
            Featured Projects — Research & Industry
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Selected Work
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-10 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delayMs={80 * i}>
              <li className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image Container for R&D Style */}
                  <div className="aspect-video w-full overflow-hidden bg-zinc-100 border-b border-[var(--color-border)] relative">
                    <img 
                      src={cs.id === 'wind-blade-recycling' ? '/landfill2.webp' : '/F.webp'} 
                      alt={cs.title}
                      style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/1600x900?text=${cs.title.replace(/ /g, '+')}`;
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--color-ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {cs.type}
                      </span>
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] opacity-60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-3xl">
                      {cs.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)] font-medium">
                      {cs.description}
                    </p>
                    
                    <div className="mt-10 grid gap-6 border-t border-[var(--color-border)] pt-10">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--color-ink)] opacity-40">Problem</h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-muted)] font-medium">{cs.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--color-ink)] opacity-40">Solution</h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-muted)] font-medium">{cs.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--color-ink)] opacity-40">Outcome</h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-muted)] font-medium">{cs.outcome}</p>
                      </div>
                    </div>

                    <a
                      href={cs.href}
                      className="mt-10 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--color-ink)] transition-opacity hover:opacity-70"
                    >
                      Technical Appendix
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
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
