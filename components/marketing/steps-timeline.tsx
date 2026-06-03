'use client'

import { useEffect, useRef, useState } from 'react'

interface Step { num: string; title: string; desc: string }

export default function StepsTimeline({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLOListElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [lineWidth, setLineWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        steps.forEach((_, i) => {
          setTimeout(() => {
            setVisibleCount(i + 1)
            // Animate the connector line in sync with the second and third steps
            if (i === 1) setTimeout(() => setLineWidth(50), 50)
            if (i === 2) setTimeout(() => setLineWidth(100), 50)
          }, i * 280)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [steps])

  return (
    <ol ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative list-none m-0 p-0">
      {/* Connector line */}
      <div className="hidden md:block absolute top-10 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px bg-white/10 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-nlr-gold/40 via-nlr-gold to-nlr-gold/40 transition-all duration-500 ease-out"
          style={{ width: `${lineWidth}%` }}
        />
      </div>

      {steps.map((step, i) => (
        <li
          key={step.num}
          className="relative z-10 card-dark p-8 group transition-all duration-500 ease-out"
          style={{
            opacity: visibleCount > i ? 1 : 0,
            transform: visibleCount > i ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div
            className="font-display text-7xl leading-none mb-4 transition-colors duration-300"
            style={{ color: visibleCount > i ? 'rgba(201,168,76,0.25)' : 'rgba(201,168,76,0.08)' }}
            aria-hidden="true"
          >
            {step.num}
          </div>
          <div className="w-12 h-1 bg-nlr-gold mb-6" aria-hidden="true" />
          <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">{step.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
        </li>
      ))}
    </ol>
  )
}
