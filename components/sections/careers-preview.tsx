'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Calendar, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { type Locale } from '@/lib/i18n'
import Image from 'next/image'

interface CareersPreviewProps {
  locale: Locale
}

// Top 3 featured job offers
const featuredJobs = [
  {
    id: 'senior-cloud-architect',
    title: 'Senior Cloud Architect',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Cloud & Infrastructure',
    publishedAt: '2025-11-15',
  },
  {
    id: 'senior-product-manager',
    title: 'Senior Product Manager',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Product Strategy',
    publishedAt: '2025-11-18',
  },
  {
    id: 'senior-software-engineer-bogota',
    title: 'Senior Software Engineer',
    location: 'Bogotá, Colombia',
    type: 'Full-time',
    department: 'Engineering',
    publishedAt: '2025-11-25',
  },
]

export function CareersPreview({ locale }: CareersPreviewProps) {
  const translations = {
    en: {
      title: 'Join Our Team',
      subtitle: 'Shape enterprise technology with industry leaders. Work on transformative projects that drive measurable business impact.',
      viewAll: 'View All Positions',
      apply: 'Apply Now',
      published: 'Published:',
    },
    es: {
      title: 'Únete a Nuestro Equipo',
      subtitle: 'Dale forma a la tecnología empresarial con líderes de la industria. Trabaja en proyectos transformadores que generan impacto empresarial medible.',
      viewAll: 'Ver Todos los Puestos',
      apply: 'Aplicar Ahora',
      published: 'Publicado:',
    },
  }

  const t = translations[locale]

  return (
    <section id="careers" className="relative overflow-hidden border-y border-border-subtle bg-surface py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Careers background"
          fill
          className="object-cover opacity-5 dark:opacity-2"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface" />
      </div>

      <div className="container-content relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="group h-full border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10">
                      <Briefcase className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-heading-3 text-text-primary">
                        {job.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {job.department}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="gap-1 text-body-sm">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="gap-1 text-body-sm">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </Badge>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-body-sm text-text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {t.published} {formatDate(job.publishedAt, locale)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/${locale}/careers?position=${job.id}#apply`}>
                      {t.apply}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href={`/${locale}/careers`}>
              {t.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

