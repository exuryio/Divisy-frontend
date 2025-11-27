'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Linkedin, ExternalLink } from 'lucide-react'
import { FormSuccess } from './form-success'

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  linkedinProfile: z.string().url('Please enter a valid LinkedIn profile URL').refine(
    (url) => url.includes('linkedin.com/in/'),
    'Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourname)'
  ),
  position: z.string().min(1, 'Please select a position'),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters').optional(),
  resume: z.string().optional(),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

interface JobApplicationFormProps {
  locale: 'en' | 'es'
  positions: Array<{ id: string; title: string }>
}

const translations = {
  en: {
    title: 'Apply for Position',
    description: 'Submit your LinkedIn profile and application details',
    fullName: 'Full Name',
    email: 'Email Address',
    linkedinProfile: 'LinkedIn Profile URL',
    linkedinPlaceholder: 'https://linkedin.com/in/yourname',
    position: 'Position',
    selectPosition: 'Select a position',
    coverLetter: 'Cover Letter (Optional)',
    coverLetterPlaceholder: 'Tell us why you\'re interested in this role...',
    resume: 'Resume URL (Optional)',
    resumePlaceholder: 'https://your-resume-url.com',
    submit: 'Submit Application',
    submitting: 'Submitting...',
    success: 'Application Submitted Successfully!',
    successMessage: 'We\'ve received your application and will review it shortly. We\'ll contact you if your profile matches our requirements.',
    required: 'required',
  },
  es: {
    title: 'Aplicar al Puesto',
    description: 'Envía tu perfil de LinkedIn y los detalles de tu solicitud',
    fullName: 'Nombre Completo',
    email: 'Correo Electrónico',
    linkedinProfile: 'URL del Perfil de LinkedIn',
    linkedinPlaceholder: 'https://linkedin.com/in/tunombre',
    position: 'Puesto',
    selectPosition: 'Selecciona un puesto',
    coverLetter: 'Carta de Presentación (Opcional)',
    coverLetterPlaceholder: 'Cuéntanos por qué te interesa este puesto...',
    resume: 'URL del CV (Opcional)',
    resumePlaceholder: 'https://tu-url-cv.com',
    submit: 'Enviar Solicitud',
    submitting: 'Enviando...',
    success: '¡Solicitud Enviada con Éxito!',
    successMessage: 'Hemos recibido tu solicitud y la revisaremos en breve. Te contactaremos si tu perfil coincide con nuestros requisitos.',
    required: 'requerido',
  },
}

export function JobApplicationForm({ locale, positions }: JobApplicationFormProps) {
  const t = translations[locale]
  const [isSubmitted, setIsSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const positionFromUrl = searchParams.get('position')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: positionFromUrl || '',
    },
  })

  // Update position when URL parameter changes
  useEffect(() => {
    if (positionFromUrl) {
      setValue('position', positionFromUrl)
      // Scroll to form section smoothly
      setTimeout(() => {
        const formSection = document.getElementById('apply')
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [positionFromUrl, setValue])

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://divisy-backend-production.up.railway.app'
      const response = await fetch(`${apiUrl}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'job-application',
          data,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      const result = await response.json()
      setIsSubmitted(true)
      
      // Optional: Track form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          form_type: 'job-application',
          position: data.position,
          submission_id: result.submissionId,
        })
      }
    } catch (error) {
      console.error('Application submission error:', error)
      alert(locale === 'en' ? 'Failed to submit application. Please try again.' : 'Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    }
  }

  if (isSubmitted) {
    return <FormSuccess locale={locale} formType="job-application" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-2 text-text-primary">{t.title}</CardTitle>
        <CardDescription className="text-body-md text-text-muted">{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.fullName} <span className="text-error" aria-label="required">*</span>
              </label>
              <input
                id="fullName"
                {...register('fullName')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && (
                <p className="mt-1 text-body-sm text-error" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.email} <span className="text-error" aria-label="required">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-body-sm text-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="linkedinProfile" className="mb-2 block text-body-md font-medium text-text-primary">
              <Linkedin className="mr-2 inline h-4 w-4" />
              {t.linkedinProfile} <span className="text-error" aria-label="required">*</span>
            </label>
            <input
              id="linkedinProfile"
              type="url"
              {...register('linkedinProfile')}
              placeholder={t.linkedinPlaceholder}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-invalid={errors.linkedinProfile ? 'true' : 'false'}
            />
            {errors.linkedinProfile && (
              <p className="mt-1 text-body-sm text-error" role="alert">
                {errors.linkedinProfile.message}
              </p>
            )}
            <p className="mt-2 text-body-sm text-text-muted">
              {locale === 'en'
                ? 'Make sure your LinkedIn profile is up to date and public.'
                : 'Asegúrate de que tu perfil de LinkedIn esté actualizado y público.'}
            </p>
          </div>

          <div>
            <label htmlFor="position" className="mb-2 block text-body-md font-medium text-text-primary">
              {t.position} <span className="text-error" aria-label="required">*</span>
            </label>
            <select
              id="position"
              {...register('position')}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-invalid={errors.position ? 'true' : 'false'}
            >
              <option value="">{t.selectPosition}</option>
              {positions.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {pos.title}
                </option>
              ))}
            </select>
            {errors.position && (
              <p className="mt-1 text-body-sm text-error" role="alert">
                {errors.position.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="coverLetter" className="mb-2 block text-body-md font-medium text-text-primary">
              {t.coverLetter}
            </label>
            <textarea
              id="coverLetter"
              {...register('coverLetter')}
              rows={5}
              placeholder={t.coverLetterPlaceholder}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-invalid={errors.coverLetter ? 'true' : 'false'}
            />
            {errors.coverLetter && (
              <p className="mt-1 text-body-sm text-error" role="alert">
                {errors.coverLetter.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="resume" className="mb-2 block text-body-md font-medium text-text-primary">
              <ExternalLink className="mr-2 inline h-4 w-4" />
              {t.resume}
            </label>
            <input
              id="resume"
              type="url"
              {...register('resume')}
              placeholder={t.resumePlaceholder}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            />
            <p className="mt-2 text-body-sm text-text-muted">
              {locale === 'en'
                ? 'Optional: Share a link to your resume or portfolio (Google Drive, Dropbox, personal website, etc.)'
                : 'Opcional: Comparte un enlace a tu CV o portafolio (Google Drive, Dropbox, sitio web personal, etc.)'}
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.submitting : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

