import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

// For static export, we can't use cookies, so we redirect to default locale
export default function HomePage() {
  redirect(`/${defaultLocale}`)
}

