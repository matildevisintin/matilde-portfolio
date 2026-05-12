import { Reveal } from './Reveal'

export default function LinkedInSection() {
  return (
    <section id="linkedin" className="relative border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:py-32 bg-grain overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-40">
            Featured Perspectives
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Industry Advocacy
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Post 1 Container */}
          <Reveal delayMs={100}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[504px] rounded-2xl border border-[var(--color-ink)]/20 bg-zinc-50/50 p-1 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="h-[600px] overflow-y-auto custom-scrollbar rounded-xl bg-white">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7446925180079104000" 
                    height="1552" 
                    width="504" 
                    frameBorder="0" 
                    allowFullScreen 
                    title="Embedded post"
                    className="w-full"
                  />
                  {/* Fade-out Overlay */}
                  <div className="sticky bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Post 2 Container */}
          <Reveal delayMs={200}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[504px] rounded-2xl border border-[var(--color-ink)]/20 bg-zinc-50/50 p-1 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="h-[600px] overflow-y-auto custom-scrollbar rounded-xl bg-white">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450191933433368576" 
                    height="1636" 
                    width="504" 
                    frameBorder="0" 
                    allowFullScreen 
                    title="Embedded post"
                    className="w-full"
                  />
                  {/* Fade-out Overlay */}
                  <div className="sticky bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
