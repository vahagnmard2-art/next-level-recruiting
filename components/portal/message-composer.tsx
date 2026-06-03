'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import { useDebounce } from '@/hooks/use-debounce'
import type { Tables } from '@/types'

interface Props {
  athleteId: string
  initialMessages: Tables<'messages'>[]
}

function formatTime(ts: string) {
  return new Date(ts).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
}

export default function MessageComposer({ athleteId, initialMessages }: Props) {
  const [messages, setMessages] = useState(initialMessages)
  const [body, setBody] = useState('')
  const debouncedBody = useDebounce(body, 150)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Mark admin messages as read
  useEffect(() => {
    const sb = createClient()
    sb.from('messages').update({ read: true })
      .eq('athlete_id', athleteId).eq('sender', 'admin').eq('read', false)
      .then(() => {})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Realtime subscription
  useEffect(() => {
    const sb = createClient()
    const channel = sb
      .channel(`messages:${athleteId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `athlete_id=eq.${athleteId}`,
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as Tables<'messages'>])
      })
      .subscribe()
    return () => { sb.removeChannel(channel) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [athleteId])

  const handleSend = async (e: FormEvent) => {
    e.preventDefault()
    if (!body.trim()) return
    setSending(true); setError('')
    const sb = createClient()
    const { error: err } = await sb.from('messages').insert({
      athlete_id: athleteId,
      sender: 'athlete',
      content: body.trim(),
    })
    if (err) { setError('Failed to send. Try again.'); setSending(false); return }
    setBody('')
    setSending(false)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Thread */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
        {messages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/40 text-sm">No messages yet.</p>
            <p className="text-white/25 text-xs mt-1">Send NLR a message below — he typically responds same day.</p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'athlete' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
                m.sender === 'athlete'
                  ? 'bg-nlr-gold text-nlr-darker rounded-tl-lg rounded-tr-sm rounded-bl-lg'
                  : 'bg-nlr-navy border border-white/10 text-white rounded-tr-lg rounded-tl-sm rounded-br-lg'
              }`}>
                {m.sender === 'admin' && (
                  <p className="text-nlr-gold text-[10px] font-heading font-bold tracking-widest uppercase mb-1">NLR Team</p>
                )}
                <p>{m.content}</p>
                <p className={`text-[10px] mt-1.5 ${m.sender === 'athlete' ? 'text-nlr-darker/60' : 'text-white/30'}`}>
                  {formatTime(m.created_at)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Composer */}
      <div className="border-t border-white/10 p-4">
        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}
        <form onSubmit={handleSend} className="flex gap-3">
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(e as never) } }}
            placeholder="Send a message..."
            rows={1}
            className="flex-1 bg-nlr-navy border border-white/10 px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-nlr-gold transition-colors resize-none"
          />
          <button type="submit" disabled={sending || !debouncedBody.trim()}
            className="btn-gold px-4 py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0">
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </form>
        <p className="text-white/20 text-xs mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}
