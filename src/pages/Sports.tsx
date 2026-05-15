import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PageSEO from '../components/PageSEO'

const sports = [
  {
    emoji: '🏀',
    name: 'Basketball',
    badge: 'Primary Sport',
    desc: 'Our flagship sport. We\'ve produced tapes for guards, forwards, and bigs across AAU, high school, and the transfer portal. From dribble-drive guards to rim-protecting bigs — we know what D1 coaches want to see.',
    focuses: ['Guard package — handles, pull-up, court vision', 'Forward package — versatility, switchability', 'Big man package — rim protection, post moves', 'Transfer portal reels'],
  },
  {
    emoji: '⚾',
    name: 'Baseball',
    badge: null,
    desc: 'Pitching mechanics, hitting clips, fielding sequences — we produce baseball recruiting content that speaks the language scouts and coaches use.',
    focuses: ['Pitcher velocity reels', 'Hitter mechanics & power clips', 'Fielding & range video', 'Catching game management'],
  },
  {
    emoji: '🏈',
    name: 'Football',
    badge: null,
    desc: 'Position-specific highlight packages for every skill position. We cut reels that show athleticism, decision-making, and production.',
    focuses: ['QB arm talent & decision-making', 'Skill position explosive plays', 'O-Line & D-Line technique', 'Special teams excellence'],
  },
  {
    emoji: '⚽',
    name: 'Soccer',
    badge: null,
    desc: 'Technical skill, positional awareness, and goal highlights formatted for club and college scouts who watch hundreds of tapes per year.',
    focuses: ['Technical skill sequences', 'Positional play clips', 'Goal & assist highlights', 'Defensive pressure clips'],
  },
  {
    emoji: '🏐',
    name: 'Volleyball',
    badge: null,
    desc: 'Attack efficiency, blocking presence, serve, and passing ratings — we produce volleyball recruiting content that showcases your complete game.',
    focuses: ['Hitting efficiency clips', 'Serve & receive sequences', 'Blocking & defense highlights', 'Setter decision packages'],
  },
  {
    emoji: '🥎',
    name: 'Softball',
    badge: null,
    desc: 'Pitching velocity and movement, hitting power, and defensive range — everything a college softball coach needs to see in under five minutes.',
    focuses: ['Pitching spin & velocity reels', 'Offensive production clips', 'Defensive range videos', 'Catching frame sequences'],
  },
  {
    emoji: '🏃',
    name: 'Track & Field',
    badge: null,
    desc: 'Event-specific clips, PR documentation, and technique sequences that position you against national recruiting standards.',
    focuses: ['Sprint & relay clips', 'Field event technique videos', 'PR time documentation', 'Cross country race highlights'],
  },
  {
    emoji: '🥍',
    name: 'Lacrosse',
    badge: null,
    desc: 'Attack, midfield, defense, and goalie — we understand the positions and produce lacrosse content that travels well from SoCal to East Coast programs.',
    focuses: ['Attack shot selection clips', 'Midfield transition sequences', 'Defensive footwork & checks', 'Goalie reaction packages'],
  },
  {
    emoji: '🤼',
    name: 'Wrestling',
    badge: null,
    desc: 'Technical wrestling proficiency, takedown percentage, and pin sequences — formatted for coaches evaluating your mat IQ and physicality.',
    focuses: ['Takedown efficiency clips', 'Cradle & pin sequences', 'Neutral position footwork', 'Match highlight packages'],
  },
  {
    emoji: '🎾',
    name: 'Tennis',
    badge: null,
    desc: 'Serve velocity, stroke technique, match highlights, and USTA/UTR documentation to help position you with ITA-level college programs.',
    focuses: ['Serve & volley sequences', 'Groundstroke technique video', 'Match highlight reels', 'UTR documentation support'],
  },
]

export default function Sports() {
  return (
    <>
      <PageSEO
        title="Sports We Cover — Basketball, Baseball, Football & 7 More"
        description="Next Level Recruiting covers 10 sports in Southern California: Basketball, Baseball, Football, Soccer, Volleyball, Softball, Track & Field, Lacrosse, Wrestling, and Tennis. All ages, all positions."
        canonical="/sports"
      />
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nlr-green/8 blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="section-label">10 Sports. All Ages.</p>
            <h1 className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
              YOUR SPORT.<br /><span className="text-nlr-gold">OUR EXPERTISE.</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              From AAU basketball to D1 tennis, NLR produces recruiting content that coaches actually watch — tailored to every sport, every position.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="py-24 lg:py-32 bg-nlr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sports.map((sport, i) => (
              <AnimatedSection key={sport.name} delay={i * 60}>
                <div className="bg-nlr-navy border border-white/5 p-8 group hover:border-nlr-gold/25 transition-all duration-300 hover:-translate-y-0.5 h-full">
                  <div className="flex items-start gap-5">
                    {/* Emoji icon */}
                    <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 leading-none mt-1">
                      {sport.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-heading font-bold text-white text-2xl tracking-wide uppercase">
                          {sport.name}
                        </h2>
                        {sport.badge && (
                          <span className="bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-3 py-0.5">
                            {sport.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">{sport.desc}</p>

                      {/* Focus areas */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {sport.focuses.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-nlr-gold mt-2 flex-shrink-0" />
                            <span className="text-white/40 text-xs leading-relaxed">{f}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-nlr-gold hover:text-nlr-gold-light font-heading font-bold text-xs tracking-widest uppercase transition-colors duration-200 group/link"
                      >
                        Book {sport.name} Package
                        <ChevronRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DON'T SEE YOUR SPORT */}
      <section className="py-16 bg-nlr-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="display-heading text-4xl sm:text-6xl text-white mb-4">
              DON'T SEE YOUR SPORT?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always expanding. If your sport isn't listed, reach out — we'll work with you. NLR is built to support every athlete on the path to the next level.
            </p>
            <Link to="/contact" className="btn-gold text-sm py-4 px-10 inline-flex items-center gap-2">
              Contact Us
              <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-nlr-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" />
        <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label">Ready to Start?</p>
          <h2 className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
            LET'S BUILD<br /><span className="text-nlr-gold">YOUR TAPE</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Choose your sport, pick your service, and let NLR do the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2">
              Book Now
              <ChevronRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline text-sm py-4 px-10">
              View Pricing
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
    </>
  )
}
