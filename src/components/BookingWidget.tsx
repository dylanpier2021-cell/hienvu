import { useEffect, useState } from 'react'
import {
  GHL_BOOKING_SRC,
  GHL_FORM_SRC,
  GHL_EMBED_SCRIPT,
  isConfigured,
} from '@/data/booking'
import { business } from '@/data/business'
import { LazyMount } from './LazyMount'
import { PhoneIcon, CalendarIcon } from './icons'

/** Injects GoHighLevel's auto-resize helper once, deferred. */
function useEmbedScript(active: boolean) {
  useEffect(() => {
    if (!active || typeof document === 'undefined') return
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return
    const s = document.createElement('script')
    s.src = GHL_EMBED_SCRIPT
    s.async = true
    s.defer = true
    document.body.appendChild(s)
  }, [active])
}

function Loading({ minHeight }: { minHeight: number }) {
  return (
    <div
      className="flex items-center justify-center text-sm text-muted-foreground"
      style={{ minHeight }}
    >
      <span className="inline-flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        Loading booking widget...
      </span>
    </div>
  )
}

/** A single lazily mounted GoHighLevel iframe (calendar or form). */
function GhlIframe({ src, title, minHeight = 640 }: { src: string; title: string; minHeight?: number }) {
  const [loaded, setLoaded] = useState(false)
  useEmbedScript(true)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
      {!loaded && <Loading minHeight={minHeight} />}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        scrolling="no"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          minHeight,
          border: 'none',
          display: loaded ? 'block' : 'none',
        }}
      />
    </div>
  )
}

/** Friendly placeholder shown until a real GoHighLevel URL is pasted in. */
function NotConfigured() {
  return (
    <div className="rounded-2xl border border-dashed border-primary/50 bg-secondary p-8 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary-dark">
        <CalendarIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">Book by phone</h3>
      <p className="mt-2 text-muted-foreground">
        Online booking is being set up. Call or text us and we will get you scheduled right away.
      </p>
    </div>
  )
}

export function BookingWidget() {
  const hasCalendar = isConfigured(GHL_BOOKING_SRC)
  const hasForm = isConfigured(GHL_FORM_SRC)

  return (
    <div className="flex flex-col gap-4">
      {hasCalendar || hasForm ? (
        <LazyMount minHeight={640} placeholder={<Loading minHeight={640} />}>
          <div className="flex flex-col gap-4">
            {hasCalendar && (
              <GhlIframe src={GHL_BOOKING_SRC} title={`Book an appointment at ${business.brand}`} />
            )}
            {hasForm && (
              <GhlIframe
                src={GHL_FORM_SRC}
                title={`Appointment request form for ${business.brand}`}
                minHeight={520}
              />
            )}
          </div>
        </LazyMount>
      ) : (
        <NotConfigured />
      )}

      {/* Call to Book fallback, always available in case the embed is slow or blocked. */}
      <a href={business.phoneHref} className="btn btn-primary w-full">
        <PhoneIcon className="h-5 w-5" />
        Call to Book, {business.phoneDisplay}
      </a>
    </div>
  )
}
