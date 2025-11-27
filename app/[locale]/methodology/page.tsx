import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'
import { Search, DraftingCompass, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.methodology,
    description: 'Our proven approach to delivering measurable results',
  }
}

const methodology = {
  en: {
    title: 'Our Methodology',
    subtitle: 'A proven approach to delivering results',
    steps: [
      {
        icon: Search,
        title: 'Discover',
        description: 'Deep dive into your business goals, technical constraints, and user needs.',
        activities: [
          'Stakeholder interviews and workshops',
          'Technical audit and architecture review',
          'User research and journey mapping',
          'Competitive analysis',
        ],
      },
      {
        icon: DraftingCompass,
        title: 'Design',
        description: 'Create blueprints, architecture diagrams, and implementation roadmaps.',
        activities: [
          'Solution architecture design',
          'Technical specifications and API design',
          'Implementation roadmap with milestones',
          'Risk assessment and mitigation plans',
        ],
      },
      {
        icon: Rocket,
        title: 'Deliver',
        description: 'Agile sprints with continuous integration and regular stakeholder updates.',
        activities: [
          'Sprint planning and daily standups',
          'Continuous integration and deployment',
          'Regular demos and stakeholder feedback',
          'Quality assurance and testing',
        ],
      },
      {
        icon: TrendingUp,
        title: 'Scale',
        description: 'Optimize performance, monitor KPIs, and iterate based on real-world data.',
        activities: [
          'Performance optimization',
          'KPI monitoring and dashboards',
          'User feedback collection and analysis',
          'Iterative improvements',
        ],
      },
    ],
    governance: {
      title: 'Governance & OKRs',
      description:
        'We establish clear objectives and key results (OKRs) at the start of each engagement, ensuring alignment and measurable outcomes.',
      points: [
        'Weekly progress reviews',
        'Monthly OKR assessments',
        'Transparent reporting and dashboards',
        'Stakeholder alignment sessions',
      ],
    },
  },
  es: {
    title: 'Nuestra Metodología',
    subtitle: 'Un enfoque probado para entregar resultados',
    steps: [
      {
        icon: Search,
        title: 'Descubrir',
        description: 'Profundiza en tus objetivos de negocio, restricciones técnicas y necesidades de usuarios.',
        activities: [
          'Entrevistas y talleres con stakeholders',
          'Auditoría técnica y revisión de arquitectura',
          'Investigación de usuarios y mapeo de jornadas',
          'Análisis competitivo',
        ],
      },
      {
        icon: DraftingCompass,
        title: 'Diseñar',
        description: 'Crea planos, diagramas de arquitectura y roadmaps de implementación.',
        activities: [
          'Diseño de arquitectura de solución',
          'Especificaciones técnicas y diseño de API',
          'Roadmap de implementación con hitos',
          'Evaluación de riesgos y planes de mitigación',
        ],
      },
      {
        icon: Rocket,
        title: 'Entregar',
        description: 'Sprints ágiles con integración continua y actualizaciones regulares a stakeholders.',
        activities: [
          'Planificación de sprints y daily standups',
          'Integración y despliegue continuos',
          'Demos regulares y feedback de stakeholders',
          'Aseguramiento de calidad y testing',
        ],
      },
      {
        icon: TrendingUp,
        title: 'Escalar',
        description: 'Optimiza el rendimiento, monitorea KPIs e itera basado en datos del mundo real.',
        activities: [
          'Optimización de rendimiento',
          'Monitoreo de KPIs y dashboards',
          'Recolección y análisis de feedback de usuarios',
          'Mejoras iterativas',
        ],
      },
    ],
    governance: {
      title: 'Gobernanza y OKRs',
      description:
        'Establecemos objetivos claros y resultados clave (OKRs) al inicio de cada compromiso, asegurando alineación y resultados medibles.',
      points: [
        'Revisiones de progreso semanales',
        'Evaluaciones mensuales de OKRs',
        'Reportes y dashboards transparentes',
        'Sesiones de alineación con stakeholders',
      ],
    },
  },
}

export default async function MethodologyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)
  const methodData = methodology[locale]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Methodology"
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
              {methodData.title}
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {methodData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-20">
        <div className="container-content">
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {methodData.steps.map((step, index) => {
          const Icon = step.icon
          return (
            <Card key={step.title} className="group overflow-hidden transition-all duration-ui hover:shadow-dds-2">
              {/* Step Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/90 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-body-md font-semibold text-white">
                  {index + 1}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-heading-3 text-text-primary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-body-md text-text-muted">{step.description}</p>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Activities
                  </h4>
                  <ul className="space-y-2">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

          {/* Governance Section */}
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Governance"
                fill
                className="object-cover opacity-5"
                sizes="100vw"
              />
            </div>
            <div className="relative p-12">
              <h2 className="mb-4 text-heading-2 text-text-primary lg:text-heading-1">
                {methodData.governance.title}
              </h2>
              <p className="mb-6 text-body-lg text-text-muted">
                {methodData.governance.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {methodData.governance.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                    <span className="text-body-md text-text-muted">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

