import React from 'react';
import { Reveal } from './Reveal';

export function InsightsSection() { 
  return (
    <section id="insights" className="relative border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:py-32 overflow-hidden">
      <div className="watermark-fiber right-10 top-20 w-64 h-64 opacity-5 rotate-45" />
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
            Thought Leadership
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Technical Insights
          </h2>
          {/* Testo che chiarisce che sono risorse esterne */}
  <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink-muted)]">
    Explore the complexities of composite recycling through these technical resources, selected to provide a deeper understanding of circular systems.
  </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Article 1: Scientific Study */}
          <Reveal delayMs={100}>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2452223622001584"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-ink)]/30"
            >
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
                  SCIENTIFIC ARTICLE
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent-strong)] md:text-2xl">
                  Sustainable End-of-Life Management of Wind Turbine Blades
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed italic text-[var(--color-ink-muted)]">
                  Analysing the shift from landfilling to high-value material recovery in the wind sector.
                </p>
              </div>
              <div className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xl font-bold text-[var(--color-ink)]">→</span>
              </div>
            </a>
          </Reveal>

          {/* Article 2: Video Analysis */}
          <Reveal delayMs={200}>
            <a
              href="https://www.youtube.com/watch?v=fFxxh6uJB8o"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-ink)]/30"
            >
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l6.393 4-6.393 4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
                  VIDEO ANALYSIS
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent-strong)] md:text-2xl">
                  Why Wind Turbine Blades are Hard to Recycle
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed italic text-[var(--color-ink-muted)]">
                  A look into how bio-resins are reshaping the structural integrity of large-scale components.
                </p>
              </div>
              <div className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xl font-bold text-[var(--color-ink)]">→</span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


