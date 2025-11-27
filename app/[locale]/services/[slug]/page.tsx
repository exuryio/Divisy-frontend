import { getServerLocale } from '@/lib/i18n-server'
import { getServiceBySlug, getServices } from '@/lib/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Mdx } from '@/components/mdx-components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const enServices = getServices('en')
  const esServices = getServices('es')
  return [
    ...enServices.map((service: { slug: string }) => ({ locale: 'en', slug: service.slug })),
    ...esServices.map((service: { slug: string }) => ({ locale: 'es', slug: service.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const service = getServiceBySlug(params.slug, locale)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const locale = params.locale as 'en' | 'es'
  const service = getServiceBySlug(params.slug, locale)

  if (!service) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">{service.title}</h1>
        <p className="mb-8 text-xl text-muted-foreground">{service.description}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <Mdx code={service.body.code} />
        </div>

        {service.benefits && service.benefits.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {locale === 'en' ? 'Key Benefits' : 'Beneficios Clave'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {service.deliverables && service.deliverables.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {locale === 'en' ? 'Deliverables' : 'Entregables'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {service.techStack && service.techStack.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {locale === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {service.pricingModels && service.pricingModels.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {locale === 'en' ? 'Pricing Models' : 'Modelos de Precios'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.pricingModels.map((model: string, idx: number) => (
                  <Badge key={idx} variant="secondary">
                    {model}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href={`/${locale}/contact`}>
              {locale === 'en' ? 'Get Started' : 'Comenzar'}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

