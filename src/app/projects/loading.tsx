export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="w-12 h-12 rounded-full border-t-2 border-accent-primary animate-spin"></div>
                <p className="text-foreground/40 font-mono text-sm uppercase tracking-widest animate-pulse">Loading Case Study...</p>
            </div>
        </div>
    );
}
