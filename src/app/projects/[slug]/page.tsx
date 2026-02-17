import { notFound } from 'next/navigation';
import Link from 'next/link';

// Dummy data for case studies
const projects: Record<string, { title: string; subtitle: string; challenge: string; solution: string; stack: string[]; liveUrl?: string; githubUrl?: string }> = {
    'nrdc-project': {
        title: 'NRDC Marketplace',
        subtitle: 'Full-Stack Web Platform & Resource Hub',
        challenge: 'The Natural Resources Defense Council required a scalable, secure digital marketplace to manage resources and connect stakeholders effectively across their environmental initiatives.',
        solution: 'Architected a robust Full-Stack platform using Next.js and TypeScript. Implemented secure authentication flows, role-based access control, and a high-performance database schema to ensure reliability under heavy concurrent usage.',
        stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        liveUrl: 'https://nrdc.africa'
    },
    'trading-expert': {
        title: 'TradingExpert System',
        subtitle: 'Advanced Automated Trading & Analytics',
        challenge: 'Traders needed a unified system to handle complex multi-market analysis, incorporating V8.1 logic and real-time execution, which was difficult to achieve with disparate tools.',
        solution: 'Developed a comprehensive platform integrating Python-based analysis with AI confirmation and precise execution capabilities, ensuring robust performance across various market conditions.',
        stack: ['Python', 'Pine Script', 'React', 'FastAPI'],
        liveUrl: 'http://34.77.4.35:5000/',
        githubUrl: 'https://github.com/Evansgit254/smc-scalp-signals.git'
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
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-primary text-black rounded-full font-bold hover:scale-105 transition-transform text-center"
                                    >
                                        Visit Live Site
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all border border-white/10 text-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        View Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
