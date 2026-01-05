import { notFound } from 'next/navigation';
import Link from 'next/link';

// Dummy data for case studies
const projects: Record<string, { title: string; subtitle: string; challenge: string; solution: string; stack: string[] }> = {
    'nrdc-project': {
        title: 'NRDC Marketplace',
        subtitle: 'Full-Stack Web Platform & Resource Hub',
        challenge: 'The Natural Resources Defense Council required a scalable, secure digital marketplace to manage resources and connect stakeholders effectively across their environmental initiatives.',
        solution: 'Architected a robust Full-Stack platform using Next.js and TypeScript. Implemented secure authentication flows, role-based access control, and a high-performance database schema to ensure reliability under heavy concurrent usage.',
        stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    'trading-bot': {
        title: 'Algorithmic Trading Bot V6.0',
        subtitle: 'Automated Forex Trading System',
        challenge: 'Manual trading was susceptible to emotional bias and unable to react to micro-market movements, leading to inconsistent returns in high-volatility environments.',
        solution: 'Developed "Liquid Shield" V6.1 algorithms using Python and MetaTrader 5. The system analyses 50+ technical indicators in real-time, executing trades with sub-second latency and strict risk management rules.',
        stack: ['Python', 'MetaTrader 5', 'Pandas', 'NumPy', 'Technical Analysis']
    },
    'school-management-system': {
        title: 'School Management System',
        subtitle: 'Comprehensive Educational ERP',
        challenge: 'Educational institutions struggled with fragmented data, manual fee tracking, and inefficient communication between administration, teachers, and parents.',
        solution: 'Built a multi-tenant ERP platform using Next.js. Features include automated fee processing, real-time attendance tracking, academic reporting, and a secure parent-teacher communication portal.',
        stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma']
    }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link href="/" className="inline-flex items-center text-sm text-foreground/60 hover:text-accent-primary mb-12 transition-colors">
                    ← Back to Home
                </Link>

                <header className="mb-16">
                    <p className="text-accent-primary font-mono tracking-widest uppercase text-sm mb-4">Case Study</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-2xl text-foreground/70">{project.subtitle}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-red-400">⚠️</span> The Challenge
                            </h2>
                            <p className="text-lg leading-relaxed text-foreground/80">{project.challenge}</p>
                        </section>

                        <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-green-400">💡</span> The Solution
                            </h2>
                            <p className="text-lg leading-relaxed text-foreground/80">{project.solution}</p>
                        </section>
                    </div>

                    <div className="md:col-span-1">
                        <div className="p-8 rounded-[2rem] bg-slate-900 border border-white/10 sticky top-24">
                            <h3 className="font-mono text-sm uppercase tracking-widest text-accent-primary mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
