'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useState } from 'react'
import { FormSuccess } from './form-success'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
  nda: z.boolean().refine((val) => val === true, 'NDA agreement is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  locale: 'en' | 'es'
}

const translations = {
  en: {
    title: 'Get in Touch',
    description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
    name: 'Full Name',
    company: 'Company',
    email: 'Email',
    phone: 'Phone (Optional)',
    projectType: 'Project Type',
    budget: 'Estimated Budget',
    message: 'Message (Optional)',
    nda: 'I agree to sign an NDA if required',
    submit: 'Send Message',
    success: 'Thank you! We\'ll get back to you soon.',
    selectProject: 'Select project type...',
    selectBudget: 'Select budget range...',
    projectTypes: {
      strategy: 'Product Strategy & Roadmap',
      cloud: 'Cloud & Data Architecture',
      integrations: 'Platform Integrations',
      modernization: 'Modernization & Delivery',
      ai: 'Applied AI',
      other: 'Other',
    },
    budgets: {
      small: 'Under $50K',
      medium: '$50K - $200K',
      large: '$200K - $500K',
      enterprise: 'Over $500K',
    },
  },
  es: {
    title: 'Contáctanos',
    description: 'Completa el formulario y te responderemos en menos de 24 horas.',
    name: 'Nombre Completo',
    company: 'Empresa',
    email: 'Correo Electrónico',
    phone: 'Teléfono (Opcional)',
    projectType: 'Tipo de Proyecto',
    budget: 'Presupuesto Estimado',
    message: 'Mensaje (Opcional)',
    nda: 'Acepto firmar un NDA si es necesario',
    submit: 'Enviar Mensaje',
    success: '¡Gracias! Te contactaremos pronto.',
    selectProject: 'Selecciona el tipo de proyecto...',
    selectBudget: 'Selecciona el rango de presupuesto...',
    projectTypes: {
      strategy: 'Estrategia de Producto y Roadmap',
      cloud: 'Arquitectura Cloud y Datos',
      integrations: 'Integraciones de Plataforma',
      modernization: 'Modernización y Entrega',
      ai: 'IA Aplicada',
      other: 'Otro',
    },
    budgets: {
      small: 'Menos de $50K',
      medium: '$50K - $200K',
      large: '$200K - $500K',
      enterprise: 'Más de $500K',
    },
  },
}

export function ContactForm({ locale }: ContactFormProps) {
  const t = translations[locale]
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Get API URL from environment variable (available at build time for static export)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://divisy-backend-production.up.railway.app'
      
      console.log('Submitting to:', `${apiUrl}/api/submit-form`)
      
      const response = await fetch(`${apiUrl}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error:', response.status, errorText)
        throw new Error(`Failed to submit form: ${response.status} ${errorText}`)
      }

      const result = await response.json()
      console.log('Form submitted successfully:', result)
      setIsSubmitted(true)
      
      // Optional: Track form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          form_type: 'contact',
          submission_id: result.submissionId,
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.error('Full error:', errorMessage)
      alert(locale === 'en' 
        ? `Failed to submit form: ${errorMessage}. Please check the console for details.` 
        : `Error al enviar el formulario: ${errorMessage}. Por favor, revisa la consola para más detalles.`)
    }
  }

  if (isSubmitted) {
    return <FormSuccess locale={locale} formType="contact" />
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
              <label htmlFor="name" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.name} <span className="text-error" aria-label="required">*</span>
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-body-sm text-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.company} <span className="text-error" aria-label="required">*</span>
              </label>
              <input
                id="company"
                {...register('company')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.company ? 'true' : 'false'}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && (
                <p id="company-error" className="mt-1 text-body-sm text-error" role="alert">
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
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-body-sm text-error" role="alert">
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
              <label htmlFor="projectType" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.projectType} <span className="text-error" aria-label="required">*</span>
              </label>
              <select
                id="projectType"
                {...register('projectType')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.projectType ? 'true' : 'false'}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              >
                <option value="">{t.selectProject}</option>
                <option value="strategy">{t.projectTypes.strategy}</option>
                <option value="cloud">{t.projectTypes.cloud}</option>
                <option value="integrations">{t.projectTypes.integrations}</option>
                <option value="modernization">{t.projectTypes.modernization}</option>
                <option value="ai">{t.projectTypes.ai}</option>
                <option value="other">{t.projectTypes.other}</option>
              </select>
              {errors.projectType && (
                <p id="projectType-error" className="mt-1 text-body-sm text-error" role="alert">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block text-body-md font-medium text-text-primary">
                {t.budget} <span className="text-error" aria-label="required">*</span>
              </label>
              <select
                id="budget"
                {...register('budget')}
                className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.budget ? 'true' : 'false'}
                aria-describedby={errors.budget ? 'budget-error' : undefined}
              >
                <option value="">{t.selectBudget}</option>
                <option value="small">{t.budgets.small}</option>
                <option value="medium">{t.budgets.medium}</option>
                <option value="large">{t.budgets.large}</option>
                <option value="enterprise">{t.budgets.enterprise}</option>
              </select>
              {errors.budget && (
                <p id="budget-error" className="mt-1 text-body-sm text-error" role="alert">
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-body-md font-medium text-text-primary">
              {t.message}
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-body-md text-text-primary transition-colors duration-ui focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            />
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register('nda')}
                className="h-5 w-5 rounded border-border-subtle text-brand-primary focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                aria-invalid={errors.nda ? 'true' : 'false'}
                aria-describedby={errors.nda ? 'nda-error' : undefined}
              />
              <span className="text-body-md text-text-primary">
                {t.nda} <span className="text-error" aria-label="required">*</span>
              </span>
            </label>
            {errors.nda && (
              <p id="nda-error" className="mt-1 text-body-sm text-error" role="alert">
                {errors.nda.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? 'Sending...' : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
