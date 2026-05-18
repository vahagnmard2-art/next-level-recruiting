import type { Metadata } from 'next'
import Link from 'next/link'
import SignupForm from '@/components/portal/signup-form'

export const metadata: Metadata = {
  title: 'Create Athlete Account — Next Level Recruiting',
  robots: { index: false, follow: false },
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-nlr-darker flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
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
          <h1 className="font-heading font-bold text-white text-2xl uppercase tracking-wide">Create Your Account</h1>
          <p className="text-white/40 text-sm mt-1">Track your tapes, message Andrew, and manage your recruiting journey.</p>
        </div>

        <div className="bg-nlr-dark border border-white/5 p-8">
          <SignupForm />
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
