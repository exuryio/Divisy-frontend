import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `services/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    icon: { type: 'string', required: false },
    benefits: { type: 'list', of: { type: 'string' }, required: false },
    deliverables: { type: 'list', of: { type: 'string' }, required: false },
    techStack: { type: 'list', of: { type: 'string' }, required: false },
    kpis: { type: 'list', of: { type: 'string' }, required: false },
    pricingModels: { type: 'list', of: { type: 'string' }, required: false },
    locale: { type: 'string', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.locale}/services/${doc.slug}`,
    },
  },
}))

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `cases/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    challenge: { type: 'string', required: true },
    approach: { type: 'string', required: true },
    results: { type: 'list', of: { type: 'string' }, required: true },
    techStack: { type: 'list', of: { type: 'string' }, required: false },
    testimonial: { type: 'string', required: false },
    testimonialAuthor: { type: 'string', required: false },
    testimonialRole: { type: 'string', required: false },
    company: { type: 'string', required: false },
    industry: { type: 'string', required: false },
    image: { type: 'string', required: false },
    publishedAt: { type: 'date', required: true },
    locale: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    featured: { type: 'boolean', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.locale}/cases/${doc.slug}`,
    },
  },
}))

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    author: { type: 'string', required: true },
    authorRole: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    locale: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    featured: { type: 'boolean', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.locale}/blog/${doc.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Service, CaseStudy, BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

