"use client";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 transition-transform hover:scale-105 duration-300 cursor-pointer ${className}`}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent-primary/30 rounded-lg blur-lg animate-pulse-slow"></div>

                {/* SVG Symbol */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Shape */}
                    <rect
                        x="5"
                        y="5"
                        width="90"
                        height="90"
                        rx="20"
                        className="stroke-accent-primary/20 fill-slate-900/50"
                        strokeWidth="2"
                    />

                    {/* Stylized 'E' and 'M' Monogram */}
                    <path
                        d="M30 35H70M30 50H60M30 65H70"
                        className="stroke-accent-primary"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M30 35V65"
                        className="stroke-accent-primary"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    {/* Simple overlay or extension to suggest 'M' */}
                    <path
                        d="M50 50L70 65M70 35L50 50"
                        className="stroke-accent-secondary"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tighter text-white">
                    EVANS<span className="text-accent-primary">MUMO</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] font-mono text-foreground/40 font-bold uppercase">
                    Web Solutions
                </span>
            </div>
        </div>
    );
}
