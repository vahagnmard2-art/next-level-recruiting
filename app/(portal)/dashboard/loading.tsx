export default function DashboardLoading() {
  return (
    <div className="space-y-10 animate-pulse">
      <div>
        <div className="h-3 w-32 bg-white/10 rounded mb-3" />
        <div className="h-10 w-56 bg-white/10 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card-dark p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 flex-shrink-0" />
            <div className="space-y-2">
              <div className="h-8 w-10 bg-white/10 rounded" />
              <div className="h-2 w-24 bg-white/10 rounded" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-4 w-28 bg-white/10 rounded" />
            {[...Array(3)].map((_, j) => (
              <div key={j} className="card-dark p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-3/4 bg-white/10 rounded" />
                  <div className="h-2 w-1/2 bg-white/10 rounded" />
                </div>
                <div className="w-20 h-6 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
