import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { PricingSection } from '@/components/PricingSection'
import { pricingNote } from '@/data/pricing'
import { breadcrumbSchema } from '@/lib/schema'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Nail Salon Prices in Champaign, IL | Hien Vu Nails"
        description="See the full price menu for Hien Vu Nails in Champaign: manicures, pedicures, gel, dip powder, acrylic full sets, fills, polish changes and more. Simple, honest pricing."
        path="/pricing"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />

      <PageHeader eyebrow="Price Menu" title="Simple, Honest Pricing" subtitle={pricingNote} />

      <PricingSection showHeading={false} cta={{ label: 'Book your appointment', to: '/contact-us' }} />
    </>
  )
}
