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
        // Custom brand colors - High Contrast
        cream: '#f5f5f5',
        coral: '#d32f2f',
        plum: '#1a0f12',
        rose: '#e57373',
        'soft-yellow': '#ff9800',
        
        // Override default colors to ensure our colors are used
        gray: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
          950: '#000000',
        },
        slate: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
          950: '#000000',
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