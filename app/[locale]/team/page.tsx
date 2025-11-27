import { getServerLocale } from '@/lib/i18n-server'
import { getTranslations } from '@/lib/translations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import Image from 'next/image'
import { Linkedin, Award } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.team,
    description: 'Meet the Divisy team of technology consultants',
  }
}

/**
 * Founders data with LinkedIn profile photos
 * 
 * TO GET LINKEDIN PROFILE PHOTOS:
 * 1. Visit each founder's LinkedIn profile (links below)
 * 2. Right-click on their profile photo
 * 3. Select "Copy image address" or "Inspect element"
 * 4. Copy the image URL (format: https://media.licdn.com/dms/image/...)
 * 5. Replace the placeholder URLs below with the actual LinkedIn image URLs
 * 
 * LinkedIn Profiles:
 * - Rafael Tuta: https://linkedin.com/in/rafaeltuta
 * - Yisell Puentes Cubides: https://linkedin.com/in/yisellpuentes
 */
const founders = {
  en: [
    {
      name: 'Rafael Tuta',
      role: 'Senior Product Manager & Owner',
      bio: 'Expert in product strategy, roadmapping, and agile delivery. Specializes in translating business goals into actionable product plans.',
      skills: ['Product Strategy', 'Agile Delivery', 'Roadmapping', 'Stakeholder Management'],
      certifications: ['Certified Scrum Product Owner', 'Agile Certified Practitioner'],
      linkedin: 'https://linkedin.com/in/rafaeltuta',
      image: '/team/rafael tuta.jpeg', // LinkedIn profile photo 
    },
    {
      name: 'Yisell Puentes Cubides',
      role: 'Cloud Architect & Data Analytics Expert',
      bio: 'Specializes in scalable cloud architectures, data pipelines, and analytics platforms. Expert in AWS, GCP, and modern data stacks.',
      skills: ['Cloud Architecture', 'Data Engineering', 'AWS', 'GCP', 'Data Analytics'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional Architect'],
      linkedin: 'https://linkedin.com/in/yisellpuentes',
      image: '/team/yisell puentes.jpeg', // LinkedIn profile photo
    },
  ],
  es: [
    {
      name: 'Rafael Tuta',
      role: 'Senior Product Manager & Owner',
      bio: 'Experto en estrategia de producto, roadmapping y entrega ágil. Especializado en traducir objetivos de negocio en planes de producto accionables.',
      skills: ['Estrategia de Producto', 'Entrega Ágil', 'Roadmapping', 'Gestión de Stakeholders'],
      certifications: ['Certified Scrum Product Owner', 'Agile Certified Practitioner'],
      linkedin: 'https://linkedin.com/in/rafaeltuta',
      image: '/team/rafael tuta.jpeg', // LinkedIn profile photo
    },
    {
      name: 'Yisell Puentes Cubides',
      role: 'Cloud Architect & Data Analytics Expert',
      bio: 'Especializada en arquitecturas cloud escalables, pipelines de datos y plataformas analíticas. Experta en AWS, GCP y stacks de datos modernos.',
      skills: ['Arquitectura Cloud', 'Ingeniería de Datos', 'AWS', 'GCP', 'Analítica de Datos'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional Architect'],
      linkedin: 'https://linkedin.com/in/yisellpuentes',
      image: '/team/yisell puentes.jpeg', // LinkedIn profile photo
    },
  ],
}

export default async function TeamPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)
  const teamData = founders[locale]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Divisy team"
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
              {t.nav.team}
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Meet the founders and our network of expert consultants'
                : 'Conoce a los fundadores y nuestra red de consultores expertos'}
            </p>
          </div>
        </div>
      </section>

      {/* Team Content */}
      <section className="py-20">
        <div className="container-content">

          <div className="mb-16">
            <h2 className="mb-12 text-center text-heading-1 text-text-primary lg:text-display-2">
              {locale === 'en' ? 'Founders' : 'Fundadores'}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {teamData.map((founder) => (
                <Card key={founder.name} className="group overflow-hidden border-border-subtle bg-surface transition-all duration-ui hover:shadow-dds-2">
                  <CardHeader className="pb-6">
                    {/* Profile Photo - Circular and Moderate Size */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-border-subtle bg-border-subtle shadow-dds-1 transition-all duration-ui group-hover:border-brand-primary/30 group-hover:shadow-dds-2 sm:h-40 sm:w-40">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} - ${founder.role}`}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 128px, 160px"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <CardTitle className="mb-2 text-heading-2 text-text-primary">
                        {founder.name}
                      </CardTitle>
                      <CardDescription className="text-body-md text-text-muted">
                        {founder.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center text-body-md leading-relaxed text-text-muted">
                      {founder.bio}
                    </p>
                    
                    <div className="border-t border-border-subtle pt-6">
                      <h3 className="mb-3 text-body-sm font-semibold text-text-primary">
                        {locale === 'en' ? 'Skills' : 'Habilidades'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-body-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border-subtle pt-6">
                      <h3 className="mb-3 flex items-center gap-2 text-body-sm font-semibold text-text-primary">
                        <Award className="h-4 w-4 text-brand-accent" />
                        {locale === 'en' ? 'Certifications' : 'Certificaciones'}
                      </h3>
                      <ul className="space-y-2">
                        {founder.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-body-sm text-text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border-subtle pt-6">
                      <Link
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2.5 text-body-md text-text-primary transition-all duration-ui hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:text-brand-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>View LinkedIn Profile</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Network of Experts Section */}
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Network of experts"
                fill
                className="object-cover opacity-5"
                sizes="100vw"
              />
            </div>
            <div className="relative p-12 text-center">
              <h2 className="mb-4 text-heading-2 text-text-primary lg:text-heading-1">
                {locale === 'en' ? 'Network of Experts' : 'Red de Expertos'}
              </h2>
              <p className="mx-auto max-w-2xl text-body-lg text-text-muted">
                {locale === 'en'
                  ? 'Divisy works with a curated network of expert consultants across various specializations. Contact us to learn more about our extended team.'
                  : 'Divisy trabaja con una red curada de consultores expertos en diversas especializaciones. Contáctanos para conocer más sobre nuestro equipo extendido.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

