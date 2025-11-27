import { getServerLocale } from '@/lib/i18n-server'
import { getCaseStudies } from '@/lib/content'
import { getTranslations } from '@/lib/translations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Default images for case studies by industry
const caseStudyImages: Record<string, string> = {
  'iGaming / RegTech': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'Environmental Services / IoT': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'Financial Services': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.cases,
    description: 'Case studies showcasing real results from Divisy technology consulting projects',
  }
}

export default async function CasesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)
  const caseStudies = getCaseStudies(locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Case studies"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.nav.cases}
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Real results from real projects. See how we help companies accelerate their products.'
                : 'Resultados reales de proyectos reales. Ve cómo ayudamos a las empresas a acelerar sus productos.'}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-content">

          {caseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy: { slug: string; title: string; description: string; publishedAt: string; industry?: string; image?: string; results?: string[]; url: string }) => (
                <Card key={caseStudy.slug} className="group h-full overflow-hidden transition-all duration-ui hover:shadow-dds-2">
                  {/* Case Study Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        caseStudy.image
                          ? caseStudy.image
                          : caseStudy.industry && caseStudyImages[caseStudy.industry]
                          ? caseStudyImages[caseStudy.industry]
                          : caseStudyImages.default
                      }
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                    {caseStudy.industry && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="backdrop-blur-sm">
                          {caseStudy.industry}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-heading-3 text-text-primary">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-body-md text-text-muted">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {caseStudy.results && caseStudy.results.length > 0 && (
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {caseStudy.results.slice(0, 2).map((result: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-body-sm">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                              <span className="text-text-muted">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mb-4 text-body-sm text-text-muted">
                      {formatDate(caseStudy.publishedAt, locale)}
                    </div>
                    <Button variant="ghost" asChild>
                      <Link href={caseStudy.url}>
                        {t.common.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted">
                {locale === 'en' ? 'Case studies coming soon.' : 'Casos de estudio próximamente.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

