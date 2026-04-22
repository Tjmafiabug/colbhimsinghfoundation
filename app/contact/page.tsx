import type { Metadata } from "next";
import { contactInfo, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              Get in Touch
            </span>
            <h1 className="font-display text-display-2xl text-white mt-4 text-balance">
              Contact
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mt-6 max-w-2xl">
              To get involved or learn more about our work, reach out directly.
              The Foundation welcomes volunteers, partners, and anyone moved to
              serve their community.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column contact info */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Address, email, phone */}
            <div className="flex flex-col gap-8">
              {/* Address card */}
              <div className="rounded-3xl border border-stone-light/30 bg-white p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-saffron"
                      aria-hidden="true"
                    >
                      <path d="M12 21c-4.418-4.418-7-7.79-7-11A7 7 0 0 1 19 10c0 3.21-2.582 6.582-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <h2 className="font-display text-display-md text-void">
                    Address
                  </h2>
                </div>
                <address className="not-italic text-stone-editorial text-base leading-relaxed pl-[3.25rem]">
                  {contactInfo.address}
                </address>
              </div>

              {/* Email */}
              <div className="rounded-3xl border border-stone-light/30 bg-white p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-saffron"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-display-md text-void">
                    Email
                  </h2>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-saffron hover:text-saffron-dark transition-colors text-base font-medium pl-[3.25rem] break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-3xl border border-stone-light/30 bg-white p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-saffron"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-display-md text-void">
                    Phone
                  </h2>
                </div>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-saffron hover:text-saffron-dark transition-colors text-base font-medium pl-[3.25rem]"
                >
                  {contactInfo.phone}
                </a>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-muted mb-4">
                  Follow Our Work
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Col. Bhim Singh Foundation on Instagram"
                    className="flex items-center gap-2 text-stone-editorial hover:text-saffron transition-colors duration-200 text-sm font-medium"
                  >
                    {/* Instagram icon */}
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
                    Instagram
                  </a>

                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Col. Bhim Singh Foundation on Facebook"
                    className="flex items-center gap-2 text-stone-editorial hover:text-saffron transition-colors duration-200 text-sm font-medium"
                  >
                    {/* Facebook icon */}
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
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Map placeholder */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-muted">
                Find Us
              </p>
              <div
                className="aspect-video rounded-3xl bg-stone-light/30 flex items-center justify-center border border-stone-light/30 overflow-hidden"
                role="img"
                aria-label="Map showing location: Hisar Road, New Bypass, Tohana, Fatehabad, Haryana"
              >
                <iframe
                  title="Col. Bhim Singh Foundation location map"
                  src="https://maps.google.com/maps?q=Tohana,+Fatehabad,+Haryana&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-3xl"
                />
              </div>
              <p className="text-stone-muted text-sm leading-relaxed">
                Hisar Road, New Bypass, Tohana, Fatehabad, Haryana — 125120
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
