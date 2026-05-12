import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAction = () => {
    localStorage.setItem('cookie-consent', 'responded')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[var(--color-ink)]/20 bg-[#FFFDE7] p-4 shadow-2xl backdrop-blur-md md:p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center text-[13px] font-medium leading-relaxed text-[var(--color-ink-muted)] md:text-left">
          This website uses essential cookies to ensure you get the best experience on our engineering portfolio.
        </p>
        <div className="flex shrink-0 gap-4">
          <button
            onClick={handleAction}
            className="rounded-full border border-[var(--color-ink)] px-6 py-2 text-[13px] font-bold text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-ink)] hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={handleAction}
            className="rounded-full bg-[var(--color-ink)] px-8 py-2 text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
