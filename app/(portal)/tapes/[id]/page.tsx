import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Film, CheckCircle, Clock, Loader, Eye, ExternalLink, ArrowLeft, MessageSquare } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Tables } from '@/types'

const STATUS_CONFIG = {
  submitted:   { label: 'Submitted',   color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30', icon: Clock,         desc: 'Your order is confirmed and in queue.' },
  in_progress: { label: 'In Progress', color: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/30',    icon: Loader,        desc: 'Our coach is actively working on your tape.' },
  review:      { label: 'In Review',   color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/30', icon: Eye,           desc: 'Your tape is in final review before delivery.' },
  delivered:   { label: 'Delivered',   color: 'text-nlr-green',  bg: 'bg-nlr-green/10 border-nlr-green/30',  icon: CheckCircle,   desc: 'Your tape is ready. Watch and share it.' },
}
const STATUS_ORDER = ['submitted', 'in_progress', 'review', 'delivered'] as const

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Tape Details — NLR Athlete Portal', robots: { index: false, follow: false } }
}

export default async function TapeDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: tapeData } = await supabase
    .from('tapes')
    .select('*')
    .eq('id', params.id)
    .eq('athlete_id', user!.id)
    .single()

  const tape = tapeData as Tables<'tapes'> | null
  if (!tape) notFound()

  const cfg = STATUS_CONFIG[tape.status]
  const StatusIcon = cfg.icon
  const statusIdx = STATUS_ORDER.indexOf(tape.status)

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <Link href="/tapes" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors mb-6">
          <ArrowLeft size={14} /> Back to My Tapes
        </Link>
        <div className="flex items-start gap-4 flex-wrap">
          <div className="w-14 h-14 bg-nlr-gold/10 border border-nlr-gold/20 flex items-center justify-center">
            <Film size={24} className="text-nlr-gold" />
          </div>
          <div className="flex-1">
            <h1 className="font-heading font-bold text-white text-2xl uppercase tracking-wide">{tape.title}</h1>
            <p className="text-white/40 text-sm mt-1">
              {tape.sport} · Ordered {new Date(tape.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 border text-sm font-heading font-bold tracking-wide flex-shrink-0 ${cfg.bg} ${cfg.color}`}>
            <StatusIcon size={14} /> {cfg.label}
          </div>
        </div>
      </div>

      {/* Status timeline */}
      <div className="card-dark p-6">
        <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-6">Production Status</h2>
        <div className="space-y-0">
          {STATUS_ORDER.map((s, i) => {
            const c = STATUS_CONFIG[s]
            const Icon = c.icon
            const done = i <= statusIdx
            const active = i === statusIdx
            return (
              <div key={s} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 flex items-center justify-center border rounded-full flex-shrink-0 transition-all ${
                    done ? `${c.bg} ${c.color} border-current` : 'bg-white/5 border-white/10 text-white/20'
                  }`}>
                    <Icon size={14} />
                  </div>
                  {i < STATUS_ORDER.length - 1 && (
                    <div className={`w-0.5 h-8 mt-1 ${i < statusIdx ? 'bg-nlr-gold/40' : 'bg-white/10'}`} />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <p className={`font-heading font-bold text-sm tracking-wide uppercase ${done ? c.color : 'text-white/30'}`}>
                    {c.label}
                    {active && <span className="ml-2 text-[10px] bg-white/10 px-2 py-0.5 text-white/60 normal-case tracking-normal font-normal rounded">Current</span>}
                  </p>
                  <p className={`text-xs mt-1 ${done ? 'text-white/50' : 'text-white/20'}`}>{c.desc}</p>
                  {s === 'delivered' && tape.delivery_date && (
                    <p className="text-nlr-green text-xs mt-1">Delivered {new Date(tape.delivery_date).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Notes */}
      {tape.notes && (
        <div className="card-dark p-6">
          <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-3">Note from NLR</h2>
          <p className="text-white/70 text-sm leading-relaxed">{tape.notes}</p>
        </div>
      )}

      {/* Actions */}
      <div className="card-dark p-6">
        <h2 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-4">Actions</h2>
        <div className="flex flex-wrap gap-3">
          {tape.shareable_url ? (
            <a href={tape.shareable_url} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-sm py-3 px-8 flex items-center gap-2">
              <ExternalLink size={15} /> Watch Your Tape
            </a>
          ) : (
            <div className="flex items-center gap-2 text-white/30 text-sm border border-white/10 px-6 py-3">
              <Film size={15} /> Tape link available after delivery
            </div>
          )}
          <Link href="/messages" className="btn-outline text-sm py-3 px-6 flex items-center gap-2">
            <MessageSquare size={15} /> Message NLR
          </Link>
        </div>
      </div>
    </div>
  )
}
