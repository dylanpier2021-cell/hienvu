import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PricingSection } from '@/components/PricingSection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { FaqSection } from '@/components/FaqSection'
import { LocationSection } from '@/components/LocationSection'
import { localBusinessSchema, websiteSchema, faqSchema } from '@/lib/schema'
import { faqs } from '@/data/faqs'

export default function Home() {
  return (
    <>
      <Seo
        title="Hien Vu Nails | Luxury Nail Salon in Champaign, IL"
        description="Hien Vu is Champaign County's premier luxury nail salon. Manicures, pedicures, gel, dip, acrylic and custom nail art by Hannah. Open 7 days a week, book today."
        path="/"
      />
      {/* JSON-LD describes only content visible on this page. */}
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema(faqs)]} />

      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection limit={6} cta={{ label: 'View all services', to: '/services' }} />
      <PricingSection limit={2} cta={{ label: 'View full price menu', to: '/pricing' }} />
      <ReviewsSection />
      <FaqSection />
      <LocationSection />
    </>
  )
}
