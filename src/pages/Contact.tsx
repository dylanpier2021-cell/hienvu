import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { ContactInfo } from '@/components/ContactInfo'
import { MapEmbed } from '@/components/MapEmbed'
import { OptInForm } from '@/components/OptInForm'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact and Book | Hien Vu Nails in Champaign, IL"
        description="Contact Hien Vu Nails in Champaign, IL. Find our address, hours, phone and email, see the map, and request an appointment using our contact form."
        path="/contact-us"
      />
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact-us' },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Book and Visit"
        title="Contact Us"
        subtitle="Reserve your appointment, send us a message, or simply give us a call. Walk-ins are always welcome too."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact details + map */}
            <div>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Find us</h2>
              <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-7">
                <ContactInfo />
              </div>
              <div className="mt-5">
                <MapEmbed />
              </div>
            </div>

            {/* The single SMS opt-in form for the whole site */}
            <div>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal">
                Request an appointment
              </h2>
              <div className="rounded-2xl border border-border bg-background p-6 shadow-card sm:p-8">
                <p className="mb-6 text-muted-foreground">
                  Share a few details and we will get back to you to confirm your appointment.
                </p>
                <OptInForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
