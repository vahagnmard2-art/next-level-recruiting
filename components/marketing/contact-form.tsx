'use client'

import { useState, useId, useEffect, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { ChevronDown, CheckCircle, Send, AlertCircle } from 'lucide-react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''
const EMAIL = 'info@nextlevelrecruiting.com'
const PHONE = '(818) 521-7493'

const schema = z.object({
  athleteName: z.string().min(2, 'Athlete name is required'),
  parentName: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().regex(/^[\d\s\-()+]{7,}$/, 'Valid phone number required'),
  sport: z.string().min(1, 'Please select a sport'),
  grade: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

const sports = [
  'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball',
  'Softball', 'Track & Field', 'Golf', 'Tennis', 'Other',
]

const serviceOptions = [
  'Highlight Tape Standard ($300)',
  'Highlight Tape Premium ($450)',
  'Film Breakdown ($300)',
  'Recruiting Profile Website ($250)',
  'College Recruiting Consulting ($500/mo)',
  'Direct Coach Outreach ($350/mo)',
  'Combine / Showcase Event ($75)',
  'Full Recruiting Package — Best Value ($999)',
  'Free Consultation',
  'Not sure yet',
]

const grades = [
  '6th Grade', '7th Grade', '8th Grade',
  '9th Grade (Freshman)', '10th Grade (Sophomore)',
  '11th Grade (Junior)', '12th Grade (Senior)',
  'College Freshman', 'College Sophomore',
  'College Junior', 'College Senior',
  'Transfer Portal',
]

interface FormData {
  athleteName: string
  parentName: string
  email: string
  phone: string
  sport: string
  grade: string
  service: string
  message: string
}

const INITIAL: FormData = {
  athleteName: '', parentName: '', email: '',
  phone: '', sport: '', grade: '', service: '', message: '',
}

export default function ContactForm() {
  const formId = useId()
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  useEffect(() => {
    const sport = searchParams.get('sport')
    const service = searchParams.get('service')
    if (sport || service) {
      setForm(prev => ({
        ...prev,
        ...(sport && sports.includes(sport) ? { sport } : {}),
        ...(service ? { service } : {}),
      }))
    }
  }, [searchParams])

  const validate = (): boolean => {
    const result = schema.safeParse(form)
    if (result.success) { setErrors({}); return true }
    const e: Partial<FormData> = {}
    result.error.issues.forEach(issue => {
      const key = issue.path[0] as keyof FormData
      if (key) e[key] = issue.message
    })
    setErrors(e)
    return false
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    if (!FORMSPREE_ID) { setSubmitError(true); return }
    setLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const field = (name: keyof FormData) => ({
    id: `${formId}-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-describedby': errors[name] ? `${formId}-${name}-error` : undefined,
    'aria-invalid': errors[name] ? (true as const) : undefined,
  })

  if (submitted) {
    return (
      <div className="bg-nlr-navy border border-nlr-green/30 p-12 text-center" role="alert" aria-live="polite">
        <div className="w-16 h-16 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <CheckCircle size={32} className="text-nlr-green" />
        </div>
        <h2 className="display-heading text-4xl text-white mb-4">YOU&apos;RE BOOKED IN</h2>
        <p className="text-white/60 text-lg mb-2">We received your request and will reach out within 24 hours.</p>
        <p className="text-white/40 text-sm mb-8">
          Follow us on Instagram{' '}
          <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="text-nlr-gold hover:underline">
            @NLRAthletes
          </a>{' '}
          for recruiting tips and highlights.
        </p>
        <button onClick={() => { setSubmitted(false); setForm(INITIAL) }} className="btn-outline text-xs py-3 px-8">
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby={`${formId}-heading`} className="space-y-6">
      <h2 id={`${formId}-heading`} className="sr-only">Athlete intake form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={field('athleteName').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Athlete Name <span className="text-nlr-gold" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input type="text" {...field('athleteName')} placeholder="First & Last Name" autoComplete="name"
            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${errors.athleteName ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.athleteName && <p id={`${formId}-athleteName-error`} className="text-red-400 text-xs mt-1" role="alert">{errors.athleteName}</p>}
        </div>
        <div>
          <label htmlFor={field('parentName').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Parent / Guardian Name
          </label>
          <input type="text" {...field('parentName')} placeholder="Optional" autoComplete="off"
            className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={field('email').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Email <span className="text-nlr-gold" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input type="email" {...field('email')} placeholder="your@email.com" autoComplete="email"
            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${errors.email ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.email && <p id={`${formId}-email-error`} className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={field('phone').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Phone <span className="text-nlr-gold" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input type="tel" {...field('phone')} placeholder={PHONE} autoComplete="tel"
            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${errors.phone ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.phone && <p id={`${formId}-phone-error`} className="text-red-400 text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={field('sport').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Sport <span className="text-nlr-gold" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <div className="relative">
            <select {...field('sport')} className={`w-full bg-nlr-navy border px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${errors.sport ? 'border-red-400/60' : 'border-white/10'} ${form.sport ? 'text-white' : 'text-white/40'}`}>
              <option value="" disabled>Select a sport</option>
              {sports.map((s) => <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
          </div>
          {errors.sport && <p id={`${formId}-sport-error`} className="text-red-400 text-xs mt-1" role="alert">{errors.sport}</p>}
        </div>
        <div>
          <label htmlFor={field('grade').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
            Grade / Year
          </label>
          <div className="relative">
            <select {...field('grade')} className={`w-full bg-nlr-navy border border-white/10 px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${form.grade ? 'text-white' : 'text-white/40'}`}>
              <option value="" disabled>Select grade/year</option>
              {grades.map((g) => <option key={g} value={g} className="bg-nlr-navy text-white">{g}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor={field('service').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
          Service Interested In <span className="text-nlr-gold" aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <div className="relative">
          <select {...field('service')} className={`w-full bg-nlr-navy border px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${errors.service ? 'border-red-400/60' : 'border-white/10'} ${form.service ? 'text-white' : 'text-white/40'}`}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
        </div>
        {errors.service && <p id={`${formId}-service-error`} className="text-red-400 text-xs mt-1" role="alert">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor={field('message').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
          Message / Additional Info
        </label>
        <textarea {...field('message')} rows={5}
          placeholder="Tell us about your athlete — current level of play, goals, timeline, or anything else we should know..."
          className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors resize-none" />
      </div>

      {submitError && (
        <div className="flex items-center gap-3 bg-red-400/10 border border-red-400/30 px-4 py-3" role="alert" aria-live="assertive">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" aria-hidden="true" />
          <p className="text-red-400 text-sm">
            Something went wrong. Email us at{' '}
            <a href={`mailto:${EMAIL}`} className="underline hover:no-underline">{EMAIL}</a>.
          </p>
        </div>
      )}

      <button type="submit" disabled={loading}
        className="btn-gold w-full py-4 text-sm flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        aria-busy={loading}>
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-nlr-darker/30 border-t-nlr-darker rounded-full animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>Submit Request <Send size={16} aria-hidden="true" /></>
        )}
      </button>
      <p className="text-white/30 text-xs text-center font-body">We&apos;ll follow up within 24 hours. No spam, ever.</p>
    </form>
  )
}
