/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        text: 'var(--color-text)',
        'text-strong': 'var(--color-text-strong)',
        accent: 'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        red: 'var(--color-red)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '3xs': '0.5625rem', // 9px
        'xxs': '0.625rem',  // 10px
        'xs': '0.6875rem',  // 11px
        'sm': '0.8125rem',  // 13px
      }
    },
  },
  plugins: [],
}
