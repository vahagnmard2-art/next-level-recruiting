import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cappedDelay = Math.min(delay, 120)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (cappedDelay > 0) {
            setTimeout(() => { el.classList.add('visible') }, cappedDelay)
          } else {
            el.classList.add('visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass =
    direction === 'left'
      ? 'animate-on-scroll-left'
      : direction === 'right'
      ? 'animate-on-scroll-right'
      : direction === 'fade'
      ? 'animate-on-scroll'
      : 'animate-on-scroll'

  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  )
}
