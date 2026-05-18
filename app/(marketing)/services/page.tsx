import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Video, FileText, Globe, Headphones, Users, Star, Zap, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'

export const metadata: Metadata = {
  title: 'Services & Pricing — Highlight Tapes, Film Breakdowns, Recruiting Profiles',
  description: 'NLR services & pricing: Highlight Tape Standard ($300), Premium ($450), Film Breakdown ($300), Recruiting Profile ($250), College Consulting ($500/mo), Full Package ($999). Southern California athlete recruiting.',
  alternates: { canonical: '/services' },
}

const faqs = [
  { q: 'What footage do I need to send?', a: 'Any raw game footage, practice clips, or combine video. Phone recordings are fine — we handle the editing. The more clips you send, the better we can select your strongest moments.' },
  { q: 'How long does it take?', a: 'Standard turnaround is 5–7 business days from when we receive your footage. Rush delivery is available on request — ask us when you book.' },
  { q: 'Do college coaches actually watch these?', a: 'Yes. A well-produced tape that leads with your best plays in the first 60 seconds dramatically increases your evaluation rate versus a raw, unedited file.' },
  { q: 'Can NLR film at our games or events?', a: 'Yes — we film year-round, including during live evaluation periods. We operate at SoCal AAU gyms and travel sports facilities. Contact us to discuss on-site filming for your games, showcases, or combines.' },
  { q: 'What is your revision policy?', a: 'Standard tape includes one revision round. Premium tape includes two revision rounds. All revisions must be requested within 30 days of delivery.' },
  { q: 'Is this only for basketball?', a: 'No. We cover 10 sports: Basketball, Baseball, Football, Soccer, Volleyball, Softball, Track & Field, Lacrosse, Wrestling, and Tennis.' },
]

const services = [
  {
    icon: <Video size={32} />,
    title: 'Highlight Tape Standard',
    price: '$300',
    badge: null,
    desc: "A professionally edited highlight reel featuring your top plays, designed to capture a coach's attention in the first 60 seconds.",
    features: ['3–5 minute edited reel', 'Custom intro with your name & number', 'Licensed background music', 'Delivered in HD MP4 format', 'Permanent shareable link you own forever'],
    cta: 'Book Standard Tape',
  },
  {
    icon: <Video size={32} />,
    title: 'Highlight Tape Premium',
    price: '$450',
    badge: 'Popular',
    desc: 'Everything in Standard, plus advanced graphics, slow-motion sequences, title cards, and optimized for coach email attachments.',
    features: ['Everything in Standard', 'Custom motion graphics & title cards', 'Slow-motion key moments', 'Multi-angle sequencing', 'Thumbnail + email-ready format', 'Two revision rounds'],
    cta: 'Book Premium Tape',
  },
  {
    icon: <FileText size={32} />,
    title: 'Film Breakdown',
    price: '$300',
    badge: null,
    desc: "Frame-by-frame analysis of your full game film with coach-facing commentary highlighting your decision-making, positioning, and IQ.",
    features: ['Full game film analysis', 'Coach-ready annotations', 'PDF + video combo deliverable', 'Focus on IQ & coachability', 'Position-specific breakdowns'],
    cta: 'Book Film Breakdown',
  },
  {
    icon: <Globe size={32} />,
    title: 'Recruiting Profile Website',
    price: '$250',
    badge: null,
    desc: 'A clean, shareable one-page recruiting website with your stats, highlight video, academic info, and contact details.',
    features: ['Mobile-optimized personal site', 'Embedded highlight video', 'Stats, GPA, grad year', 'Coach contact form', 'Permanent shareable URL — yours forever'],
    cta: 'Build My Profile',
  },
  {
    icon: <Headphones size={32} />,
    title: 'College Recruiting Consulting',
    price: '$500 / month',
    badge: null,
    desc: 'Monthly strategy sessions to navigate the recruiting process — school targeting, communication templates, campus visit prep, and offer evaluation.',
    features: ['2 sessions/month (1hr each)', 'School target list creation', 'Coach email templates', 'Campus visit strategy', 'Offer evaluation support'],
    cta: 'Start Consulting',
  },
  {
    icon: <Users size={32} />,
    title: 'Direct Coach Outreach',
    price: '$350 / month',
    badge: null,
    desc: 'We contact coaches on your behalf — sending your tape, profile, and follow-up messages to your target school list each month.',
    features: ['Up to 30 schools/month', 'Personalized coach emails', 'Follow-up sequences', 'Response tracking', 'Monthly progress report'],
    cta: 'Start Outreach',
  },
  {
    icon: <Star size={32} />,
    title: 'Combine / Showcase Event',
    price: '$75 / athlete',
    badge: 'Event',
    desc: 'Participate in NLR-run combines and showcases inside SoCal AAU gyms and travel sports facilities, with coaches and scouts in attendance.',
    features: ['Live showcase with coaches', 'On-site film capture', 'Measurables recorded', 'Certificate of participation', 'Post-event highlight clip'],
    cta: 'Register Now',
  },
]

