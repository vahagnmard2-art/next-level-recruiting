export default function ProfileLoading() {
  return (
    <div className="space-y-8 max-w-3xl animate-pulse">
      <div className="space-y-2">
        <div className="h-3 w-24 bg-white/10 rounded" />
        <div className="h-9 w-40 bg-white/10 rounded" />
        <div className="h-3 w-64 bg-white/10 rounded" />
      </div>

      <div className="card-dark p-6 flex items-center gap-5">
        <div className="w-16 h-16 bg-white/10 flex-shrink-0" />
        <div className="space-y-2">
          <div className="h-5 w-40 bg-white/10 rounded" />
          <div className="h-3 w-56 bg-white/10 rounded" />
        </div>
      </div>

      <div className="card-dark p-8 space-y-6">
        <div className="h-4 w-36 bg-white/10 rounded" />
        <div className="grid grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-2.5 w-20 bg-white/10 rounded" />
              <div className="h-11 w-full bg-white/10 rounded" />
            </div>
          ))}
        </div>
        <div className="h-10 w-36 bg-white/10 rounded" />
      </div>
    </div>
  )
}
