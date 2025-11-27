'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, ArrowRight, Mail } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

interface FormSuccessProps {
  locale: Locale
  formType: 'contact' | 'job-application' | 'recruiter-request'
  submissionId?: string
}

const translations = {
  en: {
    contact: {
      title: 'Thank You for Reaching Out!',
      message: 'We\'ve received your inquiry and our business team will review it within 24 hours. We\'ll get back to you soon.',
      nextSteps: 'What happens next?',
      steps: [
        'Our team reviews your project requirements',
        'We schedule a strategy call to understand your needs',
        'We prepare a tailored proposal for your business',
      ],
      cta: 'Explore Our Services',
      ctaSecondary: 'View Case Studies',
    },
    'job-application': {
      title: 'Application Received!',
      message: 'Thank you for your interest in joining Divisy. We\'ve received your application and will review it within 48 hours.',
      nextSteps: 'What happens next?',
      steps: [
        'Our team reviews your profile and experience',
        'We contact qualified candidates within 48 hours',
        'We schedule interviews with the best matches',
      ],
      cta: 'View Other Positions',
      ctaSecondary: 'Learn About Our Culture',
    },
    'recruiter-request': {
      title: 'Access Request Received!',
      message: 'Thank you for your interest in our talent pool. We\'ve received your request and will process it within 24 hours.',
      nextSteps: 'What happens next?',
      steps: [
        'We review your company and hiring needs',
        'We grant access to our curated talent pool',
        'You can browse and connect with qualified candidates',
      ],
      cta: 'Learn More About Our Talent',
      ctaSecondary: 'View Open Positions',
    },
  },
  es: {
    contact: {
      title: '¡Gracias por Contactarnos!',
      message: 'Hemos recibido tu consulta y nuestro equipo de negocios la revisará en menos de 24 horas. Te contactaremos pronto.',
      nextSteps: '¿Qué sigue?',
      steps: [
        'Nuestro equipo revisa los requisitos de tu proyecto',
        'Agendamos una llamada estratégica para entender tus necesidades',
        'Preparamos una propuesta personalizada para tu negocio',
      ],
      cta: 'Explorar Nuestros Servicios',
      ctaSecondary: 'Ver Casos de Estudio',
    },
    'job-application': {
      title: '¡Solicitud Recibida!',
      message: 'Gracias por tu interés en unirte a Divisy. Hemos recibido tu solicitud y la revisaremos en menos de 48 horas.',
      nextSteps: '¿Qué sigue?',
      steps: [
        'Nuestro equipo revisa tu perfil y experiencia',
        'Contactamos a candidatos calificados en menos de 48 horas',
        'Agendamos entrevistas con los mejores candidatos',
      ],
      cta: 'Ver Otros Puestos',
      ctaSecondary: 'Conocer Nuestra Cultura',
    },
    'recruiter-request': {
      title: '¡Solicitud de Acceso Recibida!',
      message: 'Gracias por tu interés en nuestro banco de talento. Hemos recibido tu solicitud y la procesaremos en menos de 24 horas.',
      nextSteps: '¿Qué sigue?',
      steps: [
        'Revisamos tu empresa y necesidades de contratación',
        'Otorgamos acceso a nuestro banco de talento curado',
        'Puedes explorar y conectar con candidatos calificados',
      ],
      cta: 'Conocer Nuestro Talento',
      ctaSecondary: 'Ver Puestos Abiertos',
    },
  },
}

export function FormSuccess({ locale, formType, submissionId }: FormSuccessProps) {
  const t = translations[locale][formType]

  return (
    <Card className="overflow-hidden border-brand-primary/20 bg-gradient-to-br from-surface to-surface-subtle">
      <CardContent className="pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.2, 0.6, 0.2, 1] }}
          className="flex flex-col items-center justify-center py-8 text-center"
        >
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="relative mb-6"
          >
            <div className="relative">
              <CheckCircle2 className="h-20 w-20 text-success" />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="h-8 w-8 text-brand-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-3 text-heading-1 font-semibold text-text-primary"
          >
            {t.title}
          </motion.h3>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mb-8 max-w-md text-body-lg text-text-muted"
          >
            {t.message}
          </motion.p>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-8 w-full max-w-md"
          >
            <h4 className="mb-4 text-heading-3 font-semibold text-text-primary">{t.nextSteps}</h4>
            <div className="space-y-3 text-left">
              {t.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                    <span className="text-body-sm font-semibold text-brand-accent">{index + 1}</span>
                  </div>
                  <p className="text-body-md text-text-muted">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submission ID (if provided) */}
          {submissionId && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="mb-6 text-body-sm text-text-muted"
            >
              {locale === 'en' ? 'Reference ID:' : 'ID de Referencia:'} <span className="font-mono text-brand-primary">{submissionId}</span>
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link href={`/${locale}${formType === 'contact' ? '/services' : formType === 'job-application' ? '/careers' : '/talent-pool'}`}>
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}${formType === 'contact' ? '/cases' : formType === 'job-application' ? '/about' : '/careers'}`}>
                {t.ctaSecondary}
              </Link>
            </Button>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="mt-8 flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-3"
          >
            <Mail className="h-4 w-4 text-brand-primary" />
            <p className="text-body-sm text-text-muted">
              {locale === 'en' ? 'Questions?' : '¿Preguntas?'}{' '}
              <a href="mailto:rts@divisy.co" className="font-medium text-brand-primary hover:underline">
                rts@divisy.co
              </a>
            </p>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

