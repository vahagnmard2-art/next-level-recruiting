import { Link } from 'react-router-dom'
import { ChevronRight, Target, Heart, TrendingUp, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    icon: <Target size={24} />,
    title: 'Athlete-First',
    desc: 'Every decision we make starts with one question: what\'s best for the athlete? We don\'t move until we have a strategy tailored to your sport, timeline, and goals.',
  },
  {
    icon: <Heart size={24} />,
    title: 'No Gatekeeping',
    desc: 'Premium recruiting tools used to be reserved for athletes with connections or big budgets. We exist to change that. Every athlete deserves a shot.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Results That Matter',
    desc: 'Coaches respond to quality. We invest in production value, strategy, and execution because the tape you send is the first impression you\'ll never get back.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Franchise Vision',
    desc: 'SoCal is home. But the mission is national. We\'re building the playbook to bring NLR to gyms and facilities across the country.',
  },
]

const numbers = [
  { val: '10', label: 'Sports Covered', sub: 'Basketball to Tennis' },
  { val: 'ALL', label: 'Ages Welcome', sub: 'Youth through Transfer Portal' },
  { val: 'SoCal', label: 'Where It Started', sub: 'AAU Gyms & Travel Sports' },
  { val: '∞', label: 'Franchise Vision', sub: 'National Expansion Coming' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="section-label">Our Story</span>
            <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
              BUILT FOR<br /><span className="text-nlr-gold">EVERY ATHLETE</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Born in the gyms and fields of Southern California. Built to give every athlete — regardless of background — the professional edge they deserve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24 lg:py-32 bg-nlr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder visual */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] bg-nlr-navy border border-white/5 relative overflow-hidden">
                  {/* Placeholder for founder photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/20 to-nlr-darker flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-8xl text-nlr-gold/30 leading-none">AA</div>
                      <div className="font-heading text-white/20 text-sm tracking-widest uppercase mt-2">Founder Photo</div>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-nlr-gold" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-nlr-gold" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-nlr-gold p-6 text-nlr-darker">
                  <div className="font-display text-3xl leading-none">NLR</div>
                  <div className="font-heading font-bold text-xs tracking-widest uppercase">Founder</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story text */}
            <AnimatedSection direction="right">
              <span className="section-label">Meet the Founder</span>
              <h2 className="display-heading text-5xl sm:text-6xl text-white mt-3 mb-6">
                ANDREW<br />AYVAZIAN
              </h2>
              <div className="gold-line mb-8" />

              <div className="space-y-5 text-white/60 leading-relaxed">
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

              <div className="mt-8 flex items-center gap-4">
                <Link to="/contact" className="btn-gold text-sm py-3 px-8 flex items-center gap-2">
                  Work With Us
                  <ChevronRight size={14} />
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
      <section className="py-24 bg-nlr-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 60px)',
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <span className="section-label text-white/60">Our Mission</span>
            <h2 className="display-heading text-4xl sm:text-6xl text-white mt-3 mb-8">
              THE STANDARD WE HOLD
            </h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-10" />
            <blockquote className="text-white text-xl sm:text-2xl leading-relaxed font-body font-light italic max-w-3xl mx-auto">
              "To give every athlete — regardless of background — the professional recruiting tools and exposure they need to compete at the next level."
            </blockquote>
            <div className="mt-10 font-heading font-bold text-white/60 tracking-widest uppercase text-sm">
              — Next Level Recruiting Mission Statement
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NLR BY THE NUMBERS */}
      <section className="py-24 lg:py-32 bg-nlr-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">NLR By the Numbers</span>
            <h2 className="display-heading text-5xl sm:text-7xl text-white mt-3">
              THE SCOPE<br /><span className="text-nlr-gold">OF OUR WORK</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {numbers.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="bg-nlr-navy p-10 text-center border border-transparent hover:border-nlr-gold/20 transition-all duration-300 group">
                  <div className="font-display text-6xl sm:text-7xl text-nlr-gold group-hover:text-nlr-gold-light transition-colors duration-300 leading-none mb-3">
                    {stat.val}
                  </div>
                  <div className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/30 text-xs font-body">{stat.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32 bg-nlr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">What We Stand For</span>
            <h2 className="display-heading text-5xl sm:text-7xl text-white mt-3">
              OUR<br /><span className="text-nlr-gold">VALUES</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 100}>
                <div className="bg-nlr-navy border border-white/5 p-8 flex gap-6 group hover:border-nlr-gold/20 transition-all duration-300">
                  <div className="text-nlr-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3">
                      {val.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FRANCHISE VISION */}
      <section className="py-24 bg-nlr-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nlr-gold/5 blur-[150px]" />
        <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="section-label">The Big Picture</span>
          <h2 className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
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
            <ChevronRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
