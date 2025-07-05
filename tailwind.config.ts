import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        cream: '#f8fafc',
        coral: '#3b82f6',
        violet: '#000000',
        rose: '#8b5cf6',
        'soft-yellow': '#f59e0b',
        green: '#10b981',
        pink: '#ec4899',
        cyan: '#06b6d4',
        lime: '#84cc16',
        
        // Override default colors for better contrast
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        logo: ['var(--font-pacifico)', 'Pacifico', 'cursive'],
        ui: ['var(--font-arimo)', 'Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 