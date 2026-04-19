import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':       '#08080C',
        'bg-secondary':     '#13101A',
        'glow-purple':      '#A855F7',
        'glow-purple-deep': '#6B21A8',
        'glow-red':         '#FF2E4C',
        'glow-magenta':     '#D946EF',
        'text-primary':     '#F5F3FF',
        'text-muted':       '#8B829E',
        'border-subtle':    '#1F1A2E',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)',     'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'drift':   'drift 20s ease infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
