"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { use } from 'react';

const blogPosts: Record<string, { title: string; category: string; date: string; content: React.ReactNode }> = {
    'securing-nextjs-apis': {
        title: 'Securing Next.js API Routes: Best Practices',
        category: 'Security',
        date: 'Jan 5, 2026',
        content: (
            <div className="space-y-10">
                <p className="text-xl font-light leading-relaxed text-foreground/70 italic border-l-4 border-accent-primary pl-8 py-2">
                    In the modern web landscape, API routes are becoming the backbone of our applications. However, they are also primary targets for attacks.
                </p>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">1. Rate Limiting</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Without rate limiting, your API remains vulnerable to DDoS attacks and brute-force attempts. Using tools like Upstash Redis, we can limit requests per IP with ease.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">2. Input Validation (Zod)</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Never trust user input. I use Zod to validate the shape of incoming JSON bodies. This ensures that only the expected data types reach my business logic.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">3. JWT & Session Management</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Using NextAuth or Iron Session, ensure that every request to a protected route has a valid, non-expired signature.
                    </p>
                </div>
            </div>
        )
    },
    'mastering-trading-algorithms': {
        title: 'Mastering Trading Algorithms with Python',
        category: 'Engineering',
        date: 'Jan 3, 2026',
        content: (
            <div className="space-y-10">
                <p className="text-xl font-light leading-relaxed text-foreground/70 italic border-l-4 border-accent-secondary pl-8 py-2">
                    Building a trading bot isn't just about the strategy—it's about the resilience of the pipeline. In my V6.1 "Liquid Shield" system, I focused on stability.
                </p>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">Strategy Isolation</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Keep your technical analysis logic separate from your order execution logic. This allows you to backtest your strategy without accidentally triggering live trades.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">Latency Management</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        In Forex, milliseconds matter. Optimizing Python code with NumPy and efficient API calls to MetaTrader 5 is critical for maintaining an edge.
                    </p>
                </div>
            </div>
        )
    },
    'ai-in-modern-web-apps': {
        title: 'The Role of AI in Modern Web Applications',
        category: 'AI & Data Science',
        date: 'Dec 28, 2025',
        content: (
            <div className="space-y-10">
                <p className="text-xl font-light leading-relaxed text-foreground/70 italic border-l-4 border-accent-primary pl-8 py-2">
                    AI is no longer just a buzzword; it's a fundamental shift in how we build user experiences. From predictive modeling to LLM integrations, the possibilities are vast.
                </p>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">Predictive User Interfaces</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Imagine an interface that anticipates a user's next action based on historical data. As a Data Scientist, I leverage behavioral patterns to optimize UI components for higher conversion.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tight">LLM Orchestration</h3>
                    <p className="text-lg font-light text-foreground/60 leading-relaxed">
                        Integrating large language models requires careful prompt engineering and secure API handling. Building "agentic" features into web apps is the next frontier of software engineering.
                    </p>
                </div>
            </div>
        )
    }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-40 pb-32 px-6 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            <article className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16"
                >
                    <Link href="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 hover:text-accent-primary transition-all gap-4 group">
                        <span className="w-10 h-px bg-foreground/10 group-hover:w-16 transition-all group-hover:bg-accent-primary"></span>
                        Back to Journal
                    </Link>
                </motion.div>

                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 items-center justify-center mb-10"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 text-accent-primary bg-white/5 text-xs font-medium tracking-wide">
                            {post.category}
                        </span>
                        <span className="text-foreground/40 text-xs font-medium tracking-widest uppercase">{post.date}</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-balance"
                    >
                        {post.title}
                    </motion.h1>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="max-w-none text-foreground leading-relaxed"
                >
                    {post.content}
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 bg-white/5 border border-white/10 rounded-none text-center relative overflow-hidden group transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h4 className="text-3xl font-black mb-4 tracking-tight">Have a project in mind?</h4>
                        <p className="text-foreground/60 text-lg font-light mb-10 max-w-md mx-auto">Let's collaborate on building something secure and scalable.</p>
                        <Link href="/#contact" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1">Get in Touch</Link>
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
