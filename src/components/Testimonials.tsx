"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Dr. Kamau",
        role: "Head of ICT, Academic Institution",
        content: "Evans delivered a robust school management system that transformed our administrative workflows. His technical depth in Next.js and secure architecture is exceptional.",
        avatar: "👨‍🏫"
    },
    {
        name: "Security Lead",
        role: "FinTech Startup",
        content: "Working with Evans on our system audit was a game-changer. He doesn't just find vulnerabilities; he provides scalable, secure engineering solutions.",
        avatar: "🛡️"
    },
    {
        name: "Project Manager",
        role: "Global Non-Profit",
        content: "The NRDC marketplace platform exceeded our expectations for speed and reliability. Evans is a reliable engineer who understands both business logic and complex code.",
        avatar: "🌍"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-accent-secondary/5 blur-[160px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-secondary font-mono tracking-[0.4em] uppercase mb-4 text-xs"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tighter"
                    >
                        Engineered for <span className="text-gradient glow-secondary">Confidence</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="p-10 rounded-[3rem] glass-morphism flex flex-col justify-between h-full group"
                        >
                            <div>
                                <div className="text-5xl mb-10 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 inline-block">
                                    {t.avatar}
                                </div>
                                <p className="text-foreground/60 text-lg font-light italic mb-10 leading-relaxed group-hover:text-foreground/80 transition-colors">
                                    "{t.content}"
                                </p>
                            </div>
                            <div className="pt-8 border-t border-white/5">
                                <h4 className="font-bold text-xl mb-1">{t.name}</h4>
                                <p className="text-accent-secondary font-mono text-[10px] uppercase font-black tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

