import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { ServicesSection } from '@/components/ServicesSection'
import { breadcrumbSchema } from '@/lib/schema'

export default function Services() {
  return (
    <>
      <Seo
        title="Nail Services in Champaign, IL | Hien Vu Nails"
        description="Explore the full menu of nail services at Hien Vu Nails in Champaign: manicures, pedicures, gel, dip powder, acrylic, Gel X, nail art, fills, repairs and more."
        path="/services"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      <PageHeader
        eyebrow="What We Offer"
        title="Nail Services in Champaign"
        subtitle="From a quick polish change to a full custom set, every service is done with sterilized tools, premium products and a careful, caring eye."
      />

      <ServicesSection showHeading={false} cta={{ label: 'Book an appointment', to: '/contact-us' }} />
    </>
  )
}
