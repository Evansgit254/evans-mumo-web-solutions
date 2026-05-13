"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
  return (
    <section id="services" className="px-5 md:px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Engineering (Blueprint) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-panel p-8 border border-outline-variant/30 flex flex-col min-h-[400px] group overflow-hidden"
        >
          <div className="absolute inset-0 blueprint-bg opacity-10 -z-10 group-hover:opacity-20 transition-opacity"></div>
          <span className="text-syntax-mono text-primary uppercase mb-12 block">[ 01_ENGINEERING ]</span>
          <h3 className="text-strategy-md mb-6 uppercase">Technical Foundation</h3>
          <ul className="space-y-4 text-syntax-mono text-on-surface-variant">
            <li className="flex items-center gap-3">
              <span className="text-primary text-sm">▸</span>
              SOFTWARE ARCHITECTURE
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-sm">▸</span>
              DISTRIBUTED SYSTEMS
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-sm">▸</span>
              CLOUD INFRASTRUCTURE
            </li>
          </ul>
          <div className="mt-auto pt-8 flex items-center text-primary-fixed font-bold text-xs gap-2">
            <Link href="#contact" className="hover:text-white transition-colors">INITIALIZE BUILD →</Link>
          </div>
        </motion.div>

        {/* Product (Elevation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative glass-panel p-8 border border-primary/20 flex flex-col min-h-[400px] group overflow-hidden bg-primary-container/20"
        >
          <Image 
            className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10 group-hover:scale-105 transition-transform duration-700" 
            alt="Digital dashboard visualization"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2tZFn2ToWdM_VPlap-ji8nUP3-glrZ_NPU_26yPtToMKiiv_aFVN7QuzHNNcpARukGQjAIPIYRy4DvlTZoHuL06YD9d1SoHp-_98ujksNi4q6bCjb7oep2jCROxfr4a_JkEBAlwk8Jmpf3GQy2d5Sim5K6ds5toXzHG7ErgRA8kal2IIjQz-BPSxiJ5VI1uCLBAg9V598f8g3YT1qYZayAJAqSU6sioPnB6LayRaFmx8CYb2NDwVCjxK-PheZu2409mq2sTQRMkxv"
            fill
          />
          <span className="text-syntax-mono text-primary uppercase mb-12 block">[ 02_PRODUCT ]</span>
          <h3 className="text-strategy-md mb-6 uppercase">Product Development</h3>
          <p className="text-body-sm text-on-surface-variant mb-6">
            Translating complex logic into intuitive, high-stakes industrial interfaces.
          </p>
          <div className="mt-auto pt-8 border-t border-outline-variant/20 flex items-center gap-4">
            <div className="w-10 h-10 border border-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
              </svg>
            </div>
            <span className="text-syntax-label uppercase">UI/UX Blueprinting</span>
          </div>
        </motion.div>

        {/* Consultancy (Strategy) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-surface-container-high p-8 border border-outline-variant/40 flex flex-col min-h-[400px] group"
        >
          <span className="text-syntax-mono text-secondary-fixed uppercase mb-12 block">[ 03_STRATEGY ]</span>
          <h3 className="text-strategy-md mb-6 uppercase">Strategic Consultancy</h3>
          <p className="text-body-sm text-on-surface-variant mb-12 leading-relaxed">
            High-level advisory focusing on risk mitigation, capital scaling, and market architecture optimization.
          </p>
          <div className="mt-auto">
            <Link
              href="#contact"
              className="block w-full py-3 border border-secondary-fixed text-secondary-fixed text-syntax-mono text-xs text-center uppercase hover:bg-secondary-fixed hover:text-surface transition-colors"
            >
              EXECUTE ADVISORY
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
