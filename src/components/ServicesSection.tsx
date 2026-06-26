import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'

interface ServicesSectionProps {
  /** Show only the first N services (used for the home page teaser). */
  limit?: number
  /** Bottom call to action. */
  cta?: { label: string; to: string }
  subtitle?: string
  /** Hide the section heading when the page already provides an <h1>. */
  showHeading?: boolean
}

export function ServicesSection({
  limit,
  cta = { label: 'Book an appointment', to: '/contact-us' },
  subtitle = 'From a quick polish change to a full custom set, every service is done with clean tools, premium products and a careful eye.',
  showHeading = true,
}: ServicesSectionProps = {}) {
  const shown = limit ? services.slice(0, limit) : services

  return (
    <Section id="services" variant="cream" ariaLabelledby={showHeading ? 'services-heading' : undefined}>
      <Container>
        {showHeading && (
          <SectionHeading
            id="services-heading"
            align="center"
            eyebrow="What We Offer"
            title="Services for hands and feet"
            subtitle={subtitle}
          />
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 [&:not(:first-child)]:mt-12">
          {shown.map(({ name, blurb, icon: Icon }, i) => (
            <Reveal key={name} delay={(i % 3) * 0.05}>
              <article className="card h-full p-6 transition-shadow hover:shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">{name}</h3>
                <p className="mt-2 text-pretty text-muted-foreground">{blurb}</p>
              </article>
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
