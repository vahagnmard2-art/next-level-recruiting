import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Target, Heart, TrendingUp, Globe } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'

export const metadata: Metadata = {
  title: 'About NLR — Southern California Athlete Recruiting Agency',
  description: 'Meet Andrew Ayvazian, founder of Next Level Recruiting. Learn how NLR was built to give every Southern California athlete professional recruiting tools and college exposure across 10 sports.',
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
  { val: '2018', label: 'Coaching Since', sub: '' },
  { val: 'D1–JUCO', label: 'Programs Reached', sub: 'Coaches Contact NLR Nationally' },
]

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrew Ayvazian',
  jobTitle: 'Founder',
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

        {/* FOUNDER STORY */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="founder-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="relative overflow-hidden bg-gradient-to-b from-nlr-green/10 to-nlr-darker">
                    <Image
                      src="/andrew-ayvazian.png"
                      alt="Andrew Ayvazian, founder of Next Level Recruiting, standing with arms crossed wearing an Adidas polo"
                      width={750}
                      height={1000}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-nlr-gold pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-nlr-gold pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <p className="section-label">Meet the Founder</p>
                <h2 id="founder-heading" className="display-heading text-5xl sm:text-6xl text-white mt-3 mb-6">
                  ANDREW<br />AYVAZIAN
                </h2>
                <div className="gold-line mb-8" aria-hidden="true" />

                <div className="space-y-5 text-white/65 leading-relaxed text-sm sm:text-base">
                  <p>
                    Andrew Ayvazian&apos;s journey in basketball began where it means the most — giving back. In 2018, he returned to his roots as a youth coach, spending three seasons pouring into the same community that shaped him. It was there that he discovered his gift: not just teaching the game, but building the people who play it.
                  </p>
                  <p>
                    From those early seasons, Andrew brought his passion to tournament basketball, where he volunteered and became known for something coaches rarely prioritize — fundamentals. The footwork, the decision-making, the habits that separate good players from great ones.
                  </p>
                  <p>
                    Today, Andrew serves as a Head Freshman Coach at the high school level, where his philosophy is simple: a team is a family. Every player on the roster must trust each other — not just on the court, but beyond it.
                  </p>
                  <p>
                    Next Level Recruiting was born from everything Andrew witnessed along the way — talented athletes overlooked not because of ability, but because of access. He built NLR to close that gap. To give every young athlete — male or female, across 10 sports — the professional tools, the exposure, and the guidance that used to be reserved for the well-connected few.
                  </p>
                  <p>
                    When he&apos;s not on the court, you&apos;ll find him training and developing the next generation, studying the game he loves, or spending time with friends and family. Everything he does points back to one belief: every athlete deserves a shot.
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
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {numbers.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <div className="bg-nlr-navy p-10 text-center border border-transparent hover:border-nlr-gold/20 transition-all duration-300 group">
                    <dt className="font-display text-6xl sm:text-7xl text-gradient-gold leading-none mb-3">{stat.val}</dt>
                    <dd>
                      <span className="font-heading font-bold text-white text-sm tracking-widest uppercase block mb-1">{stat.label}</span>
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
                  <div className="card-glow p-8 flex gap-6 group">
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

        {/* FRANCHISE VISION */}
        <section className="py-24 bg-nlr-darker relative overflow-hidden" aria-labelledby="franchise-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label">The Big Picture</p>
            <h2 id="franchise-heading" className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
              BUILT TO<br /><span className="text-nlr-gold">GO NATIONAL</span>
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              NLR started in Southern California, but the vision is national. We&apos;re building the systems, the brand, and the playbook to bring NLR to every major market.
            </p>
            <p className="text-white/40 text-sm mb-10 font-heading tracking-widest uppercase">Franchise opportunities coming soon</p>
            <a href="mailto:info@nextlevelrecruiting.com?subject=Franchise%20Inquiry" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
              Inquire About Franchise <ChevronRight size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
