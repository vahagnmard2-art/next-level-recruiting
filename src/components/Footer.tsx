import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, ChevronRight, Phone } from 'lucide-react'

const sports = ['Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball', 'Softball', 'Track & Field', 'Lacrosse', 'Wrestling', 'Tennis']

export default function Footer() {
  return (
    <footer className="bg-nlr-darker border-t border-white/5" aria-label="Site footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6" aria-label="Next Level Recruiting — Home">
              <div className="w-10 h-10 bg-nlr-gold flex items-center justify-center" aria-hidden="true">
                <span className="font-display text-nlr-darker text-sm tracking-wider">NLR</span>
              </div>
              <div>
                <div className="font-display text-white text-xl tracking-widest">NEXT LEVEL</div>
                <div className="font-heading font-semibold text-nlr-gold text-xs tracking-[0.35em] uppercase">Recruiting</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Southern California's premier athlete recruiting agency. Serving all sports, all ages, from youth to the transfer portal.
            </p>
            <div className="flex items-center gap-3" aria-label="Social media links">
              <a
                href="https://instagram.com/NLRAthletes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-nlr-gold hover:border-nlr-gold transition-all duration-200"
                aria-label="Follow NLR on Instagram"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:info@nextlevelrecruiting.com"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-nlr-gold hover:border-nlr-gold transition-all duration-200"
                aria-label="Email Next Level Recruiting"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-nlr-gold" aria-hidden="true" />
              Quick Links
            </h2>
            <ul className="space-y-3 list-none m-0 p-0" role="list">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services & Pricing', path: '/services' },
                { label: 'Sports We Cover', path: '/sports' },
                { label: 'About NLR', path: '/about' },
                { label: 'Book / Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/50 hover:text-nlr-gold text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sports */}
          <nav aria-label="Sports we cover">
            <h2 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-nlr-gold" aria-hidden="true" />
              Our Sports
            </h2>
            <ul className="space-y-3 list-none m-0 p-0" role="list">
              {sports.map((sport) => (
                <li key={sport}>
                  <Link
                    to="/sports"
                    className="flex items-center gap-2 text-white/50 hover:text-nlr-gold text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    {sport}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-nlr-gold" aria-hidden="true" />
              Contact Us
            </h2>
            <address className="not-italic">
            <ul className="space-y-4 list-none m-0 p-0" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-nlr-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/50 text-sm">
                  Southern California<br />
                  Serving AAU Gyms &amp; Travel Sports Facilities
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-nlr-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@nextlevelrecruiting.com"
                  className="text-white/50 hover:text-nlr-gold text-sm transition-colors"
                >
                  info@nextlevelrecruiting.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-nlr-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://instagram.com/NLRAthletes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-nlr-gold text-sm transition-colors"
                >
                  @NLRAthletes
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-nlr-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+18185217493"
                  className="text-white/50 hover:text-nlr-gold text-sm transition-colors"
                >
                  (818) 521-7493
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="btn-gold text-xs py-3 px-6 block text-center">
                Get Started Today
              </Link>
            </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Next Level Recruiting. All rights reserved. Southern California.
          </p>
          <p className="text-white/20 text-xs font-heading tracking-widest uppercase">
            Your Game. Your Future. Next Level.
          </p>
        </div>
      </div>
    </footer>
  )
}
