"use client";

import { type FormEvent, useState } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="bg-cream border-t border-void/[0.06] py-14 md:py-16">
      <div className="container-site">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron mb-3">
            Stay Connected
          </p>
          <h2 className="font-display text-display-sm text-void font-light">
            Receive updates on our initiatives and impact.
          </h2>

          {submitted ? (
            <p className="text-void/60 text-sm mt-6">
              Thank you — we'll be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 mt-6"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="flex-1 rounded-lg px-4 py-2.5 text-sm bg-white border border-void/[0.12] text-void placeholder:text-void/30 focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/50 disabled:opacity-60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg px-5 py-2.5 bg-void text-cream text-sm font-semibold hover:bg-void/80 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}

          {!submitted && (
            <p className="text-void/30 text-xs mt-3">
              No spam, ever. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
