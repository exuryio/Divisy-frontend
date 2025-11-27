'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Locale, setLocale } from '@/lib/i18n'
import { Button } from './ui/button'
import { Globe2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface LanguageSwitcherProps {
  locale: Locale
}

export function LanguageSwitcher({ locale: serverLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  // Use server locale for initial render to prevent hydration mismatch
  const [currentLocale, setCurrentLocale] = useState<Locale>(serverLocale)

  // Sync with cookie on client side after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('locale='))
        ?.split('=')[1] as Locale | undefined
      
      if (cookie && (cookie === 'en' || cookie === 'es')) {
        setCurrentLocale(cookie)
      }
    }
  }, [])

  const toggleLocale = () => {
    const newLocale: Locale = currentLocale === 'en' ? 'es' : 'en'
    setLocale(newLocale)
    setCurrentLocale(newLocale)
    // Replace the locale prefix in the pathname
    const newPath = pathname.replace(/^\/(en|es)/, `/${newLocale}`) || `/${newLocale}`
    router.push(newPath === pathname ? `/${newLocale}${pathname}` : newPath)
    router.refresh()
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="h-9 gap-1.5 px-2.5 text-body-sm font-medium text-text-muted transition-colors duration-ui hover:text-text-primary hover:bg-border-subtle"
      aria-label="Switch language"
    >
      <Globe2 className="h-3.5 w-3.5" />
      <span className="uppercase tracking-wide">{currentLocale}</span>
    </Button>
  )
}

