'use client'

import { useState } from 'react'

const sportBadges = [
  '🏀 Basketball', '⚾ Baseball', '🏈 Football', '⚽ Soccer',
  '🏐 Volleyball', '🥎 Softball', '🏃 Track & Field', '🥍 Lacrosse',
  '⛳ Golf', '🎾 Tennis',
]

export default function SportsTicker() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      className="bg-nlr-green py-5 overflow-hidden"
      aria-label="Sports we cover: Basketball, Baseball, Football, Soccer, Volleyball, Softball, Track and Field, Golf, Tennis"
    >
      <div className="flex" aria-hidden="true">
        <div
          className={`flex gap-8 whitespace-nowrap flex-shrink-0 ${paused ? '[animation-play-state:paused]' : 'animate-marquee'}`}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {[...sportBadges, ...sportBadges].map((sport, i) => (
            <span
              key={i}
              className="font-heading font-bold text-white/90 text-sm tracking-widest uppercase flex items-center gap-2"
            >
              {sport}
              <span className="text-white/30 ml-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
