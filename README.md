# Divisy Corporate Website

A production-ready corporate website for Divisy, a technology consulting firm. Built with Next.js 14, TypeScript, TailwindCSS, Contentlayer, and the **Divisy Design System (DDS)**.

## Features

- 🎨 **Divisy Design System (DDS)**: Comprehensive design tokens and component library
- 🌓 **Dark Mode**: Full light/dark theme support with persistent preference
- 🌍 **Bilingual Support**: English and Spanish with persistent language preference
- 📱 **Responsive Design**: Mobile-first, enterprise-grade UI (320px → 1440px+)
- ⚡ **Performance**: Optimized for Core Web Vitals (Lighthouse ≥ 95)
- 🔍 **SEO Optimized**: Structured data, sitemap, robots.txt, and Open Graph tags
- 📝 **Content Management**: MDX-based content for services, case studies, and blog posts
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation and focus management

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui (Radix primitives) + DDS tokens
- **Animations**: Framer Motion (respects prefers-reduced-motion)
- **Content**: Contentlayer + MDX
- **Forms**: React Hook Form + Zod
- **i18n**: Custom implementation with cookie persistence
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Divisy
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORM_PROVIDER=formspree
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=divisy.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Divisy Design System (DDS)

### Design Tokens

All design tokens are defined in `lib/tokens.ts` and mapped to Tailwind CSS and CSS variables.

#### Colors

**Light Theme:**
- `--bg-page`: #F7F9FC
- `--surface`: #FFFFFF
- `--text-primary`: #0A0D14
- `--text-muted`: #5C6573
- `--brand-primary`: #4B5DFF
- `--brand-accent`: #00C2A8
- `--border-subtle`: #E6EAF0
- `--border-strong`: #CBD5E1

**Dark Theme:**
- `--bg-page`: #0B0E14
- `--surface`: #0F1420
- `--text-primary`: #F2F4F7
- `--text-muted`: #A3ADBB
- `--border-subtle`: #2A2F39
- `--border-strong`: #3A3F49

Brand colors (`--brand-primary`, `--brand-accent`) remain consistent across themes.

#### Typography

Font family: Inter (with IBM Plex Sans fallback)

Scale:
- `display-1`: 56px / 64px (600)
- `display-2`: 40px / 48px (600)
- `heading-1`: 32px / 40px (600)
- `heading-2`: 24px / 32px (600)
- `heading-3`: 20px / 28px (600)
- `body-lg`: 16px / 24px (400)
- `body-md`: 14px / 22px (400)
- `body-sm`: 12px / 18px (400)

#### Spacing

8-pt system: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px

#### Border Radius

- `sm`: 6px
- `md`: 10px
- `lg`: 14px
- `xl`: 20px

#### Shadows

- `shadow-dds-1`: 0 1px 2px rgba(0,0,0,.06)
- `shadow-dds-2`: 0 4px 12px rgba(0,0,0,.08)
- `shadow-dds-3`: 0 12px 28px rgba(0,0,0,.12)

#### Motion

- Durations: 120ms (micro), 200ms (UI), 320ms (section)
- Easing: cubic-bezier(0.2, 0.6, 0.2, 1)
- Respects `prefers-reduced-motion`

### Using Design Tokens

#### In Tailwind Classes

```tsx
<div className="bg-surface text-text-primary border-border-subtle rounded-xl shadow-dds-2">
  Content
</div>
```

#### In CSS

```css
.custom-class {
  background-color: var(--surface);
  color: var(--text-primary);
  border-radius: var(--radius);
}
```

#### In TypeScript

```typescript
import { tokens } from '@/lib/tokens'

const primaryColor = tokens.colors.light['brand-primary']
```

### Editing Tokens

1. Open `lib/tokens.ts`
2. Modify the token values
3. Update `app/globals.css` if adding new CSS variables
4. Update `tailwind.config.ts` if adding new Tailwind mappings

### Dark Mode

Dark mode is implemented via `data-theme="dark"` on the `<html>` element.

**Toggle Theme:**
- Use the `<ThemeToggle />` component in the navbar
- Theme preference is persisted in `localStorage`
- Automatically respects system preference on first visit

**Manual Theme Control:**
```tsx
import { useTheme } from '@/components/theme-provider'

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme()
  // ...
}
```

## Component Library

### UI Primitives (components/ui/)

All shadcn/ui components have been wrapped with DDS tokens:
- `Button` - Primary, secondary, ghost, outline variants with loading state
- `Card` - Surface cards with DDS shadows and borders
- `Badge` - Status badges (default, secondary, success, warn, error)
- `Input`, `Textarea`, `Select` - Form inputs with DDS styling
- `Tabs`, `Accordion` - Interactive components
- And more...

### Section Components (components/sections/)

Reusable page sections:
- `Hero` - Hero section with headline, subtitle, and CTAs
- `ServicesGrid` - Grid of service cards
- `CaseTeasers` - Featured case study cards
- `MethodologyTimeline` - Step-by-step methodology visualization
- `KPIStats` - Key performance indicator statistics
- `LogoCloud` - Client logo showcase
- `CTASection` - Call-to-action section
- `Footer` - Site footer with links and legal

