import Cookies from 'js-cookie'

export type Locale = 'en' | 'es'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'es']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
}

export function getLocale(): Locale {
  if (typeof window !== 'undefined') {
    const cookie = Cookies.get('locale')
    return (cookie as Locale) || defaultLocale
  }
  return defaultLocale
}

export function setLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    Cookies.set('locale', locale, { expires: 365 })
  }
}

