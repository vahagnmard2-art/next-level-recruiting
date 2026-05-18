import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Clock, ArrowLeft } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'
import { blogPosts, getPostBySlug, type BlogSection } from '@/lib/blogPosts'

const SITE = 'https://nextlevelrecruiting.com'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, authors: ['Andrew Ayvazian'] },
  }
}

function renderSection(section: BlogSection, i: number) {
  switch (section.type) {
    case 'h2':
      return <h2 key={i} className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-wide uppercase mt-10 mb-4">{section.content as string}</h2>
    case 'h3':
      return <h3 key={i} className="font-heading font-bold text-nlr-gold text-lg tracking-widest uppercase mt-8 mb-3">{section.content as string}</h3>
    case 'p':
      return <p key={i} className="text-white/65 text-base leading-relaxed mb-5">{section.content as string}</p>
    case 'ul':
      return (
        <ul key={i} className="mb-5 space-y-2 list-none m-0 p-0">
          {(section.content as string[]).map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nlr-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/65 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} className="mb-5 space-y-2 list-none m-0 p-0">
          {(section.content as string[]).map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="font-display text-nlr-gold text-sm flex-shrink-0 mt-0.5 w-5">{j + 1}.</span>
              <span className="text-white/65 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      )
    case 'blockquote':
      return (
        <blockquote key={i} className="border-l-4 border-nlr-gold pl-6 py-2 my-8">
          <p className="text-white/80 text-base italic leading-relaxed font-body">{section.content as string}</p>
        </blockquote>
      )
    default:
      return null
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const postIndex = blogPosts.findIndex(p => p.slug === params.slug)
  const prev = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null
  const next = postIndex > 0 ? blogPosts[postIndex - 1] : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Andrew Ayvazian' },
    publisher: { '@type': 'Organization', name: 'Next Level Recruiting', url: SITE },
    url: `${SITE}/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="overflow-x-hidden">
        <section className="relative pt-32 pb-16 bg-nlr-darker overflow-hidden" aria-labelledby="post-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-nlr-gold text-xs font-heading tracking-widest uppercase transition-colors mb-8">
                <ArrowLeft size={12} aria-hidden="true" />
                All Articles
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-3 py-1">{post.category}</span>
                <span className="flex items-center gap-1 text-white/30 text-xs font-heading">
                  <Clock size={12} aria-hidden="true" />{post.readTime}
                </span>
                <span className="text-white/30 text-xs font-body">{formatDate(post.date)}</span>
              </div>
              <h1 id="post-heading" className="display-heading text-4xl sm:text-6xl text-white mb-6 leading-tight">{post.title}</h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/55 text-lg leading-relaxed">{post.description}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-nlr-gold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="font-display text-nlr-darker text-xs">AA</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-xs tracking-widest uppercase">Andrew Ayvazian</p>
                  <p className="text-white/30 text-xs">Founder, Next Level Recruiting · NCAA Certified</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <article className="py-16 bg-nlr-dark" aria-label={post.title}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              {post.body.map((section, i) => renderSection(section, i))}
            </AnimatedSection>

            <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev && (
                <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1 border border-white/5 hover:border-nlr-gold/25 p-5 transition-all duration-300">
                  <span className="text-white/30 text-xs font-heading tracking-widest uppercase">← Previous</span>
                  <span className="text-white text-sm font-heading font-bold uppercase tracking-wide leading-snug group-hover:text-nlr-gold transition-colors">{prev.title}</span>
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-1 border border-white/5 hover:border-nlr-gold/25 p-5 transition-all duration-300 sm:text-right sm:ml-auto sm:w-full">
                  <span className="text-white/30 text-xs font-heading tracking-widest uppercase">Next →</span>
                  <span className="text-white text-sm font-heading font-bold uppercase tracking-wide leading-snug group-hover:text-nlr-gold transition-colors">{next.title}</span>
                </Link>
              )}
            </div>
          </div>
        </article>

        <section className="py-24 bg-nlr-darker relative overflow-hidden" aria-labelledby="post-cta-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-nlr-green/5 to-nlr-gold/5" aria-hidden="true" />
          <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label">Take the Next Step</p>
            <h2 id="post-cta-heading" className="display-heading text-5xl sm:text-7xl text-white mt-4 mb-6">
              READY TO GET<br /><span className="text-nlr-gold">SEEN?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">Book a free consultation — no commitment, just a straight conversation about your athlete&apos;s situation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold text-sm py-4 px-12 flex items-center gap-2">
                Book Free Consultation <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/blog" className="btn-outline text-sm py-4 px-10">More Articles</Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </>
  )
}
