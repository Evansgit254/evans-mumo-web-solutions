"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* Hero Background Image */}
      <Image
        alt="Mumo Syntax & Capital - Technical Visualization"
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero-cinematic-hd.jpg"
        fill
        priority
      />
      {/* Gradient overlay — stronger at bottom to separate text from image */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

      {/* Content — positioned at the very bottom, below the image's built-in branding */}
      <div className="relative z-10 px-5 md:px-16 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 border border-primary/30 glass-panel"
        >
          <span className="text-syntax-mono text-primary-fixed uppercase">System Status: Active</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-on-surface-variant max-w-xl mb-8"
        >
          Engineering precision meeting industrial-scale strategy. We architect high-performance systems for global capital markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary-fixed text-surface px-8 py-4 font-display text-lg font-bold tracking-widest hover:bg-white transition-all group"
          >
            ENTER PORTAL
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Blueprint Decoration Overlay */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 blueprint-bg opacity-20 pointer-events-none border-l border-t border-outline-variant/20"></div>
    </section>
  );
}
