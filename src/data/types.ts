import type { ComponentType, SVGProps } from 'react'

export interface Service {
  name: string
  /** One short, warm benefit line. */
  blurb: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export interface PriceItem {
  name: string
  price: string
  /** Approximate duration, e.g. "30 min" or "60 to 75 min". */
  duration?: string
}

export interface PriceGroup {
  category: string
  items: PriceItem[]
}

export interface Review {
  name: string
  rating: number
  date: string
  service: string
  text: string
}

export interface Faq {
  q: string
  a: string
}
