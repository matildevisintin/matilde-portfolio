import { useCallback, useState } from 'react'
import { Reveal } from './Reveal'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || 'https://formspree.io/f/xyzkpvwr' // Placeholder o endpoint reale
const displayEmail = 'matilde.visintin@gmail.com'

async function submitToFormspree(e) {
  e.preventDefault()
  const form = e.currentTarget
  
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
      setFeedback('Message sent successfully! I will get back to you soon.')
      return
    }

    setStatus('error')
    setFeedback('Submission failed. Please try again or email me directly.')
  }, [])

  const busy = status === 'submitting'

  return (
    <section id="contact" className="px-6 py-32 md:py-48 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--color-ink)]">
              Get in Touch
            </p>
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
              Ready to bridge the gap?
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-[var(--color-ink)] opacity-80 md:text-xl">
              Whether you are looking for a technical partner for circular economy projects or a proactive materials engineer, I am always open to strategic discussions.
            </p>
            
            <div className="mt-16 space-y-8">
              <a href={`mailto:${displayEmail}`} className="group flex items-center gap-6 text-[var(--color-ink)] transition-all hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] text-2xl transition-colors group-hover:border-[var(--color-ink)]">
                  ✉
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Email</p>
                  <p className="text-lg font-bold">{displayEmail}</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/matildevisintin" target="_blank" rel="noreferrer" className="group flex items-center gap-6 text-[var(--color-ink)] transition-all hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] text-2xl transition-colors group-hover:border-[var(--color-ink)]">
                  in
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">LinkedIn</p>
                  <p className="text-lg font-bold">matildevisintin</p>
                </div>
              </a>

              <a href="https://github.com/matildevisintin" target="_blank" rel="noreferrer" className="group flex items-center gap-6 text-[var(--color-ink)] transition-all hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] text-2xl transition-colors group-hover:border-[var(--color-ink)]">
                  gh
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">GitHub</p>
                  <p className="text-lg font-bold">matildevisintin</p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={100}>
            <form
              className="relative rounded-3xl border-2 border-[var(--color-border)] bg-[var(--color-surface-card)] p-10 shadow-xl md:p-14"
              onSubmit={onSubmit}
            >
              {feedback && (
                <div className={`mb-10 p-6 rounded-2xl text-[15px] font-bold ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {feedback}
                </div>
              )}

              <div className="grid gap-8">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-60">Your Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={busy}
                    className="mt-4 w-full rounded-2xl border-2 border-[var(--color-border)] bg-transparent px-6 py-4 text-lg font-medium outline-none focus:border-[var(--color-ink)] transition-colors"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-60">Email Address</span>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={busy}
                    className="mt-4 w-full rounded-2xl border-2 border-[var(--color-border)] bg-transparent px-6 py-4 text-lg font-medium outline-none focus:border-[var(--color-ink)] transition-colors"
                    placeholder="jane@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] opacity-60">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    disabled={busy}
                    className="mt-4 w-full rounded-2xl border-2 border-[var(--color-border)] bg-transparent px-6 py-4 text-lg font-medium outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  />
                </label>
                <button
                  type="submit"
                  disabled={busy}
                  className="mt-4 inline-flex min-h-[64px] items-center justify-center rounded-full bg-[var(--color-ink)] px-12 text-lg font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 active:translate-y-0 shadow-lg disabled:opacity-50"
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
