'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Users, Award, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface HeroProps {
  locale: Locale
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.6, 0.2, 1],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.6, 0.2, 1],
    },
  },
}

export function Hero({ locale }: HeroProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-bg-page sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-page to-surface/50" />
      </div>

      <div className="container-content relative z-10 pt-2 pb-12 sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24">
        <div className="grid gap-12 sm:gap-16 md:gap-20 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Content - Minimalist & Trust-Focused */}
          <motion.div
            className="mx-auto max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge - Brand Identity */}
            <motion.div
              className="mb-6 flex items-center justify-center gap-3 lg:justify-start sm:mb-8"
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2">
                <span className="text-body-sm font-medium text-brand-primary">
                  {t.brand.taglineShort}
                </span>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2 sm:inline-flex">
                <Award className="h-4 w-4 text-brand-accent" />
                <span className="text-body-sm font-medium text-text-muted">
                  {locale === 'en' ? 'Trusted by Leading Companies' : 'Confiado por Empresas Líderes'}
                </span>
              </div>
            </motion.div>

            {/* Headline - Clean & Professional */}
            <motion.h1
              className="mb-4 text-[32px] font-semibold leading-[1.15] text-text-primary sm:mb-6 sm:text-[40px] sm:leading-[48px] md:text-[52px] md:leading-[60px] lg:text-[60px] lg:leading-[68px]"
              variants={itemVariants}
            >
              {t.home.hero.title}
            </motion.h1>

            {/* Subheadline - Spacious */}
            <motion.p
              className="mb-8 text-body-lg leading-relaxed text-text-muted sm:mb-10 sm:text-[18px] sm:leading-[28px] md:mb-12 md:text-[20px] md:leading-[32px]"
              variants={itemVariants}
            >
              {t.home.hero.subtitle}
            </motion.p>

            {/* CTAs - Clean & Spacious */}
            <motion.div
              className="mb-8 flex w-full flex-col items-stretch gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-center sm:gap-3 md:mb-12 lg:justify-start"
              variants={itemVariants}
            >
              <Button asChild size="md" className="group w-full text-sm sm:min-w-[180px] sm:w-auto md:min-w-[200px]">
                <Link href={`/${locale}/contact`}>
                  {t.home.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="md" className="w-full border text-sm sm:min-w-[160px] sm:w-auto md:min-w-[180px]">
                <Link href={`/${locale}/cases`}>{t.home.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>

            {/* Minimal Stats - Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-6 border-t border-border-subtle pt-8"
              variants={itemVariants}
            >
              <div className="text-center lg:text-left">
                <div className="mb-1 text-heading-2 font-semibold text-text-primary">50+</div>
                <div className="text-body-sm text-text-muted">
                  {locale === 'en' ? 'Projects' : 'Proyectos'}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="mb-1 text-heading-2 font-semibold text-text-primary">35%</div>
                <div className="text-body-sm text-text-muted">
                  {locale === 'en' ? 'Cost Reduction' : 'Reducción de Costos'}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="mb-1 text-heading-2 font-semibold text-text-primary">99.9%</div>
                <div className="text-body-sm text-text-muted">
                  {locale === 'en' ? 'Satisfaction' : 'Satisfacción'}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Minimalist & Clean */}
          <motion.div
            className="relative order-first mb-12 lg:order-last lg:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main Image Container - Clean & Spacious */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-surface sm:h-[380px] md:h-[480px] lg:h-[580px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="International technology consulting team collaborating on strategy"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
                {/* Minimal Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

