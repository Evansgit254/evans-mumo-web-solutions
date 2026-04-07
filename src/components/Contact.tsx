"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            } else {
                console.error("Submission failed");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Info Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary mb-2 text-sm font-medium border border-accent-primary/20">
                                    Reach Out
                                </div>
                                <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                                    Let's Build <br />
                                    <span className="text-gradient">Something Great.</span>
                                </h3>
                                <p className="text-foreground/60 text-xl font-light leading-relaxed max-w-md">
                                    Ready to take your digital products to the next level? Get in touch and let's discuss your vision.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="group flex items-center gap-6 p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-lg transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-accent-primary bg-accent-primary/10 group-hover:scale-110 transition-transform duration-500">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/50 font-medium mb-1">Email Address</p>
                                        <p className="text-base font-semibold text-foreground">evansdev86@gmail.com</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-6 p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-lg transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-accent-secondary bg-accent-secondary/10 group-hover:scale-110 transition-transform duration-500">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-foreground/50 font-medium mb-1">Direct Line</p>
                                        <p className="text-base font-semibold text-foreground">+254 703 840 886</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <motion.a 
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    href="https://www.linkedin.com/in/evans-mumo-5b0759261" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-12 h-12 rounded-2xl cyber-panel rounded-none flex items-center justify-center hover:bg-accent-primary hover:text-black transition-all"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </motion.a>
                                <motion.a 
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    href="https://github.com/Evansgit254" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-12 h-12 rounded-2xl cyber-panel rounded-none flex items-center justify-center hover:bg-accent-secondary hover:text-black transition-all"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white/5 p-8 md:p-12 overflow-hidden border border-white/10 rounded-[2.5rem] shadow-2xl"
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary text-5xl mb-8 glow">✓</div>
                                        <h3 className="text-4xl font-black mb-6 tracking-tight">Message Received</h3>
                                        <p className="text-foreground/50 text-xl font-light mb-12 max-w-sm leading-relaxed">
                                            Thank you, I've received your inquiry and will be in touch within 24 hours.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-10 py-4 rounded-2xl border border-accent-primary/20 text-accent-primary font-bold uppercase tracking-widest text-xs hover:bg-accent-primary hover:text-black transition-all"
                                        >
                                            Send Another
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-8" 
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40 px-2">Full Name</label>
                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-primary/50 focus:ring-4 focus:ring-accent-primary/10 transition-all text-base text-foreground placeholder-white/20 cyber-panel rounded-none"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40 px-2">Email Address</label>
                                                <div className="relative group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-primary/50 focus:ring-4 focus:ring-accent-primary/10 transition-all text-base text-foreground placeholder-white/20 cyber-panel rounded-none"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-widest text-foreground/40 px-2">Service Type</label>
                                            <div className="relative">
                                                <select name="subject" className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-primary/50 focus:ring-4 focus:ring-accent-primary/10 transition-all appearance-none cursor-pointer text-base text-foreground/80 cyber-panel rounded-none">
                                                    <option value="software" className="bg-[#0A0F1A] text-white">Software Engineering</option>
                                                    <option value="security" className="bg-[#0A0F1A] text-white">Security Consultation</option>
                                                    <option value="data" className="bg-[#0A0F1A] text-white">Data Science Project</option>
                                                    <option value="other" className="bg-[#0A0F1A] text-white">Other / Inquiry</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-widest text-foreground/40 px-2">Your Message</label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Tell me about your project..."
                                                className="w-full bg-white/5 border border-white/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-primary/50 focus:ring-4 focus:ring-accent-primary/10 transition-all text-base text-foreground placeholder-white/20 resize-none cyber-panel rounded-none"
                                                required
                                            ></textarea>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-5 rounded-full bg-white text-black font-bold text-base transition-all flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin h-4 w-4 border-2 border-background border-t-transparent rounded-full"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
