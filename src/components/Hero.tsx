"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[128px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <motion.div
                className="container mx-auto px-6 relative z-10 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-accent-primary font-mono tracking-[0.4em] uppercase mb-6 text-sm md:text-base border border-accent-primary/30 inline-block px-4 py-1 rounded-full bg-accent-primary/5"
                >
                    Software & Security Engineer
                </motion.h2>
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none"
                >
                    Designing <br />
                    <span className="text-gradient glow">Resilient Systems</span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed font-light"
                >
                    Crafting premium, security-first software solutions with deep expertise in
                    <span className="text-foreground mx-1">Python</span>,
                    <span className="text-foreground mx-1">Java</span>, and
                    <span className="text-foreground mx-1">Data Science</span>.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 rounded-full bg-accent-primary text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-500 w-full md:w-auto text-center shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                        Explore Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 rounded-full border border-white/10 glass-morphism text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 w-full md:w-auto text-center"
                    >
                        Start a Conversation
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Hero Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-accent-primary to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
}
