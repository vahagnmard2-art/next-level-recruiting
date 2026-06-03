import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Play, Award, Users, Clock, CheckCircle, XCircle } from 'lucide-react'
import InstagramIcon from '@/components/marketing/instagram-icon'
import AnimatedSection from '@/components/marketing/animated-section'
import SportsTicker from '@/components/marketing/sports-ticker'
import StepsTimeline from '@/components/marketing/steps-timeline'

export const metadata: Metadata = {
  title: 'Athlete Recruiting Services — Highlight Tapes & College Consulting',
  description: 'Next Level Recruiting (NLR) — Southern California athlete recruiting agency founded by an active high school coach. Professional highlight tapes, film breakdowns, recruiting profiles, and college consulting across 10 sports.',
  alternates: { canonical: '/' },
}

const compareRows = [
  { feature: 'Who Builds Your Tape', nlr: 'Active head coach — NCAA Certified', other: 'Freelance video editors' },
  { feature: 'Tape Strategy', nlr: 'Position-specific, coach-calibrated', other: 'Generic highlight reel' },
  { feature: 'Turnaround', nlr: '5–7 days standard', other: '2–4 weeks average' },
  { feature: 'Consultation', nlr: 'Free 15-min call, every client', other: 'Self-serve online form' },
  { feature: 'Coach Network', nlr: 'D1–JUCO coaches contact NLR directly', other: 'Mass email distribution' },
  { feature: 'Pricing Model', nlr: 'Pay per project, no subscription', other: 'Monthly fees, locked contracts' },
  { feature: 'Revisions', nlr: 'Included, no surprise charges', other: 'Billed separately' },
  { feature: 'Sports Covered', nlr: '10 sports, every position', other: 'Limited or sport-specific' },
]

const steps = [
  { num: '01', title: 'Submit Your Footage', desc: 'Share your game film, practice clips, or combine footage. Raw phone recordings are fine — we handle the rest.' },
  { num: '02', title: 'We Produce', desc: 'Our coach edits, scores, and polishes your content to the standard that college coaches and scouts expect — because he is one.' },
  { num: '03', title: 'Your Tape Goes to Work', desc: 'Receive your polished tape in days. Every rep you have put in, translated into footage coaches actually watch.' },
]

const tapeDetails = [
  { label: 'First 10 seconds', val: 'Athlete name, number, school & position — no coach has to guess who you are' },
  { label: 'What keeps them watching', val: 'Best plays first — IQ, instincts, production quality above all else' },
  { label: 'What you receive', val: 'HD MP4 + shareable link, coach-ready, delivered in 5–7 days' },
]

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      name: 'Next Level Recruiting',
      alternateName: 'NLR',
      url: 'https://nextlevelrecruiting.com',
      description: 'Southern California athlete recruiting agency — highlight tapes, film breakdowns, recruiting profiles, and college consulting.',
      telephone: '+18185217493',
      email: 'info@nextlevelrecruiting.com',
      areaServed: 'Southern California',
      sameAs: ['https://instagram.com/NLRAthletes'],
      founder: { '@type': 'Person', name: 'NLR Founder' },
    },
  ],
}

