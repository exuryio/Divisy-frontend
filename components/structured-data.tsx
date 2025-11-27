import { type Locale } from '@/lib/i18n'

export function OrganizationSchema({ locale }: { locale: Locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Divisy',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://divisy.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://divisy.com'}/logo.svg`,
    description:
      locale === 'en'
        ? 'Technology consulting to grow without friction. Strategy, data, and cloud to accelerate your product with measurable impact.'
        : 'Consultoría tecnológica para crecer sin fricción. Estrategia, datos y nube para acelerar tu producto con impacto medible.',
    founder: [
      {
        '@type': 'Person',
        name: 'Rafael Tuta',
        jobTitle: 'Senior Product Manager & Owner',
      },
      {
        '@type': 'Person',
        name: 'Yisell Puentes Cubides',
        jobTitle: 'Cloud Architect & Data Analytics Expert',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bogotá',
        addressCountry: 'CO',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'rts@divisy.co',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

