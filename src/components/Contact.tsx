"use client";

import { useState } from "react";

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
        <section id="contact" className="py-24 bg-slate-900/20">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto rounded-[3rem] glass-morphism overflow-hidden flex flex-col md:flex-row shadow-2xl">
                    {/* Info Side */}
                    <div className="md:w-2/5 p-12 bg-accent-primary/10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Let's build <br /><span className="text-gradient">something great</span></h2>
                            <p className="text-foreground/70 mb-10">
                                Ready to take your digital presence to the next level? Get in touch and let's discuss your project.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xl">📧</div>
                                    <div>
                                        <p className="text-xs text-foreground/50 uppercase font-bold tracking-widest">Email Us</p>
                                        <p className="font-semibold italic">evansdev86@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary text-xl">📱</div>
                                    <div>
                                        <p className="text-xs text-foreground/50 uppercase font-bold tracking-widest">Call Us</p>
                                        <p className="font-semibold">+254 703 840 886</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-accent-primary transition-colors">Li</a>
                            <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-accent-primary transition-colors">Tw</a>
                            <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-accent-primary transition-colors">Gh</a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-3/5 p-12 bg-transparent relative">
                        {isSubmitted && (
                            <div className="absolute inset-0 z-10 bg-slate-950/90 flex flex-col items-center justify-center p-12 text-center animate-fade-in backdrop-blur-sm">
                                <div className="w-20 h-20 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary text-4xl mb-6 shadow-glow">✓</div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                <p className="text-foreground/70 mb-8 max-w-sm">
                                    Thank you for reaching out, Evans. We've received your message and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-8 py-3 rounded-xl border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}

                        <form className={`space-y-6 transition-opacity duration-300 ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold opacity-60 ml-1">Full Name</label>
                                    <input required type="text" name="name" placeholder="John Doe" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold opacity-60 ml-1">Email Address</label>
                                    <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold opacity-60 ml-1">Subject</label>
                                <select name="subject" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-primary transition-colors appearance-none">
                                    <option>Web Development</option>
                                    <option>UI/UX Design</option>
                                    <option>SEO Services</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold opacity-60 ml-1">Message</label>
                                <textarea required name="message" rows={4} placeholder="Describe your project..." className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-primary transition-colors resize-none"></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold transition-all duration-300 shadow-lg shadow-accent-primary/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 active:scale-[0.98]'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
