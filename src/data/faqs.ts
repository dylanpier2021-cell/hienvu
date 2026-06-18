import type { Faq } from './types'

/**
 * Short FAQ shown on the home page. Because these are visible on the page, they
 * are also marked up as FAQPage JSON-LD. Keep questions and answers in sync.
 */
export const faqs: Faq[] = [
  {
    q: 'Do you take walk-ins or do I need an appointment?',
    a: 'Walk-ins are always welcome based on availability, and booking ahead is recommended so we can reserve your preferred time. You can book online or call us at (217) 398-1898.',
  },
  {
    q: 'How long does gel polish last?',
    a: 'Gel and shellac typically stay glossy and chip-free for two to three weeks, depending on your nail growth and daily routine.',
  },
  {
    q: 'What is the difference between gel and dip powder?',
    a: 'Gel is brushed on and cured under a UV or LED light for a high-shine finish, while dip powder is a lightweight powder system that adds strength without curing. Both last two to three weeks.',
  },
  {
    q: 'Are your tools sanitized between clients?',
    a: 'Yes. Tools are 100% sterilized between every client and we use single-use disposables wherever possible, so every guest starts with a clean, fresh setup.',
  },
  {
    q: 'Can you recreate a nail design from a photo?',
    a: 'Absolutely. Bring an inspiration picture and Hannah will work with you to bring custom nail art to life. Detailed designs are priced based on complexity.',
  },
  {
    q: 'How much is a full set of acrylic?',
    a: 'A regular acrylic full set starts at $45, and a gel or shellac full set starts at $55. Final pricing depends on length, shape and design.',
  },
]
