import { useCallback, useState } from 'react'
import { Reveal } from './Reveal'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()
const displayEmail =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'matilde.visintin@gmail.com'

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
    href: `mailto:${displayEmail}`,
    subtitle: displayEmail,
    external: false,
  },
]

async function submitToFormspree(e) {
  e.preventDefault()
  const form = e.currentTarget
  if (!FORMSPREE_ENDPOINT) {
    return { ok: false, error: 'missing_endpoint' }
  }

  const formData = new FormData(form)
  formData.append(
    '_subject',
    `[Portfolio] Contact — ${formData.get('name') ?? 'Unknown'}`,
  )

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })

  const data = await res.json().catch(() => ({}))
  if (res.ok && data.ok) {
    form.reset()
    return { ok: true }
  }
  return {
    ok: false,
    error: 'request_failed',
    details: Array.isArray(data.errors) ? data.errors : [],
  }
}

export function ContactSection() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const onSubmit = useCallback(async (e) => {
    setStatus('submitting')
    setFeedback('')
    const result = await submitToFormspree(e)

    if (result.ok) {
      setStatus('success')
      setFeedback('Sent. I will reply from matilde.visintin@gmail.com when I can.')
      return
    }

    setStatus('error')
    if (result.error === 'missing_endpoint') {
      setFeedback(
        'Formspree endpoint is not configured. Add VITE_FORMSPREE_ENDPOINT to your .env file.',
      )
      return
    }
    const msgs = Array.isArray(result.details)
      ? result.details.map((er) => er?.message).filter(Boolean)
      : []
    setFeedback(
      msgs?.length ? msgs.join(' ') : 'Submission failed. Please try again or use the email link.',
    )
  }, [])

  const busy = status === 'submitting'

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
          <p className="mt-6 text-[13px] text-zinc-500">
            Submissions route to{' '}
            <a
              href={`mailto:${displayEmail}`}
              className="font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
            >
              {displayEmail}
            </a>{' '}
            via Formspree.
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
            className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-xl shadow-black/30 md:p-10"
            onSubmit={onSubmit}
            noValidate={false}
          >
            {!FORMSPREE_ENDPOINT ? (
              <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                Set <code className="text-amber-200">VITE_FORMSPREE_ENDPOINT</code>{' '}
                in <code className="text-amber-200">.env</code> (see{' '}
                <code className="text-amber-200">.env.example</code>). Formspree
                must notify <strong>{displayEmail}</strong> in project settings.
              </p>
            ) : null}

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Contact form · Formspree
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Replies align with the email field; spam filters still apply — be
              specific.
            </p>

            {feedback ? (
              <p
                className={`mt-6 rounded-lg border px-4 py-3 text-sm ${
                  status === 'success'
                    ? 'border-teal-500/40 bg-teal-500/10 text-teal-100'
                    : 'border-red-500/40 bg-red-500/10 text-red-100'
                }`}
              >
                {feedback}
              </p>
            ) : null}

            <div className="mt-8 grid gap-6">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="pointer-events-none absolute left-0 max-h-0 max-w-0 overflow-hidden opacity-0"
              />
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Name / Role
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={busy}
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] disabled:opacity-60"
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
                  disabled={busy}
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  placeholder={displayEmail}
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
                  disabled={busy}
                  className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-shadow placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  placeholder="Stream, regulations, tonne/month ballpark, current disposal cost baseline, timelines, NDA stance…"
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 md:w-auto md:self-start md:px-10"
              >
                {busy ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
