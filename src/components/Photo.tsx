import { cn } from '@/lib/cn'

/**
 * Responsive WebP image with explicit width/height to keep CLS at zero.
 * Expects two sizes in /public/images: `${name}-400.webp` and `${name}-800.webp`.
 */
export function Photo({
  name,
  alt,
  width,
  height,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  className,
  eager = false,
}: {
  name: string
  alt: string
  width: number
  height: number
  sizes?: string
  className?: string
  /** Set true only for above-the-fold images. */
  eager?: boolean
}) {
  const src400 = `/images/${name}-400.webp`
  const src800 = `/images/${name}-800.webp`
  return (
    <img
      src={src800}
      srcSet={`${src400} 400w, ${src800} 800w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('h-auto w-full object-cover', className)}
    />
  )
}
