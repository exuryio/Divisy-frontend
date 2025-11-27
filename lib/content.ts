import { Locale } from './i18n'

// Import contentlayer generated content
// Using a safe import that works with contentlayer's build process
let allServices: any[] = []
let allCaseStudies: any[] = []
let allBlogPosts: any[] = []

// Dynamic import for contentlayer - works at build time
if (typeof window === 'undefined') {
  try {
    // @ts-ignore - contentlayer generates this at build time
    // Try direct path first
    const contentPath = require.resolve('../.contentlayer/generated/index.mjs')
    // @ts-ignore - contentlayer generates this at build time
    const content = require(contentPath)
    allServices = content.allServices || []
    allCaseStudies = content.allCaseStudies || []
    allBlogPosts = content.allBlogPosts || []
  } catch (e) {
    try {
      // Try contentlayer/generated alias
      // @ts-ignore - contentlayer generates this at build time
      const content = require('contentlayer/generated')
      allServices = content.allServices || []
      allCaseStudies = content.allCaseStudies || []
      allBlogPosts = content.allBlogPosts || []
    } catch (e2) {
      // Try JSON files directly
      try {
        const fs = require('fs')
        const path = require('path')
        const caseStudiesPath = path.join(
          process.cwd(),
          '.contentlayer/generated/CaseStudy/_index.json'
        )
        const servicesPath = path.join(process.cwd(), '.contentlayer/generated/Service/_index.json')
        const blogPostsPath = path.join(
          process.cwd(),
          '.contentlayer/generated/BlogPost/_index.json'
        )

        if (fs.existsSync(caseStudiesPath)) {
          allCaseStudies = JSON.parse(fs.readFileSync(caseStudiesPath, 'utf-8'))
        }
        if (fs.existsSync(servicesPath)) {
          allServices = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'))
        }
        if (fs.existsSync(blogPostsPath)) {
          allBlogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'))
        }
      } catch (e3) {
        // Content not generated yet or in development
        console.warn('Contentlayer content not available:', e3)
      }
    }
  }
}

export function getServices(locale: Locale = 'en') {
  return allServices.filter((service: any) => service.locale === locale)
}

export function getCaseStudies(locale: Locale = 'en') {
  return allCaseStudies
    .filter((caseStudy: any) => caseStudy.locale === locale)
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedCaseStudies(locale: Locale = 'en', limit: number = 3) {
  return getCaseStudies(locale)
    .filter((caseStudy: any) => caseStudy.featured)
    .slice(0, limit)
}

export function getBlogPosts(locale: Locale = 'en') {
  return allBlogPosts
    .filter((post: any) => post.locale === locale)
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedBlogPosts(locale: Locale = 'en', limit: number = 5) {
  return getBlogPosts(locale)
    .filter((post: any) => post.featured)
    .slice(0, limit)
}

export function getCaseStudyBySlug(slug: string, locale: Locale = 'en') {
  return allCaseStudies.find(
    (caseStudy: any) => caseStudy.slug === slug && caseStudy.locale === locale
  )
}

export function getBlogPostBySlug(slug: string, locale: Locale = 'en') {
  return allBlogPosts.find((post: any) => post.slug === slug && post.locale === locale)
}

export function getServiceBySlug(slug: string, locale: Locale = 'en') {
  return allServices.find((service: any) => service.slug === slug && service.locale === locale)
}
