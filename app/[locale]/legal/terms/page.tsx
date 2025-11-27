import { getServerLocale } from '@/lib/i18n-server'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Terms of Service',
  }
}

export default async function TermsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          title: 'Agreement to Terms',
          content:
            'By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
        },
        {
          title: 'Use License',
          content:
            'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.',
        },
        {
          title: 'Disclaimer',
          content:
            'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.',
        },
        {
          title: 'Limitations',
          content:
            'In no event shall Divisy or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.',
        },
        {
          title: 'Contact Information',
          content:
            'If you have any questions about these Terms of Service, please contact us at rts@divisy.co.',
        },
      ],
    },
    es: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: Enero 2024',
      sections: [
        {
          title: 'Acuerdo con los Términos',
          content:
            'Al acceder o usar nuestro sitio web, usted acepta estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables.',
        },
        {
          title: 'Licencia de Uso',
          content:
            'Se otorga permiso para descargar temporalmente una copia de los materiales en nuestro sitio web solo para visualización personal, no comercial y transitoria.',
        },
        {
          title: 'Descargo de Responsabilidad',
          content:
            'Los materiales en nuestro sitio web se proporcionan "tal cual". No ofrecemos garantías, expresas o implícitas, y por la presente renunciamos y negamos todas las demás garantías.',
        },
        {
          title: 'Limitaciones',
          content:
            'En ningún caso Divisy o sus proveedores serán responsables de ningún daño que surja del uso o la incapacidad de usar los materiales en nuestro sitio web.',
        },
        {
          title: 'Información de Contacto',
          content:
            'Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos en rts@divisy.co.',
        },
      ],
    },
  }

  const pageContent = content[locale]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">{pageContent.title}</h1>
        <p className="mb-8 text-sm text-muted-foreground">{pageContent.lastUpdated}</p>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {pageContent.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

