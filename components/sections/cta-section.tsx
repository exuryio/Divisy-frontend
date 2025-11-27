'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface CTASectionProps {
  locale: Locale
  variant?: 'default' | 'inverted'
}

export function CTASection({ locale, variant = 'default' }: CTASectionProps) {
  const t = getTranslations(locale)

  const isInverted = variant === 'inverted'

  return (
    <section
      className={`py-20 ${
        isInverted
          ? 'bg-brand-primary text-white'
          : 'bg-gradient-to-b from-surface to-bg-page'
      }`}
    >
      <div className="container-content text-center">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className={`mb-4 text-heading-1 lg:text-display-2 ${
              isInverted ? 'text-white' : 'text-text-primary'
            }`}
          >
            {t.home.cta.title}
          </h2>
          <p
            className={`mb-8 text-body-lg ${
              isInverted ? 'text-white/90' : 'text-text-muted'
            }`}
          >
            {t.home.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            variant={isInverted ? 'secondary' : 'default'}
            leftIcon={<span>→</span>}
          >
            <Link href={`/${locale}/contact`}>{t.home.cta.button}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

