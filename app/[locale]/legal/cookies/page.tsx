import { getServerLocale } from '@/lib/i18n-server'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Cookie Policy',
  }
}

export default async function CookiesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          title: 'What Are Cookies',
          content:
            'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
        },
        {
          title: 'How We Use Cookies',
          content:
            'We use cookies to remember your language preference and to analyze website traffic. We do not use cookies for advertising purposes.',
        },
        {
          title: 'Types of Cookies We Use',
          content:
            'We use essential cookies that are necessary for the website to function properly, such as storing your language preference. We also use analytics cookies to understand how visitors interact with our website.',
        },
        {
          title: 'Managing Cookies',
          content:
            'You can control and manage cookies in your browser settings. However, disabling cookies may affect the functionality of our website.',
        },
        {
          title: 'Contact Us',
          content:
            'If you have any questions about our use of cookies, please contact us at rts@divisy.co.',
        },
      ],
    },
    es: {
      title: 'Política de Cookies',
      lastUpdated: 'Última actualización: Enero 2024',
      sections: [
        {
          title: 'Qué Son las Cookies',
          content:
            'Las cookies son pequeños archivos de texto que se colocan en su computadora o dispositivo móvil cuando visita un sitio web. Se usan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar información a los propietarios de sitios web.',
        },
        {
          title: 'Cómo Usamos las Cookies',
          content:
            'Utilizamos cookies para recordar su preferencia de idioma y analizar el tráfico del sitio web. No utilizamos cookies con fines publicitarios.',
        },
        {
          title: 'Tipos de Cookies que Usamos',
          content:
            'Utilizamos cookies esenciales que son necesarias para que el sitio web funcione correctamente, como almacenar su preferencia de idioma. También utilizamos cookies de análisis para comprender cómo los visitantes interactúan con nuestro sitio web.',
        },
        {
          title: 'Gestión de Cookies',
          content:
            'Puede controlar y gestionar las cookies en la configuración de su navegador. Sin embargo, deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web.',
        },
        {
          title: 'Contáctenos',
          content:
            'Si tiene alguna pregunta sobre nuestro uso de cookies, contáctenos en rts@divisy.co.',
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

