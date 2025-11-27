'use client'

import Image from 'next/image'
import { useTheme } from './theme-provider'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

interface LogoProps {
  locale: Locale
  variant?: 'full' | 'symbol' | 'withTagline'
  className?: string
  width?: number
  height?: number
  size?: 'sm' | 'md' | 'lg'
  showLink?: boolean
}

export function Logo({ 
  locale, 
  variant = 'full', 
  className = '', 
  width, 
  height,
  size = 'md',
  showLink = true
}: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return placeholder to prevent hydration mismatch
    const placeholderClasses = size === 'sm' ? 'h-6 w-24' : size === 'lg' ? 'h-10 w-40' : 'h-8 w-32'
    return (
      <div className={`flex items-center ${className}`}>
        <div className={`${placeholderClasses} bg-border-subtle animate-pulse rounded`} />
      </div>
    )
  }

  const isDark = theme === 'dark'
  const logoPath = variant === 'symbol' 
    ? (isDark ? '/logo-symbol-dark.svg' : '/logo-symbol.svg')
    : variant === 'withTagline'
    ? (locale === 'es' 
        ? (isDark ? '/logo-with-tagline-dark-es.svg' : '/logo-with-tagline-es.svg')
        : (isDark ? '/logo-with-tagline-dark.svg' : '/logo-with-tagline.svg'))
    : (isDark ? '/logo-dark.svg' : '/logo.svg')

  // Responsive sizing
  const sizeMap = {
    sm: { width: 95, height: 28 }, // Mobile/compact
    md: { width: 110, height: 32 }, // Standard
    lg: { width: 140, height: 40 }, // Large/hero
  }

  const taglineSizeMap = {
    sm: { width: 140, height: 42 }, // Mobile/compact with tagline
    md: { width: 180, height: 54 }, // Standard with tagline
    lg: { width: 220, height: 66 }, // Large/hero with tagline
  }

  const symbolSizeMap = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
  }

  const dimensions = variant === 'symbol' 
    ? (width && height ? { width, height } : symbolSizeMap[size])
    : variant === 'withTagline'
    ? (width && height ? { width, height } : taglineSizeMap[size])
    : (width && height ? { width, height } : sizeMap[size])

  const logoElement = (
    <Image
      src={logoPath}
      alt="Divisy"
      width={dimensions.width}
      height={dimensions.height}
      priority={variant === 'full'}
      className={`h-auto w-auto ${
        variant === 'full' 
          ? 'max-w-[95px] sm:max-w-[105px] md:max-w-[110px]' 
          : variant === 'withTagline'
          ? 'max-w-[200px] sm:max-w-[220px] md:max-w-[240px]'
          : ''
      }`}
    />
  )

  if (!showLink) {
    return <div className={`flex items-center ${className}`}>{logoElement}</div>
  }

  return (
    <Link
      href={`/${locale}`}
      className={`flex items-center transition-opacity duration-ui hover:opacity-80 ${className}`}
      aria-label="Divisy Home"
    >
      {logoElement}
    </Link>
  )
}

