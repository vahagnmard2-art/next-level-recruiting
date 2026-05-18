import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="font-display text-nlr-gold text-4xl tracking-widest">NLR</p>
          <h1 className="text-foreground font-heading font-bold text-2xl uppercase tracking-wide mt-2">
            Athlete Portal
          </h1>
        </div>
        {/* LoginForm client component goes here */}
        <p className="text-muted-foreground text-sm text-center">Login form — coming next</p>
      </div>
    </div>
  )
}
