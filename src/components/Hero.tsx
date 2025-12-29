"use client";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-[128px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in">
                    Software & Security Engineer
                </h2>
                <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
                    We Build <br />
                    <span className="text-gradient glow">Secure Digital Experiences</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
                    Crafting premium, state-of-the-art software solutions with a security-first approach.
                    Expertise in Python, Java, Django, and Certified Data Science.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="#work"
                        className="px-8 py-4 rounded-full bg-accent-primary text-white font-semibold hover:bg-accent-primary/80 transition-all duration-300 w-full md:w-auto text-center glow"
                    >
                        View Our Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full glass-morphism text-white font-semibold hover:border-accent-primary transition-all duration-300 w-full md:w-auto text-center"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Hero Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
