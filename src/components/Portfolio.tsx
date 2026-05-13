"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    id: "CASE_01_A",
    title: "ALGORITHM EQUITY",
    desc: "Quantifying risk through recursive architectural validation and high-frequency trading logic.",
    tags: ["React", "FastAPI", "Quant"],
    image: "/images/trading-expert.png",
  },
  {
    id: "CASE_02_S",
    title: "STRUCTURAL SCALE",
    desc: "Vertical expansion strategies and robust school management systems for academic institutions.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "CASE_03_V",
    title: "RESILIENT CORE",
    desc: "High-performance infrastructure for luxury hospitality and estate management.",
    tags: ["PostgreSQL", "Cloud", "Security"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "CASE_04_P",
    title: "PORTAL PROTOCOL",
    desc: "Decentralized marketplace architecture for global non-profit networks.",
    tags: ["Blockchain", "Next.js", "Scale"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface-container-lowest border-y border-outline-variant/20">
      <div className="px-5 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-syntax-mono text-primary-fixed uppercase tracking-widest block mb-4">SHOWCASE</span>
            <h2 className="text-headline-lg uppercase">PORTAL_LOGS</h2>
          </div>
          <div className="text-syntax-mono text-on-surface-variant max-w-sm border-l-2 border-primary-fixed pl-6 py-2">
            &quot;We do not build for the present; we engineer for the impending scale.&quot;
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((cs) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] mb-6 overflow-hidden border border-outline-variant/30">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt={cs.title}
                  src={cs.image}
                  fill
                />
                <div className="absolute top-4 right-4 bg-surface/90 px-3 py-1 text-syntax-label border border-outline-variant">
                  {cs.id}
                </div>
              </div>
              <h3 className="text-strategy-md uppercase mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
              <p className="text-body-sm text-on-surface-variant mb-4">{cs.desc}</p>
              <div className="flex gap-3">
                {cs.tags.map((tag) => (
                  <span key={tag} className="bg-surface-variant px-2 py-1 text-syntax-label text-[10px] uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
