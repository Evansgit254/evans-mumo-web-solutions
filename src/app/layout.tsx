import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mumo Syntax & Capital | Engineering & Algorithmic Trading",
  description: "Specialized engineering studio focusing on high-frequency algorithms, resilient web systems, and data-driven solutions.",
  keywords: ["Mumo Syntax & Capital", "Quantitative Engineering", "Algorithmic Trading", "Full-Stack Development", "Evans Mumo"],
  openGraph: {
    title: "Mumo Syntax & Capital",
    description: "Architecting high-performance algorithms and resilient web solutions.",
    url: "https://mumosyntaxcapital.com",
    siteName: "Mumo Syntax & Capital Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumo Syntax & Capital",
    description: "Architecting high-performance algorithms and resilient web solutions.",
    creator: "@EvansMumo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-accent-primary/30 selection:text-white`}
      >

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

