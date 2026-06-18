import { cn } from '@/lib/cn'

/** An 80px x 2px gold divider used under eyebrow labels. */
export function GoldDivider({
  align = 'left',
  className,
}: {
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'block h-[2px] w-20 rounded-full bg-gold-gradient',
        align === 'center' && 'mx-auto',
        className,
      )}
    />
  )
}
