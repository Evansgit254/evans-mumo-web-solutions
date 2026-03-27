"use client";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Software Engineering",
        id: "sys_eng",
        skills: ["Django", "Python", "Java", "Next.js", "TypeScript", "Spring Boot", "FastAPI"]
    },
    {
        title: "Security Engineering",
        id: "sec_ops",
        skills: ["Cybersecurity", "Defensive Coding", "Penetration Testing", "Secure SDLC", "Threat Modeling"]
    },
    {
        title: "AI & Data Science",
        id: "ml_data",
        skills: ["Machine Learning", "Predictive Analysis", "Pandas", "NumPy", "Data Visuals", "TensorFlow"]
    }
];

export default function TechStack() {
    return (
        <section className="py-32 bg-background relative overflow-hidden border-b border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary mb-6 text-sm font-medium border border-accent-primary/20"
                    >
                        Weapon of Choice
                    </motion.div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tight"
                    >
                        Technical <span className="text-gradient-accent">Arsenal</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-morphism rounded-[2.5rem] p-10 group relative overflow-hidden"
                        >
                            {/* Animated Glow Backdrop */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-primary/5 blur-[80px] rounded-full group-hover:bg-accent-primary/20 transition-all duration-700 pointer-events-none"></div>
                            
                            <h4 className="text-3xl font-black tracking-tight mb-10 text-foreground group-hover:text-accent-primary transition-colors flex items-center gap-4">
                                <span className="w-10 h-1 bg-accent-primary/30 rounded-full group-hover:w-16 transition-all duration-500"></span>
                                {cat.title}
                            </h4>
                            
                            <div className="flex flex-wrap gap-4 relative z-10">
                                {cat.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, borderColor: "hsla(var(--accent-primary) / 0.5)" }}
                                        className="px-6 py-2.5 rounded-2xl border border-white/5 bg-white/5 text-sm font-medium text-foreground/70 hover:text-white transition-all cursor-default select-none backdrop-blur-md shadow-sm"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


