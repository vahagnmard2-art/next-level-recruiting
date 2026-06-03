import type { Metadata } from 'next'
import Link from 'next/link'
import LoginForm from '@/components/portal/login-form'
import { Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Athlete Portal Login — Next Level Recruiting',
  robots: { index: false, follow: false },
}

const portalReady = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-nlr-darker flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-nlr-gold flex items-center justify-center">
              <span className="font-display text-nlr-darker text-sm tracking-wider">NLR</span>
            </div>
            <div className="text-left">
              <div className="font-display text-white text-lg tracking-widest leading-none">NEXT LEVEL</div>
              <div className="font-heading font-semibold text-nlr-gold text-[10px] tracking-[0.35em] uppercase">Recruiting</div>
            </div>
          </Link>
          <h1 className="font-heading font-bold text-white text-2xl uppercase tracking-wide">Athlete Portal</h1>
          <p className="text-white/40 text-sm mt-1">Track your tapes, message Andrew, manage your recruiting.</p>
        </div>

        <div className="bg-nlr-dark border border-white/5 p-8">
          {portalReady ? (
            <LoginForm />
          ) : (
            <div className="text-center space-y-5 py-4">
              <div className="w-14 h-14 border border-nlr-gold/30 bg-nlr-navy flex items-center justify-center mx-auto"
                style={{ boxShadow: '0 0 20px rgba(201,168,76,0.15)' }}>
                <Lock size={22} className="text-nlr-gold" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-2">Portal Launching Soon</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  The athlete portal is in final setup. Book your service and you&apos;ll receive access on day one.
                </p>
              </div>
              <Link href="/contact" className="btn-gold text-xs py-3 px-8 inline-block">
                Book Your Service
              </Link>
              <p className="text-white/25 text-xs">Already have an account? Contact Andrew directly.</p>
            </div>
          )}
        </div>

        <p className="text-center mt-6">
          <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">
            ← Back to NLR website
          </Link>
        </p>
      </div>
    </div>
  )
}
