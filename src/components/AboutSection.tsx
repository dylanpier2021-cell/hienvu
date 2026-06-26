import { Link } from 'react-router-dom'
import { business } from '@/data/business'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { Photo } from './Photo'
import { CheckIcon } from './icons'

const highlights = [
  '100% sterilized tools and single-use disposables',
  'Premium gels, powders and lacquers that last',
  'Custom nail art from your inspiration photos',
]

export function AboutSection() {
  return (
    <Section id="about" ariaLabelledby="about-heading">
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
            <div>
              <SectionHeading
                id="about-heading"
                eyebrow="Meet Hannah"
                title="A family-run salon that treats you like a neighbor"
              />
              <div className="mt-5 space-y-4 text-pretty text-lg text-foreground/90">
                <p>
                  Hien Vu, known to her guests as Hannah, has spent {business.yearsInBusiness} years
                  perfecting her craft. As the owner and lead technician, she runs the salon as a sole
                  proprietor, which means the person caring for your nails is the same person who takes
                  pride in every detail of this space.
                </p>
                <p>
                  From the moment you walk in, you are met with a calm, spotless room and a friendly
                  hello. Tools are sterilized between every client, products are chosen to last, and
                  Hannah and her family take the time to get your shape, color and design exactly right.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {highlights.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-primary-dark" />
                    <span className="text-foreground/90">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Read Our Story
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
