/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'ibm': ["IBM Plex Sans", 'sans-serif'],
        'ibmmono': ["IBM Plex Mono", 'monospace'],
      },
      keyframes: {
        wipeDown: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0% 0)' },
        },
        wipeRight: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        wipeDown: 'wipeDown 1.5s ease-out forwards',
        wipeRight: 'wipeRight 1.5s ease-out forwards',
        blink: 'blink 0.8s step-start infinite',
      },
    },
  },
  plugins: [],
}
