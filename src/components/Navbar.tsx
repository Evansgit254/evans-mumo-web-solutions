"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass-morphism" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/">
                    <Logo />
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="#services" className="hover:text-accent-primary transition-colors">Services</Link>
                    <Link href="#work" className="hover:text-accent-primary transition-colors">Work</Link>
                    <Link href="#about" className="hover:text-accent-primary transition-colors">About</Link>
                    <Link
                        href="#contact"
                        className="px-6 py-2 rounded-full border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300"
                    >
                        Start a Project
                    </Link>
                </div>

                <button className="md:hidden text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
