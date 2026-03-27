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
                    <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                        </span>
                        <h2 className="text-foreground/80 font-medium text-sm tracking-wide">
                            Open for new projects
                        </h2>
                    </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tight leading-[1.1] text-balance text-white transform-gpu">
                    Forging <br className="hidden md:block"/>
                    <span className="text-gradient-accent">Digital Resilience.</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-foreground/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                    At <span className="text-foreground tracking-tight font-medium">Mumo Forge</span>, we engineer high-performance software and secure digital infrastructure. 
                    Specialized in <span className="text-foreground/90 font-medium">Distributed Systems</span> and <span className="text-foreground/90 font-medium">Intelligent Analytics</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="#contact"
                        className="shimmer-btn px-12 py-5 rounded-full bg-white text-black font-black hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-500 w-full sm:w-auto text-center relative z-10"
                    >
                        Let's Work Together
                    </Link>
                    <Link
                        href="#work"
                        className="px-10 py-5 rounded-full border border-white/10 bg-white/5 text-foreground font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        Explore My Work
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


