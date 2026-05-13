"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-start md:justify-end overflow-hidden bg-background">
      {/* 
        Hero Background Image - Full Visibility on Mobile 
        Added pt-20 to clear the fixed Navbar.
      */}
      <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-full md:aspect-auto mt-20 md:mt-0">
        <Image
          alt="Mumo Syntax & Capital - Technical Visualization"
          className="w-full h-full object-contain md:object-cover md:object-center"
          src="/images/hero-cinematic-hd.jpg"
          fill={false}
          width={1920}
          height={1080}
          priority
        />
        {/* Mobile Gradient to transition from image to content */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
      </div>
      
      {/* Desktop Overlays */}
      <div className="hidden md:block absolute inset-0 bg-black/40"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-16 pt-8 pb-16 md:pb-24 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-0 md:mb-auto pt-0 md:pt-20">
          {/* Hide redundant branding on mobile since it is visible in the image above */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block text-display-lg text-white uppercase tracking-tight max-w-4xl leading-[0.85]"
          >
            Mumo <br />
            <span className="text-primary-fixed">Syntax & Capital</span>
          </motion.h1>
        </div>

        <div className="w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-primary/30 glass-panel"
          >
            <span className="text-syntax-mono text-primary-fixed uppercase text-xs md:text-sm tracking-widest font-bold">System Status: Active</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-md mx-auto md:mx-0"
          >
            Engineering precision meeting industrial-scale strategy. <br className="hidden md:block" />
            We architect high-performance systems for global capital markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-background px-10 py-4 font-display text-lg font-bold tracking-widest hover:bg-primary-fixed transition-all group"
            >
              ENTER PORTAL
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Blueprint Decoration Overlay */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 blueprint-bg opacity-10 pointer-events-none border-l border-t border-outline-variant/20 hidden md:block"></div>
    </section>
  );
}
