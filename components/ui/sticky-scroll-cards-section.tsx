'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { initiatives } from '@/lib/data'

type Ref = React.RefObject<HTMLElement | null>

function useScrollAnimation(): [Ref, boolean] {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

const bgColors = [
  'bg-cream',
  'bg-cream-warm',
  'bg-white',
  'bg-cream',
  'bg-cream-warm',
]

export function StickyScrollCardsSection() {
  const [headerRef, headerInView] = useScrollAnimation()
  const [subRef, subInView] = useScrollAnimation()

  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <section className="py-20 md:py-32 flex flex-col items-center">

          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              ref={headerRef as React.RefObject<HTMLSpanElement>}
              className={`eyebrow mb-4 block transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Our work
            </span>
            <h2
              ref={subRef as React.RefObject<HTMLHeadingElement>}
              className={`font-display text-display-xl text-void leading-tight transition-all duration-700 ease-out delay-150 ${subInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              What we do
            </h2>
          </div>

          {/* Sticky cards */}
          <div className="w-full flex flex-col gap-6">
            {initiatives.map((initiative, i) => (
              <div
                key={initiative.id}
                className={`${bgColors[i % bgColors.length]} grid grid-cols-1 md:grid-cols-2 items-center gap-0 rounded-2xl overflow-hidden border border-void/6 sticky`}
                style={{ top: `${80 + i * 24}px` }}
              >
                {/* Image — alternates sides */}
                <div
                  className={`relative aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                  />
                </div>

                {/* Text panel */}
                <div className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <span className="eyebrow mb-4 block">{initiative.tags[0]}</span>
                  <h3 className="font-display text-display-lg text-void mb-1 leading-tight">
                    {initiative.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-muted italic mb-5">
                    {initiative.subtitle}
                  </p>
                  <p className="font-sans text-sm text-stone-editorial leading-relaxed max-w-sm mb-8">
                    {initiative.description.split('.').slice(0, 2).join('.') + '.'}
                  </p>
                  <div className="flex items-center gap-6 pt-6 border-t border-void/8">
                    <div>
                      <div className="font-display text-display-md text-saffron leading-none">
                        {initiative.stat}
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone-muted mt-1">
                        {initiative.statLabel}
                      </div>
                    </div>
                    <Link
                      href={`/initiatives#${initiative.id}`}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-void border-b border-saffron pb-0.5 hover:text-saffron transition-colors duration-200 ml-auto shrink-0"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  )
}
