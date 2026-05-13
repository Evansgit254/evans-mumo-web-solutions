import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mumo Syntax & Capital | Engineering & Capital",
  description: "Engineering precision meeting industrial-scale strategy. We architect high-performance systems for global capital markets.",
  keywords: ["Mumo Syntax Capital", "Engineering Studio", "Software Architecture", "Evans Mumo"],
  openGraph: {
    title: "Mumo Syntax & Capital",
    description: "Engineering precision meeting industrial-scale strategy.",
    url: "https://mumosyntaxcapital.com",
    siteName: "Mumo Syntax & Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumo Syntax & Capital",
    description: "Engineering precision meeting industrial-scale strategy.",
    creator: "@EvansMumo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable} antialiased bg-background text-on-background selection:bg-primary selection:text-on-primary`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
