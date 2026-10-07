/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0b1329',
          850: '#0f1a36',
          800: '#152449',
          700: '#1e3363',
          600: '#2b4785',
        },
        brand: {
          cyan: '#06b6d4',
          teal: '#0d9488',
          tealLight: '#14b8a6',
          tealGlow: 'rgba(20, 184, 166, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(11, 19, 41, 0.06), 0 2px 6px -1px rgba(11, 19, 41, 0.04)',
        'dark-card': '0 8px 30px -4px rgba(0, 0, 0, 0.4), 0 2px 10px -2px rgba(6, 182, 212, 0.05)',
        'glow': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'cyan-glow': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      }
    },
  },
  plugins: [],
}
