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
              {/* Bento Card 1: Quantitative Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="md:col-span-8 p-12 cyber-panel group relative overflow-hidden flex flex-col justify-between min-h-[500px]"
              >
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/2 blur-[120px] rounded-full group-hover:bg-accent-primary/5 transition-all duration-1000 pointer-events-none"></div>
                  <div className="relative z-10">
                      <div className="w-20 h-20 cyber-panel flex items-center justify-center text-accent-primary mb-12 group-hover:scale-105 transition-all duration-700 bg-accent-primary/5">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                      </div>
                      <h4 className="text-5xl font-black mb-8 tracking-tighter leading-none uppercase font-mono">Quant<br/>Engineering</h4>
                      <p className="text-foreground/70 leading-relaxed text-2xl font-light max-w-2xl">
                          Architecting low-latency trading engines and resilient financial data pipelines.
                      </p>
                  </div>
                  <div className="relative z-10 mt-12 flex flex-wrap gap-3 text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                      <span className="px-4 py-2 cyber-panel bg-white/5 group-hover:text-accent-primary transition-colors">Low-Latency</span>
                      <span className="px-4 py-2 cyber-panel bg-white/5 group-hover:text-accent-primary transition-colors">Financial Data</span>
                      <span className="px-4 py-2 cyber-panel bg-white/5 group-hover:text-accent-primary transition-colors">High-Availability</span>
                  </div>
              </motion.div>

              {/* Bento Card 2: Security */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 p-12 cyber-panel group relative overflow-hidden flex flex-col justify-between"
              >
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-secondary/2 blur-[100px] rounded-full group-hover:bg-accent-secondary/5 transition-all duration-1000 pointer-events-none"></div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 cyber-panel flex items-center justify-center text-accent-secondary mb-12 group-hover:scale-105 transition-all duration-700 bg-accent-secondary/5">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <h4 className="text-4xl font-black mb-8 tracking-tighter leading-tight uppercase font-mono">Protocol<br/>Security</h4>
                      <p className="text-foreground/60 leading-relaxed text-xl font-light">
                          Institutional-grade security integrated into every deployment cycle.
                      </p>
                  </div>
              </motion.div>

              {/* Bento Card 3: AI & Data Science */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-12 p-16 cyber-panel group relative overflow-hidden flex flex-col items-center justify-center text-center py-24"
              >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/2 via-accent-secondary/2 to-transparent opacity-50"></div>
                  <div className="relative z-10 max-w-4xl">
                      <div className="w-24 h-24 mx-auto cyber-panel bg-white/5 flex items-center justify-center text-white mb-12 transform group-hover:scale-105 transition-all duration-700 shadow-2xl backdrop-blur-2xl">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                      </div>
                      <h4 className="text-6xl font-black mb-8 tracking-tighter uppercase font-mono">Algorithmic Intelligence</h4>
                      <p className="text-foreground/80 leading-relaxed text-3xl font-extralight mb-12 font-sans">
                          Deploying proprietary mathematical models to derive alpha from complex digital environments.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link href="#contact" className="px-12 py-5 cyber-panel bg-accent-primary/10 text-accent-primary text-sm font-black uppercase tracking-widest transition-all inline-block hover:bg-accent-primary hover:text-background">[ Secure Consultation ]</Link>
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-accent-primary/5 blur-[50px] group-hover:blur-[70px] transition-all duration-1000"></div>
              <div className="relative aspect-[4/5] bg-background cyber-panel overflow-hidden group-hover:border-accent-primary/50 transition-all duration-700">
                <img
                  src="/profile.jpg"
                  alt="Evans Mwendwa Mumo"
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 border-t border-accent-primary/20 bg-background/80 backdrop-blur-sm">
                  <h4 className="text-2xl font-mono font-black mb-1 tracking-tighter text-foreground uppercase italic">Mumo<span className="text-accent-primary">Syntax&Capital</span></h4>
                  <p className="text-accent-primary font-mono text-[10px] flex items-center gap-3 uppercase tracking-[0.3em]">
                    <span className="w-4 h-[1px] bg-accent-primary"></span>
                    Senior Quantitative Architect
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
                <div className="inline-flex items-center gap-2 px-3 py-1 cyber-panel text-accent-secondary mb-6 text-[10px] font-mono uppercase tracking-widest">
                   &gt; Origin_Protocol
                </div>
                <h3 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase font-mono">
                  Synthesizing <br/> <span className="text-accent-primary">Capital</span>_
                </h3>
                <p className="text-foreground/40 text-xl font-mono leading-relaxed max-w-xl">
                    Architecting high-precision systems where mathematical syntax meets industrial-scale capital assets.
                </p>
              </div>

              <div className="space-y-6 text-foreground/60 text-lg font-light leading-relaxed font-sans">
                <p>
                  <strong className="text-foreground tracking-tight font-medium">Mumo Syntax & Capital</strong> is an elite quantitative engineering studio led by <strong className="text-foreground tracking-tight font-medium">Evans Mumo</strong>. We specialize in the development of low-latency algorithms, resilient distributed infrastructure, and data-driven intelligence.
                </p>
                <p>
                  Leveraging a double-threaded foundation in <strong className="text-foreground tracking-tight">Telecommunications Engineering</strong> and <strong className="text-foreground tracking-tight">Advanced Data Science</strong>, we provide the technical syntax required to deploy and scale complex capital systems.
                </p>
              </div>

              {/* System Logs Visual */}
              <div className="mt-8 cyber-panel bg-background/50 p-4 font-mono text-[9px] text-accent-primary/50 overflow-hidden h-32 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-10"></div>
                <motion.div
                  animate={{ y: ["0%", "-50%", "0%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="space-y-1"
                >
                  <div>[SYS_LOG] INITIALIZING_CAPITAL_PROTOCOL... OK</div>
                  <div>[ALGO_V4] SCANNING_MARKET_VECTORS... DONE</div>
                  <div>[ALGO_V4] ALPHA_SIGNAL_DETECTED: 0.842</div>
                  <div>[SYS_SEC] ENCRYPTING_DATA_SYNTAX... VERIFIED</div>
                  <div>[SYS_LOG] DEPLOYING_RESILLIENT_NODE_01... SUCCESS</div>
                  <div>[DATA_STR] AGGREGATING_REAL_TIME_FEEDS... NOMINAL</div>
                  <div>[SYS_LOG] STARTING_EXECUTION_ENGINE... READY</div>
                  <div>[ALGO_V4] OPTIMIZING_ENTRY_POINTS... 99%</div>
                  <div>[SYS_LOG] INITIALIZING_CAPITAL_PROTOCOL... OK</div>
                  <div>[ALGO_V4] SCANNING_MARKET_VECTORS... DONE</div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-6 bg-background cyber-panel group relative overflow-hidden transition-all hover:bg-accent-primary/5 shadow-lg"
                >
                  <p className="text-accent-primary text-4xl font-mono font-black mb-1">10+</p>
                  <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-widest">Systems_Deployed</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-6 bg-background cyber-panel group relative overflow-hidden transition-all hover:bg-accent-primary/5 shadow-lg"
                >
                  <p className="text-accent-secondary text-4xl font-mono font-black mb-1">0xSEC</p>
                  <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-widest">Protocol_Validation</p>
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


