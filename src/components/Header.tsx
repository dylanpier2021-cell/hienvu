import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { business } from '@/data/business'
import { Logo } from './Logo'
import { PhoneIcon, MenuIcon, CloseIcon } from './icons'
import { cn } from '@/lib/cn'

const NAV = [
  { label: 'Services', hash: '#services' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Reviews', hash: '#reviews' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Contact', hash: '#contact' },
]

export function Header() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Anchor links resolve to "#x" on the home page (smooth scroll, no reload) and
  // "/#x" elsewhere (navigate home, then the browser scrolls to the section).
  const href = (hash: string) => (onHome ? hash : `/${hash}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors',
        scrolled
          ? 'border-border bg-background/90 shadow-card backdrop-blur'
          : 'border-transparent bg-background/80 backdrop-blur',
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.hash}
              href={href(item.hash)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-primary-dark"
          >
            <PhoneIcon className="h-4 w-4 text-primary-dark" />
            {business.phoneDisplay}
          </a>
          <a href={href('#booking')} className="btn btn-primary">
            Book Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.brand} at ${business.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 text-primary-dark"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-charcoal"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.hash}
                href={href(item.hash)}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground/90"
              >
                {item.label}
              </a>
            ))}
            <a
              href={href('#booking')}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 w-full"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
