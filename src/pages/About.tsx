import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { Section, SectionHeading } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Photo } from '@/components/Photo'
import { CheckIcon } from '@/components/icons'
import { business } from '@/data/business'
import { breadcrumbSchema } from '@/lib/schema'

const sanitation = [
  'Tools are 100% sterilized between every single client.',
  'Single-use disposable files and buffers are used wherever possible.',
  'Pedicure bowls are cleaned and sanitized after each guest.',
  'Clean towels and a tidy, spotless station for every appointment.',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Hien Vu Nails | Champaign, IL Nail Salon"
        description="Meet Hannah, the owner of Hien Vu Nails in Champaign, IL. A family-run, sole-proprietor salon with 10+ years of experience, sterilized tools and a warm welcome."
        path="/about"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      <PageHeader
        eyebrow="Meet Hannah"
        title="About Hien Vu Nails"
        subtitle="A family-run luxury nail salon in Champaign, Illinois, where the owner is the person caring for your nails."
      />

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <Photo
                  name="salon-stations"
                  alt="The clean, welcoming nail stations inside Hien Vu Nails in Champaign, Illinois"
                  width={800}
                  height={1066}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3] lg:aspect-[5/4]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-4 text-pretty text-lg text-foreground/90">
                <p>
                  Hien Vu, known to her guests as {business.ownerNickname}, has spent{' '}
                  {business.yearsInBusiness} years perfecting her craft. As the owner and lead
                  technician, she runs the salon as a sole proprietor, which means the person caring
                  for your nails is the same person who takes pride in every detail of this space.
                </p>
                <p>
                  From the moment you walk in, you are met with a calm, spotless room and a friendly
                  hello. {business.ownerNickname} and her family take the time to get your shape, color
                  and design exactly right, whether you are here for a quick polish change or a full
                  custom set.
                </p>
                <p>
                  Over the years, neighbors across {business.address.county} have made Hien Vu Nails
                  their regular salon. We are proud of our 5.0 rating and the many guests who return
                  again and again, and we treat every new visitor like one of the family.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="cream" ariaLabelledby="standards-heading">
        <Container>
          <SectionHeading
            id="standards-heading"
            align="center"
            eyebrow="Clean and Careful"
            title="Our sanitation standards"
            subtitle="A clean salon is the foundation of great nails. Here is what every guest can count on at each visit."
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {sanitation.map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 shadow-card">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-primary-dark" />
                <span className="text-foreground/90">{line}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section ariaLabelledby="why-heading">
        <Container>
          <SectionHeading
            id="why-heading"
            align="center"
            eyebrow="Why Guests Choose Us"
            title="Detail, care and a warm welcome"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {business.reasonsToChoose.map((reason) => (
              <article key={reason.title} className="card h-full p-6">
                <h2 className="font-serif text-xl font-semibold text-charcoal">{reason.title}</h2>
                <p className="mt-2 text-pretty text-muted-foreground">{reason.text}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-pretty text-center text-muted-foreground">
            {business.brand} is the trade name of {business.legalName}, a sole proprietor based in{' '}
            {business.address.city}, {business.address.stateLong}.
          </p>

          <div className="mt-8 text-center">
            <Link to="/contact-us" className="btn btn-primary">
              Book With {business.ownerNickname}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
