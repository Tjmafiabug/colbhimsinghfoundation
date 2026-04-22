"use client";

import { motion } from "motion/react";

export function QuoteSection() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-site">
        <motion.blockquote
          className="relative max-w-2xl pl-5 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:rounded-full before:bg-saffron"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-void/80 text-base md:text-lg font-light leading-relaxed">
            A soldier's duty does not end at the border — it echoes in the lives
            he builds, the land he protects, and the people he leaves stronger.
          </p>
          <footer className="mt-3 flex items-center gap-2">
            <cite className="not-italic text-xs font-semibold text-void tracking-widest uppercase">
              Vikram Bhim Singh
            </cite>
            <span aria-hidden className="bg-void/20 size-1 rounded-full" />
            <span className="text-xs text-void/40 font-sans">
              Founder, Col. Bhim Singh Foundation
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

export default QuoteSection;
