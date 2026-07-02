import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ScrollProgress from "@/components/shared/scroll-progress";
import ScrollToTop from "@/components/shared/scroll-to-top";

import Cursor from "@/components/interaction/cursor";
import { CursorProvider } from "@/components/interaction/cursor-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "D S Group of Companies",
  description: "Establishing Righteousness to Build Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${playfair.variable} antialiased`}
      >
        <CursorProvider>
          <Cursor />

          <ScrollProgress />

          <ScrollToTop />

          <Navbar />

          <main className="pt-20">
            {children}
          </main>

          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}