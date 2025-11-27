import { MetadataRoute } from 'next'
import { getCaseStudies, getBlogPosts, getServices } from '@/lib/content'
import { locales } from '@/lib/i18n-server'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://divisy.com'

  const routes = [
    '',
    '/services',
    '/industries',
    '/cases',
    '/team',
    '/methodology',
    '/blog',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add localized routes
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })

    // Add case studies
    const caseStudies = getCaseStudies(locale)
    caseStudies.forEach((caseStudy: { url: string; publishedAt: string }) => {
      sitemapEntries.push({
        url: `${baseUrl}${caseStudy.url}`,
        lastModified: new Date(caseStudy.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })

    // Add blog posts
    const blogPosts = getBlogPosts(locale)
    blogPosts.forEach((post: { url: string; publishedAt: string }) => {
      sitemapEntries.push({
        url: `${baseUrl}${post.url}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    })

    // Add services
    const services = getServices(locale)
    services.forEach((service: { url: string }) => {
      sitemapEntries.push({
        url: `${baseUrl}${service.url}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemapEntries
}

