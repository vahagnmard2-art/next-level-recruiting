import { useState, FormEvent } from 'react'
import { Mail, Instagram, MapPin, Phone, ChevronRight, CheckCircle, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const sports = [
  'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball',
  'Softball', 'Track & Field', 'Lacrosse', 'Wrestling', 'Tennis', 'Other',
]

const services = [
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
  athleteName: '',
  parentName: '',
  email: '',
  phone: '',
  sport: '',
  grade: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.athleteName.trim()) e.athleteName = 'Athlete name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.sport) e.sport = 'Please select a sport'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
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

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-nlr-green/8 blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="section-label">Book Your Session</span>
            <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
              LET'S GET<br /><span className="text-nlr-gold">TO WORK</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Fill out the form below and we'll reach out within 24 hours to confirm your booking and next steps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="py-24 lg:py-32 bg-nlr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FORM */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-nlr-navy border border-nlr-green/30 p-12 text-center">
                    <div className="w-16 h-16 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-nlr-green" />
                    </div>
                    <h2 className="display-heading text-4xl text-white mb-4">YOU'RE BOOKED IN</h2>
                    <p className="text-white/60 text-lg mb-2">
                      We received your request and will reach out within 24 hours.
                    </p>
                    <p className="text-white/40 text-sm mb-8">
                      In the meantime, follow us on Instagram{' '}
                      <a href="https://instagram.com/NLRAthletes" className="text-nlr-gold">@NLRAthletes</a>{' '}
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
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Athlete Name <span className="text-nlr-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="athleteName"
                          value={form.athleteName}
                          onChange={handleChange}
                          placeholder="First & Last Name"
                          className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                            errors.athleteName ? 'border-red-500/60' : 'border-white/10'
                          }`}
                        />
                        {errors.athleteName && (
                          <p className="text-red-400 text-xs mt-1">{errors.athleteName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Parent / Guardian Name
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          placeholder="Parent or Guardian (optional)"
                          className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Email <span className="text-nlr-gold">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                            errors.email ? 'border-red-500/60' : 'border-white/10'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Phone <span className="text-nlr-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(310) 555-0100"
                          className={`w-full bg-nlr-navy border px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors ${
                            errors.phone ? 'border-red-500/60' : 'border-white/10'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Sport <span className="text-nlr-gold">*</span>
                        </label>
                        <select
                          name="sport"
                          value={form.sport}
                          onChange={handleChange}
                          className={`w-full bg-nlr-navy border px-4 py-3 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                            errors.sport ? 'border-red-500/60' : 'border-white/10'
                          } ${form.sport ? 'text-white' : 'text-white/20'}`}
                        >
                          <option value="" disabled>Select a sport</option>
                          {sports.map((s) => (
                            <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>
                          ))}
                        </select>
                        {errors.sport && (
                          <p className="text-red-400 text-xs mt-1">{errors.sport}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                          Grade / Year
                        </label>
                        <select
                          name="grade"
                          value={form.grade}
                          onChange={handleChange}
                          className={`w-full bg-nlr-navy border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                            form.grade ? 'text-white' : 'text-white/20'
                          }`}
                        >
                          <option value="" disabled>Select grade/year</option>
                          {grades.map((g) => (
                            <option key={g} value={g} className="bg-nlr-navy text-white">{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                        Service Interested In <span className="text-nlr-gold">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`w-full bg-nlr-navy border px-4 py-3 text-sm focus:outline-none focus:border-nlr-gold transition-colors appearance-none cursor-pointer ${
                          errors.service ? 'border-red-500/60' : 'border-white/10'
                        } ${form.service ? 'text-white' : 'text-white/20'}`}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-heading font-bold text-white/70 text-xs tracking-widest uppercase mb-2">
                        Message / Additional Info
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your athlete — current level of play, goals, timeline, or anything else we should know..."
                        className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-nlr-gold transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-4 text-sm flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-nlr-darker/30 border-t-nlr-darker rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <Send size={16} />
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
              {/* Direct contact */}
              <div className="bg-nlr-navy border border-white/5 p-8">
                <h3 className="font-heading font-bold text-white text-lg tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-nlr-gold" />
                  Reach Us Directly
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Mail size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Email</div>
                      <a href="mailto:info@nextlevelrecruiting.com" className="text-white hover:text-nlr-gold transition-colors text-sm">
                        info@nextlevelrecruiting.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Instagram size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Instagram</div>
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
                    <Phone size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Phone / Text</div>
                      <span className="text-white text-sm">(310) 555-0100</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Location</div>
                      <span className="text-white text-sm">Southern California<br />
                        <span className="text-white/40 text-xs">AAU Gyms & Travel Sports Facilities</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response time */}
              <div className="bg-nlr-green/10 border border-nlr-green/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} className="text-nlr-green" />
                  <span className="font-heading font-bold text-white text-sm tracking-wide uppercase">24-Hour Response</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  We respond to every inquiry within one business day. Weekend bookings are handled Monday morning.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-nlr-navy border border-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-nlr-dark to-nlr-navy relative flex items-center justify-center">
                  {/* Styled map placeholder */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(26,122,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,60,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }} />
                  <div className="relative text-center">
                    <MapPin size={32} className="text-nlr-gold mx-auto mb-2" />
                    <div className="font-heading font-bold text-white text-sm tracking-widest uppercase">Southern California</div>
                    <div className="text-white/40 text-xs mt-1">Los Angeles & surrounding areas</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-nlr-darker/80 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-nlr-gold" />
                      <span className="font-heading text-white/60 text-xs tracking-widest uppercase">NLR Service Area — All SoCal</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-nlr-green">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display-heading text-4xl sm:text-6xl text-white mb-4">
            YOUR NEXT LEVEL<br />STARTS TODAY
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Don't let another season pass without the recruiting tools you deserve.
          </p>
          <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2">
            Follow @NLRAthletes
            <ChevronRight size={16} />
          </a>
        </AnimatedSection>
      </section>
    </div>
  )
}