const sampleTapeId = process.env.NEXT_PUBLIC_SAMPLE_TAPE_ID

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />

      <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
          <Image src="/images/hero-athlete.webp" alt="" fill priority className="object-cover object-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-nlr-darker/55" aria-hidden="true" />
          <div className="absolute inset-0 bg-hero-gradient opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-nlr-gold" aria-hidden="true" />
              <p className="section-label text-xs">Southern California Athlete Recruiting</p>
              <span className="w-8 h-px bg-nlr-gold" aria-hidden="true" />
            </div>

            <h1 id="hero-heading" className="display-heading text-6xl sm:text-8xl lg:text-[120px] leading-none text-white mb-6">
              YOUR GAME.<br />
              <span className="text-gradient-gold">YOUR FUTURE.</span><br />
              NEXT LEVEL.
            </h1>

            <p className="font-body text-white/65 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Built by an active high school coach who knows exactly what college coaches watch — and what they skip. Your tape, built by someone who lives this game daily.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/contact" className="btn-gold text-sm py-4 px-10 flex items-center gap-2 animate-pulse-glow-once">
                Get Your Tape Done <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-outline text-sm py-4 px-10 flex items-center gap-2">
                <Play size={14} className="fill-nlr-gold" aria-hidden="true" />
                View Services
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
            <span className="font-heading text-white/30 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-nlr-gold/60 to-transparent" />
          </div>
        </section>

        <SportsTicker />

        {/* HOW IT WORKS */}
        <section className="py-24 lg:py-32 bg-nlr-dark relative" aria-labelledby="process-heading">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">The Process</p>
              <h2 id="process-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                THREE STEPS TO<br /><span className="text-nlr-gold">THE NEXT LEVEL</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>

            <StepsTimeline steps={steps} />
          </div>
        </section>

        {/* HOW WE COMPARE */}
        <section className="py-24 lg:py-32 bg-nlr-darker" aria-labelledby="compare-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label">The Difference</p>
              <h2 id="compare-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                HOW WE<br /><span className="text-nlr-gold">STACK UP</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
              <p className="text-white/50 text-base mt-6 max-w-xl mx-auto">
                Most recruiting platforms sell you a video. NLR gives you a strategy built by someone inside the process.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[580px]">
                  <div className="grid grid-cols-[2fr_3fr_3fr] gap-px bg-white/5 mb-px">
                    <div className="bg-nlr-darker p-5" />
                    <div className="p-5 text-center border-b-2 border-nlr-gold bg-gradient-to-br from-nlr-green to-nlr-green-dark"
                      style={{ boxShadow: '0 0 20px rgba(201,168,76,0.2)' }}>
                      <p className="font-display text-white text-2xl tracking-widest leading-none">NLR</p>
                      <p className="text-white/80 text-xs font-heading tracking-widest uppercase mt-1">Next Level Recruiting</p>
                    </div>
                    <div className="bg-nlr-navy p-5 text-center">
                      <p className="font-heading font-bold text-white/40 text-sm tracking-widest uppercase">Other Platforms</p>
                      <p className="text-white/25 text-xs font-body mt-1">NCSA · Generic services</p>
                    </div>
                  </div>
                  {compareRows.map((row, i) => (
                    <div key={row.feature} className="grid grid-cols-[2fr_3fr_3fr] gap-px bg-white/5">
                      <div className={`p-4 sm:p-5 flex items-center ${i % 2 === 0 ? 'bg-nlr-darker' : 'bg-nlr-dark'}`}>
                        <span className="font-heading font-bold text-white/55 text-xs sm:text-sm tracking-wide uppercase leading-snug">{row.feature}</span>
                      </div>
                      <div className={`p-4 sm:p-5 flex items-start gap-2 sm:gap-3 border-l border-nlr-gold/20 ${i % 2 === 0 ? 'bg-nlr-green/10' : 'bg-nlr-green/[0.06]'}`}>
                        <CheckCircle size={14} className="text-nlr-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-white text-xs sm:text-sm font-body leading-snug">{row.nlr}</span>
                      </div>
                      <div className={`p-4 sm:p-5 flex items-start gap-2 sm:gap-3 ${i % 2 === 0 ? 'bg-nlr-navy' : 'bg-nlr-dark'}`}>
                        <XCircle size={14} className="text-white/40 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-white/55 text-xs sm:text-sm font-body leading-snug">{row.other}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2">
                  Book Free Consultation <ChevronRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-outline text-sm py-4 px-10">View Pricing</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SEE THE WORK */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="sample-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <p className="section-label">Sample Work</p>
              <h2 id="sample-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
                SEE THE<br /><span className="text-nlr-gold">WORK</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
              <p className="text-white/50 text-base mt-6 max-w-xl mx-auto">
                This is what a coach receives. No raw footage. No jump cuts every two seconds. A finished, coach-ready tape.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              {sampleTapeId ? (
                <div className="relative w-full aspect-video border border-white/10">
                  <iframe className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${sampleTapeId}?rel=0&modestbranding=1`}
                    title="NLR Sample Highlight Tape"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>
              ) : (
                <div className="relative border border-nlr-gold/20 overflow-hidden"
                  style={{ boxShadow: '0 0 40px rgba(201,168,76,0.08)' }}>
                  <div className="absolute inset-0 bg-nlr-navy" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 to-nlr-gold/5" aria-hidden="true" />
                  <div className="relative flex flex-col md:flex-row items-center gap-10 px-8 sm:px-14 py-14">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-24 h-24 border-2 border-nlr-gold/40 flex items-center justify-center mx-auto mb-4"
                        style={{ boxShadow: '0 0 25px rgba(201,168,76,0.2)' }}>
                        <Play size={36} className="text-nlr-gold ml-1" aria-hidden="true" />
                      </div>
                      <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer"
                        className="btn-gold text-xs py-3 px-6 inline-flex items-center gap-2">
                        <InstagramIcon size={13} />
                        View Real Work
                      </a>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-2xl tracking-wide uppercase mb-3">Real Tapes. Real Athletes.</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">
                        Every tape NLR delivers is built to the standard that stops a college coach mid-scroll.
                        Follow <a href="https://instagram.com/NLRAthletes" target="_blank" rel="noopener noreferrer" className="text-nlr-gold hover:underline">@NLRAthletes</a> to see current work, athlete highlights, and recruiting wins from NLR athletes.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['Position-calibrated edits', 'Coach-ready in 5–7 days', 'HD MP4 + shareable link'].map(t => (
                          <span key={t} className="border border-nlr-gold/30 text-nlr-gold text-xs font-heading tracking-widest uppercase px-3 py-1.5">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection>
              <dl className="mt-px grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
                {tapeDetails.map((item) => (
                  <div key={item.label} className="bg-nlr-navy px-6 py-5">
                    <dt className="text-nlr-gold text-xs font-heading tracking-widest uppercase mb-2">{item.label}</dt>
                    <dd className="text-white/70 text-sm font-body leading-snug">{item.val}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="section-label">What Athletes & Parents Say</p>
              <h2 id="testimonials-heading" className="display-heading text-4xl sm:text-6xl text-white mt-3">
                REAL RESULTS.<br /><span className="text-nlr-gold">REAL ATHLETES.</span>
              </h2>
              <div className="gold-line mx-auto mt-6" aria-hidden="true" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "NLR built my son's tape in 5 days. The coach from Cal State called us the following week. The quality is on another level compared to what we had before.",
                  name: 'Marcus T.',
                  detail: 'Parent — Basketball, Glendale CA',
                },
                {
                  quote: "I was stuck in the portal going nowhere. NLR put together my breakdown tape and two programs reached out within two weeks. They know exactly what coaches look for.",
                  name: 'Jordan R.',
                  detail: 'Transfer Portal — Football',
                },
                {
                  quote: "Worth every dollar. The recruiting profile site alone got me three direct messages from college coaches. NLR builds these things like they're selling the athlete themselves.",
                  name: 'Aaliyah M.',
                  detail: 'Athlete — Volleyball, SoCal AAU',
                },
              ].map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 100}>
                  <figure className="card-glow p-8 h-full flex flex-col">
                    <div className="text-nlr-gold text-4xl font-display leading-none mb-4 opacity-60">&ldquo;</div>
                    <blockquote className="text-white/75 text-sm leading-relaxed flex-1 mb-6 italic">{t.quote}</blockquote>
                    <figcaption>
                      <p className="font-heading font-bold text-white text-sm uppercase tracking-wide">{t.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">{t.detail}</p>
                    </figcaption>
                  </figure>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST INDICATORS */}
        <section className="py-16 bg-nlr-darker border-y border-white/5" aria-label="Why choose NLR">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 list-none m-0 p-0" role="list">
              {[
                { icon: <Award size={24} aria-hidden="true" />, title: 'Coach-Built', sub: 'NCAA Certified founder who coaches daily' },
                { icon: <Users size={24} aria-hidden="true" />, title: 'All Ages Welcome', sub: 'Youth, HS, AAU, transfer portal' },
                { icon: <Clock size={24} aria-hidden="true" />, title: '5–7 Day Delivery', sub: 'Rush turnaround available' },
                { icon: <CheckCircle size={24} aria-hidden="true" />, title: 'Coaches Contact NLR', sub: 'Programs from D1 to JUCO reach out nationally' },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 100}>
                  <li className="flex items-center gap-4">
                    <div className="text-nlr-gold flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm tracking-wide uppercase">{item.title}</p>
                      <p className="text-white/60 text-xs mt-0.5">{item.sub}</p>
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
          <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label">Take the Next Step</p>
            <h2 id="cta-heading" className="display-heading text-6xl sm:text-8xl text-white mt-4 mb-6">
              READY TO GO<br /><span className="text-nlr-gold">NEXT LEVEL?</span>
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Book a free 15-minute consultation. No commitment, no pressure — just a straight conversation about your athlete&apos;s situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2 animate-pulse-glow-once">
                Book Free Consultation <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn-outline text-sm py-4 px-10">Meet the Founder</Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
