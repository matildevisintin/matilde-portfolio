import { user } from '../data/user'
import { Reveal } from './Reveal'

export function ValuePropositionSection() {
  const pillars = [
    {
      title: "English-First Communication",
      content: "C1 proficiency with experience in international research environments. Capable of translating technical findings into clear, actionable business insights. I am comfortable leading discussions in multicultural contexts, bridging scientific rigor with industrial needs."
    },
    {
      title: "High Workload Management",
      content: "Proven resilience and multitasking abilities forged through years of continuous professional roles in high-pressure sectors. Expert at delivering high-quality output under tight academic and industrial deadlines."
    },
    {
      title: "Technical Ambition",
      content: "A highly proactive approach to R&D, currently focused on wind turbine blade recycling and advanced composites. Aiming to bridge the gap between material science and scalable circular economy transitions."
    }
  ];

  return (
    <section id="about" className="relative border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-24 md:py-32">
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

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-stretch">
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Reveal delayMs={100} className="w-full">
              <div className="relative mx-auto w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl">
                <img 
                  src="/matilde-profile.webp" 
                  alt="Matilde Visintin" 
                  fetchpriority="high"
                  loading="eager"
                  style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&h=1500&auto=format&fit=crop";
                  }}
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Pillars, aligned with photo */}
<div className="lg:col-span-7 flex flex-col gap-12 lg:justify-between py-2">            {pillars.map((pillar, index) => (
              <Reveal key={index} delayMs={index * 100 + 200}>
                <div className="group border-l-2 border-[var(--color-ink)]/20 pl-8 transition-all duration-300 hover:border-[var(--color-ink)]">
                  <h4 className="text-[14px] font-black uppercase tracking-widest text-[var(--color-ink)]">
                    {pillar.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-muted)] font-medium">
                    {pillar.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Full-width Bio Banner: Quoted, Italic, Wide and Short */}
        <Reveal className="mt-20" delayMs={500}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-12 shadow-sm text-center">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] font-medium md:text-xl italic opacity-90 max-w-5xl mx-auto">
              "{user.bioLong}"
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
