import { useMDXComponent } from 'next-contentlayer/hooks'
import { ComponentProps } from 'react'

const components = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="mt-8 mb-4 text-4xl font-bold" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="mt-6 mb-3 text-2xl font-semibold" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-4 leading-7" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mb-4 ml-6 list-disc" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="mb-4 ml-6 list-decimal" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li className="mb-2" {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="mb-4 border-l-4 border-primary pl-4 italic" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4" {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a className="text-primary underline hover:text-primary/80" {...props} />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

