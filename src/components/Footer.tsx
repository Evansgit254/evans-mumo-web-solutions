"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-primary/10 grid-blueprint">
      <div className="container-max px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-8">
            <Logo />
            <p className="max-w-xs text-secondary text-base font-light leading-relaxed">
              An elite engineering studio synthesizing technical mastery into industrial capital assets.
            </p>
          </div>
          
          <div className="space-y-6">
            <span className="text-label text-primary">Capabilities</span>
            <ul className="space-y-4 text-secondary text-sm font-light">
              <li><Link href="#" className="hover:text-primary transition-colors">Software Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SecOps Protocol</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Market Intelligence</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <span className="text-label text-primary">Origin</span>
            <ul className="space-y-4 text-secondary text-sm font-light">
              <li><Link href="#" className="hover:text-primary transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">
            © 2026 MUMO_SYNTAX_CAPITAL_FRAMEWORK // ALL_SYSTEM_RESOURCES_RESERVED
          </p>
          <div className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">
            SYNTAX: STABLE // CAPITAL: NOMINAL
          </div>
        </div>
      </div>
    </footer>
  );
}
