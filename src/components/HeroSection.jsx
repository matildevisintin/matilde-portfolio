import { user } from '../data/user'
import { Reveal } from './Reveal'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] px-6 pb-20 pt-12 md:pb-24 md:pt-16 bg-grain"
    >
      {/* Background Aura */}
      <div className="aura-bg" />
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--color-ink)] opacity-40">
            International Materials Engineering · Circular Innovation
          </p>
          
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {user.name}
          </h1>

          <div className="mt-10 max-w-5xl">
            <h2 className="text-xl font-medium leading-[1.4] text-[var(--color-ink)] md:text-2xl lg:text-[1.75rem] italic">
              Transforming composite waste into strategic resources <br className="hidden lg:block" />
              through technical grit and material innovation.
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-ink-muted)] md:text-lg lg:text-xl opacity-80 whitespace-nowrap overflow-visible">
              A hands-on approach to solving the industrial challenges of the 2030 circular economy.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--color-ink)] px-10 text-[14px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/CV_Visintin_Matilde.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[var(--color-ink)] bg-transparent px-10 text-[14px] font-bold text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-ink)] hover:text-white hover:-translate-y-1 active:translate-y-0"
            >
              View Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
