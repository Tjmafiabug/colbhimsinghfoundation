import { StatCard } from "@/components/ui/card";
import type { FoundationFact } from "@/lib/data";

interface FoundationFactsProps {
  facts: FoundationFact[];
}

export default function FoundationFacts({ facts }: FoundationFactsProps) {
  return (
    <section className="section-spacing bg-cream border-t border-void/[0.06]">
      <div className="container-site">
        <p className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron mb-3">
          The Foundation
        </p>
        <h2 className="font-display text-display-md text-void font-light text-balance mb-10">
          Built on service. Sustained by purpose.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {facts.map((fact) => (
            <StatCard
              key={fact.label}
              value={fact.value}
              label={fact.label}
              description={fact.description}
            />
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-void/[0.07] flex items-center gap-2 text-void/40 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 flex-shrink-0 text-saffron"
            aria-hidden="true"
          >
            <path d="M12 21c-4.418-4.418-7-7.79-7-11A7 7 0 0 1 19 10c0 3.21-2.582 6.582-7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>Hisar Road, New Bypass, Tohana, Fatehabad, Haryana — 125120</span>
        </div>
      </div>
    </section>
  );
}
