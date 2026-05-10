import { useCallback, useState } from 'react'
import { Reveal } from './Reveal'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()
const displayEmail =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'matilde.visintin@gmail.com'

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
    setFeedback(result.error === 'missing_endpoint' 
      ? 'Formspree endpoint is not configured.' 
      : 'Submission failed. Please try again.')
  }, [])

  const busy = status === 'submitting'

  return (
    <section id="contact" className="px-5 py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
              Contact & Collaboration
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              Ready to bridge the gap?
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed opacity-80">
              Whether you are looking for a technical partner for circular economy projects or a proactive materials engineer to join your team, I am always open to strategic discussions.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={100}>
            <form
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-8 shadow-sm md:p-10"
              onSubmit={onSubmit}
            >
              {feedback && (
                <p className={`mb-6 p-4 rounded-lg text-sm font-semibold ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {feedback}
                </p>
              )}

              <div className="grid gap-6">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={busy}
                    className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--color-ink)] transition-colors"
                    placeholder="Your Name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={busy}
                    className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--color-ink)] transition-colors"
                    placeholder="your@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    disabled={busy}
                    className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
                    placeholder="How can I help?"
                  />
                </label>
                <button
                  type="submit"
                  disabled={busy}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-ink)] px-10 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {busy ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
