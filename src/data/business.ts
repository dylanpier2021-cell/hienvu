/**
 * Single source of truth for the salon's name, address, phone, hours and
 * profiles (NAP). Used across the UI, footer, contact section and JSON-LD.
 *
 * The business is a sole proprietorship. The legal / schema name is "Hien Vu".
 * "Hien Vu Nails" is used as a display noun phrase in headings and the logo
 * where it reads more naturally.
 */

// IMPORTANT: set this to the real production domain before launch. It is used
// for canonical URLs, Open Graph tags and sitemap.xml. Also update the matching
// constant in scripts/generate-sitemap.mjs.
export const SITE_URL = 'https://www.hienvunails.com'

export const business = {
  /** Legal / schema name (sole proprietor). */
  name: 'Hien Vu',
  legalName: 'Hien Vu',
  /** Display brand / DBA (trade name) used in the logo and headings. */
  brand: 'Hien Vu Nails',
  dba: 'Hien Vu Nails',
  /**
   * Sender identity used verbatim in every SMS consent disclosure, per the
   * GoHighLevel / Twilio A2P 10DLC registration (legal name + DBA).
   */
  smsSenderName: 'Hien Vu (DBA Hien Vu Nails)',
  tagline: "Champaign County's Premier Luxury Nail Salon",
  owner: 'Hien Vu',
  ownerNickname: 'Hannah',
  yearsInBusiness: '10+',
  priceRange: '$$',
  url: SITE_URL,

  phoneDisplay: '(217) 398-1898',
  phoneHref: 'tel:+12173981898',
  email: 'hannahvu83@yahoo.com',

  address: {
    street: '706 W Marketview Dr Ste A',
    city: 'Champaign',
    state: 'IL',
    stateLong: 'Illinois',
    zip: '61822',
    county: 'Champaign County',
  },

  /** Approximate coordinates for the Marketview Drive location. Verify before launch. */
  geo: {
    lat: 40.1437,
    lng: -88.2447,
  },

  maps: 'https://www.google.com/maps/place/706+W+Marketview+Dr+Ste+A,+Champaign,+IL+61822',
  /** Pre-filled Google Maps embed for the contact section iframe. */
  mapsEmbed:
    'https://www.google.com/maps?q=706+W+Marketview+Dr+Ste+A,+Champaign,+IL+61822&output=embed',

  reviews: {
    google: 'https://g.page/r/CTK8LV-epOqKEAE/review',
    yelp: 'https://www.yelp.com/writeareview/biz/-BtggbTrtuaPjL5Dc9lv3w',
  },

  /** Display + machine-readable hours. */
  hours: [
    { days: 'Monday to Saturday', open: '9:30 AM', close: '7:00 PM', dow: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '09:30', closes: '19:00' },
    { days: 'Sunday', open: '11:00 AM', close: '5:00 PM', dow: ['Su'], opens: '11:00', closes: '17:00' },
  ],

  ratingValue: 5.0,

  reasonsToChoose: [
    {
      title: 'Sterilized Every Time',
      text: 'Tools are 100% sterilized between every client, with single-use disposables wherever possible.',
    },
    {
      title: 'Premium, Long-Lasting Products',
      text: 'High-quality gels, lacquers and powders chosen to hold their shine for weeks, not days.',
    },
    {
      title: 'Detail-Oriented Technicians',
      text: 'Caring techs who take the time to get shapes, cuticles and color exactly right.',
    },
    {
      title: 'Relaxing Atmosphere',
      text: 'A calm, comfortable, spotless space designed to feel like a true escape.',
    },
    {
      title: 'Treated Like Family',
      text: 'Hannah is a hands-on owner who welcomes every guest like a neighbor, not a number.',
    },
  ],

  /** Towns served, used for local SEO copy and the JSON-LD areaServed. */
  serviceAreas: [
    'Champaign',
    'Urbana',
    'Savoy',
    'Philo',
    'Mahomet',
    'Rantoul',
    'St. Joseph',
    'Tolono',
    'Monticello',
  ],
}

export type Business = typeof business
