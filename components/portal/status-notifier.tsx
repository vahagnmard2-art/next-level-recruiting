'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, X } from 'lucide-react'
import { createClient } from '@/lib/supabase'

interface Notification {
  id: string
  tapeId: string
  tapeTitle: string
}

export default function StatusNotifier({ athleteId }: { athleteId: string }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const sb = createClient()

    const channel = sb
      .channel(`tape-status:${athleteId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'tapes',
          filter: `athlete_id=eq.${athleteId}`,
        },
        (payload) => {
          const updated = payload.new as { id: string; title: string; status: string }
          const previous = payload.old as { status: string }

          if (updated.status === 'delivered' && previous.status !== 'delivered') {
            const notif: Notification = {
              id: crypto.randomUUID(),
              tapeId: updated.id,
              tapeTitle: updated.title,
            }
            setNotifications(prev => [...prev, notif])

            // Auto-dismiss after 8 seconds
            setTimeout(() => {
              setNotifications(prev => prev.filter(n => n.id !== notif.id))
            }, 8000)
          }
        }
      )
      .subscribe()

    return () => { sb.removeChannel(channel) }
  }, [athleteId])

  if (notifications.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full" role="region" aria-label="Tape notifications">
      {notifications.map(n => (
        <div
          key={n.id}
          className="bg-nlr-darker border border-nlr-green/40 shadow-2xl p-4 flex items-start gap-3 animate-slide-up"
          role="alert"
          aria-live="polite"
        >
          <div className="w-9 h-9 bg-nlr-green/20 border border-nlr-green/30 flex items-center justify-center flex-shrink-0">
            <CheckCircle size={18} className="text-nlr-green" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-heading font-bold text-white text-xs tracking-widest uppercase">Tape Delivered!</p>
            <p className="text-white/70 text-sm mt-0.5 truncate">{n.tapeTitle}</p>
            <Link
              href={`/tapes/${n.tapeId}`}
              className="text-nlr-gold text-xs font-heading tracking-widest uppercase hover:underline mt-1 inline-block"
              onClick={() => setNotifications(prev => prev.filter(x => x.id !== n.id))}
            >
              View Tape →
            </Link>
          </div>
          <button
            onClick={() => setNotifications(prev => prev.filter(x => x.id !== n.id))}
            className="text-white/30 hover:text-white transition-colors flex-shrink-0 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
