"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadArchitect() {
  return (
    <section id="about" className="px-5 md:px-16 py-24 border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden border border-outline-variant/30 glass-panel"
        >
          <Image
            src="/profile.jpg"
            alt="Evans Mumo - Lead Engineer"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-4 left-4 bg-surface/90 px-3 py-1 text-syntax-label border border-outline-variant">
            [ MSC_IDENTITY_VERIFIED ]
          </div>
        </motion.div>

        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-syntax-mono text-primary-fixed uppercase tracking-widest block mb-4">
              [ SYSTEM_ARCHITECT ]
            </span>
            <h2 className="text-headline-lg uppercase mb-6">EVANS <span className="text-secondary-fixed">MUMO</span></h2>
            <div className="h-1 w-24 bg-primary-fixed mb-8"></div>
          </div>

          <p className="text-body-lg text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant/30 pl-6">
            &quot;Architecting high-frequency systems requires more than code; it requires a deep understanding of the intersection between technical syntax and industrial-scale capital.&quot;
          </p>

          <p className="text-body-sm text-on-surface-variant leading-relaxed">
            Evans Mumo is a high-stakes engineering specialist focused on financial engineering, distributed systems, and architectural resilience. 
            With a background in building robust, industrial-scale infrastructures, he leads Mumo Syntax & Capital by merging elite technical mastery 
            with strategic consultancy to maximize capital efficiency through superior software architecture.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/20">
            <div>
              <span className="text-syntax-label text-on-surface-variant block mb-1">SPECIALIZATION</span>
              <span className="text-syntax-mono text-xs text-primary uppercase">Financial Engineering</span>
            </div>
            <div>
              <span className="text-syntax-label text-on-surface-variant block mb-1">FOCUS</span>
              <span className="text-syntax-mono text-xs text-primary uppercase">System Resilience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
