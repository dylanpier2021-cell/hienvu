import { business, SITE_URL } from '@/data/business'
import type { Faq } from '@/data/types'
import { absUrl, DEFAULT_OG_IMAGE, type BreadcrumbItem } from './seo'

const BUSINESS_ID = `${SITE_URL}/#business`

const DOW: Record<string, string> = {
  Mo: 'Monday',
  Tu: 'Tuesday',
  We: 'Wednesday',
  Th: 'Thursday',
  Fr: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday',
}

/**
 * Site-wide NailSalon (LocalBusiness) schema. Describes only factual NAP,
 * hours, geo and profiles that are visible on the page. We intentionally omit
 * self-serving aggregate review markup.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NailSalon',
    '@id': BUSINESS_ID,
    name: business.name,
    alternateName: business.brand,
    description:
      "Hien Vu is Champaign County's premier luxury nail salon, offering manicures, pedicures, gel, dip powder, acrylic, Gel X and custom nail art.",
    url: SITE_URL,
    telephone: business.phoneDisplay,
    email: business.email,
    priceRange: business.priceRange,
    image: DEFAULT_OG_IMAGE,
    logo: absUrl('/apple-touch-icon.png'),
    founder: {
      '@type': 'Person',
      name: business.owner,
      alternateName: business.ownerNickname,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: business.maps,
    openingHoursSpecification: business.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dow.map((d) => DOW[d]),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: business.serviceAreas.map((city) => ({
      '@type': 'City',
      name: `${city}, IL`,
    })),
    sameAs: [business.reviews.google, business.reviews.yelp],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.brand,
    url: SITE_URL,
  }
}

/** Only pass FAQs that are actually rendered on the page. */
export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  }
}
