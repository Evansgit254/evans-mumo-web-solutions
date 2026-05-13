"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-5 md:px-16 ${
      scrolled
        ? "py-3 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20"
        : "py-6 bg-transparent"
    }`}>
      <Logo />

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-syntax-label uppercase text-on-surface-variant hover:text-primary-fixed transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="bg-secondary-fixed text-surface px-8 py-3 text-syntax-label uppercase tracking-widest hover:bg-white transition-colors"
        >
          Enter Portal
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-primary-fixed p-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] bg-surface/95 backdrop-blur-2xl z-40 md:hidden flex flex-col p-8 gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-strategy-md uppercase text-on-surface hover:text-primary-fixed transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-secondary-fixed text-surface px-8 py-4 text-center text-syntax-label uppercase tracking-widest"
          >
            Enter Portal
          </Link>
        </div>
      )}
    </header>
  );
}
