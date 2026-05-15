import { Link } from 'react-router-dom'
import {
  ChevronRight, Play, Star, Award, Users, TrendingUp,
  Video, FileText, Globe, Headphones, CheckCircle, ArrowRight,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageSEO from '../components/PageSEO'

const services = [
  {
    icon: <Video size={28} aria-hidden="true" />,
    title: 'Highlight Tapes',
    desc: 'Professional highlight reels that showcase your best moments — edited to get coaches watching from the first second.',
    price: 'From $300',
    link: '/services',
  },
  {
    icon: <FileText size={28} aria-hidden="true" />,
    title: 'Film Breakdowns',
    desc: 'Frame-by-frame analysis of your gameplay with coach-ready commentary that demonstrates your IQ and instincts.',
    price: '$300',
    link: '/services',
  },
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: 'Recruiting Profiles',
    desc: 'Your personal recruiting website — stats, highlights, contact info — all in one shareable link coaches trust.',
    price: '$250',
    link: '/services',
  },
  {
    icon: <Headphones size={28} aria-hidden="true" />,
    title: 'Recruiting Consulting',
    desc: 'One-on-one strategy sessions, school targeting, application guidance — we navigate the recruiting process with you.',
    price: 'From $500/mo',
    link: '/services',
  },
]

const testimonials = [
  {
    quote: "NLR built my son's highlight tape and within 3 weeks he had coaches reaching out. We were overwhelmed and so grateful.",
    name: 'Marcus T.',
    sport: 'Basketball — Class of 2025',
    rating: 5,
  },
  {
    quote: "The recruiting profile website was a game changer. My daughter could share one link and coaches saw everything. So professional.",
    name: 'Jennifer R.',
    sport: 'Volleyball — Class of 2026',
    rating: 5,
  },
  {
    quote: "Andrew understood exactly what D1 coaches look for. The film breakdown sold my story better than I could have done myself.",
    name: 'Diego M.',
    sport: 'Baseball — Transfer Portal',
    rating: 5,
  },
]

const steps = [
  {
    num: '01',
    title: 'Submit Your Footage',
    desc: 'Share your game film, practice clips, or combine footage. Raw footage is fine — we handle the rest.',
  },
  {
    num: '02',
    title: 'We Produce',
    desc: 'Our team edits, scores, and polishes your content to the standard that college coaches and scouts expect.',
  },
  {
    num: '03',
    title: 'You Get Recruited',
    desc: 'Receive your final product within days. Start sending coaches your best self — on your timeline.',
  },
]

