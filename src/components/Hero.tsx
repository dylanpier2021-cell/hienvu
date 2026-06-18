import { business } from '@/data/business'
import { Stars } from './Stars'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Background photo (preloaded in index.html for a fast LCP). */}
      <img
        src="/images/hero-1000.webp"
        srcSet="/images/hero-560.webp 560w, /images/hero-1000.webp 1000w"
        sizes="100vw"
        width={1000}
        height={1333}
        alt="A guest's manicured nails with a soft gold finish at Hien Vu Nails in Champaign, Illinois"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Dark overlay for legible text over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(38,33,28,0.62), rgba(38,33,28,0.45))' }}
      />

      <div className="container flex min-h-[88vh] flex-col justify-center py-24 text-background sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Stars size={15} className="text-primary-light" />
            5.0 rating, 80+ five-star reviews
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-background sm:text-5xl lg:text-6xl"
          >
            Luxury Nail Care by <span className="text-gold-gradient">Hien Vu</span> in Champaign
          </h1>

          <p className="mt-4 font-serif text-xl italic text-primary-light sm:text-2xl">
            {business.tagline}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-lg text-background/90">
            Manicures, pedicures, gel, dip powder, acrylic and custom nail art, crafted with{' '}
            {business.yearsInBusiness} years of care by Hannah and her family. Sterilized tools,
            premium products, and a warm welcome every single visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="btn btn-primary">
              Book Now
            </a>
            <a href="#services" className="btn btn-ghost-light">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
