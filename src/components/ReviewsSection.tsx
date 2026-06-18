import { featuredReviews } from '@/data/reviews'
import { business } from '@/data/business'
import type { Review } from '@/data/types'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { Stars } from './Stars'
import { QuoteIcon, GoogleIcon, YelpIcon } from './icons'

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <QuoteIcon className="h-7 w-7 text-primary/40" />
      <Stars className="mt-3" size={15} />
      <blockquote className="mt-3 flex-1 text-pretty text-foreground/90">{review.text}</blockquote>
      <figcaption className="mt-5 border-t border-border/70 pt-4">
        <span className="font-serif text-lg font-semibold text-charcoal">{review.name}</span>
        <span className="mt-0.5 block text-sm text-muted-foreground">
          {review.service} · {review.date}
        </span>
      </figcaption>
    </figure>
  )
}

export function ReviewsSection() {
  return (
    <Section id="reviews" variant="cream" ariaLabelledby="reviews-heading">
      <Container>
        <SectionHeading
          id="reviews-heading"
          align="center"
          eyebrow="Guest Love"
          title="Loved across Champaign County"
          subtitle="A 5.0 rating from 80+ five-star reviews. Here is what a few of our guests have shared."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredReviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 4) * 0.05}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {/* Leave us a review */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-background p-8 text-center shadow-card">
          <h3 className="font-serif text-2xl font-semibold text-charcoal">Enjoyed your visit?</h3>
          <p className="mt-2 text-muted-foreground">
            We would love to hear about it. Your review helps other neighbors find us.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={business.reviews.google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <GoogleIcon className="h-5 w-5" />
              Review on Google
            </a>
            <a
              href={business.reviews.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <YelpIcon className="h-5 w-5 text-[#d32323]" />
              Review on Yelp
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
