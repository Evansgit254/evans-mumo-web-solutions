"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/#work" },
        { name: "About", href: "/#about" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? "py-4 cyber-panel rounded-none border-b border-white/5 bg-background/80" : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="group transition-transform hover:scale-105 z-50" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-accent-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-2xl bg-accent-primary text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-accent-primary/20"
                        >
                            Start a Project
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-foreground p-3 rounded-2xl cyber-panel rounded-none z-50 transition-all hover:bg-white/10"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-black uppercase tracking-widest text-foreground/60 hover:text-accent-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-5 rounded-2xl bg-accent-primary text-black text-center text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-accent-primary/20"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

