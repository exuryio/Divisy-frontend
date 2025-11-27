import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Hero } from '@/components/sections/hero'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { ServicesGrid } from '@/components/sections/services-grid'
import { CaseTeasers } from '@/components/sections/case-teasers'
import { MethodologyTimeline } from '@/components/sections/methodology-timeline'
import { KPIStats, defaultKPIs } from '@/components/sections/kpi-stats'
import { ConsultancyApproach } from '@/components/sections/consultancy-approach'
import { CareersPreview } from '@/components/sections/careers-preview'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedCaseStudies } from '@/lib/content'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.home.hero.title,
    description: t.home.hero.subtitle,
    openGraph: {
      title: t.home.hero.title,
      description: t.home.hero.subtitle,
    },
  }
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const featuredCaseStudies = getFeaturedCaseStudies(locale, 3)

  return (
    <div className="flex flex-col">
      <Hero locale={locale} />
      <LogoCloud />
      <ServicesGrid locale={locale} />
      <ConsultancyApproach locale={locale} />
      <CaseTeasers locale={locale} caseStudies={featuredCaseStudies} />
      <MethodologyTimeline locale={locale} />
      <KPIStats stats={defaultKPIs} />
      <CareersPreview locale={locale} />
      <CTASection locale={locale} variant="inverted" />
    </div>
  )
}
