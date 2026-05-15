/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nlr-green': '#1A7A3C',
        'nlr-green-dark': '#145F2E',
        'nlr-green-light': '#22A050',
        'nlr-dark': '#0D1F2D',
        'nlr-darker': '#070F16',
        'nlr-navy': '#111F2C',
        'nlr-gold': '#C9A84C',
        'nlr-gold-light': '#E0C060',
        'nlr-gold-dark': '#A88830',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #070F16 0%, #0D1F2D 50%, #0A1F10 100%)',
        'green-gradient': 'linear-gradient(135deg, #145F2E 0%, #1A7A3C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #A88830 0%, #C9A84C 50%, #E0C060 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-glow-once': 'pulseGlow 2s ease-in-out 3',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
