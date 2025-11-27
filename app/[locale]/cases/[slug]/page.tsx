import { getServerLocale } from '@/lib/i18n-server'
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Mdx } from '@/components/mdx-components'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Default images for case studies by industry
const caseStudyImages: Record<string, string> = {
  'iGaming / RegTech': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'Environmental Services / IoT': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'Financial Services': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
}

export async function generateStaticParams() {
  const enCases = getCaseStudies('en')
  const esCases = getCaseStudies('es')
  return [
    ...enCases.map((caseStudy: { slug: string }) => ({ locale: 'en', slug: caseStudy.slug })),
    ...esCases.map((caseStudy: { slug: string }) => ({ locale: 'es', slug: caseStudy.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const caseStudy = getCaseStudyBySlug(params.slug, locale)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const locale = params.locale as 'en' | 'es'
  const caseStudy = getCaseStudyBySlug(params.slug, locale)

  if (!caseStudy) {
    notFound()
  }

  return (
    <article className="flex flex-col">
      {/* Hero Image Section */}
      <section className="relative h-[400px] w-full overflow-hidden lg:h-[500px]">
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
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-transparent" />
        <div className="container-content relative z-10 flex h-full items-end pb-12">
          <div className="max-w-4xl">
            {caseStudy.industry && (
              <Badge variant="secondary" className="mb-4 backdrop-blur-sm">
                {caseStudy.industry}
              </Badge>
            )}
            <h1 className="mb-4 text-display-1 text-white lg:text-display-1">
              {caseStudy.title}
            </h1>
            <p className="mb-4 text-body-lg text-white/90 lg:text-heading-3">
              {caseStudy.description}
            </p>
            <div className="text-body-sm text-white/80">
              {formatDate(caseStudy.publishedAt, locale)}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">

        {caseStudy.challenge && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold">
                {locale === 'en' ? 'Challenge' : 'Desafío'}
              </h2>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </CardContent>
          </Card>
        )}

        {caseStudy.approach && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold">
                {locale === 'en' ? 'Approach' : 'Enfoque'}
              </h2>
              <p className="text-muted-foreground">{caseStudy.approach}</p>
            </CardContent>
          </Card>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <Mdx code={caseStudy.body.code} />
        </div>

        {caseStudy.results && caseStudy.results.length > 0 && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold">
                {locale === 'en' ? 'Results' : 'Resultados'}
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {caseStudy.techStack && caseStudy.techStack.length > 0 && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold">
                {locale === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  {locale === 'en' ? 'Start Your Project' : 'Inicia Tu Proyecto'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

