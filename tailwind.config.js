/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        desert: {
          950: '#0c0a09',
          900: '#1c1917',
          850: '#231e1a',
          800: '#292524',
          700: '#44403c',
          600: '#57534e',
          500: '#78716c',
          300: '#d6d3d1',
          100: '#f5f5f4',
        },
        lab: {
          black: '#070908',
          darker: '#0a0e0c',
          card: '#0e1512',
          cardBorder: '#1c2e24',
          olive: '#131e18',
          charcoal: '#17221d',
          green: '#10b981',
          toxic: '#00ff66',
          bright: '#22c55e',
          glow: 'rgba(34, 197, 94, 0.35)',
          yellow: '#f59e0b',
          hazmat: '#fbbf24',
          amber: '#d97706',
          alert: '#ef4444',
          paper: '#fef3c7',
          paperDark: '#fde68a',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.35' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.3), inset 0 0 15px rgba(16, 185, 129, 0.15)',
            borderColor: '#10b981'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 255, 102, 0.6), inset 0 0 20px rgba(0, 255, 102, 0.25)',
            borderColor: '#00ff66'
          },
        },
        scanner: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        vaporDrift: {
          '0%': { transform: 'translateX(-5%) translateY(0) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translateX(5%) translateY(-15px) scale(1.05)', opacity: '0.45' },
          '100%': { transform: 'translateX(-5%) translateY(0) scale(1)', opacity: '0.2' },
        }
      },
      animation: {
        flicker: 'flicker 4s infinite linear',
        pulseGlow: 'pulseGlow 2.8s infinite ease-in-out',
        scanner: 'scanner 3.5s linear infinite',
        vaporDrift: 'vaporDrift 9s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

