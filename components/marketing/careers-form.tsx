'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''

const roleOptions = [
  'Video Editor — Highlight Tapes',
  'Recruiting Consultant',
  'Franchise Partner',
  'Franchise Inquiry',
  'Other — tell me in the message',
]

export default function CareersForm() {
  const [role, setRole] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE_ID) { setSubmitted(true); return }
    setSubmitting(true)
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ role, name, email, message, _subject: `NLR Careers — ${role}` }),
      })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-nlr-gold/10 border border-nlr-gold/30 flex items-center justify-center mx-auto mb-6">
          <span className="font-display text-nlr-gold text-2xl">✓</span>
        </div>
        <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">Application Received</h3>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
          Every application is reviewed personally. You&apos;ll hear back within 5–7 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="careers-role" className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
          Which role? <span className="text-nlr-gold" aria-hidden="true">*</span>
        </label>
        <select
          id="careers-role"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
          className="w-full bg-nlr-darker border border-white/10 focus:border-nlr-gold text-white text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none"
        >
          <option value="">Select a role...</option>
          {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="careers-name" className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
            Name <span className="text-nlr-gold" aria-hidden="true">*</span>
          </label>
          <input id="careers-name" type="text" value={name} onChange={e => setName(e.target.value)} required autoComplete="name"
            className="w-full bg-nlr-darker border border-white/10 focus:border-nlr-gold text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
            placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="careers-email" className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
            Email <span className="text-nlr-gold" aria-hidden="true">*</span>
          </label>
          <input id="careers-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email"
            className="w-full bg-nlr-darker border border-white/10 focus:border-nlr-gold text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
            placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="careers-message" className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
          Tell us about yourself <span className="text-nlr-gold" aria-hidden="true">*</span>
        </label>
        <textarea id="careers-message" value={message} onChange={e => setMessage(e.target.value)} required rows={5}
          className="w-full bg-nlr-darker border border-white/10 focus:border-nlr-gold text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20 resize-none"
          placeholder="Your background, relevant experience, and why you want to work with NLR..." />
      </div>
      <button type="submit" disabled={submitting}
        className="btn-gold text-sm py-4 px-12 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? 'Sending...' : 'Submit Application'}
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </form>
  )
}
