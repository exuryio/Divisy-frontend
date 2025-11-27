import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Cloud, 
  Zap, 
  Code, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  Shield,
  Clock,
  Users
} from 'lucide-react'
import { CTASection } from '@/components/sections/cta-section'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.services,
    description: 'Enterprise technology consulting services: Product strategy, cloud architecture, data pipelines, platform integrations, and AI solutions for B2B companies.',
  }
}

const services = [
  {
    id: 'product-strategy',
    icon: Target,
    title: 'Product Strategy & Roadmap',
    description: 'Define clear product vision, prioritize features, and create actionable roadmaps aligned with business objectives.',
    longDescription: 'We help B2B companies align their product strategy with market demands and business goals. Our consultants work closely with your leadership team to define product vision, conduct market research, and create data-driven roadmaps that deliver measurable outcomes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Clear product vision aligned with business objectives',
      'Data-driven prioritization framework',
      'Reduced time-to-market by up to 35%',
      'Improved stakeholder alignment',
      'Measurable ROI on product investments'
    ],
    deliverables: [
      'Product vision and strategy document',
      'Prioritized feature roadmap (6-18 months)',
      'Market research and competitive analysis',
      'Success metrics and KPIs framework',
      'Stakeholder alignment workshops'
    ],
    outcomes: [
      'Faster decision-making processes',
      'Higher feature adoption rates',
      'Better resource allocation',
      'Increased product-market fit'
    ],
    idealFor: 'B2B companies launching new products, pivoting strategies, or scaling existing solutions.',
  },
  {
    id: 'cloud-architecture',
    icon: Cloud,
    title: 'Cloud & Data Architecture',
    description: 'Scalable cloud infrastructures and data pipelines designed for enterprise-grade reliability and performance.',
    longDescription: 'We design and implement cloud-native architectures that scale with your business. From AWS, Azure, and GCP migrations to real-time data pipelines, we ensure your infrastructure is secure, cost-effective, and ready for growth.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    benefits: [
      '99.95% uptime SLA guarantees',
      '22% average reduction in infrastructure costs',
      'Auto-scaling for traffic spikes',
      'Enterprise-grade security and compliance',
      'Real-time data processing capabilities'
    ],
    deliverables: [
      'Cloud architecture design and documentation',
      'Infrastructure as Code (Terraform/CloudFormation)',
      'CI/CD pipelines and deployment automation',
      'Data pipeline architecture and implementation',
      'Security and compliance audit reports',
      'Cost optimization recommendations'
    ],
    outcomes: [
      'Reduced infrastructure costs',
      'Improved system reliability',
      'Faster deployment cycles',
      'Better data insights and analytics'
    ],
    idealFor: 'Companies migrating to cloud, scaling data operations, or building real-time analytics platforms.',
  },
  {
    id: 'integrations',
    icon: Zap,
    title: 'Platform Integrations',
    description: 'API, KYC, payments, and compliance integrations that accelerate development and reduce time-to-market.',
    longDescription: 'We integrate your platform with critical B2B services: payment gateways, KYC/AML providers, compliance tools, and third-party APIs. Our integration expertise reduces development time and ensures regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Faster integration delivery (50% time reduction)',
      'Reduced development costs',
      'Regulatory compliance built-in',
      'Seamless third-party service connections',
      'Comprehensive API documentation'
    ],
    deliverables: [
      'Integration architecture and design',
      'API implementation and testing',
      'KYC/AML compliance integration',
      'Payment gateway integration',
      'Third-party API connectors',
      'Integration documentation and runbooks'
    ],
    outcomes: [
      'Faster time-to-market for new features',
      'Reduced compliance risks',
      'Improved user experience',
      'Lower maintenance overhead'
    ],
    idealFor: 'Fintech, RegTech, eCommerce, and SaaS companies requiring secure, compliant integrations.',
  },
  {
    id: 'modernization',
    icon: Code,
    title: 'Modernization & Delivery',
    description: 'Legacy system modernization and agile delivery practices for faster, more reliable software delivery.',
    longDescription: 'We help companies modernize legacy systems, adopt cloud-native architectures, and implement agile delivery practices. Our approach reduces technical debt while maintaining business continuity.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    benefits: [
      'Reduced technical debt by 40-60%',
      'Faster feature delivery cycles',
      'Improved code quality and maintainability',
      'Better developer productivity',
      'Reduced operational costs'
    ],
    deliverables: [
      'Legacy system assessment and migration plan',
      'Modern architecture design',
      'Incremental migration strategy',
      'Agile delivery framework setup',
      'DevOps and CI/CD implementation',
      'Team training and knowledge transfer'
    ],
    outcomes: [
      'Faster development cycles',
      'Lower maintenance costs',
      'Improved system reliability',
      'Better team velocity'
    ],
    idealFor: 'Companies with legacy systems, technical debt, or teams transitioning to modern development practices.',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Applied AI',
    description: 'Copilots, RAG systems, and internal AI tools that enhance productivity and automate business processes.',
    longDescription: 'We build practical AI solutions for B2B companies: internal copilots, RAG systems for knowledge management, and automation tools that reduce manual work and improve decision-making.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      '40-60% reduction in manual tasks',
      'Improved decision-making with AI insights',
      'Enhanced knowledge management',
      'Better customer support automation',
      'Competitive advantage through AI adoption'
    ],
    deliverables: [
      'AI strategy and use case identification',
      'RAG system design and implementation',
      'Internal copilot development',
      'AI model integration and fine-tuning',
      'AI governance and ethics framework',
      'Team training on AI tools'
    ],
    outcomes: [
      'Increased operational efficiency',
      'Better knowledge accessibility',
      'Improved customer experience',
      'Data-driven decision making'
    ],
    idealFor: 'Companies looking to leverage AI for internal productivity, customer support, or competitive advantage.',
  },
]

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        {/* Background Image - Unique to Services Page */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
            alt="Enterprise technology consulting services"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="mx-auto max-w-2xl text-center lg:text-left">
              <h1 className="mb-6 text-h1 text-text-primary lg:text-h1">
                {t.nav.services}
              </h1>
              <p className="mb-4 text-body-lg font-medium text-brand-primary lg:text-h4">
                {t.brand.tagline}
              </p>
              <p className="mb-8 text-body-lg text-text-muted lg:text-h4">
                Enterprise technology consulting services designed for B2B companies. 
                Strategy, architecture, and delivery expertise to accelerate your product with measurable impact.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" asChild>
                  <Link href={`/${locale}/contact`}>
                    {t.common.bookConsultation}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`/${locale}/cases`}>
                    {t.common.seeCaseStudies}
                  </Link>
                </Button>
              </div>
            </div>
            {/* Hero Image - Unique to Services Page */}
            <div className="relative order-first mb-8 lg:order-last lg:mb-0">
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-surface sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Enterprise technology consulting services and solutions"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-h2 text-text-primary lg:text-h2">
              Our Service Offerings
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              Comprehensive technology consulting services tailored for enterprise B2B clients
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                          <Icon className="h-8 w-8 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="text-h3 text-text-primary">
                            {service.title}
                          </h3>
                          <p className="text-body-md text-text-muted">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <p className="mb-6 text-body-lg text-text-muted">
                        {service.longDescription}
                      </p>

                      <div className="mb-6">
                        <Badge variant="outline" className="mb-2">
                          Ideal For
                        </Badge>
                        <p className="text-body-md text-text-muted">
                          {service.idealFor}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="mb-4 flex items-center gap-2 text-h5 text-text-primary">
                          <TrendingUp className="h-5 w-5 text-brand-accent" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-body-md text-text-muted">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-6">
                        <h4 className="mb-4 flex items-center gap-2 text-h5 text-text-primary">
                          <Shield className="h-5 w-5 text-brand-accent" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-body-md text-text-muted">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-h5 text-text-primary">
                          <Clock className="h-5 w-5 text-brand-accent" />
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-body-md text-text-muted">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual/Stats Card */}
                    <div className={!isEven ? 'lg:col-start-1' : ''}>
                      <Card className="group h-full overflow-hidden border-border-subtle bg-surface shadow-dds-2">
                        {/* Service Image */}
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                          <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/90 backdrop-blur-sm">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-h4 text-text-primary">
                            Why Choose This Service?
                          </CardTitle>
                          <CardDescription className="text-body-md text-text-muted">
                            Enterprise-focused consulting with proven results
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                                <Users className="h-6 w-6 text-brand-primary" />
                              </div>
                              <div>
                                <h5 className="mb-1 text-body-md font-semibold text-text-primary">
                                  Expert Consultants
                                </h5>
                                <p className="text-body-sm text-text-muted">
                                  Senior-level consultants with 10+ years of enterprise experience
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                                <TrendingUp className="h-6 w-6 text-brand-primary" />
                              </div>
                              <div>
                                <h5 className="mb-1 text-body-md font-semibold text-text-primary">
                                  Measurable Results
                                </h5>
                                <p className="text-body-sm text-text-muted">
                                  Data-driven approach with clear KPIs and success metrics
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                                <Shield className="h-6 w-6 text-brand-primary" />
                              </div>
                              <div>
                                <h5 className="mb-1 text-body-md font-semibold text-text-primary">
                                  Enterprise Ready
                                </h5>
                                <p className="text-body-sm text-text-muted">
                                  Security, compliance, and scalability built-in from day one
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-border-subtle">
                            <Button className="w-full" asChild>
                              <Link href={`/${locale}/contact`}>
                                {t.common.bookConsultation}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - With Visual Support */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-h2 text-text-primary lg:text-h2">
              Our Engagement Process
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              A structured approach to delivering results for enterprise clients
            </p>
          </div>

          {/* Process Visual - Main Image */}
          <div className="relative mb-16 h-[250px] w-full overflow-hidden rounded-2xl sm:h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Consultancy engagement process"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-brand-primary/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="mb-2 text-heading-1 text-white">Proven Methodology</h3>
                <p className="text-body-lg text-white/90">From discovery to scale</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your business goals, technical constraints, and success criteria.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Define approach, architecture, and implementation roadmap aligned with objectives.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Agile delivery with regular checkpoints, stakeholder updates, and continuous improvement.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
              },
              {
                step: '04',
                title: 'Scale',
                description: 'Optimize performance, monitor KPIs, and iterate based on real-world data and feedback.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
              },
            ].map((phase, idx) => (
              <Card key={idx} className="group overflow-hidden border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                {/* Process Step Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-body-md font-semibold text-white shadow-dds-2">
                    {phase.step}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-h5 text-text-primary">
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-md text-text-muted">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection locale={locale} variant="default" />
    </div>
  )
}