const packageFeatures = [
  'Highlight Tape Premium ($450 value)',
  'Film Breakdown ($300 value)',
  'Recruiting Profile Website ($250 value)',
  '1 Month Consulting ($500 value)',
  'Priority turnaround',
  'Dedicated account manager',
  'Unlimited revisions (first 30 days)',
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Next Level Recruiting Services & Pricing',
  itemListElement: [
    { '@type': 'Offer', position: 1, name: 'Highlight Tape Standard', price: '300', priceCurrency: 'USD' },
    { '@type': 'Offer', position: 2, name: 'Highlight Tape Premium', price: '450', priceCurrency: 'USD' },
    { '@type': 'Offer', position: 3, name: 'Film Breakdown', price: '300', priceCurrency: 'USD' },
    { '@type': 'Offer', position: 4, name: 'Recruiting Profile Website', price: '250', priceCurrency: 'USD' },
    { '@type': 'Offer', position: 5, name: 'College Recruiting Consulting', price: '500', priceCurrency: 'USD' },
    { '@type': 'Offer', position: 6, name: 'Full Recruiting Package', price: '999', priceCurrency: 'USD' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <div className="overflow-x-hidden">
        <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden" aria-labelledby="services-hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-nlr-green/10 blur-[150px]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="section-label">Pricing & Services</p>
              <h1 id="services-hero-heading" className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
                INVEST IN<br /><span className="text-nlr-gold">YOUR FUTURE</span>
              </h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Professional recruiting services priced for every stage of your athletic career. No hidden fees. No gimmicks. Just results.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-4 bg-nlr-gold" aria-label="Free consultation offer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-heading font-bold text-nlr-darker text-sm tracking-wide uppercase">
              Not sure where to start? Book a <span className="underline">free</span> 15-minute consultation — no commitment.
            </p>
            <Link href="/contact" className="bg-nlr-darker text-nlr-gold font-heading font-bold text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-nlr-dark transition-colors whitespace-nowrap flex-shrink-0 border border-nlr-darker">
              Book Free Call
            </Link>
          </div>
        </section>

        <section className="py-16 bg-nlr-dark" aria-labelledby="services-package-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-nlr-green via-nlr-green-dark to-nlr-darker border border-nlr-gold/30 p-8 lg:p-12 overflow-hidden">
                <div className="absolute top-0 right-0" aria-hidden="true">
                  <div className="bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-6 py-2">Best Value</div>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-nlr-gold/5 blur-[100px]" aria-hidden="true" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Zap size={24} className="text-nlr-gold" />
                      <span className="font-heading font-bold text-nlr-gold tracking-widest uppercase text-sm">Full Recruiting Package</span>
                    </div>
                    <h2 id="services-package-heading" className="display-heading text-5xl sm:text-7xl text-white mb-4">
                      EVERYTHING<br />YOU NEED
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-8">
                      The complete NLR experience — tape, breakdown, profile, and consulting under one roof. Designed for athletes serious about playing at the next level.
                    </p>
                    <div className="flex items-end gap-4 mb-8">
                      <span className="font-display text-7xl text-nlr-gold">$999</span>
                      <div className="pb-2">
                        <div className="text-white/40 text-base line-through">$1,500+ value</div>
                        <div className="text-nlr-gold/80 text-sm font-heading font-bold tracking-wide">Save $500+</div>
                      </div>
                    </div>
                    <Link href="/contact" className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2">
                      Get the Full Package <ChevronRight size={16} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {packageFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 bg-white/5 px-4 py-3 border-l-2 border-nlr-gold">
                        <CheckCircle size={16} className="text-nlr-gold flex-shrink-0" />
                        <span className="text-white/80 text-sm font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-nlr-darker" aria-labelledby="services-individual-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">Individual Services</p>
              <h2 id="services-individual-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                PICK WHAT<br /><span className="text-nlr-gold">YOU NEED</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <AnimatedSection key={svc.title} delay={i * 80}>
                  <div className="card-dark flex flex-col h-full group hover:-translate-y-1">
                    <div className="p-8 border-b border-white/5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-nlr-gold group-hover:scale-110 transition-transform duration-300">{svc.icon}</div>
                        {svc.badge && (
                          <span className="bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-3 py-1">{svc.badge}</span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-2">{svc.title}</h3>
                      <div className="font-display text-4xl text-nlr-gold mb-4">{svc.price}</div>
                      <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle size={14} className="text-nlr-green mt-0.5 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="btn-gold text-xs py-3 px-6 text-center mt-8 flex items-center justify-center gap-2">
                        {svc.cta} <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="faq-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">Common Questions</p>
              <h2 id="faq-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                GOT<br /><span className="text-nlr-gold">QUESTIONS?</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <AnimatedSection key={faq.q} delay={i * 80}>
                  <div className="card-dark p-8 h-full">
                    <dt className="font-heading font-bold text-white text-lg tracking-wide uppercase mb-3">{faq.q}</dt>
                    <dd className="text-white/60 text-sm leading-relaxed">{faq.a}</dd>
                  </div>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 bg-nlr-green" aria-labelledby="services-cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 id="services-cta-heading" className="display-heading text-4xl sm:text-6xl text-white mb-4">NOT SURE WHERE TO START?</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Every athlete&apos;s situation is different. Book a free 15-minute call and we&apos;ll build the right package around your goals, sport, and timeline.
              </p>
              <Link href="/contact" className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2">
                Book a Free Consultation <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  )
}
