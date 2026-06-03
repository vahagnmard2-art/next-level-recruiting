import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Globe, Users, Zap, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'
import CareersForm from '@/components/marketing/careers-form'

export const metadata: Metadata = {
  title: 'Careers & Franchise Opportunities — Join the NLR Team',
  description: 'Join Next Level Recruiting as a video editor, recruiting consultant, or franchise partner. NLR is building a national athlete recruiting agency — starting in Southern California.',
  alternates: { canonical: '/careers' },
}

const roles = [
  {
    icon: <Zap size={24} />,
    title: 'Video Editor — Highlight Tapes',
    type: 'Freelance / Contract',
    location: 'Remote (SoCal preferred)',
    desc: 'Edit athlete highlight reels for college recruiting. Must understand basketball and the recruiting process. Proficiency in Premiere Pro or DaVinci Resolve required.',
    requirements: [
      'Portfolio of sports highlight or broadcast edits',
      'Turnaround speed: 5–7 days standard, 48-hr rush capability',
      'Available for consistent weekly volume',
      'Knowledge of basketball positions and recruiting tape standards',
    ],
  },
  {
    icon: <Users size={24} />,
    title: 'Recruiting Consultant',
    type: 'Part-Time / Commission',
    location: 'SoCal (Los Angeles, Inland Empire)',
    desc: 'Work with athletes and families to build their recruiting strategy. Ideal for current or former coaches, scouts, or college athletes who understand the recruiting process from the inside.',
    requirements: [
      'Coaching, scouting, or college athletics background',
      'Comfortable with 1-on-1 family consultations',
      'Network within SoCal AAU or high school sports',
      "Ability to assess athletes' realistic college level",
    ],
  },
  {
    icon: <Globe size={24} />,
    title: 'Franchise Partner',
    type: 'Business Ownership',
    location: 'Any Major Market (Nationwide)',
    desc: "NLR is building toward a national franchise model. If you're in a major sports market and want to bring the NLR model to your city — run your own athlete recruiting agency under the NLR brand.",
    requirements: [
      'Passion for youth and college athletics',
      'Existing network in local sports (AAU, travel, HS coaches)',
      'Business acumen and self-direction',
      'Capital to launch a local operation',
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden" aria-labelledby="careers-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nlr-green/[0.08] blur-[150px]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="section-label">Join the Mission</p>
            <h1 id="careers-hero-heading" className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
              BUILD WITH<br /><span className="text-nlr-gold">NLR</span>
            </h1>
            <div className="gold-line mb-6" aria-hidden="true" />
            <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
              NLR is growing. We&apos;re looking for people who love the game, care about athletes, and want to be part of building something national — starting from SoCal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-nlr-dark" aria-labelledby="roles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">Current Openings</p>
            <h2 id="roles-heading" className="display-heading text-5xl sm:text-7xl text-white mt-3">
              OPEN<br /><span className="text-nlr-gold">ROLES</span>
            </h2>
            <div className="gold-line mx-auto mt-6" aria-hidden="true" />
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <AnimatedSection key={role.title} delay={i * 100}>
                <div className="card-glow p-8 h-full flex flex-col">
                  <div className="text-nlr-gold mb-5" aria-hidden="true">{role.icon}</div>
                  <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-2 leading-snug">{role.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="border border-nlr-gold/30 text-nlr-gold font-heading font-bold text-xs tracking-widest uppercase px-2 py-0.5">{role.type}</span>
                    <span className="flex items-center gap-1 text-white/30 text-xs font-body">
                      <MapPin size={10} aria-hidden="true" />{role.location}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{role.desc}</p>
                  <ul className="space-y-2 list-none m-0 p-0">
                    {role.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-nlr-gold mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-white/40 text-xs leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-nlr-green relative overflow-hidden" aria-labelledby="franchise-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 60px)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 id="franchise-heading" className="display-heading text-4xl sm:text-6xl text-white mb-4">BRING NLR TO YOUR CITY</h2>
            <p className="text-white/70 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              We&apos;re building the playbook to take NLR national — inside AAU gyms, high schools, and travel sports programs in every major market.
            </p>
            <p className="text-white/50 text-sm font-heading tracking-widest uppercase mb-8">Franchise opportunities · Coming 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-nlr-darker" aria-labelledby="apply-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label">Get in Touch</p>
            <h2 id="apply-heading" className="display-heading text-5xl sm:text-6xl text-white mt-3 mb-4">
              APPLY OR<br /><span className="text-nlr-gold">INQUIRE</span>
            </h2>
            <div className="gold-line mx-auto mt-6 mb-8" aria-hidden="true" />
            <p className="text-white/50 text-sm leading-relaxed">
              Andrew reviews every application personally. Whether you&apos;re interested in a specific role or just want to start a conversation — reach out.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="card-glow p-8 sm:p-12">
              <CareersForm />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-8 text-center">
              <p className="text-white/30 text-xs font-body">
                Prefer email?{' '}
                <a href="mailto:info@nextlevelrecruiting.com" className="text-nlr-gold hover:text-nlr-gold-light transition-colors">
                  info@nextlevelrecruiting.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-nlr-dark relative overflow-hidden" aria-labelledby="careers-cta-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" aria-hidden="true" />
        <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label">Not Hiring? Still Talk to Us.</p>
          <h2 id="careers-cta-heading" className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
            ATHLETE?<br /><span className="text-nlr-gold">BOOK NOW</span>
          </h2>
          <p className="text-white/75 text-lg mb-10">
            If you&apos;re an athlete looking for recruiting help — not a job — head to the contact page and book your free consultation.
          </p>
          <Link href="/contact" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
            Book Free Consultation <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
