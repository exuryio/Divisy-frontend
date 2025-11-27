'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { Logo } from './logo'
import { Menu, X, ChevronDown } from 'lucide-react'
import { getTranslations } from '@/lib/translations'
import { type Locale } from '@/lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname()
  const t = getTranslations(locale)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const isActive = (path: string) => pathname === path || pathname.startsWith(path)

  const navItems: Array<{
    href: string
    label: string
    hasDropdown?: boolean
    dropdownItems?: Array<{ href: string; label: string }>
  }> = [
    { href: `/${locale}/services`, label: t.nav.services, hasDropdown: true },
    { href: `/${locale}/cases`, label: t.nav.cases },
    { 
      href: `/${locale}/about`, 
      label: locale === 'en' ? 'About' : 'Acerca de', 
      hasDropdown: true,
      dropdownItems: [
        { href: `/${locale}/about`, label: locale === 'en' ? 'About Us' : 'Acerca de Nosotros' },
        { href: `/${locale}/team`, label: t.nav.team },
        { href: `/${locale}/methodology`, label: t.nav.methodology },
        { href: `/${locale}/industries`, label: t.nav.industries },
      ]
    },
    { href: `/${locale}/careers`, label: t.nav.careers },
    { 
      href: `/${locale}/talent-pool`, 
      label: locale === 'en' ? 'For Recruiters' : 'Para Reclutadores',
    },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-subtle bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
      <div className="container-content">
        <div className="flex h-14 items-center justify-between">
          <Logo locale={locale} variant="full" size="sm" className="h-7 sm:h-8" />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-body-md font-medium transition-colors duration-ui hover:text-brand-primary ${
                    isActive(item.href) || (item.hasDropdown && (item.label.includes('About') || item.label.includes('Acerca')) && (pathname.includes('/about') || pathname.includes('/team') || pathname.includes('/methodology') || pathname.includes('/industries')))
                      ? 'text-brand-primary'
                      : 'text-text-muted'
                  }`}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.label.includes('Services') || item.label.includes('Servicios')) {
                        setServicesOpen(true)
                      } else {
                        setAboutOpen(true)
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      if (item.label.includes('Services') || item.label.includes('Servicios')) {
                        setServicesOpen(false)
                      } else {
                        setAboutOpen(false)
                      }
                    }
                  }}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </span>
                </Link>
                {item.hasDropdown && (
                  <AnimatePresence>
                    {((item.label.includes('Services') || item.label.includes('Servicios')) && servicesOpen) || 
                     ((item.label.includes('About') || item.label.includes('Acerca')) && aboutOpen) ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-border-subtle bg-surface p-4 shadow-dds-2"
                        onMouseEnter={() => {
                          if (item.label.includes('Services') || item.label.includes('Servicios')) {
                            setServicesOpen(true)
                          } else {
                            setAboutOpen(true)
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.label.includes('Services') || item.label.includes('Servicios')) {
                            setServicesOpen(false)
                          } else {
                            setAboutOpen(false)
                          }
                        }}
                      >
                        <div className="space-y-2">
                          {item.label.includes('Services') || item.label.includes('Servicios') ? (
                            <>
                              <Link
                                href={`/${locale}/services#product-strategy`}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                Product Strategy & Roadmap
                              </Link>
                              <Link
                                href={`/${locale}/services#cloud-architecture`}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                Cloud & Data Architecture
                              </Link>
                              <Link
                                href={`/${locale}/services#integrations`}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                Platform Integrations
                              </Link>
                              <Link
                                href={`/${locale}/services#modernization`}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                Modernization & Delivery
                              </Link>
                              <Link
                                href={`/${locale}/services#ai`}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                Applied AI
                              </Link>
                            </>
                          ) : (
                            item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block rounded-lg px-3 py-2 text-body-md transition-colors duration-ui hover:bg-border-subtle"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <LanguageSwitcher locale={locale} />
            </div>
            <Button asChild size="sm">
              <Link href={`/${locale}/contact`}>{t.common.getStarted}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LanguageSwitcher locale={locale} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="space-y-1 border-t border-border-subtle py-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-body-md font-medium transition-colors duration-ui ${
                        isActive(item.href) || (item.hasDropdown && (pathname.includes('/about') || pathname.includes('/team') || pathname.includes('/methodology') || pathname.includes('/industries') || pathname.includes('/services'))) || pathname.includes('/talent-pool')
                          ? 'bg-brand-primary/10 text-brand-primary'
                          : 'text-text-muted hover:bg-border-subtle'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.label.includes('Services') || item.label.includes('Servicios') ? (
                          <>
                            <Link
                              href={`/${locale}/services#product-strategy`}
                              className="block rounded-lg px-3 py-2 text-body-sm text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Product Strategy & Roadmap
                            </Link>
                            <Link
                              href={`/${locale}/services#cloud-architecture`}
                              className="block rounded-lg px-3 py-2 text-body-sm text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud & Data Architecture
                            </Link>
                            <Link
                              href={`/${locale}/services#integrations`}
                              className="block rounded-lg px-3 py-2 text-body-sm text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Platform Integrations
                            </Link>
                            <Link
                              href={`/${locale}/services#modernization`}
                              className="block rounded-lg px-3 py-2 text-body-sm text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Modernization & Delivery
                            </Link>
                            <Link
                              href={`/${locale}/services#ai`}
                              className="block rounded-lg px-3 py-2 text-body-sm text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Applied AI
                            </Link>
                          </>
                        ) : (
                          item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block rounded-lg px-3 py-2 text-body-sm transition-colors duration-ui ${
                                isActive(dropdownItem.href)
                                  ? 'bg-brand-primary/10 text-brand-primary'
                                  : 'text-text-muted hover:bg-border-subtle'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <Link
                    href={`/${locale}/blog`}
                    className="block rounded-lg px-3 py-2 text-body-md font-medium text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.blog}
                  </Link>
                  <Link
                    href={`/${locale}/careers`}
                    className="block rounded-lg px-3 py-2 text-body-md font-medium text-text-muted transition-colors duration-ui hover:bg-border-subtle"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.careers}
                  </Link>
                  <Button asChild className="w-full mt-2" size="md">
                    <Link href={`/${locale}/contact`}>{t.common.getStarted}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
