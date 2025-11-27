import { type Locale } from './i18n'

export type { Locale }

export type Translations = {
  nav: {
    home: string
    services: string
    industries: string
    cases: string
    team: string
    methodology: string
    blog: string
    contact: string
    careers: string
    about: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    services: {
      title: string
      subtitle: string
    }
    methodology: {
      title: string
      subtitle: string
    }
    impact: {
      title: string
      subtitle: string
    }
    testimonials: {
      title: string
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  common: {
    readMore: string
    learnMore: string
    bookConsultation: string
    seeCaseStudies: string
    getStarted: string
    contactUs: string
  }
  brand: {
    tagline: string
    taglineShort: string
  }
  footer: {
    description: string
    quickLinks: string
    legal: string
    privacy: string
    terms: string
    cookies: string
    copyright: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      industries: 'Industries',
      cases: 'Case Studies',
      team: 'Team',
      methodology: 'Methodology',
      blog: 'Blog',
      contact: 'Contact',
      careers: 'Careers',
      about: 'About',
    },
    home: {
      hero: {
        title: 'Technology consulting to grow without friction.',
        subtitle: 'AI, cloud, data engineering, and product management to transform your business. Scalable solutions, measurable results.',
        ctaPrimary: 'Schedule a Strategy Call',
        ctaSecondary: 'View Case Studies',
      },
      services: {
        title: 'Our Services',
        subtitle: 'End-to-end technology solutions for modern businesses',
      },
      methodology: {
        title: 'Our Methodology',
        subtitle: 'A proven approach to delivering results',
      },
      impact: {
        title: 'Measurable Impact',
        subtitle: 'Results that matter',
      },
      testimonials: {
        title: 'What Our Clients Say',
      },
      cta: {
        title: 'Ready to accelerate your product?',
        subtitle: 'Let\'s discuss how we can help you achieve measurable results.',
        button: 'Book a Consultation',
      },
    },
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      bookConsultation: 'Book a Consultation',
      seeCaseStudies: 'See Case Studies',
      getStarted: 'Get Clarity',
      contactUs: 'Contact Us',
    },
    brand: {
      tagline: 'Technology consulting that gives you clarity, not dependency',
      taglineShort: 'Clarity, not dependency',
    },
    footer: {
      description: 'Technology consulting to grow without friction.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      copyright: '© 2025 Divisy. All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      industries: 'Industrias',
      cases: 'Casos de Estudio',
      team: 'Equipo',
      methodology: 'Metodología',
      blog: 'Blog',
      contact: 'Contacto',
      careers: 'Carreras',
      about: 'Acerca de',
    },
    home: {
      hero: {
        title: 'Consultoría tecnológica para crecer sin fricción.',
        subtitle: 'IA, cloud, ingeniería de datos y gestión de producto para transformar tu negocio. Soluciones escalables, resultados medibles.',
        ctaPrimary: 'Agendar Llamada Estratégica',
        ctaSecondary: 'Ver Casos de Estudio',
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones tecnológicas de extremo a extremo para empresas modernas',
      },
      methodology: {
        title: 'Nuestra Metodología',
        subtitle: 'Un enfoque probado para entregar resultados',
      },
      impact: {
        title: 'Impacto Medible',
        subtitle: 'Resultados que importan',
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
      },
      cta: {
        title: '¿Listo para acelerar tu producto?',
        subtitle: 'Hablemos sobre cómo podemos ayudarte a lograr resultados medibles.',
        button: 'Agenda una consultoría',
      },
    },
    common: {
      readMore: 'Leer Más',
      learnMore: 'Saber Más',
      bookConsultation: 'Agenda una consultoría',
      seeCaseStudies: 'Ver Casos de Estudio',
      getStarted: 'Obtén Claridad',
      contactUs: 'Contáctanos',
    },
    brand: {
      tagline: 'Consultoría tecnológica que te da claridad, no dependencia',
      taglineShort: 'Claridad, no dependencia',
    },
    footer: {
      description: 'Consultoría tecnológica para crecer sin fricción.',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      cookies: 'Política de Cookies',
      copyright: '© 2025 Divisy. Todos los derechos reservados.',
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

