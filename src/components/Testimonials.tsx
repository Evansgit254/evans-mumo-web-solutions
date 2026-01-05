"use client";

import { useState, useEffect } from "react";

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
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Social Proof</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">What People Say</h3>
                </div>

                <div className="max-w-4xl mx-auto shadow-2xl relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-[2rem] glass-morphism border transition-all duration-500 hover:border-accent-primary/30 ${activeIndex === i ? 'border-accent-primary/50 bg-white/5' : 'border-white/5'
                                    }`}
                                onMouseEnter={() => setActiveIndex(i)}
                            >
                                <div className="text-4xl mb-6">{t.avatar}</div>
                                <p className="text-foreground/80 italic mb-8 leading-relaxed">"{t.content}"</p>
                                <div>
                                    <h4 className="font-bold text-lg">{t.name}</h4>
                                    <p className="text-accent-primary font-mono text-xs uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
