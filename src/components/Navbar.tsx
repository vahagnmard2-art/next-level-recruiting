import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sports', path: '/sports' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      // Move focus into menu when opened
      requestAnimationFrame(() => firstMenuItemRef.current?.focus())
    } else {
      // Return focus to trigger button when closed
      menuButtonRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Trap focus inside mobile menu
  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key !== 'Tab') return
    const panel = menuPanelRef.current
    if (!panel) return
    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')
    ).filter(el => !el.closest('[aria-hidden="true"]'))
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-nlr-darker/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Next Level Recruiting — Home">
            <div className="w-10 h-10 bg-nlr-gold flex items-center justify-center flex-shrink-0" aria-hidden="true">
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
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-heading font-semibold text-sm tracking-widest uppercase transition-colors duration-200 text-white/80 hover:text-white aria-[current=page]:text-nlr-gold"
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:flex btn-gold text-xs py-2.5 px-6 items-center gap-2"
            >
              Book Now
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <button
              ref={menuButtonRef}
              onClick={() => setOpen(!open)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-nlr-gold transition-colors duration-200"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-nlr-darker/95 backdrop-blur-lg"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          id="mobile-menu"
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={handleMenuKeyDown}
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-nlr-navy border-l border-white/5 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="font-display text-nlr-gold text-xl tracking-widest" id="mobile-menu-title">
              MENU
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1 list-none m-0 p-0" role="list">
              {navLinks.map((link, i) => (
                <li key={link.path}>
                  <Link
                    ref={i === 0 ? firstMenuItemRef : undefined}
                    to={link.path}
                    className="flex items-center justify-between py-4 px-4 border-b border-white/5 font-heading font-bold text-lg tracking-widest uppercase transition-colors duration-200 text-white/80 hover:text-white hover:bg-white/5 aria-[current=page]:text-nlr-gold aria-[current=page]:bg-nlr-gold/5"
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-nlr-gold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
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
