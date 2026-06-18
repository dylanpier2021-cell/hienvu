import { services } from '@/data/services'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function ServicesSection() {
  return (
    <Section id="services" variant="cream" ariaLabelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          align="center"
          eyebrow="What We Offer"
          title="Services for hands and feet"
          subtitle="From a quick polish change to a full custom set, every service is done with clean tools, premium products and a careful eye."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, blurb, icon: Icon }, i) => (
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

        <p className="mt-10 text-center text-muted-foreground">
          Looking for something specific?{' '}
          <a href="#booking" className="font-semibold text-primary-dark underline underline-offset-4">
            Book an appointment
          </a>{' '}
          and we will take care of the rest.
        </p>
      </Container>
    </Section>
  )
}
