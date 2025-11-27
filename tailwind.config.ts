import type { Config } from 'tailwindcss'
import { tokens } from './lib/tokens'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        lg: '32px',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // DDS Brand colors
        'brand-primary': 'var(--brand-primary)',
        'brand-primary-light': 'var(--brand-primary-light)',
        'brand-primary-dark': 'var(--brand-primary-dark)',
        'brand-accent': 'var(--brand-accent)',
        'brand-accent-light': 'var(--brand-accent-light)',
        'brand-accent-dark': 'var(--brand-accent-dark)',
        
        // DDS Semantic colors
        'bg-page': 'var(--bg-page)',
        surface: 'var(--surface)',
        'surface-subtle': 'var(--surface-subtle)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        success: 'var(--success)',
        warn: 'var(--warn)',
        error: 'var(--error)',
        
        // Legacy shadcn compatibility
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--brand-primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--brand-accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      fontFamily: {
        sans: [...tokens.typography.fontFamily.sans],
      },
      fontSize: {
        'display-1': [
          tokens.typography.fontSize['display-1'][0],
          { ...tokens.typography.fontSize['display-1'][1] },
        ],
        'display-2': [
          tokens.typography.fontSize['display-2'][0],
          { ...tokens.typography.fontSize['display-2'][1] },
        ],
        'heading-1': [
          tokens.typography.fontSize['heading-1'][0],
          { ...tokens.typography.fontSize['heading-1'][1] },
        ],
        'heading-2': [
          tokens.typography.fontSize['heading-2'][0],
          { ...tokens.typography.fontSize['heading-2'][1] },
        ],
        'heading-3': [
          tokens.typography.fontSize['heading-3'][0],
          { ...tokens.typography.fontSize['heading-3'][1] },
        ],
        'body-lg': [
          tokens.typography.fontSize['body-lg'][0],
          { ...tokens.typography.fontSize['body-lg'][1] },
        ],
        'body-md': [
          tokens.typography.fontSize['body-md'][0],
          { ...tokens.typography.fontSize['body-md'][1] },
        ],
        'body-sm': [
          tokens.typography.fontSize['body-sm'][0],
          { ...tokens.typography.fontSize['body-sm'][1] },
        ],
      },
      fontWeight: tokens.typography.fontWeight,
      spacing: tokens.spacing,
      borderRadius: {
        ...tokens.borderRadius,
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'dds-1': tokens.shadows['1'],
        'dds-2': tokens.shadows['2'],
        'dds-3': tokens.shadows['3'],
      },
      transitionDuration: {
        micro: tokens.motion.duration.micro,
        ui: tokens.motion.duration.ui,
        section: tokens.motion.duration.section,
      },
      transitionTimingFunction: {
        'dds': tokens.motion.easing,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 200ms ease-out',
        'accordion-up': 'accordion-up 200ms ease-out',
        'fade-in': 'fade-in 200ms ease-out',
        'slide-up': 'slide-up 320ms cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
