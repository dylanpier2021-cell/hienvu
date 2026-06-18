import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll to the top on client-side route changes (for example navigating
 * to /privacy or /terms). Skips when the URL carries a hash so in-page anchors
 * still work. Respects prefers-reduced-motion via the global scroll-behavior.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
