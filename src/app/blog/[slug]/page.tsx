import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogPosts: Record<string, { title: string; category: string; date: string; content: React.ReactNode }> = {
    'securing-nextjs-apis': {
        title: 'Securing Next.js API Routes: Best Practices',
        category: 'Security',
        date: 'Jan 5, 2026',
        content: (
            <div className="space-y-6">
                <p>In the modern web landscape, API routes are becoming the backbone of our applications. However, they are also primary targets for attacks. Here is how I secure mine.</p>
                <h3 className="text-2xl font-bold">1. Rate Limiting</h3>
                <p>Without rate limiting, your API remains vulnerable to DDoS attacks and brute-force attempts. Using tools like Upstash Redis, we can limit requests per IP with ease.</p>
                <h3 className="text-2xl font-bold">2. Input Validation (Zod)</h3>
                <p>Never trust user input. I use Zod to validate the shape of incoming JSON bodies. This ensures that only the expected data types reach my business logic.</p>
                <h3 className="text-2xl font-bold">3. JWT & Session Management</h3>
                <p>Using NextAuth or Iron Session, ensure that every request to a protected route has a valid, non-expired signature.</p>
            </div>
        )
    },
    'mastering-trading-algorithms': {
        title: 'Mastering Trading Algorithms with Python',
        category: 'Engineering',
        date: 'Jan 3, 2026',
        content: (
            <div className="space-y-6">
                <p>Building a trading bot isn't just about the strategy—it's about the resilience of the pipeline. In my V6.1 "Liquid Shield" system, I focused on stability.</p>
                <h3 className="text-2xl font-bold">Strategy Isolation</h3>
                <p>Keep your technical analysis logic separate from your order execution logic. This allows you to backtest your strategy without accidentally triggering live trades.</p>
                <h3 className="text-2xl font-bold">Latency Management</h3>
                <p>In Forex, milliseconds matter. Optimizing Python code with NumPy and efficient API calls to MetaTrader 5 is critical for maintaining an edge.</p>
            </div>
        )
    }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6">
            <article className="container mx-auto max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-sm text-foreground/60 hover:text-accent-primary mb-12 transition-colors">
                    ← Back to Journal
                </Link>

                <header className="mb-16">
                    <div className="flex gap-4 items-center mb-6">
                        <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-mono tracking-widest uppercase">
                            {post.category}
                        </span>
                        <span className="text-foreground/40 text-sm">{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-foreground/80 leading-relaxed">
                    {post.content}
                </div>
            </article>
        </main>
    );
}
