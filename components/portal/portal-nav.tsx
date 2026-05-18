'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Film, MessageSquare, User, LogOut, Menu, X } from 'lucide-react'
import { createClient } from '@/lib/supabase'

const navLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Tapes', href: '/tapes', icon: Film },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Profile', href: '/profile', icon: User },
]

interface Props { unreadCount?: number; athleteName?: string }

export default function PortalNav({ unreadCount = 0, athleteName }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    await createClient().auth.signOut()
    router.push('/')
    router.refresh()
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="bg-nlr-darker border-b border-white/5 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-nlr-gold flex items-center justify-center flex-shrink-0">
              <span className="font-display text-nlr-darker text-xs tracking-wider">NLR</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-white text-sm tracking-widest leading-none">NEXT LEVEL</div>
              <div className="font-heading font-semibold text-nlr-gold text-[10px] tracking-[0.35em] uppercase">Portal</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href}
                className={`relative flex items-center gap-2 px-4 py-2 text-xs font-heading font-bold tracking-widest uppercase transition-colors ${isActive(href) ? 'text-nlr-gold' : 'text-white/50 hover:text-white'}`}>
                <Icon size={15} />
                {label}
                {label === 'Messages' && unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-nlr-green text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
                {isActive(href) && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-nlr-gold" />}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {athleteName && (
              <span className="hidden lg:block text-white/40 text-xs font-heading tracking-wide">
                {athleteName}
              </span>
            )}
            <button onClick={handleSignOut} disabled={signingOut}
              className="hidden md:flex items-center gap-2 text-white/40 hover:text-red-400 text-xs font-heading font-bold tracking-widest uppercase transition-colors disabled:opacity-50">
              <LogOut size={14} />
              {signingOut ? 'Signing out...' : 'Sign Out'}
            </button>
            {/* Mobile menu toggle */}
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden text-white/60 hover:text-white p-1">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-nlr-darker">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 text-sm font-heading font-bold tracking-widest uppercase transition-colors ${isActive(href) ? 'text-nlr-gold bg-nlr-gold/5' : 'text-white/50 hover:text-white'}`}>
                <Icon size={16} />
                {label}
                {label === 'Messages' && unreadCount > 0 && (
                  <span className="ml-auto w-5 h-5 bg-nlr-green text-white text-xs flex items-center justify-center rounded-full font-bold">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </Link>
            ))}
            <button onClick={handleSignOut} disabled={signingOut}
              className="w-full flex items-center gap-3 px-3 py-3 text-sm font-heading font-bold tracking-widest uppercase text-white/40 hover:text-red-400 transition-colors">
              <LogOut size={16} />
              {signingOut ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
