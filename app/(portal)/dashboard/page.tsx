import type { Metadata } from 'next'
import Link from 'next/link'
import { Film, MessageSquare, CheckCircle, Clock, Loader, Eye, ChevronRight, ArrowRight } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Tables } from '@/types'

export const metadata: Metadata = {
  title: 'Dashboard — NLR Athlete Portal',
  robots: { index: false, follow: false },
}

const STATUS_CONFIG = {
  submitted:   { label: 'Submitted',   color: 'text-yellow-400',  bg: 'bg-yellow-400/10 border-yellow-400/30', icon: Clock },
  in_progress: { label: 'In Progress', color: 'text-blue-400',    bg: 'bg-blue-400/10 border-blue-400/30',    icon: Loader },
  review:      { label: 'In Review',   color: 'text-purple-400',  bg: 'bg-purple-400/10 border-purple-400/30', icon: Eye },
  delivered:   { label: 'Delivered',   color: 'text-nlr-green',   bg: 'bg-nlr-green/10 border-nlr-green/30',  icon: CheckCircle },
}

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profileData } = await supabase.from('profiles').select('*').eq('id', user!.id).single()
  const { data: tapesData } = await supabase.from('tapes').select('*').eq('athlete_id', user!.id).order('created_at', { ascending: false })
  const { data: messagesData } = await supabase.from('messages').select('*').eq('athlete_id', user!.id).order('created_at', { ascending: false }).limit(5)

  const profile = profileData as Tables<'profiles'> | null
  const tapesTyped = (tapesData ?? []) as Tables<'tapes'>[]
  const messagesTyped = (messagesData ?? []) as Tables<'messages'>[]

  const delivered = tapesTyped.filter(t => t.status === 'delivered').length
  const inProgress = tapesTyped.filter(t => t.status !== 'delivered').length
  const unread = messagesTyped.filter(m => m.sender === 'admin' && !m.read).length
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Athlete'

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-white/40 text-sm font-heading tracking-widest uppercase">Welcome back</p>
        <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl uppercase tracking-wide mt-1">
          {firstName} <span className="text-nlr-gold">—</span>
        </h1>
        {profile?.sport && (
          <p className="text-white/40 text-sm mt-1">{profile.sport}{profile.school ? ` · ${profile.school}` : ''}</p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Tapes Delivered', value: delivered, icon: CheckCircle, color: 'text-nlr-green' },
          { label: 'In Progress', value: inProgress, icon: Loader, color: 'text-blue-400' },
          { label: 'Unread Messages', value: unread, icon: MessageSquare, color: 'text-nlr-gold' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="card-dark p-6 flex items-center gap-4">
            <div className={`w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-3xl font-display text-white">{value}</p>
              <p className="text-white/40 text-xs font-heading tracking-widest uppercase mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Tapes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
              <Film size={14} className="text-nlr-gold" /> My Tapes
            </h2>
            <Link href="/tapes" className="text-nlr-gold text-xs font-heading tracking-widest hover:underline flex items-center gap-1">
              View all <ChevronRight size={12} />
            </Link>
          </div>

          {!tapesTyped.length ? (
            <div className="card-dark p-8 text-center">
              <Film size={28} className="text-white/20 mx-auto mb-3" />
              <p className="text-white/50 text-sm">No tapes yet.</p>
              <p className="text-white/30 text-xs mt-1 mb-4">Book a service to get started.</p>
              <Link href="/contact" className="btn-gold text-xs py-2.5 px-6 inline-block">Book a Service</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {tapesTyped.slice(0, 4).map(tape => {
                const cfg = STATUS_CONFIG[tape.status]
                const Icon = cfg.icon
                return (
                  <Link key={tape.id} href={`/tapes/${tape.id}`}
                    className="card-dark p-4 flex items-center gap-4 hover:border-white/20 transition-colors group">
                    <div className="w-10 h-10 bg-nlr-gold/10 border border-nlr-gold/20 flex items-center justify-center flex-shrink-0">
                      <Film size={16} className="text-nlr-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-heading font-bold truncate">{tape.title}</p>
                      <p className="text-white/40 text-xs mt-0.5">{tape.sport} · {new Date(tape.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 border text-xs font-heading font-bold tracking-wide flex-shrink-0 ${cfg.bg} ${cfg.color}`}>
                      <Icon size={11} />
                      {cfg.label}
                    </div>
                    <ChevronRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Recent Messages */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
              <MessageSquare size={14} className="text-nlr-gold" /> Messages
              {unread > 0 && (
                <span className="bg-nlr-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{unread} new</span>
              )}
            </h2>
            <Link href="/messages" className="text-nlr-gold text-xs font-heading tracking-widest hover:underline flex items-center gap-1">
              Open thread <ChevronRight size={12} />
            </Link>
          </div>

          {!messagesTyped.length ? (
            <div className="card-dark p-8 text-center">
              <MessageSquare size={28} className="text-white/20 mx-auto mb-3" />
              <p className="text-white/50 text-sm">No messages yet.</p>
              <p className="text-white/30 text-xs mt-1 mb-4">Send Andrew a message to get started.</p>
              <Link href="/messages" className="btn-gold text-xs py-2.5 px-6 inline-block">Message Andrew</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {messagesTyped.slice(0, 4).map(msg => (
                <div key={msg.id}
                  className={`card-dark p-4 flex items-start gap-3 ${!msg.read && msg.sender === 'admin' ? 'border-nlr-gold/30' : ''}`}>
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    msg.sender === 'admin' ? 'bg-nlr-gold text-nlr-darker' : 'bg-white/10 text-white/60'
                  }`}>
                    {msg.sender === 'admin' ? 'A' : 'You'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/60 text-xs font-heading font-bold uppercase tracking-wide">
                        {msg.sender === 'admin' ? 'Andrew · NLR' : 'You'}
                      </span>
                      {!msg.read && msg.sender === 'admin' && (
                        <span className="w-1.5 h-1.5 bg-nlr-green rounded-full" />
                      )}
                    </div>
                    <p className="text-white/80 text-sm line-clamp-2">{msg.content}</p>
                    <p className="text-white/25 text-xs mt-1">{new Date(msg.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
              <Link href="/messages" className="flex items-center justify-center gap-2 text-nlr-gold text-xs font-heading tracking-widest uppercase hover:underline py-2">
                Open full thread <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-nlr-green/10 border border-nlr-green/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-heading font-bold text-white text-sm tracking-wide uppercase">Ready to book your next service?</p>
          <p className="text-white/50 text-sm mt-1">Tapes, film breakdowns, recruiting profiles — Andrew builds it all.</p>
        </div>
        <Link href="/contact" className="btn-gold text-xs py-3 px-8 flex-shrink-0">Book a Service</Link>
      </div>
    </div>
  )
}
