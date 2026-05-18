import type { Metadata } from 'next'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your NLR athlete portal — tape status, messages, and profile.',
  robots: { index: false, follow: false },
}

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">
        Dashboard
      </h1>
      <p className="text-muted-foreground mt-2">Welcome, {user?.email}</p>
      {/* Tape status cards, messages, CTA to contact Andrew */}
    </div>
  )
}
