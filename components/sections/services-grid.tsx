'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Cloud, Zap, Code, Brain } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface ServicesGridProps {
  locale: Locale
}

const services = [
  {
    id: 'product-strategy',
    icon: Target,
    title: 'Product Strategy & Roadmap',
    description: 'Define clear product vision, prioritize features, and create actionable roadmaps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'cloud-architecture',
    icon: Cloud,
    title: 'Cloud & Data Architecture',
    description: 'Scalable cloud infrastructures and data pipelines for modern applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 'integrations',
    icon: Zap,
    title: 'Platform Integrations',
    description: 'API, KYC, payments, and compliance integrations to accelerate development.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'modernization',
    icon: Code,
    title: 'Modernization & Delivery',
    description: 'Legacy modernization and agile delivery practices for faster time-to-market.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Applied AI',
    description: 'Copilots, RAG systems, and internal AI tools to enhance productivity.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
  },
]

export function ServicesGrid({ locale }: ServicesGridProps) {
  const t = getTranslations(locale)

  return (
    <section id="services" className="py-20">
      <div className="container-content">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            {t.home.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
            {t.home.services.subtitle}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden transition-all duration-ui hover:shadow-dds-2">
                  {/* Service Image - Uniform height */}
                  <div className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                    <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/90 backdrop-blur-sm sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-heading-3 text-text-primary line-clamp-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-body-md text-text-muted line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" asChild className="w-full justify-start">
                      <Link href={`/${locale}/services#${service.id}`}>
                        {t.common.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

