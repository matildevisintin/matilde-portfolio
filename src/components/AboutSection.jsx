import { IconCode, IconLayout, IconPhoto, IconSparkles } from './Icons'
import { Reveal } from './Reveal'

const skills = [
  {
    title: 'Prodotto & UX',
    blurb: 'Ricerca, wireframe e flussi che riduono attrito.',
    Icon: IconLayout,
  },
  {
    title: 'Design system',
    blurb: 'Componenti ripetibili, token e governance visiva.',
    Icon: IconSparkles,
  },
  {
    title: 'Frontend',
    blurb: 'Interfacce leggere con attenzione a performance e accessibilità.',
    Icon: IconCode,
  },
  {
    title: 'Art direction',
    blurb: 'Immagine coordinata tra web, editorial e motion.',
    Icon: IconPhoto,
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Chi sono
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Una mente ordinata dietro ogni interfaccia memorabile.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--color-muted)] md:text-base">
            <p>
              Sono Matilde e affianco brand e founder che puntano sulla qualità
              percepita: meno rumore, più chiarezza. Il mio modo di lavorare
              parte dall&apos;obiettivo di business — poi progetto esperienze
              che sembrano semplici pur essendo stratificate.
            </p>
            <p>
              In passato ho collaborato con team distribuiti; oggi scelgo
              progetti dove design e strategia parlano la stessa lingua.
              Preferisco iterare in piccoli cicli mirati piuttosto che slideware
              infinito.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delayMs={120}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Competenze
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {skills.map(({ title, blurb, Icon }) => (
                <li key={title}>
                  <div className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-4 shadow-sm shadow-neutral-900/5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-ink)]">
                        {title}
                      </p>
                      <p className="mt-1 text-[13px] leading-snug text-[var(--color-muted)]">
                        {blurb}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
