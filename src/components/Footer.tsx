"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/10 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
                <Link href="/" className="mb-12 group">
                    <Logo className="transition-transform group-hover:scale-105 duration-500 origin-center" />
                </Link>
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-6 mb-16 text-sm font-medium text-foreground/60">
                    <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
                    <Link href="/#work" className="hover:text-foreground transition-colors">Work</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                    <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
                    <a href="https://github.com/Evansgit254" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/evans-mumo-5b0759261" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                </nav>
                <div className="text-center text-foreground/50 text-xs border-t border-white/5 pt-8 w-full max-w-2xl font-medium">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} Mumo Syntax & Capital.</p>
                        <h4 className="text-2xl font-black tracking-tighter text-white mb-4 uppercase italic">MUMO<span className="text-accent-primary">FORGE</span></h4>
                        <p className="text-foreground/40 text-xs font-mono tracking-widest leading-relaxed uppercase">Software & Security Engineering</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
