import { Link } from 'react-router-dom'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { ContactInfo } from './ContactInfo'
import { MapEmbed } from './MapEmbed'

/** Home page location block: address, hours, contact details and a map. */
export function LocationSection() {
  return (
    <Section id="location" variant="cream" ariaLabelledby="location-heading">
      <Container>
        <SectionHeading
          id="location-heading"
          align="center"
          eyebrow="Find Us"
          title="Visit our Champaign salon"
          subtitle="We are easy to reach on West Marketview Drive, open seven days a week. Walk-ins are welcome and appointments are easy to book."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-7">
            <ContactInfo />
            <div className="mt-6">
              <Link to="/contact-us" className="btn btn-primary w-full">
                Contact and Book
              </Link>
            </div>
          </div>

          <div className="overflow-hidden">
            <MapEmbed />
          </div>
        </div>
      </Container>
    </Section>
  )
}
