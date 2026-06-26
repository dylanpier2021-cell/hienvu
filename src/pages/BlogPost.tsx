import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { JsonLd } from '@/components/JsonLd'
import { Container } from '@/components/Container'
import { Photo } from '@/components/Photo'
import { getPost, type BlogBlock } from '@/data/blog'
import { business } from '@/data/business'
import { absUrl } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import NotFound from './NotFound'

function Block({ block }: { block: BlogBlock }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'ul')
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  return <p>{block.text}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  // Unknown slug (client-side navigation only; valid posts are pre-rendered).
  if (!post) return <NotFound />

  const path = `/blog/${post.slug}`
  const imagePath = `/images/${post.image}-800.webp`

  return (
    <>
      <Seo
        title={`${post.title} | Hien Vu Nails Blog`}
        description={post.description}
        path={path}
        type="article"
        image={absUrl(imagePath)}
      />
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            isoDate: post.isoDate,
            path,
            image: imagePath,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
        ]}
      />

      <article>
        <div className="border-b border-border bg-secondary">
          <Container className="py-14 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary-dark">
                Home
              </Link>
              <span className="px-2" aria-hidden="true">
                /
              </span>
              <Link to="/blog" className="hover:text-primary-dark">
                Blog
              </Link>
            </nav>
            <h1 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl">{post.title}</h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {post.date} · {post.readingTime}
            </p>
          </Container>
        </div>

        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <Photo
                name={post.image}
                alt={post.imageAlt}
                width={800}
                height={500}
                sizes="(min-width: 768px) 768px, 100vw"
                className="aspect-[16/10]"
                eager
              />
            </div>

            <div className="legal mt-8">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-6">
              <Link to="/contact-us" className="btn btn-primary">
                Book an appointment
              </Link>
              <a href={business.phoneHref} className="btn btn-outline">
                Call {business.phoneDisplay}
              </a>
              <Link
                to="/blog"
                className="font-semibold text-primary-dark underline underline-offset-4"
              >
                Back to all posts
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  )
}
