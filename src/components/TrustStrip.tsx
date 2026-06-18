import { ShieldCheckIcon, StarIcon, ClockIcon, CalendarIcon } from './icons'
import type { SVGProps } from 'react'
import type { ComponentType } from 'react'

const items: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; sub: string }[] = [
  { icon: ShieldCheckIcon, title: 'Sterilized Tools', sub: 'Cleaned between every client' },
  { icon: StarIcon, title: '5.0 Rating', sub: '80+ five-star reviews' },
  { icon: ClockIcon, title: '10+ Years', sub: 'Experienced, caring techs' },
  { icon: CalendarIcon, title: 'Open Sundays', sub: 'Seven days a week' },
]

export function TrustStrip() {
  return (
    <section aria-label="Why guests choose us" className="border-y border-border bg-secondary">
      <div className="container grid grid-cols-2 gap-x-4 gap-y-8 py-10 sm:py-12 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary/12 text-primary-dark">
              <Icon className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-charcoal">{title}</span>
              <span className="text-sm text-muted-foreground">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
