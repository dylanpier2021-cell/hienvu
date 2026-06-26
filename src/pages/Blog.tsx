import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Photo } from '@/components/Photo'
import { posts } from '@/data/blog'
import { breadcrumbSchema } from '@/lib/schema'

export default function Blog() {
  return (
    <>
      <Seo
        title="Nail Care Tips and Ideas | Hien Vu Nails Blog"
        description="Tips, guides and ideas from Hien Vu Nails in Champaign, IL. Learn how to make your manicure last, compare gel and dip powder, and more from Hannah and our team."
        path="/blog"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      <PageHeader
        eyebrow="From the Salon"
        title="Nail Care Tips and Ideas"
        subtitle="Friendly guides and advice from Hannah and the team at Hien Vu Nails, written to help you get the most out of every visit."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                <article className="card flex h-full flex-col overflow-hidden">
                  <Link to={`/blog/${post.slug}`} aria-label={post.title} className="block">
                    <Photo
                      name={post.image}
                      alt={post.imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[16/10]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {post.date} · {post.readingTime}
                    </p>
                    <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary-dark">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-pretty text-muted-foreground">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex font-semibold text-primary-dark underline underline-offset-4"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
