import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { business } from '@/data/business'

/**
 * Wordmark for the salon. Serif "Hien Vu" with a small uppercase "NAILS".
 * Links to the home page (scrolls to top on the home route).
 */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${business.brand}, home`}
      className={cn('group inline-flex flex-col leading-none', className)}
    >
      <span
        className={cn(
          'font-serif text-2xl font-semibold tracking-tight sm:text-[1.7rem]',
          light ? 'text-background' : 'text-charcoal',
        )}
      >
        {business.name}
      </span>
      <span
        className={cn(
          'mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.42em]',
          light ? 'text-primary-light' : 'text-primary-dark',
        )}
      >
        Nails Champaign
      </span>
    </Link>
  )
}
