import type { ReactNode } from 'react'
import { Container } from './Container'
import { GoldDivider } from './GoldDivider'

/**
 * Standard banner for interior pages. Holds the single <h1> for the page so
 * every route has exactly one top-level heading.
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <div className="border-b border-border bg-secondary">
      <Container className="py-14 sm:py-16">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <GoldDivider className="mb-4 mt-3" />
        <h1 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.6rem]">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">{subtitle}</p>
        )}
      </Container>
    </div>
  )
}
