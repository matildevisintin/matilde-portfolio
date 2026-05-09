import { Reveal } from './Reveal'

const email = import.meta.env.VITE_CONTACT_EMAIL ?? 'your.email@example.com'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matildevisintin/',
    subtitle: 'Profile',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/matildevisintin',
    subtitle: 'Repositories',
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
    <section id="contact" className="px-5 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Commercial intake
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Start with the constraint, not the ceremony.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
            If you operate around{' '}
            <span className="font-semibold text-zinc-200">
              North Sea composites arisings, thermoset fractions, stranded
              inventories, ESG-liability pressure
            </span>
            —send a succinct note with volume ballparks and what “good” looks
            like for your EBITDA line. Dense is fine; marketing fluff wastes
            both of us.
          </p>
          <ul className="mt-10 space-y-2">
            {socialLinks.map(({ label, href, subtitle, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : { rel: 'noopener' })}
                  className="group flex flex-wrap items-baseline justify-between gap-4 border-b border-[var(--color-border)] py-4 text-[var(--color-ink)] first:pt-0 transition-colors hover:border-[var(--color-accent)]"
                >
                  <span className="font-semibold">{label}</span>
                  <span className="break-all text-right text-sm text-zinc-500 group-hover:text-[var(--color-accent)]">
                    {subtitle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delayMs={100}>
          <form
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-xl shadow-black/30 md:p-10"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Confidential outline (demo form)
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Wire this to Formspree, Web3Forms, or your infra. Nothing is stored
              here.
            </p>
            <div className="mt-8 grid gap-6">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Name / Role
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder="e.g., Technical buyer — Procurement"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder="name@company.com"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Message — constraints first
                </span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder="Stream, regulations, tonne/month ballpark, current disposal cost baseline, timelines, NDA stance…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] active:translate-y-0 md:w-auto md:self-start md:px-10"
              >
                Send (demo — connect backend)
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
