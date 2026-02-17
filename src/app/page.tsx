"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Logo from "@/components/Logo";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />

      <section id="services" className="py-24 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-primary/5 blur-[120px] pointer-events-none rounded-full w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Core Solutions</h3>
            <p className="text-foreground/60 max-w-xl mx-auto">Providing world-class engineering and data science services with precision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Bento Card 1: Main Service */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-3 md:row-span-2 p-10 rounded-[2.5rem] glass-morphism group flex flex-col justify-end relative overflow-hidden border-accent-primary/20"
            >
              <div className="absolute top-10 right-10 text-6xl opacity-20 group-hover:opacity-40 transition-opacity">⚙️</div>
              <h4 className="text-3xl font-bold mb-4">Software Engineering</h4>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-md">
                We design and build high-performance backend systems and scalable web applications. Our engineering
                philosophy centers on maintainable, efficient, and robust code.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono">Django</span>
                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono">Next.js</span>
                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono">Spring Boot</span>
              </div>
            </motion.div>

            {/* Bento Card 2: Security */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 md:row-span-1 p-8 rounded-[2.5rem] glass-morphism group flex flex-col justify-center relative overflow-hidden border-accent-secondary/20"
            >
              <div className="absolute top-8 right-8 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🛡️</div>
              <h4 className="text-2xl font-bold mb-3">Security Engineering</h4>
              <p className="text-foreground/70 leading-relaxed">
                Security-first methodology applied to every layer of the software development lifecycle.
              </p>
            </motion.div>

            {/* Bento Card 3: AI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 md:row-span-1 p-8 rounded-[2.5rem] bg-accent-primary text-black group flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-4xl opacity-20">🧠</div>
              <h4 className="text-2xl font-bold mb-3">AI & Data Science</h4>
              <p className="text-black/80 leading-relaxed">
                Harnessing the power of data through advanced predictive modeling and intelligent automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TechStack />

      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] bg-slate-800 border border-white/5 overflow-hidden ring-1 ring-white/10">
                <img
                  src="/profile.jpg"
                  alt="Evans Mwendwa Mumo"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
                  <h4 className="text-2xl font-bold mb-1">Evans Mumo</h4>
                  <p className="text-accent-primary font-mono text-sm tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-accent-primary"></span>
                    ENGINEER & DATA SCIENTIST
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm tracking-[0.3em]">Origins</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Engineering Excellence with a Focus on Security</h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-xl font-light italic">
                "I bridge the gap between complex network architectures and modern software development."
              </p>
              <div className="space-y-6 text-foreground/70 leading-relaxed mb-10">
                <p>
                  I am a dedicated **Software & Security Engineer** and **Certified Data Scientist** with a passion for building secure, efficient, and intelligent digital systems.
                </p>
                <p>
                  Holding a degree in **Telecommunications & IT Engineering** from **Kenyatta University**, my expertise spans Django, Python, Java, and DevOps. I ensure that every project is not just functional, but resilient and future-ready.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                >
                  <p className="text-accent-primary text-2xl font-bold mb-1">500+</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Connections</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-primary/40 transition-all group flex flex-col justify-center"
                >
                  <Link
                    href="https://www.linkedin.com/in/evans-mumo-5b0759261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-accent-primary text-xl font-bold mb-1 flex items-center gap-2 group-hover:scale-105 transition-transform">
                      LinkedIn
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </p>
                    <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold group-hover:text-accent-primary transition-colors">Portfolio Profile</p>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
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
            <a href="https://www.linkedin.com/in/evans-mumo-5b0759261" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary">LinkedIn</a>
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
