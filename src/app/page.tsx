import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section id="services" className="py-24 bg-slate-900/40 relative">
        <div className="absolute inset-0 bg-accent-primary/5 blur-[120px] pointer-events-none rounded-full w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Skills & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Modern, performant websites built with Next.js and React."
              icon="🚀"
            />
            <ServiceCard
              title="UI/UX Design"
              description="User-centric designs that are visually stunning and intuitive."
              icon="🎨"
            />
            <ServiceCard
              title="SEO & Performance"
              description="Optimizing for speed and search engine visibility."
              icon="📈"
            />
          </div>
        </div>
      </section>

      <Portfolio />
      <Contact />

      <footer className="py-24 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <Logo className="mb-8" />
          <nav className="flex gap-8 mb-12 text-sm text-foreground/60">
            <a href="#services" className="hover:text-accent-primary">Services</a>
            <a href="#work" className="hover:text-accent-primary">Work</a>
            <a href="#contact" className="hover:text-accent-primary">Contact</a>
          </nav>
          <div className="text-center text-foreground/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Evans Mumo Web Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="p-8 rounded-[2rem] glass-morphism hover:border-accent-primary/50 transition-all duration-300 group cursor-default">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-lg">{icon}</div>
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}
