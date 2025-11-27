import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RecruiterRequestForm } from '@/components/recruiter-request-form'
import { 
  Users, 
  Search, 
  CheckCircle2, 
  Shield, 
  Zap,
  TrendingUp,
  Building2,
  Target,
  Clock,
  Award,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'

  return {
    title: locale === 'en' ? 'Talent Pool for Recruiters' : 'Banco de Talento para Reclutadores',
    description: locale === 'en'
      ? 'Access pre-screened technology professionals. Find qualified candidates for your open positions with Divisy Talent Pool.'
      : 'Accede a profesionales tecnológicos pre-evaluados. Encuentra candidatos calificados para tus puestos abiertos con el Banco de Talento Divisy.',
  }
}

const benefits = [
  {
    icon: Search,
    title: 'Pre-Screened Candidates',
    description: 'All profiles are vetted for technical skills, experience, and cultural fit before being added to our pool.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We maintain high standards. Every candidate has verified experience and proven track record.',
  },
  {
    icon: Zap,
    title: 'Fast Matching',
    description: 'Get matched with qualified candidates within 48 hours of submitting your requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Whether you need one specialist or a full team, we can scale to meet your hiring needs.',
  },
]

const talentCategories = [
  {
    category: 'Product & Strategy',
    roles: ['Product Managers', 'Product Owners', 'Product Strategists', 'Business Analysts'],
    availableNow: 8,
    onProjects: 12,
    recentlyActive: 3,
  },
  {
    category: 'Cloud & Infrastructure',
    roles: ['Cloud Architects', 'DevOps Engineers', 'SRE Engineers', 'Infrastructure Specialists'],
    availableNow: 12,
    onProjects: 18,
    recentlyActive: 5,
  },
  {
    category: 'Data & Analytics',
    roles: ['Data Engineers', 'Data Analysts', 'Data Scientists', 'ML Engineers'],
    availableNow: 9,
    onProjects: 15,
    recentlyActive: 4,
  },
  {
    category: 'Engineering',
    roles: ['Full-Stack Developers', 'Backend Engineers', 'Frontend Engineers', 'Mobile Developers'],
    availableNow: 15,
    onProjects: 22,
    recentlyActive: 7,
  },
  {
    category: 'AI & Machine Learning',
    roles: ['AI Engineers', 'ML Engineers', 'NLP Specialists', 'Computer Vision Engineers'],
    availableNow: 6,
    onProjects: 9,
    recentlyActive: 2,
  },
]

