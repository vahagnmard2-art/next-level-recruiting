import type { Metadata } from 'next'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import ProfileForm from '@/components/portal/profile-form'
import { User, Mail, Shield } from 'lucide-react'
import type { Tables } from '@/types'

export const metadata: Metadata = {
  title: 'My Profile — NLR Athlete Portal',
  robots: { index: false, follow: false },
}

export default async function ProfilePage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profileData } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single()

  const profile = profileData as Tables<'profiles'> | null

  if (!profile) {
    return (
      <div className="card-dark p-12 text-center">
        <p className="text-white/50">Profile not found. Please contact support.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <p className="section-label">Athlete Portal</p>
        <h1 className="font-heading font-bold text-white text-3xl uppercase tracking-wide mt-1">My Profile</h1>
        <p className="text-white/40 text-sm mt-1">Keep your info current so our team has everything they need.</p>
      </div>

      {/* Avatar / summary */}
      <div className="card-dark p-6 flex items-center gap-5">
        <div className="w-16 h-16 bg-nlr-gold/10 border border-nlr-gold/20 flex items-center justify-center flex-shrink-0">
          <User size={28} className="text-nlr-gold" />
        </div>
        <div>
          <p className="font-heading font-bold text-white text-lg uppercase tracking-wide">
            {profile.full_name ?? 'Your Name'}
          </p>
          <p className="text-white/40 text-sm mt-0.5">
            {[profile.sport, profile.school, profile.grad_year ? `Class of ${profile.grad_year}` : null]
              .filter(Boolean).join(' · ') || 'Complete your profile below'}
          </p>
        </div>
      </div>

      {/* Edit form */}
      <div className="card-dark p-8">
        <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
          <span className="w-4 h-0.5 bg-nlr-gold" /> Athlete Information
        </h2>
        <ProfileForm profile={profile} />
      </div>

      {/* Account info (read-only) */}
      <div className="card-dark p-6 space-y-4">
        <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
          <Shield size={14} className="text-nlr-gold" /> Account
        </h2>
        <div className="flex items-center gap-3">
          <Mail size={15} className="text-white/40" />
          <div>
            <p className="text-white/40 text-xs font-heading tracking-widest uppercase">Email</p>
            <p className="text-white text-sm">{user!.email}</p>
          </div>
        </div>
        <p className="text-white/25 text-xs">To change your email or password, contact NLR directly.</p>
      </div>
    </div>
  )
}
