"use client";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 transition-transform hover:scale-105 duration-300 cursor-pointer ${className}`}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent-primary/30 rounded-lg blur-lg animate-pulse-slow"></div>

                {/* SVG Symbol: Hexagonal Forge Shield */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--accent-primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent-secondary))" />
                        </linearGradient>
                    </defs>
                    
                    {/* Hexagonal Frame */}
                    <path
                        d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z"
                        stroke="url(#shield-gradient)"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        className="animate-pulse-slow"
                    />

                    {/* Technical "MF" Blueprint */}
                    <path
                        d="M30 70 V30 L50 45 L70 30 V45 M50 45 V75 M50 55 H70 M50 68 H65"
                        stroke="url(#shield-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_15px_hsla(var(--accent-primary)/0.6)]"
                    />

                    {/* Corner accents */}
                    <circle cx="50" cy="5" r="1.5" className="fill-accent-primary" />
                    <circle cx="90" cy="25" r="1.5" className="fill-accent-primary" />
                    <circle cx="10" cy="25" r="1.5" className="fill-accent-primary" />
                </svg>
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                    MUMO<span className="text-accent-primary">FORGE</span>
                </span>
                <span className="text-[9px] tracking-[0.4em] font-mono text-foreground/40 font-bold uppercase mt-1">
                    Software & Security
                </span>
            </div>
        </div>
    );
}
