'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

// Default images for case studies by industry
const caseStudyImages: Record<string, string> = {
  'iGaming / RegTech': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'Environmental Services / IoT': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'Financial Services': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
}

interface CaseStudy {
  slug: string
  title: string
  description: string
  industry?: string
  image?: string
  results?: string[]
  url: string
}

interface CaseTeasersProps {
  locale: Locale
  caseStudies: CaseStudy[]
}

export function CaseTeasers({ locale, caseStudies }: CaseTeasersProps) {
  const t = getTranslations(locale)

  if (caseStudies.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-20">
      <div className="container-content">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            Featured Case Studies
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
            Real results from real projects
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden transition-all duration-ui hover:shadow-dds-2">
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
                    <ul className="mb-4 space-y-2">
                      {caseStudy.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-body-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                          <span className="text-text-muted">{result}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button variant="ghost" asChild>
                    <Link href={caseStudy.url}>
                      {t.common.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href={`/${locale}/cases`}>View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

