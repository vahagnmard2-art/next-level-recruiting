export default function TapesLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-3 w-24 bg-white/10 rounded" />
          <div className="h-9 w-40 bg-white/10 rounded" />
        </div>
        <div className="h-10 w-28 bg-white/10 rounded" />
      </div>

      <div className="flex gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-7 w-24 bg-white/10 rounded" />
        ))}
      </div>

      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card-dark p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                  <div className="h-4 w-48 bg-white/10 rounded" />
                  <div className="h-7 w-24 bg-white/10 rounded" />
                </div>
                <div className="h-3 w-32 bg-white/10 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
