import { business } from '@/data/business'
import { LazyMount } from './LazyMount'

/** Lazily mounted Google Map for the salon address (deferred so it never blocks paint). */
export function MapEmbed() {
  return (
    <LazyMount
      minHeight={260}
      className="overflow-hidden rounded-2xl border border-border shadow-card"
      placeholder={
        <div className="flex h-full min-h-[260px] items-center justify-center bg-secondary text-sm text-muted-foreground">
          Loading map...
        </div>
      }
    >
      <iframe
        src={business.mapsEmbed}
        title={`Map to ${business.brand} at ${business.address.street}, ${business.address.city}, ${business.address.state}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[300px] w-full border-0"
      />
    </LazyMount>
  )
}
