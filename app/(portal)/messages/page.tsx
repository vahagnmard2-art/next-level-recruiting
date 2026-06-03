import type { Metadata } from 'next'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import MessageComposer from '@/components/portal/message-composer'
import type { Tables } from '@/types'

export const metadata: Metadata = {
  title: 'Messages — NLR Athlete Portal',
  robots: { index: false, follow: false },
}

export default async function MessagesPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: messagesData } = await supabase
    .from('messages')
    .select('*')
    .eq('athlete_id', user!.id)
    .order('created_at', { ascending: true })

  const messages = (messagesData ?? []) as Tables<'messages'>[]

  return (
    <div className="space-y-6">
      <div>
        <p className="section-label">Athlete Portal</p>
        <h1 className="font-heading font-bold text-white text-3xl uppercase tracking-wide mt-1">Messages</h1>
        <p className="text-white/40 text-sm mt-1">Direct line to NLR — ask questions, share updates, or get recruiting advice.</p>
      </div>

      <div className="card-dark overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}>
        <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
          <div className="w-9 h-9 bg-nlr-gold flex items-center justify-center font-display text-nlr-darker text-sm font-bold">A</div>
          <div>
            <p className="font-heading font-bold text-white text-sm uppercase tracking-wide">NLR Team</p>
            <p className="text-white/40 text-xs">We typically respond same day</p>
          </div>
        </div>
        <MessageComposer athleteId={user!.id} initialMessages={messages} />
      </div>
    </div>
  )
}
