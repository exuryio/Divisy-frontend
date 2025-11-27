import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Eye, Heart, Zap, Users, Globe, Lightbulb, Sparkles, ShieldCheck, MapPin } from 'lucide-react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'

  return {
    title: locale === 'en' ? 'About Divisy' : 'Acerca de Divisy',
    description: locale === 'en'
      ? 'Learn about Divisy\'s vision, mission, and values. We operate from Power, not Force.'
      : 'Conoce la visión, misión y valores de Divisy. Operamos desde el Poder, no desde la Fuerza.',
  }
}

const content = {
  en: {
    hero: {
      title: 'About Divisy',
      subtitle: 'We operate from Power, not Force. Our approach is built on authentic influence, alignment, and sustainable transformation.',
    },
    vision: {
      title: 'Our Vision',
      description: 'To be the catalyst for authentic technological transformation, where businesses grow through alignment, not coercion.',
      content: 'We envision a world where technology consulting operates from a place of genuine influence and alignment. Rather than forcing solutions, we attract the right outcomes through deep understanding, authentic relationships, and sustainable practices that create lasting value.',
    },
    mission: {
      title: 'Our Mission',
      description: 'To empower businesses through technology that aligns with their authentic purpose, creating sustainable growth and measurable impact.',
      content: 'We partner with companies to identify their true technological needs through deep listening and understanding. Our mission is to deliver solutions that resonate with your organization\'s core values, creating transformation that feels natural, sustainable, and aligned with your authentic path forward.',
    },
    values: {
      title: 'Our Values',
      subtitle: 'Principles that guide everything we do',
      items: [
        {
          icon: Heart,
          title: 'Authentic Alignment',
          description: 'We seek truth and alignment over convenience. Every solution we propose comes from understanding your authentic needs, not from pushing predetermined agendas.',
        },
        {
          icon: Zap,
          title: 'Sustainable Influence',
          description: 'We operate through attraction and influence, not coercion. Our recommendations emerge from genuine understanding and create natural momentum toward your goals.',
        },
        {
          icon: Users,
          title: 'Deep Partnership',
          description: 'We build relationships based on mutual respect and understanding. Your success is our success, achieved through collaboration, not control.',
        },
        {
          icon: Lightbulb,
          title: 'Clarity & Truth',
          description: 'We speak truth with clarity and compassion. No hidden agendas, no forced solutions—only honest assessments and authentic recommendations.',
        },
        {
          icon: Globe,
          title: 'Long-term Impact',
          description: 'We focus on sustainable transformation that creates lasting value. Our solutions are designed to grow with you, not require constant intervention.',
        },
        {
          icon: Target,
          title: 'Purpose-Driven',
          description: 'We help you connect technology to your deeper purpose. Every project aligns with your authentic mission, creating meaning beyond metrics.',
        },
      ],
    },
    approach: {
      title: 'Power vs Force',
      subtitle: 'How we operate differently',
      description: 'Traditional consulting often operates from Force: pushing solutions, creating dependency, and focusing on short-term metrics. We operate from Power: attracting the right outcomes, building independence, and creating sustainable transformation.',
      power: {
        title: 'Operating from Power',
        items: [
          'Attraction over coercion',
          'Alignment over compliance',
          'Understanding over assumptions',
          'Sustainable growth over quick wins',
          'Authentic relationships over transactional exchanges',
          'Long-term value over short-term metrics',
        ],
      },
      force: {
        title: 'What We Avoid (Force)',
        items: [
          'Pushing predetermined solutions',
          'Creating unnecessary dependency',
          'Focusing only on immediate metrics',
          'Imposing our agenda on your business',
          'Transactional relationships',
          'Short-term fixes without long-term vision',
        ],
      },
    },
    different: {
      title: 'What Makes Us Different',
      subtitle: 'How we stand apart from traditional consultancies',
      description: 'While many consultancies operate from a place of force—pushing solutions, creating dependency, and focusing on billable hours—we operate from power, creating authentic transformation that serves your long-term success.',
      points: [
        {
          title: 'No Cookie-Cutter Solutions',
          description: 'We don\'t force predetermined frameworks. Every solution is crafted from deep understanding of your unique context, challenges, and authentic goals.',
        },
        {
          title: 'Build Your Independence, Not Dependency',
          description: 'Our goal is to empower your team, not create reliance on us. We transfer knowledge, build internal capabilities, and design solutions that your team can own and evolve.',
        },
        {
          title: 'Long-Term Thinking Over Short-Term Metrics',
          description: 'We focus on sustainable transformation that creates lasting value. While others chase quick wins, we build foundations that support your growth for years to come.',
        },
        {
          title: 'Authentic Partnership, Not Vendor Relationship',
          description: 'We engage as true partners invested in your success. Our relationships are built on trust, transparency, and shared commitment to meaningful outcomes.',
        },
        {
          title: 'Technology Aligned with Purpose',
          description: 'Every solution connects to your deeper purpose and authentic mission. We ensure technology serves your vision, not the other way around.',
        },
        {
          title: 'Measurable Impact, Not Just Activity',
          description: 'We focus on outcomes that matter. Every project is designed to deliver measurable business value, not just technical deliverables. Your success metrics become our success metrics.',
        },
      ],
    },
    commitment: {
      title: 'Our Commitment to You',
      subtitle: 'What you can expect when working with Divisy',
      description: 'We make clear commitments because we believe in transparency and accountability. Here\'s what you can expect from us:',
      promises: [
        {
          title: 'Honest Assessment',
          description: 'We will always give you our honest, unbiased assessment of your situation. No sugar-coating, no hidden agendas—just clear, actionable insights.',
        },
        {
          title: 'Solutions That Resonate',
          description: 'We commit to solutions that align with your authentic needs and organizational culture. If something doesn\'t fit, we\'ll tell you and find what does.',
        },
        {
          title: 'Knowledge Transfer',
          description: 'We don\'t hoard expertise. We actively transfer knowledge to your team, ensuring you can maintain and evolve solutions independently.',
        },
        {
          title: 'Sustainable Results',
          description: 'We commit to building solutions that last. Our work is designed to create long-term value, not require constant intervention or expensive maintenance.',
        },
        {
          title: 'Transparent Communication',
          description: 'You\'ll always know where things stand. We communicate clearly, proactively, and honestly—no surprises, no hidden costs, no vague promises.',
        },
        {
          title: 'Your Success is Our Success',
          description: 'We measure our success by yours. When you win, we win. This alignment ensures we\'re always working toward outcomes that truly matter to you.',
        },
      ],
    },
    presence: {
      title: 'Our Geographic Presence',
      subtitle: 'Serving clients across Spain and Colombia',
      description: 'With offices in Madrid and Bogotá, we bring international expertise with local understanding. Our presence in both markets allows us to serve clients with deep cultural and business context.',
      offices: [
        {
          city: 'Madrid',
          country: 'Spain',
          company: 'DIVISY APP, S.L.',
          type: 'Sociedad Limitada',
          cif: 'B-56826183',
          description: 'Our headquarters in Madrid serves as the hub for our European operations, working with clients across Spain and the broader European market.',
        },
        {
          city: 'Bogotá',
          country: 'Colombia',
          company: 'Divisy SAS',
          type: 'Sociedad por Acciones Simplificada',
          nit: '901715069-5',
          description: 'Our Bogotá office enables us to serve the Latin American market with deep local expertise and understanding of regional business dynamics.',
        },
      ],
    },
  },
  es: {
    hero: {
      title: 'Acerca de Divisy',
      subtitle: 'Operamos desde el Poder, no desde la Fuerza. Nuestro enfoque se basa en influencia auténtica, alineación y transformación sostenible.',
    },
    vision: {
      title: 'Nuestra Visión',
      description: 'Ser el catalizador para la transformación tecnológica auténtica, donde las empresas crecen a través de la alineación, no de la coerción.',
      content: 'Visualizamos un mundo donde la consultoría tecnológica opera desde un lugar de influencia genuina y alineación. En lugar de forzar soluciones, atraemos los resultados correctos a través de comprensión profunda, relaciones auténticas y prácticas sostenibles que crean valor duradero.',
    },
    mission: {
      title: 'Nuestra Misión',
      description: 'Empoderar a las empresas a través de tecnología que se alinea con su propósito auténtico, creando crecimiento sostenible e impacto medible.',
      content: 'Nos asociamos con empresas para identificar sus verdaderas necesidades tecnológicas a través de escucha profunda y comprensión. Nuestra misión es entregar soluciones que resuenen con los valores fundamentales de su organización, creando transformación que se siente natural, sostenible y alineada con su camino auténtico hacia adelante.',
    },
    values: {
      title: 'Nuestros Valores',
      subtitle: 'Principios que guían todo lo que hacemos',
      items: [
        {
          icon: Heart,
          title: 'Alineación Auténtica',
          description: 'Buscamos la verdad y la alineación sobre la conveniencia. Cada solución que proponemos proviene de entender sus necesidades auténticas, no de imponer agendas predeterminadas.',
        },
        {
          icon: Zap,
          title: 'Influencia Sostenible',
          description: 'Operamos a través de atracción e influencia, no de coerción. Nuestras recomendaciones surgen de comprensión genuina y crean impulso natural hacia sus objetivos.',
        },
        {
          icon: Users,
          title: 'Asociación Profunda',
          description: 'Construimos relaciones basadas en respeto mutuo y comprensión. Su éxito es nuestro éxito, logrado a través de colaboración, no de control.',
        },
        {
          icon: Lightbulb,
          title: 'Claridad y Verdad',
          description: 'Hablamos la verdad con claridad y compasión. Sin agendas ocultas, sin soluciones forzadas—solo evaluaciones honestas y recomendaciones auténticas.',
        },
        {
          icon: Globe,
          title: 'Impacto a Largo Plazo',
          description: 'Nos enfocamos en transformación sostenible que crea valor duradero. Nuestras soluciones están diseñadas para crecer con usted, no para requerir intervención constante.',
        },
        {
          icon: Target,
          title: 'Impulsado por Propósito',
          description: 'Le ayudamos a conectar la tecnología con su propósito más profundo. Cada proyecto se alinea con su misión auténtica, creando significado más allá de las métricas.',
        },
      ],
    },
    approach: {
      title: 'Poder vs Fuerza',
      subtitle: 'Cómo operamos de manera diferente',
      description: 'La consultoría tradicional a menudo opera desde la Fuerza: empujando soluciones, creando dependencia y enfocándose en métricas a corto plazo. Nosotros operamos desde el Poder: atrayendo los resultados correctos, construyendo independencia y creando transformación sostenible.',
      power: {
        title: 'Operando desde el Poder',
        items: [
          'Atracción sobre coerción',
          'Alineación sobre cumplimiento',
          'Comprensión sobre suposiciones',
          'Crecimiento sostenible sobre victorias rápidas',
          'Relaciones auténticas sobre intercambios transaccionales',
          'Valor a largo plazo sobre métricas a corto plazo',
        ],
      },
      force: {
        title: 'Lo Que Evitamos (Fuerza)',
        items: [
          'Empujar soluciones predeterminadas',
          'Crear dependencia innecesaria',
          'Enfocarse solo en métricas inmediatas',
          'Imponer nuestra agenda en su negocio',
          'Relaciones transaccionales',
          'Soluciones a corto plazo sin visión a largo plazo',
        ],
      },
    },
    different: {
      title: 'Qué Nos Hace Diferentes',
      subtitle: 'Cómo nos diferenciamos de las consultorías tradicionales',
      description: 'Mientras muchas consultorías operan desde la fuerza—empujando soluciones, creando dependencia y enfocándose en horas facturables—nosotros operamos desde el poder, creando transformación auténtica que sirve a su éxito a largo plazo.',
      points: [
        {
          title: 'Sin Soluciones Prefabricadas',
          description: 'No forzamos marcos predeterminados. Cada solución se crea desde una comprensión profunda de su contexto único, desafíos y objetivos auténticos.',
        },
        {
          title: 'Construimos Su Independencia, No Dependencia',
          description: 'Nuestro objetivo es empoderar a su equipo, no crear dependencia de nosotros. Transferimos conocimiento, construimos capacidades internas y diseñamos soluciones que su equipo puede poseer y evolucionar.',
        },
        {
          title: 'Pensamiento a Largo Plazo Sobre Métricas a Corto Plazo',
          description: 'Nos enfocamos en transformación sostenible que crea valor duradero. Mientras otros persiguen victorias rápidas, construimos fundamentos que apoyan su crecimiento durante años.',
        },
        {
          title: 'Asociación Auténtica, No Relación de Proveedor',
          description: 'Nos involucramos como verdaderos socios invertidos en su éxito. Nuestras relaciones se construyen sobre confianza, transparencia y compromiso compartido con resultados significativos.',
        },
        {
          title: 'Tecnología Alineada con el Propósito',
          description: 'Cada solución se conecta con su propósito más profundo y misión auténtica. Nos aseguramos de que la tecnología sirva a su visión, no al revés.',
        },
        {
          title: 'Impacto Medible, No Solo Actividad',
          description: 'Nos enfocamos en resultados que importan. Cada proyecto está diseñado para entregar valor empresarial medible, no solo entregables técnicos. Sus métricas de éxito se convierten en nuestras métricas de éxito.',
        },
      ],
    },
    commitment: {
      title: 'Nuestro Compromiso Contigo',
      subtitle: 'Qué puede esperar al trabajar con Divisy',
      description: 'Hacemos compromisos claros porque creemos en la transparencia y la responsabilidad. Esto es lo que puede esperar de nosotros:',
      promises: [
        {
          title: 'Evaluación Honesta',
          description: 'Siempre le daremos nuestra evaluación honesta e imparcial de su situación. Sin edulcorar, sin agendas ocultas—solo información clara y accionable.',
        },
        {
          title: 'Soluciones Que Resuenan',
          description: 'Nos comprometemos a soluciones que se alinean con sus necesidades auténticas y cultura organizacional. Si algo no encaja, se lo diremos y encontraremos lo que sí encaja.',
        },
        {
          title: 'Transferencia de Conocimiento',
          description: 'No acaparamos experiencia. Transferimos activamente conocimiento a su equipo, asegurando que puedan mantener y evolucionar soluciones de forma independiente.',
        },
        {
          title: 'Resultados Sostenibles',
          description: 'Nos comprometemos a construir soluciones que perduren. Nuestro trabajo está diseñado para crear valor a largo plazo, no para requerir intervención constante o mantenimiento costoso.',
        },
        {
          title: 'Comunicación Transparente',
          description: 'Siempre sabrá dónde están las cosas. Comunicamos claramente, proactivamente y honestamente—sin sorpresas, sin costos ocultos, sin promesas vagas.',
        },
        {
          title: 'Su Éxito es Nuestro Éxito',
          description: 'Medimos nuestro éxito por el suyo. Cuando usted gana, nosotros ganamos. Esta alineación asegura que siempre trabajemos hacia resultados que realmente importan.',
        },
      ],
    },
    presence: {
      title: 'Nuestra Presencia Geográfica',
      subtitle: 'Sirviendo clientes en España y Colombia',
      description: 'Con oficinas en Madrid y Bogotá, traemos experiencia internacional con comprensión local. Nuestra presencia en ambos mercados nos permite servir a clientes con profundo contexto cultural y empresarial.',
      offices: [
        {
          city: 'Madrid',
          country: 'España',
          company: 'DIVISY APP, S.L.',
          type: 'Sociedad Limitada',
          cif: 'B-56826183',
          description: 'Nuestra sede en Madrid sirve como centro de nuestras operaciones europeas, trabajando con clientes en España y el mercado europeo en general.',
        },
        {
          city: 'Bogotá',
          country: 'Colombia',
          company: 'Divisy SAS',
          type: 'Sociedad por Acciones Simplificada',
          nit: '901715069-5',
          description: 'Nuestra oficina en Bogotá nos permite servir al mercado latinoamericano con profunda experiencia local y comprensión de las dinámicas empresariales regionales.',
        },
      ],
    },
  },
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = content[locale]
  const translations = getTranslations(locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="About Divisy"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2">
              <span className="text-body-sm font-medium text-brand-primary">
                {translations.brand.taglineShort}
              </span>
            </div>
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.hero.title}
            </h1>
            <p className="mb-4 mx-auto max-w-2xl text-body-lg font-medium text-brand-primary lg:text-heading-3">
              {translations.brand.tagline}
            </p>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border-subtle bg-surface">
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                    <Eye className="h-8 w-8 text-brand-primary" />
                  </div>
                </div>
                <CardTitle className="text-heading-1 text-text-primary lg:text-display-2">
                  {t.vision.title}
                </CardTitle>
                <CardDescription className="mt-4 text-body-lg text-text-muted">
                  {t.vision.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-md leading-relaxed text-text-muted">
                  {t.vision.content}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border-subtle bg-surface">
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-accent/10">
                    <Target className="h-8 w-8 text-brand-accent" />
                  </div>
                </div>
                <CardTitle className="text-heading-1 text-text-primary lg:text-display-2">
                  {t.mission.title}
                </CardTitle>
                <CardDescription className="mt-4 text-body-lg text-text-muted">
                  {t.mission.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-md leading-relaxed text-text-muted">
                  {t.mission.content}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.values.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
              {t.values.subtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.values.items.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                      <Icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-heading-3 text-text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-md text-text-muted">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                <Sparkles className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.different.title}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-body-lg text-text-muted">
              {t.different.subtitle}
            </p>
            <p className="mx-auto max-w-3xl text-body-md text-text-muted">
              {t.different.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.different.points.map((point, index) => (
              <Card key={index} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                <CardHeader>
                  <CardTitle className="text-heading-3 text-text-primary">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-md text-text-muted">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-accent/10">
                <ShieldCheck className="h-8 w-8 text-brand-accent" />
              </div>
            </div>
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.commitment.title}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-body-lg text-text-muted">
              {t.commitment.subtitle}
            </p>
            <p className="mx-auto max-w-3xl text-body-md text-text-muted">
              {t.commitment.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.commitment.promises.map((promise, index) => (
              <Card key={index} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                <CardHeader>
                  <CardTitle className="text-heading-3 text-text-primary">
                    {promise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-md text-text-muted">{promise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Power vs Force Section */}
      <section className="border-y border-border-subtle bg-surface py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.approach.title}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-body-lg text-text-muted">
              {t.approach.subtitle}
            </p>
            <p className="mx-auto max-w-3xl text-body-md text-text-muted">
              {t.approach.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardHeader>
                <CardTitle className="text-heading-2 text-brand-primary">
                  {t.approach.power.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.approach.power.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-md text-text-muted">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border-subtle bg-surface/50">
              <CardHeader>
                <CardTitle className="text-heading-2 text-text-muted">
                  {t.approach.force.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.approach.force.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-md text-text-muted opacity-60">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-muted" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Presence Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                <MapPin className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
              {t.presence.title}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-body-lg text-text-muted">
              {t.presence.subtitle}
            </p>
            <p className="mx-auto max-w-3xl text-body-md text-text-muted">
              {t.presence.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {t.presence.offices.map((office, index) => (
              <Card key={index} className="border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                <CardHeader>
                  <CardTitle className="text-heading-2 text-text-primary">
                    {office.city}, {office.country}
                  </CardTitle>
                  <CardDescription className="text-body-md text-text-muted">
                    {office.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-body-sm text-text-muted">
                    <span className="font-medium text-text-primary">
                      {locale === 'en' ? 'Type:' : 'Tipo:'}
                    </span>{' '}
                    {office.type}
                  </p>
                  {office.cif && (
                    <p className="text-body-sm text-text-muted">
                      <span className="font-medium text-text-primary">CIF:</span> {office.cif}
                    </p>
                  )}
                  {office.nit && (
                    <p className="text-body-sm text-text-muted">
                      <span className="font-medium text-text-primary">NIT:</span> {office.nit}
                    </p>
                  )}
                  <p className="pt-2 text-body-md text-text-muted">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

