import Link from 'next/link';

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
        <main className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Technical Journal</h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        In-depth articles about software engineering, cybersecurity, and intelligent systems.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group p-8 rounded-[2rem] glass-morphism border border-white/5 hover:border-accent-primary/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-accent-primary font-mono text-xs uppercase tracking-widest">{post.category}</span>
                                <span className="text-foreground/40 text-xs">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-accent-primary transition-colors">{post.title}</h2>
                            <p className="text-foreground/60 leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                            <div className="text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Read Article
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
