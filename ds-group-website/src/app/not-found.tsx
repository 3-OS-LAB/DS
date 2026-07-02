"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <Image
          src="/logos/ds-logo.png"
          alt="D S Group Logo"
          width={96}
          height={96}
          priority
          className="mx-auto"
        />

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Error 404
        </p>

        <h1 className="mt-6 font-[family:var(--font-playfair)] text-6xl font-bold text-[#111111] md:text-8xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#666666]">
          The page you're looking for doesn't exist, may have
          been moved, or is temporarily unavailable.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-8 py-4 font-semibold transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <Search className="h-5 w-5" />
            Contact Us
          </Link>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-[#D4AF37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to homepage
        </Link>
      </motion.div>
    </main>
  );
}