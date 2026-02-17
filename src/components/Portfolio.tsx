"use client";
import Link from "next/link";

export default function Portfolio() {
    const projects = [
        {
            title: "Betting EA System",
            category: "Trading Algorithm",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
            link: "/projects/trading-bot",
            external: false
        },
        {
            title: "TradingExpert System",
            category: "Algorithmic Trading Platform",
            image: "/images/trading-expert.png",
            link: "https://github.com/Evansgit254/evans-mumo-web-solutions.git",
            external: true
        },
        {
            title: "School Management System",
            category: "Next.js Dashboard",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/projects/school-management-system",
            external: false
        },
        {
            title: "NRDC Marketplace",
            category: "Full-Stack Web Platform",
            image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://nrdc.africa",
            external: true
        }
    ];

    return (
        <section id="work" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-accent-primary font-mono tracking-widest uppercase mb-4 text-sm">Case Studies</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Selected Works</h3>
                    </div>
                    <p className="max-w-md text-foreground/60">
                        A showcase of our latest digital products and web solutions designed to solve complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                            target={project.external ? "_blank" : undefined}
                            rel={project.external ? "noopener noreferrer" : undefined}
                            className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer bg-slate-800 block"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-accent-primary text-sm font-semibold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 underline decoration-2 underline-offset-4">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                                <div className="inline-flex items-center gap-2 text-white font-semibold group/link">
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
