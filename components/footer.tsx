import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/translations'
import { Logo } from './logo'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="container-content py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="mb-3">
              <Logo locale={locale} variant="full" size="sm" className="h-6 sm:h-7" />
            </div>
            <p className="text-body-sm font-medium text-brand-primary">{t.brand.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-text-primary">{t.footer.quickLinks}</h4>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cases`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.nav.cases}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/careers`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/talent-pool`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {locale === 'en' ? 'For Recruiters' : 'Para Reclutadores'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-text-primary">{t.footer.legal}</h4>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href={`/${locale}/legal/privacy`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal/terms`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal/cookies`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-body-sm font-semibold text-text-primary">{t.nav.contact}</h4>
            <ul className="space-y-1.5 text-body-sm text-text-muted">
              <li>Madrid, Spain</li>
              <li>Bogotá, Colombia</li>
              <li className="pt-1">
                <Link
                  href={`/${locale}/contact`}
                  className="text-body-sm text-text-muted transition-colors duration-ui hover:text-brand-primary"
                >
                  {t.common.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Entities & Copyright */}
        <div className="mt-6 border-t border-border-subtle pt-6">
          {/* Legal Entities - Compact */}
          <div className="mb-4 grid gap-4 text-body-xs text-text-muted sm:grid-cols-2 lg:gap-8">
            <div>
              <p className="mb-1 font-semibold text-text-primary">
                {locale === 'en' ? 'DIVISY APP, S.L.' : 'DIVISY APP, S.L.'}
              </p>
              <p className="text-text-muted">
                {locale === 'en' ? 'Sociedad Limitada' : 'Sociedad Limitada'} • Madrid, Spain
              </p>
              <p className="text-text-muted">
                <span className="font-medium text-text-primary">CIF:</span> B-56826183
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-text-primary">
                {locale === 'en' ? 'Divisy SAS' : 'Divisy SAS'}
              </p>
              <p className="text-text-muted">
                {locale === 'en' ? 'Sociedad por Acciones Simplificada' : 'Sociedad por Acciones Simplificada'} • Bogotá, Colombia
              </p>
              <p className="text-text-muted">
                <span className="font-medium text-text-primary">NIT:</span> 901715069-5
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-body-xs text-text-muted">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
