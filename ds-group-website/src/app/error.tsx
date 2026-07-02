"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCw, ArrowLeft } from "lucide-react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />
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
        }}
        className="relative z-10 mx-auto max-w-xl text-center"
      >
        <Image
          src="/logos/ds-logo.png"
          alt="D S Group Logo"
          width={90}
          height={90}
          className="mx-auto"
          priority
        />

        <h1 className="mt-8 font-[family:var(--font-playfair)] text-5xl font-bold text-[#111111]">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#666666]">
          An unexpected error occurred while loading this
          page. Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-8 py-4 font-medium transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left">
            <summary className="cursor-pointer font-medium">
              Error Details
            </summary>

            <pre className="mt-4 overflow-auto text-xs text-red-600">
              {error.message}
            </pre>
          </details>
        )}
      </motion.div>
    </main>
  );
}