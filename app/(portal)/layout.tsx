import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import PortalNav from '@/components/portal/portal-nav'
import StatusNotifier from '@/components/portal/status-notifier'

export default async function PortalLayout({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profileData } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single()

  const profile = profileData as { full_name: string | null } | null

  const { count: unreadCount } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .eq('athlete_id', user.id)
    .eq('sender', 'admin')
    .eq('read', false)

  return (
    <div className="min-h-screen bg-nlr-dark">
      <PortalNav
        unreadCount={unreadCount ?? 0}
        athleteName={profile?.full_name ?? user.email ?? undefined}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
      <StatusNotifier athleteId={user.id} />
    </div>
  )
}
