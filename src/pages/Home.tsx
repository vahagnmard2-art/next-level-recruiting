import { Link } from 'react-router-dom'
import { ChevronRight, Play, Star, Award, Users, TrendingUp, Video, FileText, Globe, Headphones, CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    icon: <Video size={28} />,
    title: 'Highlight Tapes',
    desc: 'Professional highlight reels that showcase your best moments — edited to get coaches watching from the first second.',
    price: 'From $300',
    link: '/services',
  },
  {
    icon: <FileText size={28} />,
    title: 'Film Breakdowns',
    desc: 'Frame-by-frame analysis of your gameplay with coach-ready commentary that demonstrates your IQ and instincts.',
    price: '$300',
    link: '/services',
  },
  {
    icon: <Globe size={28} />,
    title: 'Recruiting Profiles',
    desc: 'Your personal recruiting website — stats, highlights, contact info — all in one shareable link coaches trust.',
    price: '$250',
    link: '/services',
  },
  {
    icon: <Headphones size={28} />,
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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Video placeholder — swap src for real video */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-nlr-green/30 via-transparent to-nlr-gold/10" />
        </div>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-nlr-green/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <span className="w-8 h-px bg-nlr-gold" />
            <span className="section-label text-xs">Southern California's Premier Recruiting Agency</span>
            <span className="w-8 h-px bg-nlr-gold" />
          </div>

          {/* Headline */}
          <h1 className="display-heading text-6xl sm:text-8xl lg:text-[120px] leading-none text-white mb-6 animate-fade-up">
            YOUR GAME.<br />
            <span className="text-gradient-gold">YOUR FUTURE.</span><br />
            NEXT LEVEL.
          </h1>

          <p className="font-body text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '200ms' }}>
            Highlight tapes, film breakdowns, recruiting profiles, and college consulting — for athletes of all ages, across 10 sports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn-gold text-sm py-4 px-10 flex items-center gap-2 animate-pulse-glow">
              Get Your Tape Done
              <ChevronRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline text-sm py-4 px-10 flex items-center gap-2">
              <Play size={14} className="fill-nlr-gold" />
              View Services
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 max-w-2xl mx-auto">
            {[
              { val: '10', label: 'Sports Covered' },
              { val: 'ALL', label: 'Ages Welcome' },
              { val: 'SoCal', label: 'Based & Trusted' },
              { val: '∞', label: 'Franchise Vision' },
            ].map((stat) => (
              <div key={stat.label} className="bg-nlr-darker/50 px-6 py-4 text-center">
                <div className="font-display text-2xl text-nlr-gold tracking-wider">{stat.val}</div>
                <div className="font-heading text-white/40 text-xs tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-heading text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-nlr-gold/60 to-transparent" />
        </div>
      </section>

      {/* SPORTS BADGES */}
      <section className="bg-nlr-green py-6 overflow-hidden">
        <div className="flex gap-6 animate-none">
          <div className="flex gap-6 whitespace-nowrap min-w-max px-6">
            {[...sportBadges, ...sportBadges].map((sport, i) => (
              <span
                key={i}
                className="font-heading font-bold text-white/90 text-sm tracking-widest uppercase flex items-center gap-2"
              >
                <span>{sport}</span>
                {i < sportBadges.length * 2 - 1 && (
                  <span className="text-white/30 ml-2">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-nlr-dark relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">The Process</span>
            <h2 className="display-heading text-5xl sm:text-7xl text-white mt-3">
              THREE STEPS TO<br /><span className="text-nlr-gold">THE NEXT LEVEL</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-nlr-gold/30 via-nlr-gold/60 to-nlr-gold/30 z-0" />

            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 150} className="relative z-10">
                <div className="bg-nlr-navy border border-white/5 p-8 hover:border-nlr-gold/30 transition-all duration-300 group">
                  <div className="font-display text-7xl text-nlr-gold/15 group-hover:text-nlr-gold/25 transition-all duration-300 leading-none mb-4">
                    {step.num}
                  </div>
                  <div className="w-12 h-1 bg-nlr-gold mb-6" />
                  <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32 bg-nlr-darker clip-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="display-heading text-5xl sm:text-7xl text-white mt-3">
                OUR<br /><span className="text-nlr-gold">SERVICES</span>
              </h2>
              <div className="gold-line mt-6" />
            </div>
            <Link to="/services" className="btn-outline text-xs py-3 px-6 flex items-center gap-2 whitespace-nowrap">
              Full Pricing
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 100}>
                <div className="bg-nlr-navy border border-white/5 p-8 h-full flex flex-col group hover:border-nlr-gold/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-nlr-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg tracking-wide uppercase mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{svc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-nlr-gold text-lg">{svc.price}</span>
                    <Link
                      to={svc.link}
                      className="text-white/40 hover:text-nlr-gold transition-colors flex items-center gap-1 text-xs font-heading tracking-widest uppercase"
                    >
                      Details <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BEST VALUE BANNER */}
      <section className="py-16 bg-nlr-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 50px)',
        }} />
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-4 py-1.5 mb-6">
            Best Value
          </span>
          <h2 className="display-heading text-5xl sm:text-7xl text-white mb-4">
            FULL RECRUITING PACKAGE
          </h2>
          <p className="text-white/70 text-lg mb-4">
            Highlight Tape + Film Breakdown + Recruiting Profile + Consulting — everything you need to get recruited.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-display text-6xl text-nlr-gold">$999</span>
            <div className="text-left">
              <div className="text-white/40 text-sm line-through">$1,300+</div>
              <div className="text-white/70 text-sm font-heading">Save $300+</div>
            </div>
          </div>
          <Link to="/contact" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
            Get the Package
            <ChevronRight size={16} />
          </Link>
        </AnimatedSection>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-nlr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">What Athletes Say</span>
            <h2 className="display-heading text-5xl sm:text-7xl text-white mt-3">
              REAL RESULTS,<br /><span className="text-nlr-gold">REAL ATHLETES</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 120}>
                <div className="bg-nlr-navy border border-white/5 p-8 h-full flex flex-col hover:border-nlr-gold/20 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-nlr-gold text-nlr-gold" />
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  {/* Attribution */}
                  <div className="border-t border-white/5 pt-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-nlr-green/30 border border-nlr-green/50 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-nlr-gold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-white text-sm tracking-wide">{t.name}</div>
                      <div className="text-white/40 text-xs font-heading tracking-widest uppercase mt-0.5">{t.sport}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-16 bg-nlr-darker border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={24} />, title: 'Professional Quality', sub: 'Coach-ready productions' },
              { icon: <Users size={24} />, title: 'All Ages Welcome', sub: 'Youth through transfer portal' },
              { icon: <TrendingUp size={24} />, title: 'Results Driven', sub: 'Athletes getting recruited' },
              { icon: <CheckCircle size={24} />, title: 'Fast Turnaround', sub: 'Quick delivery timelines' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="flex items-center gap-4">
                  <div className="text-nlr-gold flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm tracking-wide uppercase">{item.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-nlr-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/10 via-transparent to-nlr-gold/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" />
        <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-label">Take the Next Step</span>
          <h2 className="display-heading text-6xl sm:text-8xl text-white mt-4 mb-6">
            READY TO GO<br /><span className="text-nlr-gold">NEXT LEVEL?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Join athletes across Southern California who trusted NLR to take their recruiting to the next level. Your tape is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2 animate-pulse-glow">
              Book Your Session
              <ChevronRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline text-sm py-4 px-10">
              Learn Our Story
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
