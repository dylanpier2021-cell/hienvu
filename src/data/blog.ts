/**
 * Original blog posts for Hien Vu Nails. Content is stored as simple, typed
 * blocks (no markdown parser needed) and rendered by src/pages/BlogPost.tsx.
 * Keep copy free of em dashes and en dashes (see scripts/check-emdash.mjs).
 */

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export interface BlogPost {
  slug: string
  /** Page <h1> and SEO title base. */
  title: string
  /** Unique meta description for this post. */
  description: string
  /** Short teaser shown on the blog index cards. */
  excerpt: string
  /** Human-readable date, e.g. "June 10, 2026". */
  date: string
  /** ISO date for JSON-LD datePublished, e.g. "2026-06-10". */
  isoDate: string
  readingTime: string
  /** Photo name in /public/images (expects -400 and -800 webp variants). */
  image: string
  imageAlt: string
  blocks: BlogBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-make-a-gel-manicure-last-longer',
    title: 'How to Make a Gel Manicure Last Longer',
    description:
      'Simple, salon-tested tips from Hien Vu Nails in Champaign to help your gel manicure stay glossy and chip-free for the full two to three weeks.',
    excerpt:
      'A great gel manicure can stay glossy for weeks. Here are the habits our Champaign guests use to get the most out of every set.',
    date: 'June 10, 2026',
    isoDate: '2026-06-10',
    readingTime: '4 min read',
    image: 'nails-05',
    imageAlt: 'A glossy gel manicure in a soft neutral shade at Hien Vu Nails in Champaign, Illinois',
    blocks: [
      {
        type: 'p',
        text: 'A fresh gel manicure should look just as good on day fourteen as it does on day one. Gel and shellac are built to last two to three weeks, but how you treat your nails between visits makes a real difference. Here is what we tell our guests at Hien Vu Nails in Champaign.',
      },
      { type: 'h2', text: 'Start with healthy prep' },
      {
        type: 'p',
        text: 'Longevity begins before the first coat of color. A careful technician shapes the nail, gently pushes back the cuticle, and removes the natural shine so the gel can grip. When the surface is clean and lightly buffed, the gel bonds tightly and is far less likely to lift at the edges. This is also why sterilized tools and a tidy setup matter, since a clean prep is the foundation of a manicure that holds.',
      },
      { type: 'h2', text: 'Protect your hands day to day' },
      {
        type: 'p',
        text: 'Most early chips come from everyday habits rather than the polish itself. A few small changes go a long way:',
      },
      {
        type: 'ul',
        items: [
          'Wear gloves for dishes, cleaning, and gardening, since hot water and harsh soaps weaken the seal.',
          'Use cuticle oil once or twice a day to keep the nail flexible so it bends instead of cracking.',
          'Treat your nails as tools for beauty, not for opening cans, peeling labels, or scratching stickers.',
          'Apply hand cream often, especially after washing, to keep the skin and nail bed hydrated.',
        ],
      },
      { type: 'h2', text: 'Mind the first 24 hours' },
      {
        type: 'p',
        text: 'Gel cures fully under the lamp, so it is hard right away, but the nail underneath continues to settle. For the first day, try to avoid very hot baths and long soaks, which can cause subtle lifting. A little care early on pays off across the whole life of the manicure.',
      },
      { type: 'h2', text: 'Come back for a proper removal' },
      {
        type: 'p',
        text: 'When it is time for a change, resist the urge to peel or pick. Pulling gel off takes layers of your natural nail with it and leaves the surface thin and weak. A gentle soak-off removal keeps your nails healthy and ready for the next set. If you are local, we are happy to remove and refresh your nails the safe way.',
      },
      {
        type: 'p',
        text: 'Ready for a manicure that lasts? Book with Hannah or call us and we will get you on the calendar.',
      },
    ],
  },
  {
    slug: 'gel-vs-dip-powder',
    title: 'Gel vs Dip Powder: Which Is Right for You?',
    description:
      'Gel or dip powder? Hien Vu Nails in Champaign breaks down the difference in look, strength, wear time, and removal so you can pick the right service.',
    excerpt:
      'Both last for weeks and look beautiful, but gel and dip powder are not the same. Here is how to choose the one that fits your nails and your routine.',
    date: 'June 16, 2026',
    isoDate: '2026-06-16',
    readingTime: '5 min read',
    image: 'nails-12',
    imageAlt: 'A close up of polished nails showing color depth and shine at Hien Vu Nails',
    blocks: [
      {
        type: 'p',
        text: 'Gel and dip powder are two of our most requested services, and guests often ask which one they should choose. Both give you long-lasting color and a polished finish, but they are applied differently and wear differently. Here is a clear comparison to help you decide.',
      },
      { type: 'h2', text: 'How each one is applied' },
      {
        type: 'p',
        text: 'Gel is a polish that is brushed on in thin layers and cured under a UV or LED lamp between coats. The result is a smooth, high-shine finish that looks a lot like classic lacquer. Dip powder skips the lamp. The nail is coated with a bonding liquid and then dipped into a fine colored powder, layer by layer, then sealed. Because there is no curing light, dip can be a good choice if you prefer to avoid the lamp.',
      },
      { type: 'h2', text: 'Strength and feel' },
      {
        type: 'p',
        text: 'Dip powder tends to build a slightly thicker, sturdier layer, so many people find it adds strength to natural nails that bend or peel. Gel feels thinner and more flexible, with a glossy, natural look that many guests love for a clean everyday manicure. Neither one is better in every case. It comes down to your nails and the finish you want.',
      },
      { type: 'h2', text: 'Wear time and color' },
      {
        type: 'ul',
        items: [
          'Gel typically stays glossy and chip-free for two to three weeks with proper care.',
          'Dip powder often wears just as long and sometimes a touch longer thanks to its thicker build.',
          'Gel offers an enormous range of shades and works beautifully for detailed nail art.',
          'Dip comes in many colors too, though art is usually done with gel on top for fine detail.',
        ],
      },
      { type: 'h2', text: 'Removal matters' },
      {
        type: 'p',
        text: 'Both gel and dip are removed by soaking, not peeling. A careful soak-off protects your natural nail and keeps it from getting thin or brittle. As with any long-wear service, the healthiest results come from professional removal rather than picking at the edges.',
      },
      { type: 'h2', text: 'So which should you pick?' },
      {
        type: 'p',
        text: 'Choose gel if you want a thin, flexible, ultra-glossy finish or you have detailed nail art in mind. Choose dip powder if you want extra strength, a slightly thicker feel, or you would rather skip the lamp. Still not sure? Tell Hannah about your routine and your goals at your appointment, and she will recommend the best fit for your nails.',
      },
    ],
  },
  {
    slug: 'what-to-expect-at-your-first-luxury-pedicure',
    title: 'What to Expect at Your First Luxury Pedicure',
    description:
      'New to luxury pedicures? Here is a step-by-step look at the experience at Hien Vu Nails in Champaign, from the soak to the final polish.',
    excerpt:
      'If you have never treated yourself to a luxury pedicure, here is exactly what happens, step by step, so you can relax and enjoy every minute.',
    date: 'June 23, 2026',
    isoDate: '2026-06-23',
    readingTime: '4 min read',
    image: 'salon-pedicure',
    imageAlt: 'A relaxing pedicure station with a clean spa chair at Hien Vu Nails in Champaign',
    blocks: [
      {
        type: 'p',
        text: 'A luxury pedicure is more than a coat of polish on your toes. It is a calm, head-to-toe reset for your feet, and a little time just for you. If it is your first one, here is what the experience looks like at Hien Vu Nails so you know exactly what to expect.',
      },
      { type: 'h2', text: 'A warm, clean start' },
      {
        type: 'p',
        text: 'You will settle into a comfortable spa chair while your technician fills the bowl with warm water. Cleanliness is the first thing you should notice. The pedicure bowl is sanitized after every guest, and tools are sterilized between clients, so your service always begins with a fresh, clean setup.',
      },
      { type: 'h2', text: 'Soak, exfoliate, and smooth' },
      {
        type: 'p',
        text: 'The warm soak softens the skin and helps you unwind. From there your technician moves through the steps that make a luxury pedicure feel special:',
      },
      {
        type: 'ul',
        items: [
          'Gentle nail shaping and tidy cuticle care.',
          'Exfoliation to buff away rough, dry skin and leave your feet smooth.',
          'A callus treatment focused on the heels and the balls of the feet.',
          'A relaxing lower-leg and foot massage with hydrating lotion or oil.',
        ],
      },
      { type: 'h2', text: 'Color and finish' },
      {
        type: 'p',
        text: 'Once your feet feel renewed, it is time for polish. Choose a classic lacquer or ask for gel if you want extra shine and longer wear. Your technician applies the color with care, and you can relax while it sets. Bring an inspiration photo if you would like a little nail art on your toes.',
      },
      { type: 'h2', text: 'How to prepare and how long it takes' },
      {
        type: 'p',
        text: 'There is nothing you need to do in advance. Wear loose pants or capris that roll up easily, and consider open-toe shoes or sandals so fresh polish has room to dry. A luxury pedicure usually takes about an hour, which is the perfect window to put your phone down and simply rest.',
      },
      {
        type: 'p',
        text: 'Treat yourself to a little luxury. Book a pedicure with us or give us a call, and we will take care of the rest.',
      },
    ],
  },
]

/** Look up a post by slug (used by the dynamic /blog/:slug route). */
export function getPost(slug: string | undefined): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
