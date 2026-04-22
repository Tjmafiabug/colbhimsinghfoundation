import type { Metadata } from "next";
import InitiativePreview from "@/components/initiative-preview";
import { initiatives } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Initiatives",
};

export default function InitiativesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              What We Do
            </span>
            <h1 className="font-display text-display-2xl text-white mt-4 text-balance">
              Our Initiatives
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mt-6 max-w-2xl">
              Five programmes working in parallel to build healthier, more
              educated, and more resilient communities across Fatehabad district
              — all sustained by a single commitment to service.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativePreview
                key={initiative.id}
                initiative={initiative}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
