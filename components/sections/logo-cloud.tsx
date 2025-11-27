'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoCloudProps {
  logos?: Array<{
    name: string
    logo: string
  }>
  title?: string
  subtitle?: string
}

// Client logos configuration
// Add your client logos to /public/clients/ folder
// Supported formats: .png, .svg, .jpg, .webp
// Recommended: SVG or PNG with transparent background
// Recommended size: 200-400px width, maintain aspect ratio
const defaultLogos = [
  { name: 'White Hat Gaming', logo: '/clients/white hat gaming.svg' },
  { name: 'Exury.io', logo: '/clients/exury.png' },
  { name: 'Deloitte', logo: '/clients/deloitte.svg' },
  { name: 'Binance', logo: '/clients/binance.png' },
  { name: 'Fluidra', logo: '/clients/fluidra.webp' },
  { name: 'SDG', logo: '/clients/sdg.webp' },
  { name: 'Paydo', logo: '/clients/paydo.svg' },
]

export function LogoCloud({
  logos = defaultLogos,
  title = 'Trusted by leading companies',
  subtitle,
}: LogoCloudProps) {
  // Filter out logos that don't exist (for development)
  const validLogos = logos.filter((logo) => logo.logo)

  if (validLogos.length === 0) {
    return null
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...validLogos, ...validLogos]

  return (
    <section className="border-y border-border-subtle bg-surface py-12">
      <div className="container-content">
        {title && (
          <div className="mb-8 text-center">
            <p className="text-body-sm font-medium uppercase tracking-wide text-text-muted">
              {title}
            </p>
            {subtitle && (
              <p className="mt-2 text-body-md text-text-muted">{subtitle}</p>
            )}
          </div>
        )}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-16 lg:gap-20"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="group flex shrink-0 items-center justify-center"
              >
                <div className={`relative h-10 w-32 md:h-12 md:w-40 ${
                  logo.name === 'Deloitte' || logo.name === 'SDG' 
                    ? 'bg-border-subtle/30 rounded-lg p-2' 
                    : logo.name === 'White Hat Gaming'
                    ? 'dark:bg-border-subtle/20 rounded-lg p-2'
                    : ''
                }`}>
                  <Image
                    src={logo.logo}
                    alt={`${logo.name} logo`}
                    width={160}
                    height={48}
                    className={`h-full w-full object-contain transition-all duration-ui ${
                      logo.name === 'Deloitte' || logo.name === 'SDG'
                        ? 'opacity-80 grayscale brightness-0 dark:opacity-60 dark:grayscale-0 dark:brightness-100 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-100'
                        : logo.name === 'White Hat Gaming'
                        ? 'opacity-60 grayscale dark:opacity-90 dark:brightness-150 dark:contrast-125 group-hover:opacity-100 group-hover:grayscale-0 dark:group-hover:brightness-100 dark:group-hover:contrast-100'
                        : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0'
                    }`}
                    unoptimized={logo.logo.endsWith('.svg')}
                    onError={(e) => {
                      console.error(`Failed to load logo: ${logo.logo}`, e)
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

