import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evans Mumo - Software & Security Engineer",
  description: "Portfolio of Evans Mumo, a Software & Security Engineer specializing in robust backend systems, secure SDLC, and AI solutions.",
  keywords: ["Software Engineer", "Security Engineer", "Data Scientist", "Evans Mumo", "Portfolio", "Web Development", "Next.js", "Cybersecurity", "AI"],
  openGraph: {
    title: "Evans Mumo - Software & Security Engineer",
    description: "Building secure, efficient, and intelligent digital systems.",
    url: "https://evansmumo.com", // Replace with actual URL if known, or generic
    siteName: "Evans Mumo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Mumo - Software & Security Engineer",
    description: "Building secure, efficient, and intelligent digital systems.",
    creator: "@EvansMumo", // diligent placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
