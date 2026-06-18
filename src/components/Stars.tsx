import { StarIcon } from './icons'
import { cn } from '@/lib/cn'

/** Row of five gold stars. Decorative; pair with visible text for meaning. */
export function Stars({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-primary', className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} width={size} height={size} />
      ))}
    </span>
  )
}
