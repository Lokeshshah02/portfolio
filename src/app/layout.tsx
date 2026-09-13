import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Lokesh Kumar Shah | Frontend Engineer",
  description: "Frontend Engineer with 2+ years of experience building enterprise-grade web applications using React.js, Next.js, Angular, and TypeScript.",
  openGraph: {
    title: "Lokesh Kumar Shah | Frontend Engineer",
    description: "Frontend Engineer specializing in React, Next.js, Angular & TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
