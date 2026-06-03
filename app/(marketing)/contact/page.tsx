import type { Metadata } from 'next'
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'
import ContactForm from '@/components/marketing/contact-form'
import InstagramIcon from '@/components/marketing/instagram-icon'

export const metadata: Metadata = {
  title: 'Book a Session — Contact Next Level Recruiting',
  description: 'Book athlete recruiting services with NLR. Submit your intake form and we\'ll respond within 24 hours. Call or text (818) 521-7493 or email info@nextlevelrecruiting.com.',
  alternates: { canonical: '/contact' },
}

const EMAIL = 'info@nextlevelrecruiting.com'
const PHONE = '(818) 521-7493'

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
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div className="overflow-x-hidden">
        <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-nlr-green/[0.08] blur-[150px]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="section-label">Book Your Session</p>
              <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
                LET&apos;S GET<br /><span className="text-nlr-gold">TO WORK</span>
              </h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
                Fill out the form below and we&apos;ll reach out within 24 hours to confirm your booking and next steps.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <ContactForm />
                </AnimatedSection>
              </div>

              <AnimatedSection direction="right" className="space-y-8">
                <div className="card-dark p-8">
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
                          <a href={`mailto:${EMAIL}`} className="text-white hover:text-nlr-gold transition-colors text-sm">{EMAIL}</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <InstagramIcon size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Instagram</p>
                          <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nlr-gold transition-colors text-sm">@NLRAthletes</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone size={18} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-1">Phone / Text</p>
                          <a href="tel:+18185217493" className="text-white hover:text-nlr-gold transition-colors text-sm">{PHONE}</a>
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

                <div className="card-dark p-6" aria-label="NLR service area">
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
                  <p className="text-white/30 text-xs mt-4 font-body">Mobile — we come to your gym or facility.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 bg-nlr-green" aria-labelledby="contact-cta-heading">
          <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="contact-cta-heading" className="display-heading text-4xl sm:text-6xl text-white mb-4">
              YOUR NEXT LEVEL<br />STARTS TODAY
            </h2>
            <p className="text-white/70 text-lg mb-8">Don&apos;t let another season pass without the recruiting tools you deserve.</p>
            <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2">
              Follow @NLRAthletes
            </a>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
