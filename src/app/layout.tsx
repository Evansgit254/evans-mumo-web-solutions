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
  title: "Mumo Forge - Software & Security Engineering",
  description: "Boutique software engineering and security studio specialized in robust backend systems and AI solutions.",
  keywords: ["Mumo Forge", "Software Engineering", "Security Engineering", "Data Science", "Evans Mumo"],
  openGraph: {
    title: "Mumo Forge - Software & Security Engineering",
    description: "Forging secure, efficient, and intelligent digital systems.",
    url: "https://mumoforge.com",
    siteName: "Mumo Forge Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumo Forge - Software & Security Engineering",
    description: "Forging secure, efficient, and intelligent digital systems.",
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

