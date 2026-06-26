import { business } from '@/data/business'
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from './icons'

/**
 * Salon contact details (address, hours, phone, email). Reused on the home
 * page location section and the Contact Us page so the NAP stays consistent.
 */
export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <MapPinIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h3 className="font-serif text-lg font-semibold text-charcoal">Visit Us</h3>
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-foreground/90 underline-offset-2 hover:text-primary-dark hover:underline"
          >
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <ClockIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h3 className="font-serif text-lg font-semibold text-charcoal">Hours</h3>
          <ul className="mt-1 space-y-0.5 text-foreground/90">
            {business.hours.map((h) => (
              <li key={h.days} className="flex flex-wrap gap-x-2">
                <span className="font-medium">{h.days}:</span>
                <span>
                  {h.open} to {h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-4">
        <PhoneIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h3 className="font-serif text-lg font-semibold text-charcoal">Call or Text</h3>
          <a href={business.phoneHref} className="mt-1 block text-foreground/90 hover:text-primary-dark">
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <MailIcon className="mt-1 h-6 w-6 flex-none text-primary-dark" />
        <div>
          <h3 className="font-serif text-lg font-semibold text-charcoal">Email</h3>
          <a
            href={`mailto:${business.email}`}
            className="mt-1 block break-all text-foreground/90 hover:text-primary-dark"
          >
            {business.email}
          </a>
        </div>
      </div>
    </div>
  )
}