export default async function TalentPoolPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'

  const translations = {
    en: {
      hero: {
        title: 'Access Our Talent Pool',
        subtitle: 'Find pre-screened, qualified technology professionals for your open positions. Connect with top talent across Spain and Colombia.',
      },
      value: {
        title: 'Why Choose Divisy Talent Pool?',
        subtitle: 'We\'ve built a curated network of technology professionals ready to make an impact.',
      },
      categories: {
        title: 'Talent Categories',
        subtitle: 'Access professionals across all technology disciplines',
      },
      process: {
        title: 'How It Works',
        subtitle: 'Simple, fast, and effective talent sourcing',
      },
      cta: {
        title: 'Ready to Find Your Next Hire?',
        subtitle: 'Request access to our talent pool and start connecting with qualified candidates today.',
      },
    },
    es: {
      hero: {
        title: 'Accede a Nuestro Banco de Talento',
        subtitle: 'Encuentra profesionales tecnológicos pre-evaluados y calificados para tus puestos abiertos. Conecta con el mejor talento en España y Colombia.',
      },
      value: {
        title: '¿Por Qué Elegir el Banco de Talento Divisy?',
        subtitle: 'Hemos construido una red curada de profesionales tecnológicos listos para generar impacto.',
      },
      categories: {
        title: 'Categorías de Talento',
        subtitle: 'Accede a profesionales en todas las disciplinas tecnológicas',
      },
      process: {
        title: 'Cómo Funciona',
        subtitle: 'Búsqueda de talento simple, rápida y efectiva',
      },
      cta: {
        title: '¿Listo para Encontrar tu Próxima Contratación?',
        subtitle: 'Solicita acceso a nuestro banco de talento y comienza a conectar con candidatos calificados hoy.',
      },
    },
  }

  const t = translations[locale]

  const processSteps = [
    {
      step: '01',
      title: locale === 'en' ? 'Submit Request' : 'Envía tu Solicitud',
      description: locale === 'en'
        ? 'Fill out the form with your company details and position requirements.'
        : 'Completa el formulario con los detalles de tu empresa y los requisitos del puesto.',
    },
    {
      step: '02',
      title: locale === 'en' ? 'We Match' : 'Hacemos el Match',
      description: locale === 'en'
        ? 'Our team reviews your needs and matches you with qualified candidates from our pool.'
        : 'Nuestro equipo revisa tus necesidades y te conecta con candidatos calificados de nuestro banco.',
    },
    {
      step: '03',
      title: locale === 'en' ? 'Review Profiles' : 'Revisa Perfiles',
      description: locale === 'en'
        ? 'Receive curated candidate profiles with detailed information and LinkedIn links.'
        : 'Recibe perfiles de candidatos curados con información detallada y enlaces de LinkedIn.',
    },
    {
      step: '04',
      title: locale === 'en' ? 'Connect & Hire' : 'Conecta y Contrata',
      description: locale === 'en'
        ? 'Schedule interviews directly with candidates. We facilitate the connection process.'
        : 'Programa entrevistas directamente con los candidatos. Facilitamos el proceso de conexión.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Talent pool for recruiters"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              {locale === 'en' ? 'For Recruiters & HR Teams' : 'Para Reclutadores y Equipos de RRHH'}
            </Badge>
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.hero.title}
            </h1>
            <p className="mb-8 text-body-lg text-text-muted lg:text-heading-3">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#request-access">
                  {locale === 'en' ? 'Request Access' : 'Solicitar Acceso'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/careers`}>
                  {locale === 'en' ? 'View Open Positions' : 'Ver Puestos Abiertos'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.value.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {t.value.subtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="border-border-subtle bg-surface text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-heading-3 text-text-primary">{benefit.title}</h3>
                    <p className="text-body-md text-text-muted">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activity Stats Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {locale === 'en' ? 'Talent Pool Activity' : 'Actividad del Banco de Talento'}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {locale === 'en'
                ? 'Real-time insights into our active talent network'
                : 'Información en tiempo real de nuestra red de talento activa'}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                label: locale === 'en' ? 'Total Active Profiles' : 'Perfiles Activos Totales',
                value: '126',
                change: locale === 'en' ? '+3 this week' : '+3 esta semana',
                bgColor: 'bg-brand-primary/10',
                iconColor: 'text-brand-primary',
              },
              {
                icon: Target,
                label: locale === 'en' ? 'Available Now' : 'Disponibles Ahora',
                value: '50',
                subtitle: locale === 'en' ? 'Ready to start immediately' : 'Listos para empezar inmediatamente',
                bgColor: 'bg-brand-accent/10',
                iconColor: 'text-brand-accent',
              },
              {
                icon: Briefcase,
                label: locale === 'en' ? 'On Active Projects' : 'En Proyectos Activos',
                value: '76',
                subtitle: locale === 'en' ? 'Available in 1-3 months' : 'Disponibles en 1-3 meses',
                bgColor: 'bg-brand-primary/10',
                iconColor: 'text-brand-primary',
              },
              {
                icon: TrendingUp,
                label: locale === 'en' ? 'New This Month' : 'Nuevos Este Mes',
                value: '21',
                change: locale === 'en' ? '+5 last week' : '+5 la semana pasada',
                bgColor: 'bg-brand-accent/10',
                iconColor: 'text-brand-accent',
              },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="border-border-subtle bg-surface text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                        <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <div className="mb-2 text-heading-1 font-bold text-text-primary">{stat.value}</div>
                    <div className="mb-2 text-body-md font-medium text-text-primary">{stat.label}</div>
                    {stat.subtitle && (
                      <div className="text-body-sm text-text-muted">{stat.subtitle}</div>
                    )}
                    {stat.change && (
                      <div className="mt-2 text-body-sm text-brand-accent">{stat.change}</div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Talent Categories Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.categories.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {t.categories.subtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {talentCategories.map((category, idx) => {
              const totalProfiles = category.availableNow + category.onProjects
              return (
                <Card key={idx} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <Users className="h-3 w-3" />
                          {totalProfiles} Total
                        </Badge>
                        {category.recentlyActive > 0 && (
                          <Badge variant="default" className="gap-1 bg-brand-accent">
                            <Zap className="h-3 w-3" />
                            {category.recentlyActive} New
                          </Badge>
                        )}
                      </div>
                      <Target className="h-5 w-5 text-brand-accent" />
                    </div>
                    <CardTitle className="text-heading-3 text-text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Profile Status */}
                    <div className="rounded-lg border border-border-subtle bg-surface p-4">
                      <div className="mb-3 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-brand-accent/10 p-3">
                          <div className="mb-1 text-body-sm font-medium text-text-muted">
                            {locale === 'en' ? 'Available Now' : 'Disponibles Ahora'}
                          </div>
                          <div className="text-heading-2 font-bold text-brand-accent">
                            {category.availableNow}
                          </div>
                        </div>
                        <div className="rounded-lg bg-brand-primary/10 p-3">
                          <div className="mb-1 text-body-sm font-medium text-text-muted">
                            {locale === 'en' ? 'On Projects' : 'En Proyectos'}
                          </div>
                          <div className="text-heading-2 font-bold text-brand-primary">
                            {category.onProjects}
                          </div>
                          <div className="mt-1 text-body-xs text-text-muted">
                            {locale === 'en' ? 'Available soon' : 'Disponibles pronto'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Roles List */}
                    <div>
                      <h4 className="mb-3 text-body-sm font-semibold text-text-primary">
                        {locale === 'en' ? 'Roles Available' : 'Roles Disponibles'}
                      </h4>
                      <ul className="space-y-2">
                        {category.roles.map((role, roleIdx) => (
                          <li key={roleIdx} className="flex items-start gap-2 text-body-md text-text-muted">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                            <span>{role}</span>
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

      {/* How It Works Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.process.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {t.process.subtitle}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-heading-2 font-semibold text-white shadow-dds-2">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-3 text-heading-3 text-text-primary">{step.title}</h3>
                <p className="text-body-md text-text-muted">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-border-subtle lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Offer Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <Card className="border-brand-primary/20 bg-gradient-to-br from-surface to-brand-primary/5">
              <CardHeader className="text-center">
                <Badge variant="default" className="mb-4 mx-auto w-fit">
                  {locale === 'en' ? 'Exclusive Offer' : 'Oferta Exclusiva'}
                </Badge>
                <CardTitle className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
                  {locale === 'en' ? 'Access Our Talent Pool' : 'Accede a Nuestro Banco de Talento'}
                </CardTitle>
                <CardDescription className="text-body-lg text-text-muted">
                  {locale === 'en'
                    ? 'Get access to pre-screened technology professionals. No upfront costs, pay only when you hire.'
                    : 'Obtén acceso a profesionales tecnológicos pre-evaluados. Sin costos iniciales, paga solo cuando contrates.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Award className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h4 className="mb-2 text-heading-3 text-text-primary">
                      {locale === 'en' ? 'Quality First' : 'Calidad Primero'}
                    </h4>
                    <p className="text-body-sm text-text-muted">
                      {locale === 'en'
                        ? 'All candidates are pre-screened and verified'
                        : 'Todos los candidatos están pre-evaluados y verificados'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Clock className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h4 className="mb-2 text-heading-3 text-text-primary">
                      {locale === 'en' ? 'Fast Turnaround' : 'Respuesta Rápida'}
                    </h4>
                    <p className="text-body-sm text-text-muted">
                      {locale === 'en'
                        ? 'Get matched candidates within 48 hours'
                        : 'Obtén candidatos en menos de 48 horas'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Building2 className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h4 className="mb-2 text-heading-3 text-text-primary">
                      {locale === 'en' ? 'Enterprise Ready' : 'Listo para Empresas'}
                    </h4>
                    <p className="text-body-sm text-text-muted">
                      {locale === 'en'
                        ? 'Scalable solutions for teams of any size'
                        : 'Soluciones escalables para equipos de cualquier tamaño'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Access Form Section */}
      <section id="request-access" className="scroll-mt-24 border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
                {t.cta.title}
              </h2>
              <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
                {t.cta.subtitle}
              </p>
            </div>
            <RecruiterRequestForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  )
}

