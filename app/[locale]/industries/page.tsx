import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'
import { Building2, ShoppingCart, Shield, GraduationCap, Landmark } from 'lucide-react'

// Industry-specific images
const industryImages: Record<string, string> = {
  fintech: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  ecommerce: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  regtech: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
  government: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  education: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop',
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.industries,
    description: 'Technology consulting services for various industries',
  }
}

const industries = {
  en: [
    {
      id: 'fintech',
      name: 'Fintech',
      icon: Building2,
      challenges: [
        'Regulatory compliance and security requirements',
        'Real-time transaction processing at scale',
        'Integration with banking and payment systems',
      ],
      solutions: [
        'Secure cloud architectures with compliance built-in',
        'High-performance data pipelines for real-time analytics',
        'API-first integrations with financial services',
      ],
    },
    {
      id: 'ecommerce',
      name: 'eCommerce',
      icon: ShoppingCart,
      challenges: [
        'Handling peak traffic during sales events',
        'Inventory management across multiple channels',
        'Personalization and recommendation engines',
      ],
      solutions: [
        'Auto-scaling cloud infrastructure',
        'Unified inventory management systems',
        'AI-powered recommendation and personalization',
      ],
    },
    {
      id: 'regtech',
      name: 'RegTech / iGaming',
      icon: Shield,
      challenges: [
        'KYC/AML compliance automation',
        'Fraud detection and prevention',
        'Multi-jurisdiction regulatory requirements',
      ],
      solutions: [
        'Automated compliance workflows',
        'Machine learning-based fraud detection',
        'Regulatory reporting and audit trails',
      ],
    },
    {
      id: 'government',
      name: 'Government',
      icon: Landmark,
      challenges: [
        'Legacy system modernization',
        'Citizen data privacy and security',
        'Inter-agency data sharing',
      ],
      solutions: [
        'Cloud migration strategies',
        'Secure data architectures',
        'API gateways for service integration',
      ],
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      challenges: [
        'Student information system integration',
        'Learning analytics and personalization',
        'Remote learning platform scalability',
      ],
      solutions: [
        'Unified student data platforms',
        'Analytics dashboards for educators',
        'Scalable learning management systems',
      ],
    },
  ],
  es: [
    {
      id: 'fintech',
      name: 'Fintech',
      icon: Building2,
      challenges: [
        'Cumplimiento regulatorio y requisitos de seguridad',
        'Procesamiento de transacciones en tiempo real a escala',
        'Integración con sistemas bancarios y de pagos',
      ],
      solutions: [
        'Arquitecturas cloud seguras con cumplimiento integrado',
        'Pipelines de datos de alto rendimiento para análisis en tiempo real',
        'Integraciones API-first con servicios financieros',
      ],
    },
    {
      id: 'ecommerce',
      name: 'eCommerce',
      icon: ShoppingCart,
      challenges: [
        'Manejo de tráfico pico durante eventos de ventas',
        'Gestión de inventario en múltiples canales',
        'Motores de personalización y recomendación',
      ],
      solutions: [
        'Infraestructura cloud con auto-escalado',
        'Sistemas unificados de gestión de inventario',
        'Recomendación y personalización impulsadas por IA',
      ],
    },
    {
      id: 'regtech',
      name: 'RegTech / iGaming',
      icon: Shield,
      challenges: [
        'Automatización de cumplimiento KYC/AML',
        'Detección y prevención de fraude',
        'Requisitos regulatorios multi-jurisdiccionales',
      ],
      solutions: [
        'Flujos de trabajo de cumplimiento automatizados',
        'Detección de fraude basada en machine learning',
        'Reportes regulatorios y auditorías',
      ],
    },
    {
      id: 'government',
      name: 'Gobierno',
      icon: Landmark,
      challenges: [
        'Modernización de sistemas legacy',
        'Privacidad y seguridad de datos ciudadanos',
        'Intercambio de datos entre agencias',
      ],
      solutions: [
        'Estrategias de migración a cloud',
        'Arquitecturas de datos seguras',
        'API gateways para integración de servicios',
      ],
    },
    {
      id: 'education',
      name: 'Educación',
      icon: GraduationCap,
      challenges: [
        'Integración de sistemas de información estudiantil',
        'Analíticas de aprendizaje y personalización',
        'Escalabilidad de plataformas de aprendizaje remoto',
      ],
      solutions: [
        'Plataformas unificadas de datos estudiantiles',
        'Dashboards analíticos para educadores',
        'Sistemas de gestión de aprendizaje escalables',
      ],
    },
  ],
}

export default async function IndustriesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)
  const industryData = industries[locale]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Industries"
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
              {t.nav.industries}
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Industry-specific solutions tailored to your unique challenges'
                : 'Soluciones específicas de la industria adaptadas a tus desafíos únicos'}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryData.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.id} className="group h-full overflow-hidden transition-all duration-ui hover:shadow-dds-2">
                  {/* Industry Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={industryImages[industry.id] || industryImages.fintech}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/90 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-heading-3 text-text-primary">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="mb-3 text-body-md font-semibold text-text-primary">
                        {locale === 'en' ? 'Key Challenges' : 'Desafíos Clave'}
                      </h3>
                      <ul className="space-y-2 text-body-sm text-text-muted">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-body-md font-semibold text-text-primary">
                        {locale === 'en' ? 'How Divisy Helps' : 'Cómo Divisy Ayuda'}
                      </h3>
                      <ul className="space-y-2 text-body-sm text-text-muted">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

