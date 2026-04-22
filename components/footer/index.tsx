import Link from "next/link";
import { socialLinks, contactInfo } from "@/lib/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-void text-white/80">
      {/* Main grid */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Column 1 — Wordmark + mission + social */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-white leading-none tracking-tight">
              Col. Bhim Singh Foundation
            </span>
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0 mt-0.5"
            />
          </div>
          <p className="text-sm text-white/55 leading-relaxed max-w-xs">
            Serving communities in Haryana through healthcare, education,
            heritage, and social welfare — in memory of Col. Bhim Singh.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-white/60 hover:text-saffron transition-colors duration-200"
            >
              {/* Instagram filled icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-white/60 hover:text-saffron transition-colors duration-200"
            >
              {/* Facebook filled icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Quick links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-white/35">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5" role="list">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/60 hover:text-saffron transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Address + email */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-white/35">
            Contact
          </h3>
          <address className="not-italic flex flex-col gap-3">
            <p className="text-sm text-white/60 leading-relaxed">
              {contactInfo.address}
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-white/60 hover:text-saffron transition-colors duration-200 break-all"
            >
              {contactInfo.email}
            </a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/35">
            &copy; 2024 Col. Bhim Singh Foundation. All rights reserved.
          </p>
          <p className="text-xs text-white/25">Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
