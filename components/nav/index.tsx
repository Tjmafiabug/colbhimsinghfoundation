"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-saffron focus:text-cream focus:text-sm focus:font-medium focus:rounded"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-cream/95 border-b border-void/8">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="container-site flex items-center justify-between py-4"
        >
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl font-semibold text-void leading-none tracking-tight group-hover:text-saffron transition-colors duration-200">
              Col. Bhim Singh Foundation
            </span>
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0 mt-0.5"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium px-3 py-2 rounded transition-colors duration-200 ${
                      isActive
                        ? "text-saffron"
                        : "text-stone-editorial hover:text-saffron"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Donate CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="btn-primary px-5 py-2.5 text-xs"
            >
              Donate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-stone-editorial hover:text-saffron transition-colors"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line
                    x1="4"
                    y1="4"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18"
                    y1="4"
                    x2="4"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="3"
                    y1="6"
                    x2="19"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="11"
                    x2="19"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="16"
                    x2="14"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile slide-down menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-void/8 bg-cream"
          >
            <ul className="container-site flex flex-col py-3" role="list">
              {links.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block text-sm font-medium py-3 border-b border-void/6 transition-colors duration-200 ${
                        isActive
                          ? "text-saffron"
                          : "text-stone-editorial hover:text-saffron"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 pb-2">
                <Link
                  href="#contact"
                  className="btn-primary px-5 py-2.5 text-xs inline-block"
                  onClick={() => setOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
