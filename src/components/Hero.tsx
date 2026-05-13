"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* Hero Background Image */}
      <Image
        alt="Architectural visualization"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC49TURFNiZjmpwW5F7lcTd13ZvMGN25cpGRWuMBFoFgd5tM8wDl0DWU7RcVR_nutMHVqtUV6wRaNC3ABnmqx7pZrRBWAF7zixF9eX53ANYmWe267GMt8OwDyE7NtcrunF9TtVnvPCyEXdzPKbgixSHvApej-PzinLjfWdJ82e5jo3p4vNvy5k0Tkfd8NbHKpolQOS3dfSXOgRp52NjactRRNxSmFSTauRX-_lZBn5BHZ-2aDi5JlwNcokrKsnsScUrz6vIr8HS55JQ"
        fill
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-16 pb-16 md:pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 border border-primary/30 glass-panel"
        >
          <span className="text-syntax-mono text-primary-fixed uppercase">System Status: Active</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[48px] md:text-display-lg leading-[1.1] text-on-background mb-4 uppercase"
        >
          SYNTAX TO <br /><span className="text-secondary-fixed">CAPITAL</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-body-lg text-on-surface-variant max-w-xl mb-8"
        >
          Engineering precision meeting industrial-scale strategy. We architect high-performance systems for global capital markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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

      {/* Blueprint Decoration Overlay (from Stitch) */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 blueprint-bg opacity-20 pointer-events-none border-l border-t border-outline-variant/20"></div>
    </section>
  );
}
