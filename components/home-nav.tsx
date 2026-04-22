'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our work', href: '/initiatives' },
  { label: 'Stories', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function HomeNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-void/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[60px]">

        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-void text-lg tracking-tight hover:text-saffron transition-colors duration-200 leading-none"
        >
          Col. Bhim Singh Foundation
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-sm text-stone-editorial hover:text-void transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-sm font-semibold text-white bg-saffron px-5 py-2 hover:bg-saffron-dark transition-colors duration-200 active:scale-[0.98]"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] text-stone-editorial hover:text-void transition-colors"
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-void/8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-base text-void hover:text-saffron transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-sm font-semibold text-white bg-saffron px-5 py-3 text-center hover:bg-saffron-dark transition-colors duration-200 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}
