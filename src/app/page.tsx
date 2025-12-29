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
          <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Core Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Software Engineering"
              description="Robust backend systems and scalable web applications using Django, Spring Boot, and Next.js."
              icon="⚙️"
            />
            <ServiceCard
              title="Security Engineering"
              description="Secure software development lifecycle (SDLC) and defensive cybersecurity implementations."
              icon="🛡️"
            />
            <ServiceCard
              title="AI & Data Science"
              description="Predictive modeling and intelligent automation solutions for data-driven results."
              icon="🧠"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-800 border border-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale opacity-20 group-hover:scale-110 transition-transform duration-700">👨‍💻</div>
                {/* Image placeholder for actual profile photo if needed */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                  <h4 className="text-xl font-bold">Evans (Mwendwa) Mumo</h4>
                  <p className="text-accent-primary font-mono text-sm">Engineer & Data Scientist</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">About Me</h2>
              <h3 className="text-4xl font-bold mb-8">Engineering Excellence with a Focus on Security</h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-lg">
                I am a dedicated **Software & Security Engineer** and **Certified Data Scientist** with a passion for building secure, efficient, and intelligent digital systems.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Holding a degree in **Telecommunications & IT Engineering** from **Kenyatta University**, I bridge the gap between complex network architectures and modern software development. My expertise spans Django, Python, Java, and DevOps, ensuring that every project is not just functional, but resilient and future-ready.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-accent-primary text-xl font-bold mb-1">500+</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">LinkedIn Connections</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-accent-primary text-xl font-bold mb-1">Nairobi</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Base Location</p>
                </div>
              </div>
            </div>
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
