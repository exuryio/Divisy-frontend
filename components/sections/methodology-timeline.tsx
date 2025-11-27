'use client'

import { motion } from 'framer-motion'
import { Search, DraftingCompass, Rocket, TrendingUp } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface MethodologyTimelineProps {
  locale: Locale
}

const steps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Deep dive into your business goals, technical constraints, and user needs.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create blueprints, architecture diagrams, and implementation roadmaps.',
    icon: DraftingCompass,
  },
  {
    step: '03',
    title: 'Deliver',
    description: 'Agile sprints with continuous integration and regular stakeholder updates.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Optimize performance, monitor KPIs, and iterate based on real-world data.',
    icon: TrendingUp,
  },
]

export function MethodologyTimeline({ locale }: MethodologyTimelineProps) {
  const t = getTranslations(locale)

  return (
    <section id="methodology" className="relative overflow-hidden bg-gradient-to-b from-surface to-bg-page py-20">
      <div className="container-content">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            {t.home.methodology.title}
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
            {t.home.methodology.subtitle}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-border-subtle lg:block" />
                )}
                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-heading-2 font-semibold text-white shadow-dds-2">
                    {step.step}
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-brand-accent" />
                    <h3 className="text-heading-3 text-text-primary">{step.title}</h3>
                  </div>
                  <p className="text-body-md text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

