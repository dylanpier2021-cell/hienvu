import { pricing, pricingNote } from '@/data/pricing'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function PricingSection() {
  return (
    <Section id="pricing" ariaLabelledby="pricing-heading">
      <Container>
        <SectionHeading
          id="pricing-heading"
          align="center"
          eyebrow="Price Menu"
          title="Simple, honest pricing"
          subtitle={pricingNote}
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {pricing.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.05}>
              <section
                aria-labelledby={`price-${i}`}
                className="card h-full p-6 sm:p-7"
              >
                <h3
                  id={`price-${i}`}
                  className="font-serif text-2xl font-semibold text-charcoal"
                >
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
          <a href="#booking" className="btn btn-primary">
            Book Your Appointment
          </a>
        </div>
      </Container>
    </Section>
  )
}
