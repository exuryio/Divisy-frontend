import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { JobApplicationForm } from '@/components/job-application-form'
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  TrendingUp,
  Code,
  Cloud,
  Database,
  Brain,
  Zap,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.careers,
    description: locale === 'en'
      ? 'Join Divisy - Technology consulting jobs in Spain (remote) and Colombia (Bogotá, Medellín). Product strategy, cloud architecture, data engineering, and AI positions.'
      : 'Únete a Divisy - Trabajos de consultoría tecnológica en España (remoto) y Colombia (Bogotá, Medellín). Estrategia de producto, arquitectura cloud, ingeniería de datos y puestos de IA.',
  }
}

// Job Offers - Spain (Remote) and Colombia (Bogotá & Medellín)
const jobOffers = [
  {
    id: 'senior-cloud-architect',
    title: 'Senior Cloud Architect',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Cloud & Infrastructure',
    icon: Cloud,
    publishedAt: '2025-11-15',
    description: 'Lead cloud architecture initiatives for enterprise clients. Design scalable, secure, and cost-effective cloud solutions on AWS, Azure, and GCP.',
    requirements: [
      '5+ years of cloud architecture experience',
      'Expert in AWS, Azure, or GCP',
      'Strong knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Experience with microservices and containerization',
      'Excellent communication skills in Spanish and English',
    ],
    benefits: [
      'Competitive salary (€60K - €90K)',
      '100% remote work',
      'Flexible working hours',
      'Professional development budget',
      'Health insurance',
    ],
  },
  {
    id: 'senior-product-manager',
    title: 'Senior Product Manager',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Product Strategy',
    icon: Briefcase,
    publishedAt: '2025-11-18',
    description: 'Drive product strategy and roadmap for B2B technology clients. Work closely with engineering teams and stakeholders to deliver impactful products.',
    requirements: [
      '5+ years of product management experience',
      'Experience with B2B SaaS products',
      'Strong analytical and strategic thinking',
      'Agile/Scrum certification preferred',
      'Fluent in Spanish and English',
    ],
    benefits: [
      'Competitive salary (€55K - €85K)',
      '100% remote work',
      'Equity participation',
      'Learning and development opportunities',
      'Flexible PTO',
    ],
  },
  {
    id: 'data-engineering-lead',
    title: 'Data Engineering Lead',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Data & Analytics',
    icon: Database,
    publishedAt: '2025-11-20',
    description: 'Build and maintain data pipelines, data warehouses, and analytics platforms. Lead data engineering projects for enterprise clients.',
    requirements: [
      '4+ years of data engineering experience',
      'Expert in Python, SQL, and data processing frameworks',
      'Experience with Spark, Airflow, or similar',
      'Knowledge of data warehousing (Snowflake, BigQuery, Redshift)',
      'Strong problem-solving skills',
    ],
    benefits: [
      'Competitive salary (€58K - €88K)',
      '100% remote work',
      'Latest tools and technologies',
      'Conference attendance budget',
      'Work-life balance',
    ],
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Applied AI',
    icon: Brain,
    publishedAt: '2025-11-22',
    description: 'Develop AI solutions including RAG systems, copilots, and internal AI tools. Work with LLMs, vector databases, and AI frameworks.',
    requirements: [
      '3+ years of AI/ML engineering experience',
      'Experience with LLMs (OpenAI, Anthropic, open-source)',
      'Knowledge of Python, LangChain, and vector databases',
      'Experience building production AI applications',
      'Strong software engineering fundamentals',
    ],
    benefits: [
      'Competitive salary (€50K - €80K)',
      '100% remote work',
      'Cutting-edge AI projects',
      'Research and experimentation time',
      'AI conference and training budget',
    ],
  },
  {
    id: 'full-stack-developer',
    title: 'Senior Full-Stack Developer',
    location: 'Remote - Spain',
    type: 'Full-time',
    department: 'Engineering',
    icon: Code,
    publishedAt: '2025-11-24',
    description: 'Build modern web applications and APIs. Work with React, Next.js, Node.js, and cloud services to deliver client projects.',
    requirements: [
      '4+ years of full-stack development experience',
      'Expert in React/Next.js and Node.js',
      'Experience with TypeScript',
      'Knowledge of cloud platforms (AWS, Vercel)',
      'Strong collaboration skills',
    ],
    benefits: [
      'Competitive salary (€45K - €75K)',
      '100% remote work',
      'Modern tech stack',
      'Code review and mentorship',
      'Flexible schedule',
    ],
  },
  // Colombia Positions
  {
    id: 'senior-software-engineer-bogota',
    title: 'Senior Software Engineer',
    location: 'Bogotá, Colombia',
    type: 'Full-time',
    department: 'Engineering',
    icon: Code,
    publishedAt: '2025-11-25',
    description: 'Develop and maintain enterprise software solutions. Work with modern technologies to build scalable applications for B2B clients in Colombia.',
    requirements: [
      '4+ years of software development experience',
      'Expert in JavaScript/TypeScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure)',
      'Strong problem-solving and debugging skills',
      'Fluent in Spanish, conversational English',
    ],
    benefits: [
      'Competitive salary (COP 8M - COP 12M)',
      'Hybrid work model (Bogotá office + remote)',
      'Health insurance and benefits',
      'Professional development opportunities',
      'Modern office in Bogotá',
    ],
  },
  {
    id: 'devops-engineer-medellin',
    title: 'DevOps Engineer',
    location: 'Medellín, Colombia',
    type: 'Full-time',
    department: 'Cloud & Infrastructure',
    icon: Cloud,
    publishedAt: '2025-11-26',
    description: 'Manage CI/CD pipelines, infrastructure automation, and cloud deployments. Ensure reliable and scalable infrastructure for client projects.',
    requirements: [
      '3+ years of DevOps/SRE experience',
      'Expert in Docker, Kubernetes, and CI/CD tools',
      'Experience with AWS, Azure, or GCP',
      'Knowledge of Infrastructure as Code (Terraform, Ansible)',
      'Strong automation and scripting skills',
    ],
    benefits: [
      'Competitive salary (COP 7M - COP 11M)',
      'Hybrid work model (Medellín office + remote)',
      'Health insurance and benefits',
      'Latest tools and technologies',
      'Beautiful office in Medellín',
    ],
  },
  {
    id: 'data-analyst-bogota',
    title: 'Data Analyst',
    location: 'Bogotá, Colombia',
    type: 'Full-time',
    department: 'Data & Analytics',
    icon: Database,
    publishedAt: '2025-11-27',
    description: 'Analyze data to provide insights for client projects. Build dashboards, reports, and data visualizations to support business decisions.',
    requirements: [
      '3+ years of data analysis experience',
      'Expert in SQL, Python, and data visualization tools',
      'Experience with BI tools (Tableau, Power BI, Looker)',
      'Strong analytical and statistical skills',
      'Fluent in Spanish, conversational English',
    ],
    benefits: [
      'Competitive salary (COP 6M - COP 9M)',
      'Hybrid work model (Bogotá office + remote)',
      'Health insurance and benefits',
      'Data science training and certifications',
      'Collaborative team environment',
    ],
  },
]

