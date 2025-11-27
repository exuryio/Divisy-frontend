import { cookies } from 'next/headers'
import { type Locale, defaultLocale, locales } from './i18n'

export { locales, type Locale }

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = cookies()
  const locale = cookieStore.get('locale')?.value
  return (locale as Locale) || defaultLocale
}
