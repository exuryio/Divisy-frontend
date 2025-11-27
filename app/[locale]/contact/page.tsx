import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { ContactForm } from '@/components/contact-form'
import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, User } from 'lucide-react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.contact,
    description: 'Get in touch with Divisy for technology consulting services',
  }
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Divisy"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.nav.contact}
            </h1>
            <p className="mb-4 mx-auto max-w-2xl text-body-lg font-medium text-brand-primary lg:text-heading-3">
              {t.brand.tagline}
            </p>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                : 'Completa el formulario y te responderemos en menos de 24 horas.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container-content">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Info with Image */}
            <div className="relative">
              <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
                  alt="Contact our team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
              </div>
              <h2 className="mb-6 text-heading-2 text-text-primary">
                {locale === 'en' ? 'Get in Touch' : 'Contáctanos'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <User className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-body-md font-semibold text-text-primary">
                      {locale === 'en' ? 'Business Representative' : 'Representante de Negocios'}
                    </h3>
                    <p className="mb-2 text-body-sm text-text-muted">
                      {locale === 'en'
                        ? 'Contact our business team for strategic consultations and partnership opportunities.'
                        : 'Contacta a nuestro equipo de negocios para consultorías estratégicas y oportunidades de asociación.'}
                    </p>
                    <a
                      href="mailto:rts@divisy.co"
                      className="text-body-md font-medium text-brand-primary transition-colors duration-ui hover:text-brand-primary-light"
                    >
                      rts@divisy.co
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-body-md font-semibold text-text-primary">
                      {locale === 'en' ? 'Offices' : 'Oficinas'}
                    </h3>
                    <p className="text-body-md text-text-muted">Madrid, Spain</p>
                    <p className="text-body-md text-text-muted">Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-body-md font-semibold text-text-primary">
                      {locale === 'en' ? 'Response Time' : 'Tiempo de Respuesta'}
                    </h3>
                    <p className="text-body-md text-text-muted">
                      {locale === 'en' ? 'Within 24 hours' : 'En menos de 24 horas'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  )
}

