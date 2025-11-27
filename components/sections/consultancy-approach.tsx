'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Lightbulb, Handshake, TrendingUp } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface ConsultancyApproachProps {
  locale: Locale
}

const approachPoints = [
  {
    icon: Users,
    title: 'Expert Consultants',
    description: 'Senior-level consultants with 10+ years of enterprise experience working directly with your team.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Thinking',
    description: 'Data-driven insights and strategic planning to align technology with business objectives.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Handshake,
    title: 'Partnership Approach',
    description: 'We work alongside your team, transferring knowledge and building capabilities for long-term success.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Results',
    description: 'Clear KPIs, regular reporting, and continuous optimization to ensure your investment delivers value.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
]

export function ConsultancyApproach({ locale }: ConsultancyApproachProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-surface py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container-content relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            How We Work With You
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
            Our consultancy approach puts people at the center. We collaborate closely with your team to deliver
            solutions that drive real business impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {approachPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/90 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-heading-3 text-text-primary">{point.title}</h3>
                    <p className="text-body-sm text-text-muted">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Main Consultancy Image */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Divisy consultants collaborating with clients"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-primary/60 to-transparent" />
            <div className="relative z-10 flex h-full items-center">
              <div className="container-content">
                <div className="max-w-2xl">
                  <h3 className="mb-4 text-heading-1 text-white lg:text-display-2">
                    Partnership That Drives Results
                  </h3>
                  <p className="mb-6 text-body-lg text-white/90">
                    We don&apos;t just deliver projects—we build lasting partnerships. Our consultants work embedded
                    with your team, sharing knowledge and building capabilities that extend beyond the engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

