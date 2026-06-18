import type { Service } from './types'
import {
  SparkleIcon,
  HeartIcon,
  StarIcon,
  ScissorsIcon,
  CalendarIcon,
  CheckIcon,
  QuoteIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
} from '@/components/icons'

/**
 * Service cards for the home page. One short benefit line each. Edit freely,
 * the grid adapts to any count.
 */
export const services: Service[] = [
  {
    name: 'Manicures',
    blurb: 'Clean shaping, tidy cuticles and a polish that looks salon fresh for days.',
    icon: SparkleIcon,
  },
  {
    name: 'Pedicures',
    blurb: 'Relaxing soaks and thorough care, from a quick refresh to our luxury spa.',
    icon: HeartIcon,
  },
  {
    name: 'Gel and Shellac',
    blurb: 'High-shine, chip-resistant color that stays glossy for two to three weeks.',
    icon: StarIcon,
  },
  {
    name: 'Dip Powder',
    blurb: 'Lightweight, durable strength and color without the wait of UV curing.',
    icon: CheckIcon,
  },
  {
    name: 'Acrylic Full Set',
    blurb: 'Custom length and shape built to last, sculpted just the way you like.',
    icon: ScissorsIcon,
  },
  {
    name: 'Gel X',
    blurb: 'A gentle, soak-off extension with a natural feel and a flawless shape.',
    icon: SparkleIcon,
  },
  {
    name: 'Nail Art',
    blurb: 'Bring an inspiration photo and Hannah will make the design come to life.',
    icon: QuoteIcon,
  },
  {
    name: 'Fills',
    blurb: 'Keep your set looking new with clean, well-timed gel or acrylic fills.',
    icon: CalendarIcon,
  },
  {
    name: 'Nail Repair',
    blurb: 'Quick, careful fixes for a chipped, cracked or lifted nail.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Polish Change',
    blurb: 'A fast color swap for hands or feet when you just need a refresh.',
    icon: ClockIcon,
  },
  {
    name: 'Kids Services',
    blurb: 'Gentle, friendly manicures and pedicures for our youngest guests.',
    icon: HeartIcon,
  },
  {
    name: 'Take Off and Removal',
    blurb: 'Safe, no-damage removal that keeps your natural nails healthy.',
    icon: MapPinIcon,
  },
]
