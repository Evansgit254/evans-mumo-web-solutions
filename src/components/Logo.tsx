"use client";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 transition-transform hover:scale-105 duration-300 cursor-pointer ${className}`}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Sharp Corner Bounds */}
                <div className="absolute inset-0 border border-accent-primary/20 bg-background/50 backdrop-blur-md">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent-primary"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent-primary"></div>
                </div>

                {/* SVG Symbol: Data Core Matrix */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Outer Tech Ring */}
                    <circle cx="50" cy="50" r="40" stroke="hsl(var(--accent-primary))" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow opacity-50" />
                    
                    {/* Inner Hexagon Core */}
                    <path
                        d="M50 20 L76 35 V65 L50 80 L24 65 V35 Z"
                        stroke="hsl(var(--accent-primary))"
                        strokeWidth="2"
                        className="animate-pulse-slow"
                    />

                    {/* Data Lines */}
                    <path
                        d="M50 20 V80 M24 35 L76 65 M24 65 L76 35"
                        stroke="hsl(var(--accent-secondary))"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                    />

                    {/* Core node */}
                    <circle cx="50" cy="50" r="4" className="fill-accent-primary animate-blink" />
                </svg>
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                    MUMO<span className="text-accent-primary">SYNTAX</span>
                </span>
                <span className="text-[9px] tracking-[0.4em] font-mono text-foreground/40 font-bold uppercase mt-1">
                    & CAPITAL ENGINEERING
                </span>
            </div>
        </div>
    );
}