const sportBadges = [
  '🏀 Basketball', '⚾ Baseball', '🏈 Football', '⚽ Soccer',
  '🏐 Volleyball', '🥎 Softball', '🏃 Track & Field', '🥍 Lacrosse',
  '🤼 Wrestling', '🎾 Tennis',
]

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      '@id': 'https://next-level-recruiting-theta.vercel.app/#organization',
      name: 'Next Level Recruiting',
      alternateName: 'NLR',
      url: 'https://next-level-recruiting-theta.vercel.app',
      logo: 'https://next-level-recruiting-theta.vercel.app/nlr-icon.svg',
      description: 'Southern California\'s premier athlete recruiting agency. Highlight tapes, film breakdowns, recruiting profiles, and college consulting for all ages across 10 sports.',
      telephone: '+18185217493',
      email: 'info@nextlevelrecruiting.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'CA',
        addressCountry: 'US',
        description: 'Southern California — AAU Gyms & Travel Sports Facilities',
      },
      areaServed: 'Southern California',
      sport: ['Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball', 'Softball', 'Track and Field', 'Lacrosse', 'Wrestling', 'Tennis'],
      sameAs: ['https://instagram.com/NLRAthletes'],
      founder: {
        '@type': 'Person',
        name: 'Andrew Ayvazian',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://next-level-recruiting-theta.vercel.app/#localbusiness',
      name: 'Next Level Recruiting',
      description: 'Athlete recruiting services including highlight tape production, film breakdowns, recruiting profiles, and college consulting in Southern California.',
      telephone: '+18185217493',
      email: 'info@nextlevelrecruiting.com',
      priceRange: '$75–$999',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      url: 'https://next-level-recruiting-theta.vercel.app',
      image: 'https://next-level-recruiting-theta.vercel.app/andrew-ayvazian.png',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://next-level-recruiting-theta.vercel.app/#website',
      url: 'https://next-level-recruiting-theta.vercel.app',
      name: 'Next Level Recruiting',
      description: 'Southern California athlete recruiting agency',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://next-level-recruiting-theta.vercel.app/sports',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <PageSEO
        title="Athlete Recruiting Services — Highlight Tapes & College Consulting"
        description="Next Level Recruiting (NLR) — Southern California's premier athlete recruiting agency. Professional highlight tapes, film breakdowns, recruiting profiles, and college consulting for all ages across 10 sports. Serving AAU gyms & travel sports facilities in SoCal."
        canonical="/"
        schema={homeSchema}
      />

      <div className="overflow-x-hidden">
        {/* HERO */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-0 left-0 w-64 h-64 bg-nlr-green/5 blur-[120px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[120px]" aria-hidden="true" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-nlr-gold" aria-hidden="true" />
              <p className="section-label text-xs">Southern California's Premier Recruiting Agency</p>
              <span className="w-8 h-px bg-nlr-gold" aria-hidden="true" />
            </div>

            <h1 id="hero-heading" className="display-heading text-6xl sm:text-8xl lg:text-[120px] leading-none text-white mb-6">
              YOUR GAME.<br />
              <span className="text-gradient-gold">YOUR FUTURE.</span><br />
              NEXT LEVEL.
            </h1>

            <p className="font-body text-white/65 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Highlight tapes, film breakdowns, recruiting profiles, and college consulting — for athletes of all ages, across 10 sports.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact" className="btn-gold text-sm py-4 px-10 flex items-center gap-2 animate-pulse-glow">
                Get Your Tape Done
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn-outline text-sm py-4 px-10 flex items-center gap-2">
                <Play size={14} className="fill-nlr-gold" aria-hidden="true" />
                View Services
              </Link>
            </div>

            {/* Stats bar */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 max-w-2xl mx-auto">
              {[
                { val: '10', label: 'Sports Covered' },
                { val: 'ALL', label: 'Ages Welcome' },
                { val: 'SoCal', label: 'Based & Trusted' },
                { val: '∞', label: 'Franchise Vision' },
              ].map((stat) => (
                <div key={stat.label} className="bg-nlr-darker/50 px-6 py-4 text-center">
                  <dt className="font-display text-2xl text-nlr-gold tracking-wider">{stat.val}</dt>
                  <dd className="font-heading text-white/40 text-xs tracking-widest uppercase mt-0.5">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
            <span className="font-heading text-white/30 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-nlr-gold/60 to-transparent" />
          </div>
        </section>

        {/* SPORTS TICKER — infinite marquee */}
        <section className="bg-nlr-green py-5 overflow-hidden" aria-label="Sports we cover: Basketball, Baseball, Football, Soccer, Volleyball, Softball, Track and Field, Lacrosse, Wrestling, Tennis">
          <div className="flex" aria-hidden="true">
            {/* Two copies for seamless loop */}
            <div className="flex gap-8 whitespace-nowrap animate-marquee flex-shrink-0">
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

        {/* HOW IT WORKS */}
        <section className="py-24 lg:py-32 bg-nlr-dark relative" aria-labelledby="process-heading">
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">The Process</p>
              <h2 id="process-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                THREE STEPS TO<br /><span className="text-nlr-gold">THE NEXT LEVEL</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 relative list-none m-0 p-0">
              <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-nlr-gold/30 via-nlr-gold/60 to-nlr-gold/30 z-0" aria-hidden="true" />

              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 150} className="relative z-10">
                  <li className="bg-nlr-navy border border-white/5 p-8 hover:border-nlr-gold/30 transition-all duration-300 group">
                    <div className="font-display text-7xl text-nlr-gold/15 group-hover:text-nlr-gold/25 transition-all duration-300 leading-none mb-4" aria-hidden="true">
                      {step.num}
                    </div>
                    <div className="w-12 h-1 bg-nlr-gold mb-6" aria-hidden="true" />
                    <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </li>
                </AnimatedSection>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="py-24 lg:py-32 bg-nlr-darker" aria-labelledby="services-preview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
              <div>
                <p className="section-label">What We Do</p>
                <h2 id="services-preview-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                  OUR<br /><span className="text-nlr-gold">SERVICES</span>
                </h2>
                <div className="gold-line mt-6" aria-hidden="true" />
              </div>
              <Link to="/services" className="btn-outline text-xs py-3 px-6 flex items-center gap-2 whitespace-nowrap">
                Full Pricing
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </AnimatedSection>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0" role="list">
              {services.map((svc, i) => (
                <AnimatedSection key={svc.title} delay={i * 100}>
                  <li className="bg-nlr-navy border border-white/5 p-8 h-full flex flex-col group hover:border-nlr-gold/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-nlr-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                      {svc.icon}
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg tracking-wide uppercase mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6">{svc.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-nlr-gold text-lg">{svc.price}</span>
                      <Link
                        to={svc.link}
                        className="text-white/40 hover:text-nlr-gold transition-colors flex items-center gap-1 text-xs font-heading tracking-widest uppercase"
                        aria-label={`View details for ${svc.title}`}
                      >
                        Details <ChevronRight size={12} aria-hidden="true" />
                      </Link>
                    </div>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>

        {/* BEST VALUE BANNER */}
        <section className="py-16 bg-nlr-green relative overflow-hidden" aria-labelledby="package-heading">
          <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 50px)',
          }} />
          <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="inline-block bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
              Best Value
            </span>
            <h2 id="package-heading" className="display-heading text-5xl sm:text-7xl text-white mb-4">
              FULL RECRUITING PACKAGE
            </h2>
            <p className="text-white/70 text-lg mb-4">
              Highlight Tape + Film Breakdown + Recruiting Profile + Consulting — everything you need to get recruited.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-display text-6xl text-nlr-gold">$999</span>
              <div className="text-left">
                <p className="text-white/40 text-sm line-through">$1,300+ value</p>
                <p className="text-white/70 text-sm font-heading">Save $300+</p>
              </div>
            </div>
            <Link to="/contact" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
              Get the Package
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">What Athletes Say</p>
              <h2 id="testimonials-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                REAL RESULTS,<br /><span className="text-nlr-gold">REAL ATHLETES</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none m-0 p-0" role="list">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 120}>
                  <li className="bg-nlr-navy border border-white/5 p-8 h-full flex flex-col hover:border-nlr-gold/20 transition-all duration-300">
                    <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={14} className="fill-nlr-gold text-nlr-gold" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6 italic">
                      "{t.quote}"
                    </blockquote>
                    <footer className="border-t border-white/5 pt-6 flex items-center gap-3">
                      <div
                        className="w-10 h-10 bg-nlr-green/30 border border-nlr-green/50 flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <span className="font-display text-nlr-gold text-sm">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <cite className="font-heading font-bold text-white text-sm tracking-wide not-italic">{t.name}</cite>
                        <p className="text-white/40 text-xs font-heading tracking-widest uppercase mt-0.5">{t.sport}</p>
                      </div>
                    </footer>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>

        {/* TRUST INDICATORS */}
        <section className="py-16 bg-nlr-darker border-y border-white/5" aria-label="Why choose NLR">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 list-none m-0 p-0" role="list">
              {[
                { icon: <Award size={24} aria-hidden="true" />, title: 'Professional Quality', sub: 'Coach-ready productions' },
                { icon: <Users size={24} aria-hidden="true" />, title: 'All Ages Welcome', sub: 'Youth through transfer portal' },
                { icon: <TrendingUp size={24} aria-hidden="true" />, title: 'Results Driven', sub: 'Athletes getting recruited' },
                { icon: <CheckCircle size={24} aria-hidden="true" />, title: 'Fast Turnaround', sub: 'Quick delivery timelines' },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 100}>
                  <li className="flex items-center gap-4">
                    <div className="text-nlr-gold flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm tracking-wide uppercase">{item.title}</p>
                      <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 lg:py-32 bg-nlr-darker relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/10 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label">Take the Next Step</p>
            <h2 id="cta-heading" className="display-heading text-6xl sm:text-8xl text-white mt-4 mb-6">
              READY TO GO<br /><span className="text-nlr-gold">NEXT LEVEL?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Join athletes across Southern California who trusted NLR to take their recruiting to the next level. Your tape is waiting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2 animate-pulse-glow">
                Book Your Session
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn-outline text-sm py-4 px-10">
                Learn Our Story
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
