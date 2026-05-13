"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-4 ${className}`}>
      <Image src="/logo.png" alt="Mumo Syntax & Capital Logo" width={64} height={64} className="h-12 w-auto" />
      <h1 className="text-strategy-md font-bold text-primary-fixed uppercase tracking-tighter hidden sm:block">
        MUMO SYNTAX & CAPITAL
      </h1>
    </Link>
  );
}
