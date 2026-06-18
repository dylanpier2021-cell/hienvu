import { Link, useLocation } from 'react-router-dom'
import { business } from '@/data/business'
import { Container } from './Container'
import { PhoneIcon, MailIcon, MapPinIcon, GoogleIcon, YelpIcon } from './icons'

export function Footer() {
  const onHome = useLocation().pathname === '/'
  const href = (hash: string) => (onHome ? hash : `/${hash}`)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-background/85">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-semibold text-background">{business.name}</span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.42em] text-primary-light">
              Nails Champaign
            </span>
            <p className="mt-4 max-w-xs text-pretty text-sm text-background/70">
              {business.tagline}. Sterilized tools, premium products, and a warm welcome every visit.
            </p>
            <p className="mt-3 max-w-xs text-pretty text-xs text-background/55">
              Proudly serving {business.serviceAreas.slice(0, -1).join(', ')} and{' '}
              {business.serviceAreas[business.serviceAreas.length - 1]}, IL, and the surrounding
              Champaign County area.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="text-sm">
            <h2 className="font-serif text-lg font-semibold text-background">Explore</h2>
            <ul className="mt-3 space-y-2">
              <li><a href={href('#services')} className="text-background/75 hover:text-primary-light">Services</a></li>
              <li><a href={href('#pricing')} className="text-background/75 hover:text-primary-light">Pricing</a></li>
              <li><a href={href('#reviews')} className="text-background/75 hover:text-primary-light">Reviews</a></li>
              <li><a href={href('#faq')} className="text-background/75 hover:text-primary-light">FAQ</a></li>
              <li><a href={href('#booking')} className="text-background/75 hover:text-primary-light">Book Now</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-sm">
            <h2 className="font-serif text-lg font-semibold text-background">Contact</h2>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2.5">
                <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-primary-light" />
                <a href={business.maps} target="_blank" rel="noopener noreferrer" className="text-background/75 hover:text-primary-light">
                  {business.address.street}, {business.address.city}, {business.address.state}{' '}
                  {business.address.zip}
                </a>
              </li>
              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-5 w-5 flex-none text-primary-light" />
                <a href={business.phoneHref} className="text-background/75 hover:text-primary-light">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 h-5 w-5 flex-none text-primary-light" />
                <a href={`mailto:${business.email}`} className="break-all text-background/75 hover:text-primary-light">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + reviews */}
          <div className="text-sm">
            <h2 className="font-serif text-lg font-semibold text-background">Hours</h2>
            <ul className="mt-3 space-y-1 text-background/75">
              {business.hours.map((h) => (
                <li key={h.days}>
                  {h.days}
                  <br />
                  {h.open} to {h.close}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href={business.reviews.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leave a review on Google"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/25 hover:border-primary-light"
              >
                <GoogleIcon className="h-5 w-5" />
              </a>
              <a
                href={business.reviews.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leave a review on Yelp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/25 text-[#ff5a5f] hover:border-primary-light"
              >
                <YelpIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-sm text-background/60">
          <p className="mb-2">
            {business.brand} is a trade name of {business.name}, sole proprietor.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {business.name}, sole proprietor. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-5">
              <Link to="/privacy" className="hover:text-primary-light">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-light">Terms</Link>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
