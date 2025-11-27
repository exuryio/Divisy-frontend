import { getServerLocale } from '@/lib/i18n-server'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Mdx } from '@/components/mdx-components'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

// Default blog images by topic
const blogImages: Record<string, string> = {
  'Product Strategy': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'Cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'Data Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'AI': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
}

export async function generateStaticParams() {
  const enPosts = getBlogPosts('en')
  const esPosts = getBlogPosts('es')
  return [
    ...enPosts.map((post: { slug: string }) => ({ locale: 'en', slug: post.slug })),
    ...esPosts.map((post: { slug: string }) => ({ locale: 'es', slug: post.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const locale = params.locale as 'en' | 'es'
  const post = getBlogPostBySlug(params.slug, locale)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const locale = params.locale as 'en' | 'es'
  const post = getBlogPostBySlug(params.slug, locale)

  if (!post) {
    notFound()
  }

  const firstTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'default'
  const imageUrl = blogImages[firstTag] || blogImages.default

  return (
    <article className="flex flex-col">
      {/* Hero Image Section */}
      <section className="relative h-[400px] w-full overflow-hidden lg:h-[500px]">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-transparent" />
        <div className="container-content relative z-10 flex h-full items-end pb-12">
          <div className="max-w-4xl">
            <Button variant="ghost" asChild className="mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <Link href={`/${locale}/blog`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <h1 className="mb-4 text-display-1 text-white lg:text-display-1">
              {post.title}
            </h1>
            <p className="mb-4 text-body-lg text-white/90 lg:text-heading-3">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-body-sm text-white/80">
              <span>{formatDate(post.publishedAt, locale)}</span>
              {post.author && (
                <>
                  <span>•</span>
                  <span>
                    {post.author}
                    {post.authorRole && `, ${post.authorRole}`}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Mdx code={post.body.code} />
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

