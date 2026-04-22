import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import NewsletterForm from '@/components/newsletter-form'
import HeroVideo from '@/components/hero-video'
import { StickyScrollCardsSection } from '@/components/ui/sticky-scroll-cards-section'
import { ServiceCard } from '@/components/ui/service-card'
import { Blog7 } from '@/components/ui/blog7'
import { FeatureSections } from '@/components/ui/feature-sections'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const focusAreas = [
  {
    label: 'Community health',
    description:
      'Free eye camps, anti-drug drives, and direct medical support for families across Fatehabad who cannot access private care.',
    href: '/initiatives#eye-camps',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=320&q=80',
    imgAlt: 'Doctor examining a patient at a rural eye camp',
    variant: 'white' as const,
  },
  {
    label: 'Education & youth',
    description:
      'Scholarships, school supplies, and infrastructure upgrades at government schools — ensuring no child is denied learning.',
    href: '/initiatives#education',
    img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=320&q=80',
    imgAlt: 'Children studying in a rural school classroom',
    variant: 'cream' as const,
  },
  {
    label: 'Heritage & culture',
    description:
      "Preserving Haryana's martial and spiritual traditions through equestrian championships and sacred architecture.",
    href: '/initiatives#gurdwara',
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=320&q=80',
    imgAlt: 'Equestrian rider on horseback at a championship event',
    variant: 'warm' as const,
  },
]

export default function HomePage() {
  return (
    <>
      <main id="main-content">

        {/* ────────────────────────────────────────────────────────────
            1. HERO — full-bleed image, text at bottom-left
            Gates Foundation pattern: photo fills viewport, dark gradient
            overlay at bottom, mission text anchored to bottom-left.
        ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
          <HeroVideo />
          {/* Dark overlay: vertical + horizontal axes */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/50 via-void/15 to-transparent" />

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
              <div className="max-w-2xl">
                <span className="eyebrow text-saffron mb-5 block">
                  Est. 2023 · Tohana, Haryana
                </span>
                <h1 className="font-display text-display-2xl text-white leading-[1.05] tracking-tight mb-6">
                  That every person in rural Haryana can reach their{' '}
                  <em className="not-italic text-saffron">full potential.</em>
                </h1>
                <p className="font-sans text-base text-white/70 leading-relaxed max-w-[480px] mb-10">
                  The Col. Bhim Singh Foundation works across Fatehabad
                  district — delivering healthcare, education, and heritage
                  preservation in memory of Late Col. Bhim Singh.
                </p>
                <div className="flex flex-wrap items-center gap-8">
                  <Link
                    href="/initiatives"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white border-b border-white pb-0.5 hover:text-saffron hover:border-saffron transition-colors duration-300"
                  >
                    Explore our work <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white/90 transition-colors duration-300"
                  >
                    Our story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────────────
            2+3. STICKY SCROLL CARDS — What We Do + all initiatives
        ──────────────────────────────────────────────────────────── */}
        <StickyScrollCardsSection />

        {/* ────────────────────────────────────────────────────────────
            4. FOCUS AREAS — service cards grid
        ──────────────────────────────────────────────────────────── */}
        <section className="bg-cream border-b border-void/6">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 md:pt-10 md:pb-20">
            <h2 className="font-display text-display-xl text-void mb-10">Focus areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area) => (
                <ServiceCard
                  key={area.label}
                  title={area.label}
                  description={area.description}
                  href={area.href}
                  imgSrc={area.img}
                  imgAlt={area.imgAlt}
                  variant={area.variant}
                  className="min-h-[220px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────────────
            5. STORIES — Blog7 card grid
        ──────────────────────────────────────────────────────────── */}
        <Blog7
          tagline="From the ground"
          heading="Stories of impact"
          description="Field reports, community milestones, and updates from our work across Fatehabad district."
          buttonText="View all stories"
          buttonUrl="/blog"
          posts={[...blogPosts].slice(0, 3).map((p) => ({
            id: p.slug,
            title: p.title,
            summary: p.excerpt,
            label: p.category,
            author: 'Col. Bhim Singh Foundation',
            published: formatDate(p.date),
            url: `/blog/${p.slug}`,
            image: p.image,
          }))}
        />

        {/* ────────────────────────────────────────────────────────────
            6. FOUNDATION FACTS — feature cards with icons
        ──────────────────────────────────────────────────────────── */}
        <FeatureSections />

        {/* ────────────────────────────────────────────────────────────
            7. MISSION STATEMENT — compact editorial strip
        ──────────────────────────────────────────────────────────── */}
        <section className="bg-cream border-b border-void/6">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              {/* Pull quote mark + text */}
              <div className="flex gap-5 items-start flex-1">
                <span className="font-display text-[4rem] leading-none text-saffron select-none mt-1 shrink-0">&ldquo;</span>
                <div>
                  <span className="eyebrow mb-2 block">Our belief</span>
                  <p className="font-display text-display-md text-void leading-snug tracking-tight">
                    We believe in the equal value of every life — committed to making that real in{' '}
                    <em className="not-italic text-saffron">Tohana</em> and beyond.&rdquo;
                  </p>
                </div>
              </div>
              {/* Links */}
              <div className="flex flex-row md:flex-col gap-6 md:gap-4 shrink-0">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-void border-b border-saffron pb-0.5 hover:text-saffron transition-colors duration-200"
                >
                  About the Foundation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-sans text-sm text-stone-muted hover:text-void transition-colors duration-200"
                >
                  The Colonel's legacy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────────────
            8. NEWSLETTER — left-aligned, Gates Foundation "The Optimist"
            Gates uses left-aligned text + inline form, not centered.
        ──────────────────────────────────────────────────────────── */}
        <section className="bg-cream-warm">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
            <div className="max-w-lg">
              <span className="eyebrow mb-4 block">Stay connected</span>
              <h2 className="font-display text-display-lg text-void mb-3">
                Updates from the ground
              </h2>
              <p className="font-sans text-sm text-stone-editorial leading-relaxed mb-8">
                Quarterly reports on our projects, impact numbers, and stories
                from Tohana — direct to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
