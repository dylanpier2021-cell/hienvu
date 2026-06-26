import { Link } from 'react-router-dom'
import { pricing, pricingNote } from '@/data/pricing'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'

interface PricingSectionProps {
  /** Show only the first N pricing groups (used for the home page highlights). */
  limit?: number
  /** Bottom call to action. */
  cta?: { label: string; to: string }
  /** Hide the section heading when the page already provides an <h1>. */
  showHeading?: boolean
}

export function PricingSection({
  limit,
  cta = { label: 'Book your appointment', to: '/contact-us' },
  showHeading = true,
}: PricingSectionProps = {}) {
  const groups = limit ? pricing.slice(0, limit) : pricing

  return (
    <Section id="pricing" ariaLabelledby={showHeading ? 'pricing-heading' : undefined}>
      <Container>
        {showHeading && (
          <SectionHeading
            id="pricing-heading"
            align="center"
            eyebrow="Price Menu"
            title="Simple, honest pricing"
            subtitle={pricingNote}
          />
        )}

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 [&:not(:first-child)]:mt-12">
          {groups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.05}>
              <section aria-labelledby={`price-${i}`} className="card h-full p-6 sm:p-7">
                <h3 id={`price-${i}`} className="font-serif text-2xl font-semibold text-charcoal">
                  {group.category}
                </h3>
                <span aria-hidden="true" className="mt-3 block h-[2px] w-16 rounded-full bg-gold-gradient" />

                <ul className="mt-5 divide-y divide-border/70">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="flex flex-col">
                        <span className="font-medium text-foreground">{item.name}</span>
                        {item.duration && (
                          <span className="text-sm text-muted-foreground">{item.duration}</span>
                        )}
                      </span>
                      <span className="whitespace-nowrap font-serif text-lg font-semibold text-primary-dark">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to={cta.to} className="btn btn-primary">
            {cta.label}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
