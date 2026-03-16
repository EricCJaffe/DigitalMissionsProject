import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Missions Project — Accessible Technology for Churches & Nonprofits",
  description: "Enterprise-grade automation, custom applications, AI training, and IT strategy at discounted rates for churches, nonprofits, and faith-based organizations. Grant funding available."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}><Header />{children}<Footer /></body></html>;
}
