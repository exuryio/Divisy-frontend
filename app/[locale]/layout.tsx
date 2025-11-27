import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n-server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { OrganizationSchema } from '@/components/structured-data'
import { ThemeProvider } from '@/components/theme-provider'

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <ThemeProvider>
      <OrganizationSchema locale={locale} />
      <Navbar locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </ThemeProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }))
}

