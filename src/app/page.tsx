import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Logo from "@/components/Logo";
import Link from "next/link";

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
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-800 border border-white/5 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Evans Mwendwa Mumo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
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
                <Link
                  href="https://www.linkedin.com/in/evans-mumo-395960b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-primary/50 transition-all flex flex-col justify-center group"
                >
                  <p className="text-accent-primary text-xl font-bold mb-1 flex items-center gap-2">
                    Connect on
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold group-hover:text-accent-primary transition-colors">LinkedIn Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <Testimonials />
      <Contact />

      <footer className="py-24 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <Logo className="mb-8" />
          <nav className="flex gap-8 mb-12 text-sm text-foreground/60">
            <a href="#services" className="hover:text-accent-primary">Services</a>
            <a href="#work" className="hover:text-accent-primary">Work</a>
            <Link href="/blog" className="hover:text-accent-primary">Blog</Link>
            <a href="#contact" className="hover:text-accent-primary">Contact</a>
            <a href="https://github.com/Evansgit254" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/evans-mumo-395960b0/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary">LinkedIn</a>
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
