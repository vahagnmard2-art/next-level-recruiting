import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sports', path: '/sports' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-nlr-darker/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-nlr-gold flex items-center justify-center flex-shrink-0">
              <span className="font-display text-nlr-darker text-sm tracking-wider">NLR</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-white text-xl tracking-widest group-hover:text-nlr-gold transition-colors duration-200">
                NEXT LEVEL
              </div>
              <div className="font-heading font-semibold text-nlr-gold text-xs tracking-[0.35em] uppercase -mt-0.5">
                Recruiting
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading font-semibold text-sm tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-nlr-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:flex btn-gold text-xs py-2.5 px-6 items-center gap-2"
            >
              Book Now
              <ChevronRight size={14} />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-nlr-gold transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-nlr-darker/95 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-nlr-navy border-l border-white/5 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="font-display text-nlr-gold text-xl tracking-widest">MENU</span>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between py-4 px-4 border-b border-white/5 font-heading font-bold text-lg tracking-widest uppercase transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-nlr-gold bg-nlr-gold/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
                <ChevronRight size={16} className="text-nlr-gold" />
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-white/5">
            <Link to="/contact" className="btn-gold w-full text-center block py-4">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
