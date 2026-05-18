import type { Metadata } from 'next'
import Link from 'next/link'
import { Film, CheckCircle, Clock, Loader, Eye, ChevronRight, ExternalLink } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Tables } from '@/types'

export const metadata: Metadata = {
  title: 'My Tapes — NLR Athlete Portal',
  robots: { index: false, follow: false },
}

const STATUS_CONFIG = {
  submitted:   { label: 'Submitted',   color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30', icon: Clock },
  in_progress: { label: 'In Progress', color: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/30',   icon: Loader },
  review:      { label: 'In Review',   color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/30', icon: Eye },
  delivered:   { label: 'Delivered',   color: 'text-nlr-green',  bg: 'bg-nlr-green/10 border-nlr-green/30',  icon: CheckCircle },
}

const STATUS_ORDER = ['submitted', 'in_progress', 'review', 'delivered'] as const

export default async function TapesPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: tapesData } = await supabase
    .from('tapes')
    .select('*')
    .eq('athlete_id', user!.id)
    .order('created_at', { ascending: false })

  const tapes = (tapesData ?? []) as Tables<'tapes'>[]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-label">Athlete Portal</p>
          <h1 className="font-heading font-bold text-white text-3xl uppercase tracking-wide mt-1">My Tapes</h1>
        </div>
        <Link href="/contact" className="btn-gold text-xs py-3 px-6">+ Book New</Link>
      </div>

      {/* Status legend */}
      <div className="flex flex-wrap gap-3">
        {STATUS_ORDER.map(s => {
          const cfg = STATUS_CONFIG[s]
          const Icon = cfg.icon
          return (
            <div key={s} className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs font-heading font-bold tracking-wide ${cfg.bg} ${cfg.color}`}>
              <Icon size={11} /> {cfg.label}
            </div>
          )
        })}
      </div>

      {!tapes.length ? (
        <div className="card-dark p-16 text-center">
          <Film size={40} className="text-white/15 mx-auto mb-4" />
          <h2 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-2">No Tapes Yet</h2>
          <p className="text-white/40 text-sm mb-6">Book a service and Andrew will start building your tape.</p>
          <Link href="/contact" className="btn-gold text-sm py-3 px-10 inline-block">Book a Service</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {tapes.map(tape => {
            const cfg = STATUS_CONFIG[tape.status]
            const Icon = cfg.icon
            const statusIdx = STATUS_ORDER.indexOf(tape.status)
            return (
              <div key={tape.id} className="card-dark p-6">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-12 h-12 bg-nlr-gold/10 border border-nlr-gold/20 flex items-center justify-center flex-shrink-0">
                    <Film size={20} className="text-nlr-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h2 className="font-heading font-bold text-white text-base uppercase tracking-wide">{tape.title}</h2>
                        <p className="text-white/40 text-sm mt-0.5">{tape.sport} · Ordered {new Date(tape.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs font-heading font-bold tracking-wide flex-shrink-0 ${cfg.bg} ${cfg.color}`}>
                        <Icon size={12} /> {cfg.label}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 flex items-center gap-2">
                      {STATUS_ORDER.map((s, i) => (
                        <div key={s} className="flex items-center gap-2 flex-1">
                          <div className={`h-1.5 flex-1 rounded-full transition-all ${i <= statusIdx ? 'bg-nlr-gold' : 'bg-white/10'}`} />
                          {i === STATUS_ORDER.length - 1 && null}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {STATUS_ORDER.map((s, i) => (
                        <span key={s} className={`text-[10px] font-heading tracking-wide ${i <= statusIdx ? 'text-nlr-gold' : 'text-white/20'}`}>
                          {STATUS_CONFIG[s].label}
                        </span>
                      ))}
                    </div>

                    {tape.notes && (
                      <div className="mt-4 bg-white/5 border border-white/10 px-4 py-3">
                        <p className="text-white/40 text-xs font-heading uppercase tracking-widest mb-1">Note from Andrew</p>
                        <p className="text-white/70 text-sm">{tape.notes}</p>
                      </div>
                    )}

                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      {tape.shareable_url && (
                        <a href={tape.shareable_url} target="_blank" rel="noopener noreferrer"
                          className="btn-gold text-xs py-2 px-5 flex items-center gap-2">
                          <ExternalLink size={13} /> View Tape
                        </a>
                      )}
                      <Link href={`/tapes/${tape.id}`}
                        className="btn-outline text-xs py-2 px-5 flex items-center gap-2">
                        Details <ChevronRight size={13} />
                      </Link>
                      <Link href="/messages"
                        className="text-nlr-gold text-xs font-heading tracking-widest uppercase hover:underline">
                        Message Andrew
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
