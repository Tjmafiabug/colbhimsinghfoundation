import type { Metadata } from 'next'
import { blogPosts } from '@/lib/data'
import { BlogSection } from '@/components/ui/blog-section'

export const metadata: Metadata = {
  title: 'Stories & Updates',
}

export default function BlogPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              From the Field
            </span>
            <h1 className="font-display text-display-2xl text-white mt-4 text-balance">
              Stories &amp; Updates
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mt-6 max-w-2xl">
              Firsthand accounts of the Foundation&apos;s work — from anti-drug drives
              in Fatehabad&apos;s villages to equestrian championships celebrating
              Haryana&apos;s proud heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-cream py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <BlogSection posts={blogPosts} />
        </div>
      </section>
    </main>
  )
}
