import { useState, FormEvent, useId } from 'react'
import { Mail, Instagram, MapPin, Phone, ChevronRight, ChevronDown, CheckCircle, Send, AlertCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageSEO from '../components/PageSEO'

// Sign up free at formspree.io, create a form, paste your form ID here
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID ?? ''}`

const PHONE = '(818) 521-7493'
const PHONE_HREF = 'tel:+18185217493'
const EMAIL = 'info@nextlevelrecruiting.com'

const sports = [
  'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball',
  'Softball', 'Track & Field', 'Lacrosse', 'Wrestling', 'Tennis', 'Other',
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

const serviceAreas = [
  { region: 'Los Angeles County', cities: 'LA, Glendale, Pasadena, Burbank' },
  { region: 'San Fernando Valley', cities: 'Sherman Oaks, Studio City, Van Nuys' },
  { region: 'Orange County', cities: 'Anaheim, Irvine, Santa Ana' },
  { region: 'Inland Empire', cities: 'San Bernardino, Riverside, Ontario' },
  { region: 'Ventura County', cities: 'Thousand Oaks, Oxnard, Ventura' },
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Next Level Recruiting',
  description: 'Book athlete recruiting services with Next Level Recruiting. Highlight tapes, film breakdowns, college consulting in Southern California.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Next Level Recruiting',
    telephone: '+18185217493',
    email: EMAIL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+18185217493',
      contactType: 'customer service',
      areaServed: 'Southern California',
      availableLanguage: 'English',
    },
  },
}

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

export default function Contact() {
  const formId = useId()
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.athleteName.trim()) e.athleteName = 'Athlete name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim() || !/^[\d\s\-()+]{7,}$/.test(form.phone)) e.phone = 'Valid phone number required (digits only)'
    if (!form.sport) e.sport = 'Please select a sport'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    if (!import.meta.env.VITE_FORMSPREE_ID) {
      setSubmitError(true)
      return
    }
    setLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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

  return (
    <>
      <PageSEO
        title="Book a Session — Contact Next Level Recruiting"
        description="Book athlete recruiting services with NLR. Submit your intake form and we'll respond within 24 hours. Call or text (818) 521-7493 or email info@nextlevelrecruiting.com."
        canonical="/contact"
        schema={contactSchema}
      />

      <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-nlr-green/8 blur-[150px]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="section-label">Book Your Session</p>
              <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
                LET'S GET<br /><span className="text-nlr-gold">TO WORK</span>
              </h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Fill out the form below and we'll reach out within 24 hours to confirm your booking and next steps.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FORM + CONTACT INFO */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* FORM */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  {submitted ? (
                    <div
                      className="bg-nlr-navy border border-nlr-green/30 p-12 text-center"
                      role="alert"
                      aria-live="polite"
                    >
                      <div className="w-16 h-16 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                        <CheckCircle size={32} className="text-nlr-green" />
                      </div>
                      <h2 className="display-heading text-4xl text-white mb-4">YOU'RE BOOKED IN</h2>
                      <p className="text-white/60 text-lg mb-2">
                        We received your request and will reach out within 24 hours.
                      </p>
                      <p className="text-white/40 text-sm mb-8">
                        In the meantime, follow us on Instagram{' '}
                        <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="text-nlr-gold hover:underline">
                          @NLRAthletes
                        </a>{' '}
                        for recruiting tips and highlights.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm(INITIAL) }}
                        className="btn-outline text-xs py-3 px-8"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      aria-labelledby="contact-form-heading"
                      className="space-y-6"
                    >
                      <h2 id="contact-form-heading" className="sr-only">Athlete intake form</h2>

                      {/* Row 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor={field('athleteName').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Athlete Name <span className="text-nlr-gold" aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="text"
                            {...field('athleteName')}
                            placeholder="First & Last Name"
                            autoComplete="name"
                            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                              errors.athleteName ? 'border-red-400/60' : 'border-white/10'
                            }`}
                          />
                          {errors.athleteName && (
                            <p id={`${formId}-athleteName-error`} className="text-red-400 text-xs mt-1" role="alert">
                              {errors.athleteName}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor={field('parentName').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Parent / Guardian Name
                          </label>
                          <input
                            type="text"
                            {...field('parentName')}
                            placeholder="Optional"
                            autoComplete="off"
                            className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor={field('email').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Email <span className="text-nlr-gold" aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="email"
                            {...field('email')}
                            placeholder="your@email.com"
                            autoComplete="email"
                            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                              errors.email ? 'border-red-400/60' : 'border-white/10'
                            }`}
                          />
                          {errors.email && (
                            <p id={`${formId}-email-error`} className="text-red-400 text-xs mt-1" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor={field('phone').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Phone <span className="text-nlr-gold" aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="tel"
                            {...field('phone')}
                            placeholder={PHONE}
                            autoComplete="tel"
                            className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                              errors.phone ? 'border-red-400/60' : 'border-white/10'
                            }`}
                          />
                          {errors.phone && (
                            <p id={`${formId}-phone-error`} className="text-red-400 text-xs mt-1" role="alert">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor={field('sport').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Sport <span className="text-nlr-gold" aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <div className="relative">
                            <select
                              {...field('sport')}
                              className={`w-full bg-nlr-navy border px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                                errors.sport ? 'border-red-400/60' : 'border-white/10'
                              } ${form.sport ? 'text-white' : 'text-white/40'}`}
                            >
                              <option value="" disabled>Select a sport</option>
                              {sports.map((s) => (
                                <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>
                              ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
                          </div>
                          {errors.sport && (
                            <p id={`${formId}-sport-error`} className="text-red-400 text-xs mt-1" role="alert">
                              {errors.sport}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor={field('grade').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                            Grade / Year
                          </label>
                          <div className="relative">
                            <select
                              {...field('grade')}
                              className={`w-full bg-nlr-navy border border-white/10 px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                                form.grade ? 'text-white' : 'text-white/40'
                              }`}
                            >
                              <option value="" disabled>Select grade/year</option>
                              {grades.map((g) => (
                                <option key={g} value={g} className="bg-nlr-navy text-white">{g}</option>
                              ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
                          </div>
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor={field('service').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Service Interested In <span className="text-nlr-gold" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <div className="relative">
                          <select
                            {...field('service')}
                            className={`w-full bg-nlr-navy border px-4 py-3 pr-10 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                              errors.service ? 'border-red-400/60' : 'border-white/10'
                            } ${form.service ? 'text-white' : 'text-white/40'}`}
                          >
                            <option value="" disabled>Select a service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" aria-hidden="true" />
                        </div>
                        {errors.service && (
                          <p id={`${formId}-service-error`} className="text-red-400 text-xs mt-1" role="alert">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor={field('message').id} className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Message / Additional Info
                        </label>
                        <textarea
                          {...field('message')}
                          rows={5}
                          placeholder="Tell us about your athlete — current level of play, goals, timeline, or anything else we should know..."
                          className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors resize-none"
                        />
                      </div>

                      {submitError && (
                        <div className="flex items-center gap-3 bg-red-400/10 border border-red-400/30 px-4 py-3" role="alert" aria-live="assertive">
                          <AlertCircle size={16} className="text-red-400 flex-shrink-0" aria-hidden="true" />
                          <p className="text-red-400 text-sm">
                            Something went wrong. Please try again or email us directly at{' '}
                            <a href={`mailto:${EMAIL}`} className="underline hover:no-underline">{EMAIL}</a>.
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-gold w-full py-4 text-sm flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        aria-busy={loading}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-nlr-darker/30 border-t-nlr-darker rounded-full animate-spin" aria-hidden="true" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <Send size={16} aria-hidden="true" />
                          </>
                        )}
                      </button>
                      <p className="text-white/30 text-xs text-center font-body">
                        We'll follow up within 24 hours. No spam, ever.
                      </p>
                    </form>
                  )}
                </AnimatedSection>
              </div>

              {/* CONTACT INFO */}
              <AnimatedSection direction="right" className="space-y-8">
                <div className="bg-nlr-navy border border-white/5 p-8">
                  <h2 className="font-heading font-bold text-white text-lg tracking-widest uppercase mb-6 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-nlr-gold" aria-hidden="true" />
                    Reach Us Directly
                  </h2>
                  <address className="not-italic">
                    <ul className="space-y-5 list-none m-0 p-0" role="list">
                      <li className="flex items-start gap-4">
                        <Mail size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Email</p>
                          <a href={`mailto:${EMAIL}`} className="text-white hover:text-nlr-gold transition-colors text-sm">
                            {EMAIL}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Instagram size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Instagram</p>
                          <a
                            href="https://instagram.com/NLRAthletes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-nlr-gold transition-colors text-sm"
                          >
                            @NLRAthletes
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Phone / Text</p>
                          <a href={PHONE_HREF} className="text-white hover:text-nlr-gold transition-colors text-sm">
                            {PHONE}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <MapPin size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Location</p>
                          <span className="text-white text-sm">
                            Southern California<br />
                            <span className="text-white/40 text-xs">AAU Gyms &amp; Travel Sports Facilities</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </address>
                </div>

                <div className="bg-nlr-green/10 border border-nlr-green/20 p-6" role="note">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle size={18} className="text-nlr-green flex-shrink-0" aria-hidden="true" />
                    <span className="font-heading font-bold text-white text-sm tracking-wide uppercase">24-Hour Response</span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    We respond to every inquiry within one business day. Weekend bookings are handled Monday morning.
                  </p>
                </div>

                {/* Service Area */}
                <div className="bg-nlr-navy border border-white/5 p-6" aria-label="NLR service area">
                  <h3 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-nlr-gold" aria-hidden="true" />
                    Service Area
                  </h3>
                  <ul className="space-y-3 list-none m-0 p-0" role="list">
                    {serviceAreas.map((area) => (
                      <li key={area.region} className="border-l-2 border-nlr-gold/40 pl-3">
                        <p className="font-heading font-bold text-white text-xs tracking-wide uppercase">{area.region}</p>
                        <p className="text-white/40 text-xs mt-0.5">{area.cities}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/30 text-xs mt-4 font-body">
                    Mobile — we come to your gym or facility.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 bg-nlr-green" aria-labelledby="contact-cta-heading">
          <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="contact-cta-heading" className="display-heading text-4xl sm:text-6xl text-white mb-4">
              YOUR NEXT LEVEL<br />STARTS TODAY
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Don't let another season pass without the recruiting tools you deserve.
            </p>
            <a
              href="https://instagram.com/NLRAthletes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2"
            >
              Follow @NLRAthletes
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
