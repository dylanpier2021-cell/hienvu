import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from './Seo'
import { JsonLd } from './JsonLd'
import { Container } from './Container'
import { GoldDivider } from './GoldDivider'
import { breadcrumbSchema } from '@/lib/schema'
import type { BreadcrumbItem } from '@/lib/seo'

export function LegalLayout({
  title,
  metaTitle,
  description,
  path,
  updated,
  children,
}: {
  title: string
  metaTitle: string
  description: string
  path: string
  updated: string
  children: ReactNode
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: title, path },
  ]

  return (
    <>
      <Seo title={metaTitle} description={description} path={path} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <div className="border-b border-border bg-secondary">
        <Container className="py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary-dark">Home</Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span className="text-foreground/80">{title}</span>
          </nav>
          <span className="eyebrow mt-5 block">Legal</span>
          <GoldDivider className="mb-4 mt-3" />
          <h1 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">Last updated: {updated}</p>
        </Container>
      </div>

      <div className="py-14 sm:py-16">
        <Container className="max-w-prose">
          <div className="legal">{children}</div>
          <p className="mt-12 border-t border-border pt-6">
            <Link to="/" className="font-semibold text-primary-dark underline underline-offset-4">
              Back to home
            </Link>
          </p>
        </Container>
      </div>
    </>
  )
}
