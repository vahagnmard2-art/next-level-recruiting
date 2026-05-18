import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase-server'

// Portal layout — server-side auth check as a second line of defence (middleware is first).
export default async function PortalLayout({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-background">
      {/* PortalNav goes here */}
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
