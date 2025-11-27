import { getServerLocale } from '@/lib/i18n-server'
import { getBlogPosts } from '@/lib/content'
import { getTranslations } from '@/lib/translations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Default blog images by topic
const blogImages: Record<string, string> = {
  'Product Strategy': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'Cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'Data Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'AI': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)

  return {
    title: t.nav.blog,
    description: 'Insights on product strategy, cloud architecture, data analytics, and technology consulting',
  }
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'en' | 'es'
  const t = getTranslations(locale)
  const posts = getBlogPosts(locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-page to-surface py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Blog"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-page/90 via-bg-page/70 to-bg-page" />
        </div>
        <div className="container-content relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-display-1 text-text-primary lg:text-display-1">
              {t.nav.blog}
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-text-muted lg:text-heading-3">
              {locale === 'en'
                ? 'Insights on product strategy, cloud architecture, data analytics, and more'
                : 'Perspectivas sobre estrategia de producto, arquitectura cloud, analítica de datos y más'}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container-content">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: { slug: string; title: string; description: string; publishedAt: string; author?: string; tags?: string[]; url: string }) => {
                const firstTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'default'
                const imageUrl = blogImages[firstTag] || blogImages.default
                return (
                  <Card key={post.slug} className="group h-full overflow-hidden transition-all duration-ui hover:shadow-dds-2">
                    {/* Blog Post Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                      {post.tags && post.tags.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="backdrop-blur-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-heading-3 text-text-primary">{post.title}</CardTitle>
                      <CardDescription className="text-body-md text-text-muted">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex items-center gap-4 text-body-sm text-text-muted">
                        <span>{formatDate(post.publishedAt, locale)}</span>
                        {post.author && <span>by {post.author}</span>}
                      </div>
                      <Button variant="ghost" asChild>
                        <Link href={post.url}>
                          {t.common.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted">
                {locale === 'en' ? 'Blog posts coming soon.' : 'Publicaciones próximamente.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

