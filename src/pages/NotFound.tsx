import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/Container'
import { business } from '@/data/business'

export default function NotFound() {
  return (
    <>
      {/* The only page that should be noindexed. */}
      <Seo
        title="Page Not Found | Hien Vu Nails"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 text-balance font-serif text-4xl font-semibold sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground">
          The page may have moved. Let us get you back to {business.brand}, where your next appointment
          is waiting.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <a href={business.phoneHref} className="btn btn-outline">
            Call {business.phoneDisplay}
          </a>
        </div>
      </Container>
    </>
  )
}
