"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 20
            } 
        }
    } as const;

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
            {/* Background elements follow */}
            
            {/* Dynamic Mesh Background */}
            <div className="absolute inset-0 bg-premium-mesh opacity-40 z-0"></div>
            
            <motion.div 
                animate={{ 
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-primary/10 blur-[40px] rounded-full pointer-events-none z-0"
            ></motion.div>
            <motion.div 
                animate={{ 
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-secondary/10 blur-[40px] rounded-full pointer-events-none z-0"
            ></motion.div>

            <div
                className="container-hero mx-auto px-6 relative z-20 text-center"
            >
                <div className="inline-block mb-10">
                    <div className="flex items-center gap-3 px-6 py-2.5 cyber-panel">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent-primary"></span>
                        </span>
                        <h2 className="text-accent-primary font-mono text-sm tracking-widest uppercase">
                            System_Online // Ready
                        </h2>
                    </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[1.1] text-balance text-white transform-gpu uppercase font-mono">
                    Forging <br className="hidden md:block"/>
                    <span className="text-foreground">Digital Resilience</span><span className="text-accent-primary animate-blink">_</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-foreground/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                    At <span className="text-foreground tracking-tight font-medium">Mumo Syntax & Capital</span>, we architect high-frequency algorithms and resilient web systems. 
                    Specialized in <span className="text-foreground/90 font-medium">Distributed Systems</span> and <span className="text-foreground/90 font-medium">Intelligent Analytics</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="#contact"
                        className="cyber-panel px-12 py-5 bg-accent-primary/10 text-accent-primary font-black uppercase tracking-widest hover:bg-accent-primary hover:text-black transition-all w-full sm:w-auto text-center relative z-10"
                    >
                        [ Initialize Contact ]
                    </Link>
                    <Link
                        href="#work"
                        className="cyber-panel px-10 py-5 bg-background text-foreground/80 font-mono tracking-widest uppercase hover:text-accent-primary transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        &gt; Execute Portfolio
                    </Link>
                </div>
            </div>

            {/* Hero Scroll Indicator (Absolute to Hero) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 right-12 z-30 flex flex-col items-center gap-8 hidden lg:flex opacity-30"
            >
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/50 font-black [writing-mode:vertical-lr] rotate-180">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full relative overflow-hidden">
                    <motion.div 
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-1/2"
                    />
                </div>
            </motion.div>
        </section>
    );
}


