/**
 * Divisy Design System (DDS) Tokens
 * 
 * Design tokens for the Divisy brand, used across the application.
 * These tokens are mapped to Tailwind CSS and CSS variables.
 */

export const tokens = {
  colors: {
    light: {
      'bg-page': '#FAFBFC', // Soft, clean page background
      surface: '#FFFFFF', // Pure white for cards, panels
      'surface-subtle': '#F8F9FA', // Subtle surface variant
      'text-primary': '#0A0D14', // Deep charcoal for primary text
      'text-muted': '#64748B', // Slate for secondary text
      'brand-primary': '#0F4C75', // Deep Professional Blue - Trust, expertise, enterprise
      'brand-primary-light': '#3282B8', // Interactive states, hover
      'brand-primary-dark': '#0A3A5C', // Pressed states, depth
      'brand-accent': '#0D7377', // Refined Teal - Growth, transformation, innovation
      'brand-accent-light': '#14A085', // Highlights, success states
      'brand-accent-dark': '#0A5D61', // Depth, emphasis
      'border-subtle': '#E2E8F0', // Light borders
      'border-strong': '#CBD5E1', // Defined borders
      success: '#14A085', // Teal - aligned with accent
      warn: '#F59E0B', // Amber
      error: '#EF4444', // Red
    },
    dark: {
      'bg-page': '#0A0D14', // Deep charcoal base
      surface: '#141821', // Elevated surfaces
      'surface-subtle': '#1A1F2E', // Subtle surface variant
      'text-primary': '#F1F5F9', // Light slate for primary text
      'text-muted': '#94A3B8', // Muted slate for secondary text
      'brand-primary': '#3282B8', // Lighter for dark mode visibility
      'brand-primary-light': '#4A9BD4', // Hover states in dark mode
      'brand-primary-dark': '#0F4C75', // Pressed states in dark mode
      'brand-accent': '#14A085', // Maintain vibrancy in dark mode
      'brand-accent-light': '#1EC8A3', // Highlights in dark mode
      'brand-accent-dark': '#0D7377', // Depth in dark mode
      'border-subtle': '#1E293B', // Subtle borders
      'border-strong': '#334155', // Defined borders
      success: '#14A085', // Teal - aligned with accent
      warn: '#F59E0B', // Amber
      error: '#EF4444', // Red
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      'display-1': ['56px', { lineHeight: '64px', fontWeight: 600 }],
      'display-2': ['40px', { lineHeight: '48px', fontWeight: 600 }],
      'heading-1': ['32px', { lineHeight: '40px', fontWeight: 600 }],
      'heading-2': ['24px', { lineHeight: '32px', fontWeight: 600 }],
      'heading-3': ['20px', { lineHeight: '28px', fontWeight: 600 }],
      'body-lg': ['16px', { lineHeight: '24px', fontWeight: 400 }],
      'body-md': ['14px', { lineHeight: '22px', fontWeight: 400 }],
      'body-sm': ['12px', { lineHeight: '18px', fontWeight: 400 }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
  },
  spacing: {
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    8: '64px',
    10: '80px',
    12: '96px',
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
  },
  shadows: {
    '1': '0 1px 2px rgba(0, 0, 0, 0.06)',
    '2': '0 4px 12px rgba(0, 0, 0, 0.08)',
    '3': '0 12px 28px rgba(0, 0, 0, 0.12)',
  },
  motion: {
    duration: {
      micro: '120ms',
      ui: '200ms',
      section: '320ms',
    },
    easing: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  layout: {
    'content-max': '1280px',
    gutter: {
      mobile: '24px',
      desktop: '32px',
    },
  },
} as const

export type TokenColors = typeof tokens.colors.light
export type TokenTypography = typeof tokens.typography
export type TokenSpacing = typeof tokens.spacing

