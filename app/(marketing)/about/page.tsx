import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Target, Heart, TrendingUp, Globe } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'

export const metadata: Metadata = {
  title: 'About NLR — Southern California Athlete Recruiting Agency',
  description: 'About Next Level Recruiting — active coaches and NCAA certified recruiting specialists. NLR was built to give every Southern California athlete professional recruiting tools and college exposure across 10 sports.',
  alternates: { canonical: '/about' },
}

const values = [
  { icon: <Target size={24} />, title: 'Athlete-First', desc: "Every decision we make starts with one question: what's best for the athlete? We don't move until we have a strategy tailored to your sport, timeline, and goals." },
  { icon: <Heart size={24} />, title: 'No Gatekeeping', desc: 'Premium recruiting tools used to be reserved for athletes with connections or big budgets. We exist to change that. Every athlete deserves a shot.' },
  { icon: <TrendingUp size={24} />, title: 'Results That Matter', desc: "Coaches respond to quality. We invest in production value, strategy, and execution because the tape you send is the first impression you'll never get back." },
  { icon: <Globe size={24} />, title: 'Franchise Vision', desc: "SoCal is home. But the mission is national. We're building the playbook to bring NLR to gyms and facilities across the country." },
]

const numbers = [
  { val: '20+', label: 'Athletes Served', sub: 'Male & Female, All Sports' },
  { val: '10', label: 'Sports Covered', sub: 'Basketball to Tennis' },
  { val: '2018', label: 'Coaching Since', sub: 'Actively on the Sideline' },
  { val: 'D1–JUCO', label: 'Programs Reached', sub: 'Coaches Contact NLR Nationally' },
]

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'NLR Founder',
  jobTitle: 'Founder & Head Coach',
  worksFor: { '@type': 'SportsOrganization', name: 'Next Level Recruiting', url: 'https://nextlevelrecruiting.com' },
  address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />

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
              <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
                Born in the gyms and fields of Southern California. Built to give every athlete the professional edge they deserve.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="founder-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="section-label">Who We Are</p>
              <h2 id="founder-heading" className="display-heading text-5xl sm:text-6xl text-white mt-3 mb-6">
                THE NLR<br /><span className="text-nlr-gold">APPROACH</span>
              </h2>
              <div className="gold-line mb-8" aria-hidden="true" />

              <div className="space-y-5 text-white/65 leading-relaxed text-sm sm:text-base">
                <p>
                  NLR wasn&apos;t built by video editors who discovered recruiting. We are active coaches — on the sideline every season, in the gym every week, and in the film room when everyone else has gone home. We built NLR because we watched talented athletes go unseen not because of a lack of ability, but because of a lack of access.
                </p>
                <p>
                  NCAA certified and Gold License certified, we have spent years building relationships across the D1, D2, D3, and JUCO landscapes. College coaches reach out to NLR directly — not because of a marketing budget, but because the quality of the work speaks for itself. When a coach opens a tape from NLR, they know exactly what they&apos;re going to see.
                </p>
                <p>
                  What separates NLR from every other recruiting service is simple: the people building your tape have stood on the other side of the table. We have evaluated athletes, sat through hundreds of tapes from a coach&apos;s perspective, and know exactly what makes a coach stop scrolling and pick up the phone. That insight cannot be replicated by a freelance editor. It is built from years of being inside the game.
                </p>
                <p>
                  Every athlete NLR works with gets the same commitment: a tape that represents the best version of who they are on the field or court, a strategy that targets the right programs, and a partner who is invested in their outcome — not just their transaction.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-nlr-navy border border-nlr-gold/30 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-nlr-gold flex-shrink-0" aria-hidden="true" />
                  <span className="font-heading font-bold text-nlr-gold text-xs tracking-widest uppercase">Gold License Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-nlr-navy border border-nlr-gold/30 px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-nlr-gold flex-shrink-0" aria-hidden="true" />
                  <span className="font-heading font-bold text-nlr-gold text-xs tracking-widest uppercase">NCAA Certified</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-gold text-sm py-3 px-8 flex items-center gap-2">
                  Work With Us <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-outline text-sm py-3 px-8">Our Services</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-24 bg-nlr-green relative overflow-hidden" aria-labelledby="mission-heading">
          <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 60px)' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <AnimatedSection>
              <p className="section-label text-white/70">Our Mission</p>
              <h2 id="mission-heading" className="display-heading text-4xl sm:text-6xl text-white mt-3 mb-8">THE STANDARD WE HOLD</h2>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-10" aria-hidden="true" />
              <blockquote className="text-white text-xl sm:text-2xl leading-relaxed font-body font-light italic max-w-3xl mx-auto">
                &ldquo;To give every athlete the professional recruiting tools and exposure they need to compete at the next level.&rdquo;
              </blockquote>
              <p className="mt-10 font-heading font-bold text-white/60 tracking-widest uppercase text-sm">— Next Level Recruiting Mission Statement</p>
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
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 items-stretch">
              {numbers.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100} className="h-full">
                  <div className="card-glow p-10 text-center group h-full flex flex-col items-center justify-center">
                    <dt className="font-display text-6xl sm:text-7xl text-gradient-gold leading-none mb-3">{stat.val}</dt>
                    <dd>
                      <span className="font-heading font-bold text-white text-sm tracking-widest uppercase block mb-1">{stat.label}</span>
                      <span className="text-white/50 text-xs font-body">{stat.sub}</span>
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
                  <div className="card-glow p-8 flex gap-6 group h-full">
                    <div className="text-nlr-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{val.icon}</div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">{val.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
