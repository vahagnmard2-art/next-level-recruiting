export default function MessagesLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-3 w-24 bg-white/10 rounded" />
        <div className="h-9 w-40 bg-white/10 rounded" />
        <div className="h-3 w-72 bg-white/10 rounded" />
      </div>

      <div className="card-dark overflow-hidden" style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}>
        <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10" />
          <div className="space-y-1.5">
            <div className="h-3 w-28 bg-white/10 rounded" />
            <div className="h-2 w-36 bg-white/10 rounded" />
          </div>
        </div>
        <div className="p-6 space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`h-14 rounded ${i % 2 === 0 ? 'w-64 bg-white/10' : 'w-48 bg-nlr-gold/10'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
