'use client'

import { useState, type FormEvent } from 'react'
import { ChevronDown, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import type { Tables } from '@/types'

const sports = ['Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball', 'Softball', 'Track & Field', 'Lacrosse', 'Wrestling', 'Tennis', 'Other']
const currentYear = new Date().getFullYear()
const gradYears = Array.from({ length: 8 }, (_, i) => currentYear + i)

interface Props { profile: Tables<'profiles'> }

export default function ProfileForm({ profile }: Props) {
  const [form, setForm] = useState({
    full_name: profile.full_name ?? '',
    phone: profile.phone ?? '',
    sport: profile.sport ?? '',
    school: profile.school ?? '',
    grad_year: profile.grad_year ? String(profile.grad_year) : '',
    gpa: profile.gpa ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSave = async (e: FormEvent) => {
    e.preventDefault()
    setSaving(true); setError(''); setSaved(false)
    const supabase = createClient()
    const { error: err } = await supabase.from('profiles').update({
      full_name: form.full_name || null,
      phone: form.phone || null,
      sport: form.sport || null,
      school: form.school || null,
      grad_year: form.grad_year ? parseInt(form.grad_year) : null,
      gpa: form.gpa || null,
      updated_at: new Date().toISOString(),
    }).eq('id', profile.id)

    if (err) { setError(err.message); setSaving(false); return }
    setSaved(true)
    setSaving(false)
    setTimeout(() => setSaved(false), 3000)
  }

  const inputCls = 'w-full bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-nlr-gold transition-colors'
  const labelCls = 'block font-heading font-bold text-white/60 text-xs tracking-widest uppercase mb-2'

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {error && (
        <div className="flex items-center gap-2 bg-red-400/10 border border-red-400/30 px-4 py-3">
          <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-xs">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Full Name</label>
          <input type="text" value={form.full_name} onChange={set('full_name')} placeholder="First & Last Name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(818) 000-0000" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Sport</label>
          <div className="relative">
            <select value={form.sport} onChange={set('sport')}
              className={`${inputCls} pr-10 appearance-none cursor-pointer ${form.sport ? 'text-white' : 'text-white/40'}`}>
              <option value="">Select sport</option>
              {sports.map(s => <option key={s} value={s} className="bg-nlr-navy">{s}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className={labelCls}>Graduation Year</label>
          <div className="relative">
            <select value={form.grad_year} onChange={set('grad_year')}
              className={`${inputCls} pr-10 appearance-none cursor-pointer ${form.grad_year ? 'text-white' : 'text-white/40'}`}>
              <option value="">Select year</option>
              {gradYears.map(y => <option key={y} value={y} className="bg-nlr-navy">{y}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>School / Team</label>
          <input type="text" value={form.school} onChange={set('school')} placeholder="e.g. Glendale High School" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>GPA</label>
          <input type="text" value={form.gpa} onChange={set('gpa')} placeholder="e.g. 3.7" className={inputCls} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={saving}
          className="btn-gold px-8 py-3 text-sm flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
          {saving ? <><Loader2 size={15} className="animate-spin" /> Saving...</> : 'Save Changes'}
        </button>
        {saved && (
          <div className="flex items-center gap-2 text-nlr-green text-sm">
            <CheckCircle size={15} />
            Saved
          </div>
        )}
      </div>
    </form>
  )
}
