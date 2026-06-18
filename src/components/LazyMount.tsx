import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Renders a lightweight placeholder until the element scrolls near the viewport,
 * then mounts its children. Used to defer heavy third-party iframes (the
 * GoHighLevel calendar and form, the Google map) so they never block first
 * paint. SSR-safe: on the server and before mount it renders the placeholder.
 */
export function LazyMount({
  children,
  placeholder,
  rootMargin = '300px',
  minHeight = 480,
  className,
}: {
  children: ReactNode
  placeholder?: ReactNode
  rootMargin?: string
  minHeight?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) return
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [show, rootMargin])

  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {show ? children : placeholder}
    </div>
  )
}
