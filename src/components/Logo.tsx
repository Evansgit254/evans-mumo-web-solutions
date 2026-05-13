"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex flex-col items-center gap-1 ${className}`}>
      <Image src="/logo.png" alt="Mumo Syntax & Capital Logo" width={64} height={64} className="h-10 w-auto" />
      <h1 className="text-[10px] md:text-xs font-bold text-primary-fixed uppercase tracking-[0.2em] text-center">
        MUMO SYNTAX & CAPITAL
      </h1>
    </Link>
  );
}
