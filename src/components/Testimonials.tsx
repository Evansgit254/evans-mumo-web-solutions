"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Kamau",
    role: "Head of ICT, Academic Institution",
    content: "Evans delivered a robust school management system that transformed our administrative workflows. His technical depth in Next.js and secure architecture is exceptional.",
  },
  {
    name: "Security Lead",
    role: "FinTech Startup",
    content: "Working with Evans on our system audit was a game-changer. He provides scalable, secure engineering solutions beyond just finding vulnerabilities.",
  },
  {
    name: "Project Manager",
    role: "Global Non-Profit",
    content: "The NRDC marketplace platform exceeded our expectations for speed and reliability. Evans is a reliable engineer who understands both business logic and complex code.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 md:px-16 py-24 border-b border-outline-variant/20">
      <div className="mb-16">
        <span className="text-syntax-mono text-primary-fixed uppercase tracking-widest block mb-4">VALIDATION</span>
        <h2 className="text-headline-lg uppercase">SIGNAL_REPORTS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 flex flex-col justify-between min-h-[300px] group hover:border-primary/30 transition-colors"
          >
            <div>
              <span className="text-syntax-label text-primary/40 block mb-8">SIG_0{i + 1}</span>
              <p className="text-body-lg text-on-surface-variant italic leading-relaxed mb-8">
                &quot;{t.content}&quot;
              </p>
            </div>
            <div className="pt-6 border-t border-outline-variant/20">
              <h4 className="font-bold text-lg uppercase tracking-tight text-on-surface">{t.name}</h4>
              <p className="text-syntax-label text-on-surface-variant uppercase">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
