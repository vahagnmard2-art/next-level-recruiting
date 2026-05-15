import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import PageSEO from '../components/PageSEO'

export default function NotFound() {
  return (
    <>
      <PageSEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to Next Level Recruiting."
        canonical="/404"
      />
      <div className="min-h-screen bg-nlr-darker flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative text-center px-4 max-w-2xl mx-auto">
          <div className="font-display text-[200px] leading-none text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </div>
          <div className="relative">
            <div className="font-display text-8xl text-nlr-gold mb-4">404</div>
            <h1 className="font-display text-4xl sm:text-6xl text-white mb-4">
              OUT OF BOUNDS
            </h1>
            <div className="w-16 h-1 bg-nlr-gold mx-auto mb-6" />
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              This page doesn't exist — but your recruiting journey does. Head back and let's get to work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-gold text-sm py-4 px-10 flex items-center gap-2">
                <Home size={16} />
                Back Home
              </Link>
              <Link to="/contact" className="btn-outline text-sm py-4 px-10 flex items-center gap-2">
                Book a Session
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
