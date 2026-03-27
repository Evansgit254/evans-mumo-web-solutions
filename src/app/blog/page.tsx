"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
    {
        slug: 'securing-nextjs-apis',
        title: 'Securing Next.js API Routes: Best Practices',
        excerpt: 'Learn how to implement rate limiting, authentication, and validation to protect your serverless functions.',
        date: 'Jan 5, 2026',
        category: 'Security'
    },
    {
        slug: 'mastering-trading-algorithms',
        title: 'Mastering Trading Algorithms with Python',
        excerpt: 'A deep dive into building resilient automated trading systems using MetaTrader 5 and technical analysis.',
        date: 'Jan 3, 2026',
        category: 'Engineering'
    },
    {
        slug: 'ai-in-modern-web-apps',
        title: 'The Role of AI in Modern Web Applications',
        excerpt: 'How to leverage LLMs and predictive modeling to create more intelligent user experiences.',
        date: 'Dec 28, 2025',
        category: 'AI & Data Science'
    }
];

export default function BlogListing() {
    return (
        <main className="min-h-screen pt-40 pb-20 px-6">
            <div className="container mx-auto max-w-6xl relative z-10">
                <header className="mb-24 text-center relative py-20 px-8 bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-foreground/80 mb-6 text-sm font-medium border border-white/10">
                            Journal
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1]">Technical <br/><span className="text-gradient-accent">Insights</span></h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                            In-depth articles about software engineering, cybersecurity, and intelligent systems.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-[2.5rem] group relative overflow-hidden flex flex-col h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="p-8 md:p-10 flex flex-col h-full relative z-10 block"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <span className="px-4 py-1.5 rounded-full border border-white/10 text-accent-primary bg-white/5 text-[11px] font-medium tracking-wide">
                                        {post.category}
                                    </span>
                                    <span className="text-foreground/40 text-[11px] font-medium tracking-widest uppercase">{post.date}</span>
                                </div>
                                <h2 className="text-3xl font-black mb-6 tracking-tight group-hover:text-accent-primary transition-colors leading-tight">{post.title}</h2>
                                <p className="text-foreground/60 text-lg font-light leading-relaxed mb-10 flex-grow">{post.excerpt}</p>
                                <div className="text-sm font-bold tracking-wide flex items-center gap-3 transition-all text-foreground/60 group-hover:text-foreground">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

