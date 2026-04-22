import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const milestones = [
  {
    year: "2023",
    title: "Foundation Established",
    description:
      "The Col. Bhim Singh Foundation was registered and inaugurated in Tohana, Fatehabad, with a mandate to serve rural communities in Haryana.",
  },
  {
    year: "2023",
    title: "Anti-Drug Drive Launched",
    description:
      "The Naasha Mukti Abhiyaan began with awareness drives in 20 villages of Fatehabad district, working with panchayats and local schools.",
  },
  {
    year: "2024",
    title: "Free Eye Camp",
    description:
      "The Foundation held its first free eye camp at Government Senior Secondary School, Tohana, serving over 400 patients and distributing 120 pairs of spectacles.",
  },
  {
    year: "2024",
    title: "Gurdwara Sahib Groundbreaking",
    description:
      "Construction began on the 45,000 sq ft Gurdwara Sahib on Hisar Road, New Bypass, Tohana — the largest within a 50km radius, entirely self-funded.",
  },
];

const values = [
  {
    name: "Service",
    description:
      "Inspired by Col. Bhim Singh's military career, we believe service to community is the highest calling. Every initiative the Foundation undertakes prioritises those most in need.",
  },
  {
    name: "Heritage",
    description:
      "Haryana's cultural, equestrian, and spiritual traditions are worth preserving. We honour the past while building for the future — from the Gurdwara Sahib to the CHRS Championship.",
  },
  {
    name: "Community",
    description:
      "Real change is built from within. The Foundation works alongside village elders, panchayats, families, and schools — because sustainable impact requires local ownership.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── 1. HERO ── */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              Our Story
            </span>
            <h1 className="font-display text-display-2xl text-white mt-4 text-balance">
              A father's legacy.<br />A son's commitment.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mt-6 max-w-2xl">
              The Col. Bhim Singh Foundation was founded by Vikram Bhim Singh to
              honour the memory of his late father — a soldier, a farmer, and a
              patriot from Fatehabad, Haryana.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PHOTO ── */}
      <section className="bg-cream border-b border-void/6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col items-center gap-3">
          <img
            src="/Images/BhimSingh+VikramSingh.png"
            alt="Late Col. Bhim Singh with his son Vikram Bhim Singh"
            className="w-72 md:w-96 rounded-xl object-contain"
          />
          <p className="font-sans text-xs text-stone-muted tracking-widest uppercase text-center">
            Late Col. Bhim Singh &amp; Vikram Bhim Singh
          </p>
        </div>
      </section>

      {/* ── 3. TWO-COLUMN BIOS ── */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Col. Bhim Singh */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
                  The Inspiration
                </span>
                <h2 className="font-display text-display-lg text-void mt-3">
                  Colonel Bhim Singh
                </h2>
                <p className="font-sans text-xs text-stone-muted mt-1 italic">
                  12 Kumaon Regiment · 1971 Indo-Pakistani War
                </p>
              </div>
              <div className="w-10 h-[2px] bg-saffron" aria-hidden="true" />
              <div className="space-y-4 text-stone-editorial leading-relaxed">
                <p>
                  Colonel Bhim Singh served with the 12 Kumaon Regiment of the
                  Indian Army, distinguishing himself during the 1971 Indo-Pakistani
                  War — one of the most decisive conflicts in South Asian history.
                  His regiment's gallantry during that war is part of the proud
                  record of the Indian Army.
                </p>
                <p>
                  Born and rooted in Fatehabad district, Haryana, Col. Bhim Singh
                  embodied the values of duty, courage, and quiet selflessness. He
                  was a farmer, a horseman, and a patriot who returned to his land
                  with the same dignity he had carried onto the battlefield.
                </p>
                <p>
                  His memory lives on not only in the Foundation that bears his name,
                  but in every villager served, every child given a clearer view of
                  the world, and every stone laid in the Gurdwara Sahib rising on
                  Hisar Road.
                </p>
              </div>
            </div>

            {/* Right — Vikram Bhim Singh */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
                  The Founder
                </span>
                <h2 className="font-display text-display-lg text-void mt-3">
                  Vikram Bhim Singh
                </h2>
                <p className="font-sans text-xs text-stone-muted mt-1 italic">
                  Social Entrepreneur · Tohana, Fatehabad
                </p>
              </div>
              <div className="w-10 h-[2px] bg-saffron" aria-hidden="true" />
              <div className="space-y-4 text-stone-editorial leading-relaxed">
                <p>
                  Vikram Bhim Singh is a social entrepreneur, farmer, stud farm
                  owner, and former competitive squash player based in Tohana,
                  Fatehabad. He founded the Col. Bhim Singh Foundation in 2023 as a
                  personal tribute to his father and as a commitment to the
                  communities his family has always called home.
                </p>
                <p>
                  With a background spanning agriculture, equestrian breeding, and
                  grassroots community work, Vikram brings a hands-on approach to
                  philanthropy. The Foundation's work reflects his belief that
                  meaningful change happens at the village level — not from boardrooms,
                  but from direct engagement with panchayats, families, and schools.
                </p>
                <p>
                  Every project under the Foundation — from the Naasha Mukti
                  Abhiyaan to the Gurdwara Sahib — is self-funded by Vikram, a
                  deliberate choice to ensure the Foundation remains free from
                  political or commercial influence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. TIMELINE ── */}
      <section className="section-spacing bg-cream-warm">
        <div className="container-site">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              Our Journey
            </span>
            <h2 className="font-display text-display-lg text-void mt-2">
              Milestones
            </h2>
          </div>

          <ol className="relative border-l border-saffron/30 space-y-10 pl-8" aria-label="Foundation milestones">
            {milestones.map((m, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[2.125rem] top-1 w-3 h-3 rounded-full bg-saffron border-2 border-cream-warm"
                  aria-hidden="true"
                />
                <span className="font-sans text-xs font-semibold text-saffron uppercase tracking-widest">
                  {m.year}
                </span>
                <h3 className="font-display text-display-md text-void mt-1">
                  {m.title}
                </h3>
                <p className="text-stone-editorial text-sm leading-relaxed mt-2 max-w-xl">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5. VALUES ── */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              What We Believe
            </span>
            <h2 className="font-display text-display-lg text-white mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col gap-4">
                <div className="w-8 h-[2px] bg-saffron" aria-hidden="true" />
                <h3 className="font-display text-display-md text-white">
                  {value.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
