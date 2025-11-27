import { getServerLocale } from '@/lib/i18n-server'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Privacy Policy',
  }
}

export default async function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          title: 'Introduction',
          content:
            'Divisy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.',
        },
        {
          title: 'Information We Collect',
          content:
            'We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, phone number, and any other information you choose to provide.',
        },
        {
          title: 'How We Use Your Information',
          content:
            'We use the information we collect to respond to your inquiries, provide our services, send you updates about our services, and improve our website and services.',
        },
        {
          title: 'Data Security',
          content:
            'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
          title: 'Contact Us',
          content:
            'If you have any questions about this Privacy Policy, please contact us at rts@divisy.co.',
        },
      ],
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: Enero 2024',
      sections: [
        {
          title: 'Introducción',
          content:
            'Divisy ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web.',
        },
        {
          title: 'Información que Recopilamos',
          content:
            'Recopilamos información que usted nos proporciona directamente, como cuando completa un formulario de contacto, se suscribe a nuestro boletín o se comunica con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, nombre de la empresa, número de teléfono y cualquier otra información que elija proporcionar.',
        },
        {
          title: 'Cómo Usamos Su Información',
          content:
            'Utilizamos la información que recopilamos para responder a sus consultas, proporcionar nuestros servicios, enviarle actualizaciones sobre nuestros servicios y mejorar nuestro sitio web y servicios.',
        },
        {
          title: 'Seguridad de Datos',
          content:
            'Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
        },
        {
          title: 'Contáctenos',
          content:
            'Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en rts@divisy.co.',
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

