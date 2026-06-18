import { faqs } from '@/data/faqs'
import { Section, SectionHeading } from './Section'
import { Container } from './Container'
import { ChevronDownIcon } from './icons'

export function FaqSection() {
  return (
    <Section id="faq" ariaLabelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          align="center"
          eyebrow="Good to Know"
          title="Frequently asked questions"
        />

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-background shadow-card">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-5 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-serif text-lg font-semibold text-charcoal marker:hidden [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDownIcon className="h-5 w-5 flex-none text-primary-dark transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 pb-5 text-pretty text-foreground/90">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
