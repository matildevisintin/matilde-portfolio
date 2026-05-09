import { Reveal } from './Reveal'

const email = 'ciao@matilde.it'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    subtitle: '/in/matilde-placeholder',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    subtitle: '/matilde-placeholder',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${email}`,
    subtitle: email,
    external: false,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contatti
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Parlami del tuo prossimo capitolo.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
            Compila il modulo: è pronto da collegare a un servizio di invio mail
            o a una funzione senza backend. Nessuno spam — rispondo in genere in
            48 ore lavorative.
          </p>
          <ul className="mt-10 space-y-4">
            {socialLinks.map(({ label, href, subtitle, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : { rel: 'noopener' })}
                  className="group flex items-baseline justify-between gap-6 border-b border-[var(--color-border)] py-4 text-[var(--color-ink)] first:pt-0 transition-colors hover:border-neutral-900"
                >
                  <span className="font-medium">{label}</span>
                  <span className="truncate text-sm text-neutral-500 group-hover:text-neutral-900">
                    {subtitle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delayMs={100}>
          <form
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm shadow-neutral-900/5 md:p-10"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="grid gap-6">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Nome
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                  placeholder="Il tuo nome"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                  placeholder="nome@studio.com"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Messaggio
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                  placeholder="Brief, budget indicativo e tempistiche ideali…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 md:w-auto md:self-start md:px-10"
              >
                Invia messaggio
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
