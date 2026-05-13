"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import LeadArchitect from "@/components/LeadArchitect";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Hero />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <LeadArchitect />
      <Contact />
    </main>
  );
}
