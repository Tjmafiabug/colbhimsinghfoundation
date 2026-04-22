import Image from "next/image";
import Link from "next/link";

export default function FeaturePullout() {
  return (
    <section className="section-spacing bg-void text-white">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="flex-1 lg:w-3/5">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              Legacy
            </span>

            <h2 className="font-display text-display-md font-light text-white text-balance leading-tight mt-4">
              "In memory of Col. Bhim Singh — hero of the 1971 war, 12 Kumaon Regiment"
            </h2>

            <div className="mt-8 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                Colonel Bhim Singh served with distinction in the 12 Kumaon
                Regiment during the 1971 Indo-Pakistani War — a conflict that
                shaped the fate of a subcontinent. Born and raised in Fatehabad
                district, Haryana, he answered the call of duty with the quiet
                courage that defines the finest soldiers.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Vikram Bhim Singh carries that legacy forward through the
                Foundation — not with weapons, but with purpose. Every village
                reached, every child who sees clearly, every stone laid is an
                act of remembrance and a promise kept.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08]">
              <Link
                href="/story"
                className="text-saffron text-sm font-semibold hover:text-saffron-light transition-colors inline-flex items-center gap-2"
              >
                Read our story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
                  alt="Portrait — in memory of Col. Bhim Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-dark-gradient pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
