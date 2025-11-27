'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useState } from 'react'
import { Building2, Users, Briefcase } from 'lucide-react'
import { FormSuccess } from './form-success'

const recruiterSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  role: z.string().min(1, 'Please select your role'),
  positionsNeeded: z.string().min(1, 'Please specify positions needed'),
  teamSize: z.string().min(1, 'Please select team size'),
  message: z.string().min(20, 'Please provide more details about your needs').optional(),
})

type RecruiterFormData = z.infer<typeof recruiterSchema>

interface RecruiterRequestFormProps {
  locale: 'en' | 'es'
}

const translations = {
  en: {
    title: 'Request Access to Talent Pool',
    description: 'Get access to pre-screened, qualified technology professionals',
    fullName: 'Full Name',
    company: 'Company Name',
    email: 'Email Address',
    phone: 'Phone Number (Optional)',
    role: 'Your Role',
    selectRole: 'Select your role',
    positionsNeeded: 'Positions You\'re Looking For',
    positionsPlaceholder: 'e.g., Senior Cloud Architect, Product Manager, Full-Stack Developer',
    teamSize: 'Team Size',
    selectTeamSize: 'Select team size',
    message: 'Additional Requirements (Optional)',
    messagePlaceholder: 'Tell us about your specific needs, timeline, and any other requirements...',
    submit: 'Request Access',
    submitting: 'Submitting...',
    success: 'Request Submitted Successfully!',
    successMessage: 'We\'ve received your request and will contact you within 24 hours to discuss how we can help you find the right talent.',
    required: 'required',
  },
  es: {
    title: 'Solicitar Acceso al Banco de Talento',
    description: 'Obtén acceso a profesionales tecnológicos pre-evaluados y calificados',
    fullName: 'Nombre Completo',
    company: 'Nombre de la Empresa',
    email: 'Correo Electrónico',
    phone: 'Número de Teléfono (Opcional)',
    role: 'Tu Rol',
    selectRole: 'Selecciona tu rol',
    positionsNeeded: 'Puestos que Estás Buscando',
    positionsPlaceholder: 'ej., Arquitecto Cloud Senior, Product Manager, Desarrollador Full-Stack',
    teamSize: 'Tamaño del Equipo',
    selectTeamSize: 'Selecciona el tamaño del equipo',
    message: 'Requisitos Adicionales (Opcional)',
    messagePlaceholder: 'Cuéntanos sobre tus necesidades específicas, cronograma y otros requisitos...',
    submit: 'Solicitar Acceso',
    submitting: 'Enviando...',
    success: '¡Solicitud Enviada con Éxito!',
    successMessage: 'Hemos recibido tu solicitud y te contactaremos en menos de 24 horas para discutir cómo podemos ayudarte a encontrar el talento adecuado.',
    required: 'requerido',
  },
}

const roleOptions = {
  en: [
    'Head of Talent / Recruitment',
    'HR Director',
    'CTO / Technical Lead',
    'Talent Acquisition Manager',
    'Recruiter',
    'Other',
  ],
  es: [
    'Director de Talento / Reclutamiento',
    'Director de RRHH',
    'CTO / Líder Técnico',
    'Gerente de Adquisición de Talento',
    'Reclutador',
    'Otro',
  ],
}

const teamSizeOptions = {
  en: [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees',
  ],
  es: [
    '1-10 empleados',
    '11-50 empleados',
    '51-200 empleados',
    '201-500 empleados',
    '500+ empleados',
  ],
}

export function RecruiterRequestForm({ locale }: RecruiterRequestFormProps) {
  const t = translations[locale]
  const roles = roleOptions[locale]
  const teamSizes = teamSizeOptions[locale]
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecruiterFormData>({
    resolver: zodResolver(recruiterSchema),
  })

  const onSubmit = async (data: RecruiterFormData) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://divisy-backend-production.up.railway.app'
      const response = await fetch(`${apiUrl}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'recruiter-request',
          data,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      const result = await response.json()
      setIsSubmitted(true)
      
      // Optional: Track form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          form_type: 'recruiter-request',
          company: data.company,
          submission_id: result.submissionId,
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert(locale === 'en' ? 'Failed to submit request. Please try again.' : 'Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    }
  }

  if (isSubmitted) {
    return <FormSuccess locale={locale} formType="recruiter-request" />
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
              <label htmlFor="company" className="mb-2 block text-body-md font-medium text-text-primary">
                <Building2 className="mr-2 inline h-4 w-4" />
                {t.company} <span className="text-error" aria-label="required">*</span>
              </label>
              <input
                id="company"
                {...register('company')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.company ? 'true' : 'false'}
              />
              {errors.company && (
                <p className="mt-1 text-body-sm text-error" role="alert">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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

            <div>
              <label htmlFor="phone" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.phone}
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="role" className="mb-2 block text-body-md font-medium text-text-primary">
                <Briefcase className="mr-2 inline h-4 w-4" />
                {t.role} <span className="text-error" aria-label="required">*</span>
              </label>
              <select
                id="role"
                {...register('role')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.role ? 'true' : 'false'}
              >
                <option value="">{t.selectRole}</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="mt-1 text-body-sm text-error" role="alert">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="teamSize" className="mb-2 block text-body-md font-medium text-text-primary">
                <Users className="mr-2 inline h-4 w-4" />
                {t.teamSize} <span className="text-error" aria-label="required">*</span>
              </label>
              <select
                id="teamSize"
                {...register('teamSize')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.teamSize ? 'true' : 'false'}
              >
                <option value="">{t.selectTeamSize}</option>
                {teamSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {errors.teamSize && (
                <p className="mt-1 text-body-sm text-error" role="alert">
                  {errors.teamSize.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="positionsNeeded" className="mb-2 block text-body-md font-medium text-text-primary">
              {t.positionsNeeded} <span className="text-error" aria-label="required">*</span>
            </label>
            <input
              id="positionsNeeded"
              {...register('positionsNeeded')}
              placeholder={t.positionsPlaceholder}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-invalid={errors.positionsNeeded ? 'true' : 'false'}
            />
            {errors.positionsNeeded && (
              <p className="mt-1 text-body-sm text-error" role="alert">
                {errors.positionsNeeded.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-body-md font-medium text-text-primary">
              {t.message}
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={5}
              placeholder={t.messagePlaceholder}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="mt-1 text-body-sm text-error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.submitting : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