### Usage Example

```tsx
import { Hero, ServicesGrid, CTASection } from '@/components/sections'

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <ServicesGrid locale={locale} />
      <CTASection locale={locale} variant="inverted" />
    </>
  )
}
```

## Content Management

### Adding a New Service

Create a new MDX file in `content/services/`:

```mdx
---
title: Service Name
description: Service description
locale: en
slug: service-slug
benefits:
  - Benefit 1
  - Benefit 2
deliverables:
  - Deliverable 1
techStack:
  - Technology 1
kpis:
  - KPI 1
pricingModels:
  - Time & Materials
---

## Overview

Service overview content here...
```

### Adding a Case Study

Create a new MDX file in `content/cases/`:

```mdx
---
title: Case Study Title
description: Brief description
locale: en
slug: case-slug
challenge: Challenge description
approach: Approach description
results:
  - Result 1
  - Result 2
techStack:
  - Technology 1
industry: Industry Name
publishedAt: 2024-01-15
featured: true
testimonial: Testimonial text
testimonialAuthor: Author Name
testimonialRole: Role
company: Company Name
---

## Challenge

Detailed challenge description...

## Approach

Detailed approach description...

## Results

Detailed results...
```

### Adding a Blog Post

Create a new MDX file in `content/blog/`:

```mdx
---
title: Blog Post Title
description: Post description
locale: en
slug: post-slug
publishedAt: 2024-01-15
author: Author Name
authorRole: Role
tags:
  - Tag 1
  - Tag 2
featured: true
---

Blog post content here...
```

## Internationalization (i18n)

The website supports English and Spanish. Language preference is stored in cookies and persists across sessions.

### Adding Translations

Edit `lib/translations.ts` to add or modify translation strings:

```typescript
export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      // ...
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      // ...
    },
  },
}
```

### Language Switching

The language switcher is available in the navbar. It updates the URL and persists the preference in cookies.

**Routes:**
- English: `/en/*`
- Spanish: `/es/*`

## Adding New Consultants

To add consultants to the team page:

1. Edit `app/[locale]/team/page.tsx`
2. Add entries to the `founders` or `consultants` array:

```typescript
const consultants = {
  en: [
    {
      name: 'Consultant Name',
      role: 'Role',
      bio: 'Bio...',
      skills: ['Skill 1', 'Skill 2'],
      linkedin: 'https://linkedin.com/in/...',
    },
  ],
  es: [
    // Spanish version
  ],
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_FORM_PROVIDER`: Form provider (formspree, resend, emailjs)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Your domain for Plausible analytics

4. Deploy!

### Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your website URL (required for sitemap and SEO)
- `NEXT_PUBLIC_FORM_PROVIDER`: Form submission provider (formspree, resend, emailjs)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Domain for Plausible analytics (optional)

## Form Handling

The contact form supports multiple providers. Set `NEXT_PUBLIC_FORM_PROVIDER` to:
- `formspree`: Use Formspree (default)
- `resend`: Use Resend API
- `emailjs`: Use EmailJS

You'll need to configure the respective API keys in your form submission handler.

## SEO

The website includes:
- Structured data (Organization, Person, Service, BlogPosting)
- Sitemap.xml (auto-generated)
- Robots.txt
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle
- CSS optimization with TailwindCSS
- Font optimization (Inter with display: swap)

## Accessibility

- **WCAG AA compliant** color contrasts
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Visible focus outlines (not color-only)
- Hit targets ≥ 44×44px
- Explicit `<label>` for all inputs
- One `<h1>` per page
- Logical heading order
- Motion reduced when `prefers-reduced-motion` is set

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── [locale]/          # Localized routes
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── globals.css        # DDS CSS variables and utilities
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/             # React components
│   ├── ui/                # DDS-wrapped shadcn/ui components
│   ├── sections/          # Page section components
│   ├── navbar.tsx         # Navigation with theme toggle
│   ├── footer.tsx         # Footer
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx  # Theme toggle button
├── content/               # MDX content files
│   ├── services/         # Service pages
│   ├── cases/            # Case studies
│   └── blog/             # Blog posts
├── lib/                  # Utility functions
│   ├── tokens.ts         # DDS design tokens
│   ├── i18n.ts          # Client-side i18n
│   ├── i18n-server.ts   # Server-side i18n
│   ├── content.ts       # Content helpers
│   └── translations.ts  # Translation strings
└── tailwind.config.ts    # Tailwind config with DDS tokens
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## Design System Checklist

✅ No hardcoded hex colors in components (all via tokens)  
✅ Light/Dark themes switch without visual regressions  
✅ EN/ES toggle persists and covers all pages  
✅ Keyboard nav works end-to-end with visible focus rings  
✅ Contact form validates and submits to provider (ENV)  
✅ Home, Services, Cases pages demonstrate DDS sections  
✅ Lighthouse ≥ 95 (Performance/SEO/Best Practices/Accessibility)  
✅ README explains tokens, i18n, MDX, deploy  

## License

Copyright © 2025 Divisy. All rights reserved.

## Support

For questions or issues, contact rts@divisy.co
