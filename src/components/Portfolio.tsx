"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
    const projects = [
        {
            title: "Betting EA System",
            category: "Trading Algorithm",
            tags: ["Python", "MT5", "Data Science"],
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
            slug: "trading-bot",
            external: false
        },
        {
            title: "TradingExpert System",
            category: "Algorithmic Trading Platform",
            tags: ["React", "FastAPI", "PostgreSQL"],
            image: "/images/trading-expert.png",
            slug: "trading-expert",
            external: false
        },
        {
            title: "School Management System",
            category: "Next.js Dashboard",
            tags: ["Next.js", "TypeScript", "Prisma"],
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            slug: "school-management-system",
            external: false
        },
        {
            title: "Parkside Villa",
            category: "Hotel Booking System",
            tags: ["Next.js", "React", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            slug: "parkside-villa",
            external: false
        },
        {
            title: "NRDC Kenya",
            category: "NGO Web Platform",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
            slug: "nrdc-project",
            external: false
        }
    ];

    return (
        <section id="work" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary mb-6 text-sm font-medium border border-accent-primary/20">
                            Featured Work
                        </div>
                        <h3 className="text-5xl md:text-6xl font-black tracking-tight">Selected <span className="text-gradient">Projects</span></h3>
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-foreground/60 text-lg font-light leading-relaxed text-balance"
                    >
                        A showcase of resilient digital products and premium engineering solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden glass-morphism rounded-[2.5rem] shadow-2xl">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                                
                                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex justify-between items-end">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-accent-primary text-[10px] font-black uppercase tracking-[0.3em] mb-1">{project.category}</p>
                                        <h4 className="text-3xl font-black text-white tracking-tighter">{project.title}</h4>
                                    </div>
                                    <Link 
                                        href={`/projects/${project.slug}`} 
                                        className="px-6 py-2.5 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-accent-primary transition-all"
                                    >
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="mt-8 px-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/5 bg-white/5 text-foreground/50">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