export default async function CareersPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  const positions = jobOffers.map((job) => ({ id: job.id, title: job.title }))

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Careers at Divisy - Technology team collaboration"
            fill
            className="object-cover object-center opacity-[0.15] dark:opacity-[0.08]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/85 via-bg-page/60 to-bg-page/95" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.nav.careers}
            </h1>
            <p className="mb-8 text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Shape the future of enterprise technology. Work with industry leaders on transformative projects that drive measurable business impact.'
                : 'Dale forma al futuro de la tecnología empresarial. Trabaja con líderes de la industria en proyectos transformadores que generan impacto empresarial medible.'}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#open-positions">
                  {locale === 'en' ? 'View Open Positions' : 'Ver Puestos Abiertos'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/careers#apply`}>
                  {locale === 'en' ? 'Apply Now' : 'Aplicar Ahora'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Divisy Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {locale === 'en' ? 'Why Join Divisy?' : '¿Por Qué Unirse a Divisy?'}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {locale === 'en'
                ? 'Join a team where your expertise drives real business outcomes. Work on challenging projects with Fortune 500 companies, scale-ups, and innovative enterprises across industries.'
                : 'Únete a un equipo donde tu experiencia impulsa resultados empresariales reales. Trabaja en proyectos desafiantes con empresas Fortune 500, scale-ups y empresas innovadoras de diversas industrias.'}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: locale === 'en' ? '100% Remote' : '100% Remoto',
                description: locale === 'en' ? 'Work from anywhere in Spain' : 'Trabaja desde cualquier lugar de España',
              },
              {
                icon: TrendingUp,
                title: locale === 'en' ? 'Career Growth' : 'Crecimiento Profesional',
                description: locale === 'en' ? 'Continuous learning and development' : 'Aprendizaje y desarrollo continuo',
              },
              {
                icon: Users,
                title: locale === 'en' ? 'Expert Team' : 'Equipo Experto',
                description: locale === 'en' ? 'Work with industry leaders' : 'Trabaja con líderes de la industria',
              },
              {
                icon: Clock,
                title: locale === 'en' ? 'Flexible Hours' : 'Horarios Flexibles',
                description: locale === 'en' ? 'Balance work and life' : 'Equilibrio entre trabajo y vida',
              },
            ].map((benefit, idx) => {
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

      {/* Open Positions Section */}
      <section id="open-positions" className="scroll-mt-24 py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {locale === 'en' ? 'Open Positions' : 'Puestos Abiertos'}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {locale === 'en'
                ? 'Explore opportunities to work on high-impact projects with leading B2B companies. From product strategy to cloud architecture, help shape the future of enterprise technology.'
                : 'Explora oportunidades para trabajar en proyectos de alto impacto con empresas B2B líderes. Desde estrategia de producto hasta arquitectura cloud, ayuda a dar forma al futuro de la tecnología empresarial.'}
            </p>
          </div>

          <div className="space-y-6">
            {jobOffers.map((job) => {
              const Icon = job.icon
              return (
                <Card key={job.id} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                  <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                          <Icon className="h-6 w-6 text-brand-primary" />
                        </div>
                        <div>
                          <CardTitle className="mb-2 text-heading-2 text-text-primary">
                            {job.title}
                          </CardTitle>
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline" className="gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="secondary">{job.department}</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-body-sm text-text-muted">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>
                              {locale === 'en' ? 'Published:' : 'Publicado:'} {formatDate(job.publishedAt, locale)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button asChild size="lg">
                        <Link href={`/${locale}/careers?position=${job.id}#apply`} scroll={true}>
                          {locale === 'en' ? 'Apply Now' : 'Aplicar Ahora'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-body-md text-text-muted">{job.description}</p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-heading-3 text-text-primary">
                          {locale === 'en' ? 'Requirements' : 'Requisitos'}
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-body-md text-text-muted">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-heading-3 text-text-primary">
                          {locale === 'en' ? 'Benefits' : 'Beneficios'}
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-body-md text-text-muted">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="scroll-mt-24 border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
                {locale === 'en' ? 'Apply for a Position' : 'Aplicar a un Puesto'}
              </h2>
              <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
                {locale === 'en'
                  ? 'Ready to make an impact? Share your LinkedIn profile and tell us why you\'re the right fit. We review applications within 48 hours and respond to qualified candidates.'
                  : '¿Listo para generar impacto? Comparte tu perfil de LinkedIn y cuéntanos por qué eres el candidato ideal. Revisamos las solicitudes en 48 horas y respondemos a los candidatos calificados.'}
              </p>
            </div>
            <Suspense fallback={<div className="text-center py-12 text-text-muted">Loading form...</div>}>
              <JobApplicationForm locale={locale} positions={positions} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}

