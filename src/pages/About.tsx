import { Link } from 'react-router-dom'
import { ChevronRight, Target, Heart, TrendingUp, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageSEO from '../components/PageSEO'

const values = [
  {
    icon: <Target size={24} />,
    title: 'Athlete-First',
    desc: "Every decision we make starts with one question: what's best for the athlete? We don't move until we have a strategy tailored to your sport, timeline, and goals.",
  },
  {
    icon: <Heart size={24} />,
    title: 'No Gatekeeping',
    desc: 'Premium recruiting tools used to be reserved for athletes with connections or big budgets. We exist to change that. Every athlete deserves a shot.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Results That Matter',
    desc: "Coaches respond to quality. We invest in production value, strategy, and execution because the tape you send is the first impression you'll never get back.",
  },
  {
    icon: <Globe size={24} />,
    title: 'Franchise Vision',
    desc: "SoCal is home. But the mission is national. We're building the playbook to bring NLR to gyms and facilities across the country.",
  },
]

const numbers = [
  { val: '10', label: 'Sports Covered', sub: 'Basketball to Tennis' },
  { val: 'ALL', label: 'Ages Welcome', sub: 'Youth through Transfer Portal' },
  { val: 'SoCal', label: 'Where It Started', sub: 'AAU Gyms & Travel Sports' },
  { val: '∞', label: 'Franchise Vision', sub: 'National Expansion Coming' },
]

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrew Ayvazian',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'SportsOrganization',
    name: 'Next Level Recruiting',
    url: 'https://next-level-recruiting-theta.vercel.app',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
}

export default function About() {
  return (
    <>
      <PageSEO
        title="About — Andrew Ayvazian, Founder"
        description="Meet Andrew Ayvazian, founder of Next Level Recruiting. Learn how NLR was built to give every Southern California athlete — regardless of background — professional recruiting tools and college exposure across 10 sports."
        canonical="/about"
        schema={founderSchema}
      />

      <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="section-label">Our Story</p>
              <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
                BUILT FOR<br /><span className="text-nlr-gold">EVERY ATHLETE</span>
              </h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Born in the gyms and fields of Southern California. Built to give every athlete — regardless of background — the professional edge they deserve.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FOUNDER STORY */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="founder-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Founder photo */}
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="relative overflow-hidden bg-gradient-to-b from-nlr-green/10 to-nlr-darker">
                    <img
                      src="/andrew-ayvazian.png"
                      alt="Andrew Ayvazian, founder of Next Level Recruiting, standing with arms crossed wearing an Adidas polo"
                      width={600}
                      height={750}
                      className="w-full h-auto object-cover object-top"
                      loading="eager"
                      decoding="async"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-nlr-gold pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-nlr-gold pointer-events-none" aria-hidden="true" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-nlr-gold p-5 text-nlr-darker" aria-hidden="true">
                    <div className="font-display text-2xl leading-none">NLR</div>
                    <div className="font-heading font-bold text-xs tracking-widest uppercase">Founder</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Story text */}
              <AnimatedSection direction="right">
                <p className="section-label">Meet the Founder</p>
                <h2 id="founder-heading" className="display-heading text-5xl sm:text-6xl text-white mt-3 mb-6">
                  ANDREW<br />AYVAZIAN
                </h2>
                <div className="gold-line mb-8" aria-hidden="true" />

                <div className="space-y-5 text-white/65 leading-relaxed text-sm sm:text-base">
                  <p>
                    Andrew Ayvazian grew up watching talented athletes in Southern California gyms never get their shot — not because they weren't good enough, but because nobody saw them. The right tape wasn't made. The right coach wasn't contacted. The right story was never told.
                  </p>
                  <p>
                    That observation became an obsession. Working inside AAU programs and travel sports facilities across SoCal, Andrew saw firsthand how the recruiting process was broken — gatekept by access, budget, and connections. He decided to fix it.
                  </p>
                  <p>
                    Next Level Recruiting was built to democratize the recruiting process. To bring the same tools that elite programs and well-connected families take for granted to every athlete who has the talent and the drive — regardless of where they come from.
                  </p>
                  <p>
                    From youth athletes just discovering their potential to college transfers navigating the portal, NLR is the agency Andrew wished existed when he first started seeing these stories unfold. This isn't just business. It's a mission.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="btn-gold text-sm py-3 px-8 flex items-center gap-2">
                    Work With Us
                    <ChevronRight size={14} aria-hidden="true" />
                  </Link>
                  <Link to="/services" className="btn-outline text-sm py-3 px-8">
                    Our Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-24 bg-nlr-green relative overflow-hidden" aria-labelledby="mission-heading">
          <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 60px)',
          }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <AnimatedSection>
              <p className="section-label text-white/70">Our Mission</p>
              <h2 id="mission-heading" className="display-heading text-4xl sm:text-6xl text-white mt-3 mb-8">
                THE STANDARD WE HOLD
              </h2>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-10" aria-hidden="true" />
              <blockquote className="text-white text-xl sm:text-2xl leading-relaxed font-body font-light italic max-w-3xl mx-auto">
                "To give every athlete — regardless of background — the professional recruiting tools and exposure they need to compete at the next level."
              </blockquote>
              <p className="mt-10 font-heading font-bold text-white/60 tracking-widest uppercase text-sm">
                — Next Level Recruiting Mission Statement
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* NLR BY THE NUMBERS */}
        <section className="py-24 lg:py-32 bg-nlr-darker" aria-labelledby="numbers-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">NLR By the Numbers</p>
              <h2 id="numbers-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                THE SCOPE<br /><span className="text-nlr-gold">OF OUR WORK</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {numbers.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <div className="bg-nlr-navy p-10 text-center border border-transparent hover:border-nlr-gold/20 transition-all duration-300 group">
                    <dt className="font-display text-6xl sm:text-7xl text-nlr-gold group-hover:text-nlr-gold-light transition-colors duration-300 leading-none mb-3">
                      {stat.val}
                    </dt>
                    <dd>
                      <span className="font-heading font-bold text-white text-sm tracking-widest uppercase block mb-1">
                        {stat.label}
                      </span>
                      <span className="text-white/30 text-xs font-body">{stat.sub}</span>
                    </dd>
                  </div>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">What We Stand For</p>
              <h2 id="values-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                OUR<br /><span className="text-nlr-gold">VALUES</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <AnimatedSection key={val.title} delay={i * 100}>
                  <div className="bg-nlr-navy border border-white/5 p-8 flex gap-6 group hover:border-nlr-gold/20 transition-all duration-300">
                    <div className="text-nlr-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {val.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">
                        {val.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FRANCHISE VISION */}
        <section className="py-24 bg-nlr-darker relative overflow-hidden" aria-labelledby="franchise-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label">The Big Picture</p>
            <h2 id="franchise-heading" className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
              BUILT TO<br /><span className="text-nlr-gold">GO NATIONAL</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              NLR started in Southern California, but the vision is national. We're building the systems, the brand, and the playbook to bring NLR to every major market — inside AAU facilities, travel sports programs, and high schools across the country.
            </p>
            <p className="text-white/40 text-sm mb-10 font-heading tracking-widest uppercase">
              Franchise opportunities coming soon
            </p>
            <Link to="/contact" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
              Join the Movement
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
