"use client";

import { motion } from "motion/react";

export default function MissionStatement() {
  return (
    <section className="bg-cream border-t border-void/[0.06] py-16 md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — founder quote */}
          <motion.blockquote
            className="relative pl-5 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:rounded-full before:bg-saffron"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              In His Words
            </span>
            <p className="font-display text-display-md text-void/80 mt-3 leading-snug font-light text-balance">
              A soldier's duty does not end at the border — it echoes in the
              lives he builds, the land he protects, and the people he leaves
              stronger.
            </p>
            <footer className="mt-8 pt-6 border-t border-void/[0.07] flex items-center gap-2">
              <cite className="not-italic text-xs font-semibold text-void tracking-widest uppercase">
                Vikram Bhim Singh
              </cite>
              <span aria-hidden className="bg-void/20 size-1 rounded-full" />
              <span className="text-xs text-void/40 font-sans">Founder</span>
            </footer>
          </motion.blockquote>

          {/* Right — mission + stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              Our Mission
            </span>
            <p className="font-display text-display-md text-void mt-3 leading-snug text-balance font-light">
              To honour the legacy of Col. Bhim Singh by serving the communities
              of Haryana with the same selflessness with which he served this
              nation.
            </p>

            <div className="flex gap-10 mt-8 pt-6 border-t border-void/[0.07]">
              <div>
                <p className="font-display text-3xl font-semibold text-saffron leading-none">
                  100+
                </p>
                <p className="text-xs text-void/50 font-sans uppercase tracking-wide mt-1.5">
                  Villages Reached
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-saffron leading-none">
                  5,000+
                </p>
                <p className="text-xs text-void/50 font-sans uppercase tracking-wide mt-1.5">
                  Patients Served
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
