'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, AlertCircle, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase'

export default function LoginForm() {
  const router = useRouter()
  const [mode, setMode] = useState<'password' | 'magic'>('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [magicSent, setMagicSent] = useState(false)

  const handlePassword = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError('Please enter your email and password.'); return }
    setLoading(true); setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) { setError(err.message); setLoading(false); return }
    router.push('/dashboard')
    router.refresh()
  }

  const handleMagic = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) { setError('Please enter your email address.'); return }
    setLoading(true); setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback?next=/dashboard` },
    })
    if (err) { setError(err.message); setLoading(false); return }
    setMagicSent(true)
    setLoading(false)
  }

  if (magicSent) {
    return (
      <div className="text-center space-y-4 py-4">
        <div className="w-14 h-14 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center mx-auto">
          <Mail size={24} className="text-nlr-green" />
        </div>
        <h2 className="font-heading font-bold text-white text-lg uppercase tracking-wide">Check Your Email</h2>
        <p className="text-white/60 text-sm">We sent a login link to <span className="text-white">{email}</span>. Click it to access your portal.</p>
        <button onClick={() => { setMagicSent(false); setMode('password') }} className="text-nlr-gold text-xs hover:underline">
          Back to sign in
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex border border-white/10 rounded-sm overflow-hidden">
        {(['password', 'magic'] as const).map((m) => (
          <button key={m} onClick={() => { setMode(m); setError('') }}
            className={`flex-1 py-2.5 text-xs font-heading font-bold tracking-widest uppercase transition-colors ${mode === m ? 'bg-nlr-gold text-nlr-darker' : 'text-white/40 hover:text-white'}`}>
            {m === 'password' ? 'Password' : 'Magic Link'}
          </button>
        ))}
      </div>

      {error && (
        <div className="flex items-center gap-2 bg-red-400/10 border border-red-400/30 px-4 py-3">
          <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-xs">{error}</p>
        </div>
      )}

      <form onSubmit={mode === 'password' ? handlePassword : handleMagic} className="space-y-4">
        <div>
          <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com" autoComplete="email" required
            className="w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-nlr-gold transition-colors" />
        </div>

        {mode === 'password' && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-heading font-bold text-white/60 text-xs tracking-widest uppercase">Password</label>
              <Link href="/forgot-password" className="text-nlr-gold text-xs hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••" autoComplete="current-password" required
                className="w-full bg-nlr-navy border border-white/10 px-4 py-3 pr-10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-nlr-gold transition-colors" />
              <button type="button" onClick={() => setShowPw(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        )}

        {mode === 'magic' && (
          <p className="text-white/40 text-xs">We&apos;ll email you a one-click sign-in link — no password needed.</p>
        )}

        <button type="submit" disabled={loading}
          className="btn-gold w-full py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? <><Loader2 size={16} className="animate-spin" /> Signing in...</> : mode === 'password' ? 'Sign In' : 'Send Magic Link'}
        </button>
      </form>

      <p className="text-white/40 text-sm text-center">
        New to NLR?{' '}
        <Link href="/signup" className="text-nlr-gold hover:underline">Create an account</Link>
      </p>
    </div>
  )
}
