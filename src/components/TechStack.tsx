"use client";
import { motion } from "framer-motion";

const techStack = [
    { name: "Django", category: "Software" },
    { name: "Python", category: "Software" },
    { name: "Java", category: "Software" },
    { name: "Next.js", category: "Software" },
    { name: "TypeScript", category: "Software" },
    { name: "Spring Boot", category: "Software" },
    { name: "Cybersecurity", category: "Security" },
    { name: "Defensive Coding", category: "Security" },
    { name: "Penetration Testing", category: "Security" },
    { name: "Secure SDLC", category: "Security" },
    { name: "Machine Learning", category: "Data Science" },
    { name: "Predictive Analysis", category: "Data Science" },
    { name: "Pandas/NumPy", category: "Data Science" },
    { name: "Data Visualization", category: "Data Science" },
];

export default function TechStack() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">The Technical Core</h3>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(6, 182, 212, 0.1)",
                                borderColor: "rgba(6, 182, 212, 0.5)"
                            }}
                            className="px-6 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm cursor-default transition-colors"
                        >
                            <span className="text-foreground/90 font-medium">{tech.name}</span>
                            <span className="ml-2 text-[10px] uppercase tracking-tighter text-accent-primary opacity-50 font-mono">
                                {tech.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
