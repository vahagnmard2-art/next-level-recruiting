'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, CheckCircle, AlertCircle, Loader2, ChevronDown } from 'lucide-react'
import { createClient } from '@/lib/supabase'

const sports = ['Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball', 'Softball', 'Track & Field', 'Golf', 'Tennis', 'Other']
const grades = ['6th Grade', '7th Grade', '8th Grade', '9th Grade (Freshman)', '10th Grade (Sophomore)', '11th Grade (Junior)', '12th Grade (Senior)', 'College Freshman', 'College Sophomore', 'College Junior', 'College Senior', 'Transfer Portal']

interface Fields { fullName: string; email: string; password: string; confirm: string; sport: string; grade: string; school: string }
const INIT: Fields = { fullName: '', email: '', password: '', confirm: '', sport: '', grade: '', school: '' }

export default function SignupForm() {
  const [form, setForm] = useState<Fields>(INIT)
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const validate = () => {
    if (!form.fullName.trim()) return 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Valid email is required.'
    if (form.password.length < 8) return 'Password must be at least 8 characters.'
    if (form.password !== form.confirm) return 'Passwords do not match.'
    if (!form.sport) return 'Please select your sport.'
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setLoading(true); setError('')
    const supabase = createClient()

    const { data, error: signUpErr } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback?next=/dashboard`,
        data: { full_name: form.fullName },
      },
    })

    if (signUpErr) { setError(signUpErr.message); setLoading(false); return }

    if (data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        email: form.email,
        full_name: form.fullName,
        sport: form.sport || null,
        grad_year: null,
        school: form.school || null,
        role: 'athlete',
      })
    }

    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="text-center space-y-4 py-4">
        <div className="w-14 h-14 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center mx-auto">
          <CheckCircle size={24} className="text-nlr-green" />
        </div>
        <h2 className="font-heading font-bold text-white text-lg uppercase tracking-wide">Check Your Email</h2>
        <p className="text-white/60 text-sm">We sent a confirmation link to <span className="text-white">{form.email}</span>. Click it to activate your account.</p>
        <Link href="/login" className="inline-block text-nlr-gold text-xs hover:underline">Back to sign in</Link>
      </div>
    )
  }

  const inputCls = 'w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-nlr-gold transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <div className="flex items-center gap-2 bg-red-400/10 border border-red-400/30 px-4 py-3">
          <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-xs">{error}</p>
        </div>
      )}

      <div>
        <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Full Name <span className="text-nlr-gold">*</span></label>
        <input type="text" value={form.fullName} onChange={set('fullName')} placeholder="First & Last Name" autoComplete="name" className={inputCls} />
      </div>

      <div>
        <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Email <span className="text-nlr-gold">*</span></label>
        <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" autoComplete="email" className={inputCls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Password <span className="text-nlr-gold">*</span></label>
          <div className="relative">
            <input type={showPw ? 'text' : 'password'} value={form.password} onChange={set('password')}
              placeholder="Min 8 characters" autoComplete="new-password"
              className={`${inputCls} pr-10`} />
            <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <div>
          <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Confirm Password <span className="text-nlr-gold">*</span></label>
          <input type={showPw ? 'text' : 'password'} value={form.confirm} onChange={set('confirm')}
            placeholder="Re-enter password" autoComplete="new-password" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Sport <span className="text-nlr-gold">*</span></label>
          <div className="relative">
            <select value={form.sport} onChange={set('sport')}
              className={`${inputCls} pr-10 appearance-none cursor-pointer ${form.sport ? 'text-white' : 'text-white/40'}`}>
              <option value="" disabled>Select sport</option>
              {sports.map(s => <option key={s} value={s} className="bg-nlr-navy text-white">{s}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">Grade / Year</label>
          <div className="relative">
            <select value={form.grade} onChange={set('grade')}
              className={`${inputCls} pr-10 appearance-none cursor-pointer ${form.grade ? 'text-white' : 'text-white/40'}`}>
              <option value="" disabled>Select grade</option>
              {grades.map(g => <option key={g} value={g} className="bg-nlr-navy text-white">{g}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label className="block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2">School / Team <span className="text-white/30 normal-case font-normal tracking-normal">(optional)</span></label>
        <input type="text" value={form.school} onChange={set('school')} placeholder="e.g. Glendale High School" className={inputCls} />
      </div>

      <button type="submit" disabled={loading}
        className="btn-gold w-full py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Creating account...</> : 'Create Account'}
      </button>

      <p className="text-white/40 text-xs text-center">
        Already have an account?{' '}
        <Link href="/login" className="text-nlr-gold hover:underline">Sign in</Link>
      </p>
    </form>
  )
}
