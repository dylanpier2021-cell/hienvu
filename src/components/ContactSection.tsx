import { business } from '@/data/business'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { BookingWidget } from './BookingWidget'
import { ContactForm } from './ContactForm'
import { MapEmbed } from './MapEmbed'
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from './icons'

function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <MapPinIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h4 className="font-serif text-lg font-semibold text-charcoal">Visit Us</h4>
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-foreground/90 underline-offset-2 hover:text-primary-dark hover:underline"
          >
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <ClockIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h4 className="font-serif text-lg font-semibold text-charcoal">Hours</h4>
          <ul className="mt-1 space-y-0.5 text-foreground/90">
            {business.hours.map((h) => (
              <li key={h.days} className="flex flex-wrap gap-x-2">
                <span className="font-medium">{h.days}:</span>
                <span>
                  {h.open} to {h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-4">
        <PhoneIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h4 className="font-serif text-lg font-semibold text-charcoal">Call or Text</h4>
          <a
            href={business.phoneHref}
            className="mt-1 block text-foreground/90 hover:text-primary-dark"
          >
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <MailIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h4 className="font-serif text-lg font-semibold text-charcoal">Email</h4>
          <a
            href={`mailto:${business.email}`}
            className="mt-1 block break-all text-foreground/90 hover:text-primary-dark"
          >
            {business.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export function ContactSection() {
  return (
    <Section id="booking" variant="cream" ariaLabelledby="booking-heading">
      <Container>
        <SectionHeading
          id="booking-heading"
          align="center"
          eyebrow="Book and Visit"
          title="Book your appointment"
          subtitle="Reserve online in a few taps, send us a message, or simply give us a call. Walk-ins are always welcome too."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Online booking */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Book online</h3>
            <BookingWidget />
          </div>

          {/* Contact details + map */}
          <div id="contact" className="scroll-mt-24">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Find us</h3>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-7">
              <ContactInfo />
            </div>
            <div className="mt-5">
              <MapEmbed />
            </div>
          </div>
        </div>

        {/* Native, A2P 10DLC compliant request form */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-charcoal">Prefer to send a message?</h3>
            <p className="mt-2 text-muted-foreground">
              Share a few details and we will get back to you to confirm your appointment.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
