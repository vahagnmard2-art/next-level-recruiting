import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Clock } from 'lucide-react'
import AnimatedSection from '@/components/marketing/animated-section'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Recruiting Tips Blog — Highlight Tapes, NCAA Rules & College Strategy',
  description: 'The NLR blog covers everything athletes and parents need to know: how to build a recruiting tape coaches watch, NCAA contact rules, transfer portal strategy, and more.',
  alternates: { canonical: '/blog' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Next Level Recruiting Blog',
  description: 'Recruiting tips, NCAA rules explained, and highlight tape strategy for athletes and parents.',
  url: 'https://nextlevelrecruiting.com/blog',
  publisher: { '@type': 'Organization', name: 'Next Level Recruiting' },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <div className="overflow-x-hidden">
        <section className="relative pt-32 pb-20 bg-nlr-darker overflow-hidden" aria-labelledby="blog-hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-nlr-green/5 via-transparent to-nlr-gold/5" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-nlr-gold/5 blur-[150px]" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <p className="section-label">Recruiting Intel</p>
              <h1 id="blog-hero-heading" className="display-heading text-6xl sm:text-8xl text-white mt-3 mb-6">
                THE NLR<br /><span className="text-nlr-gold">PLAYBOOK</span>
              </h1>
              <div className="gold-line mb-6" aria-hidden="true" />
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Recruiting tips, NCAA rules explained, highlight tape strategy, and everything else athletes and parents need to navigate the process.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-nlr-dark" aria-labelledby="featured-post-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="section-label mb-6">Featured Article</p>
              <Link href={`/blog/${featured.slug}`} className="card-dark group block p-8 sm:p-12" aria-labelledby="featured-post-heading">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-nlr-gold text-nlr-darker font-heading font-bold text-xs tracking-widest uppercase px-3 py-1">{featured.category}</span>
                  <span className="flex items-center gap-1 text-white/30 text-xs font-heading">
                    <Clock size={12} aria-hidden="true" />{featured.readTime}
                  </span>
                  <span className="text-white/30 text-xs font-body">{formatDate(featured.date)}</span>
                </div>
                <h2 id="featured-post-heading" className="display-heading text-3xl sm:text-5xl text-white mt-2 mb-4 group-hover:text-nlr-gold transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-white/55 text-base leading-relaxed max-w-3xl mb-6">{featured.description}</p>
                <span className="inline-flex items-center gap-2 text-nlr-gold font-heading font-bold text-xs tracking-widest uppercase group-hover:text-nlr-gold-light transition-colors">
                  Read Article <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 pb-32 bg-nlr-dark" aria-label="All articles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 80}>
                  <Link href={`/blog/${post.slug}`} className="card-dark group block hover:-translate-y-0.5 p-8 h-full" aria-label={`Read: ${post.title}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="border border-nlr-gold/30 text-nlr-gold font-heading font-bold text-xs tracking-widest uppercase px-2 py-0.5">{post.category}</span>
                      <span className="flex items-center gap-1 text-white/30 text-xs font-heading">
                        <Clock size={11} aria-hidden="true" />{post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-3 group-hover:text-nlr-gold transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-white/45 text-sm leading-relaxed mb-6">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/25 text-xs font-body">{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1 text-nlr-gold font-heading font-bold text-xs tracking-widest uppercase group-hover:text-nlr-gold-light transition-colors">
                        Read <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-nlr-green" aria-labelledby="blog-cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 id="blog-cta-heading" className="display-heading text-4xl sm:text-6xl text-white mb-4">READY TO BUILD YOUR TAPE?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Reading about recruiting is step one. The tape is step two. Book a free consultation and let&apos;s talk about your situation.
              </p>
              <Link href="/contact" className="btn-gold text-sm py-4 px-12 inline-flex items-center gap-2">
                Book Free Consultation <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  )
}
