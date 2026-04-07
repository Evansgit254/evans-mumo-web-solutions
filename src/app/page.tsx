"use client";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
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
    <main className="min-h-screen">
      <Hero />

      <section id="services" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent-primary/10 text-accent-primary mb-6 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
              Core Services
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">What I <span className="text-gradient">Do</span> Best</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">Building high-performance software and data solutions with a focus on user experience, security, and scale.</p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Bento Card 1: Software Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="md:col-span-8 p-12 glass-morphism rounded-[3rem] group relative overflow-hidden flex flex-col justify-between min-h-[500px]"
              >
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full group-hover:bg-accent-primary/15 transition-all duration-1000 pointer-events-none"></div>
                  <div className="relative z-10">
                      <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-accent-primary mb-12 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 bg-accent-primary/10 shadow-inner">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                      </div>
                      <h4 className="text-5xl font-black mb-8 tracking-tighter leading-none">Software <br/>Engineering</h4>
                      <p className="text-foreground/70 leading-relaxed text-2xl font-light max-w-2xl">
                          I design and build high-performance distributed systems. My engineering philosophy centers on resilience and code as a craft.
                      </p>
                  </div>
                  <div className="relative z-10 mt-12 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-foreground/40">
                      <span className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 group-hover:text-accent-primary transition-colors">Distributed Systems</span>
                      <span className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 group-hover:text-accent-primary transition-colors">Cloud Native</span>
                      <span className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 group-hover:text-accent-primary transition-colors">DevOps</span>
                  </div>
              </motion.div>

              {/* Bento Card 2: Security */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="md:col-span-4 p-12 glass-morphism rounded-[3rem] group relative overflow-hidden flex flex-col justify-between"
              >
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-secondary/5 blur-[100px] rounded-full group-hover:bg-accent-secondary/15 transition-all duration-1000 pointer-events-none"></div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-accent-secondary mb-12 group-hover:scale-110 transition-all duration-700 bg-accent-secondary/10 shadow-inner">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <h4 className="text-4xl font-black mb-8 tracking-tighter leading-tight">Security<br/>Systems</h4>
                      <p className="text-foreground/60 leading-relaxed text-xl font-light">
                          Security-first methodology integrated into every layer of the SDLC.
                      </p>
                  </div>
              </motion.div>

              {/* Bento Card 3: AI & Data Science */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-12 p-16 glass-morphism rounded-[3rem] group relative overflow-hidden flex flex-col items-center justify-center text-center py-24"
              >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-transparent opacity-50"></div>
                  <div className="relative z-10 max-w-4xl">
                      <div className="w-24 h-24 mx-auto rounded-[2.5rem] bg-white/10 flex items-center justify-center text-white mb-12 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl backdrop-blur-2xl border border-white/20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                      </div>
                      <h4 className="text-6xl font-black mb-8 tracking-tighter">AI & Advanced Analytics</h4>
                      <p className="text-foreground/80 leading-relaxed text-3xl font-extralight mb-12">
                          Harnessing biological-inspired computing to derive intelligent insights from complex data.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link href="#contact" className="px-12 py-5 rounded-full bg-white text-black text-sm font-black uppercase tracking-widest shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] transition-all inline-block">Discuss a Project</Link>
                      </motion.div>
                  </div>
              </motion.div>
            </div>
        </div>
      </section>

      <TechStack />

      <section id="about" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-[50px] group-hover:blur-[70px] transition-all duration-1000"></div>
              <div className="relative aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700">
                <img
                  src="/profile.jpg"
                  alt="Evans Mwendwa Mumo"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-10 md:p-12">
                  <h4 className="text-3xl font-black mb-2 tracking-tight text-foreground italic uppercase">Mumo<span className="text-accent-primary">Syntax&Capital</span></h4>
                  <p className="text-accent-primary text-sm font-medium flex items-center gap-3 uppercase tracking-widest">
                    <span className="w-8 h-[2px] bg-accent-primary rounded-full"></span>
                    Principal Engineer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary mb-6 text-xs font-medium border border-accent-secondary/20">
                  Origins
                </div>
                <h3 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                  Engineering <br/> <span className="text-gradient">Resilience</span>
                </h3>
                <p className="text-foreground/60 text-2xl font-light italic leading-relaxed">
                  "Building systems that don't just work—they endure."
                </p>
              </div>

              <div className="space-y-6 text-foreground/50 text-xl font-light leading-relaxed">
                <p>
                  <strong className="text-foreground tracking-tight font-medium">Mumo Syntax & Capital</strong> is an elite quantitative engineering and full-stack studio led by <strong className="text-foreground tracking-tight font-medium">Evans Mumo</strong>.
                </p>
                <p>
                  With a foundation in <strong className="text-foreground tracking-tight">Telecommunications Engineering</strong> and advanced <strong className="text-foreground tracking-tight">Data Science</strong>, we bridge the gap between rigorous infrastructure and powerful digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl group relative overflow-hidden transition-all hover:bg-white/10 shadow-lg"
                >
                  <p className="text-accent-primary text-5xl font-black mb-3 tracking-tighter">10+</p>
                  <p className="text-sm text-foreground/60 font-medium">Core Projects Built</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl group relative overflow-hidden transition-all hover:bg-white/10 shadow-lg"
                >
                  <p className="text-accent-secondary text-5xl font-black mb-3 tracking-tighter">Sec+</p>
                  <p className="text-sm text-foreground/60 font-medium">Security Validation</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}


