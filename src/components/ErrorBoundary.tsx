import { Component, ReactNode } from 'react'

interface State { hasError: boolean }
interface Props { children: ReactNode }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('[NLR] Unhandled render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-nlr-darker flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="font-display text-6xl text-nlr-gold mb-4">NLR</div>
            <h1 className="font-heading font-bold text-white text-2xl tracking-widest uppercase mb-4">
              Something went wrong
            </h1>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              An unexpected error occurred. Reload the page or head back home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-nlr-gold text-nlr-darker font-heading font-bold tracking-widest uppercase px-8 py-3 text-sm transition-all duration-300 hover:bg-nlr-gold-light"
              >
                Reload Page
              </button>
              <button
                onClick={() => { this.setState({ hasError: false }); window.location.href = '/' }}
                className="border-2 border-nlr-gold text-nlr-gold font-heading font-bold tracking-widest uppercase px-8 py-3 text-sm transition-all duration-300 hover:bg-nlr-gold hover:text-nlr-darker"
              >
                Back Home
              </button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
