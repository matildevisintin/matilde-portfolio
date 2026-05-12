import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delayMs = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          ob.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]',
        'motion-reduce:translate-y-0 motion-reduce:opacity-100',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      ].join(' ')}
      style={
        visible && delayMs && typeof window !== 'undefined'
          ? { transitionDelay: `${delayMs}ms` }
          : undefined
      }
    >
      {children}
    </div>
  )
}