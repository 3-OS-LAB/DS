"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <motion.main
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-[650px] w-[650px] rounded-full bg-[#D4AF37]/10 blur-[150px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-52 w-52 rounded-full border border-[#D4AF37]/25"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute h-44 w-44 rounded-full border border-[#D4AF37]/20"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        />

        {/* Pulse Ring */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border border-[#D4AF37]/40"
          animate={{
            scale: [1, 1.18],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        />

        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20"
        >
          <Image
            src="/logos/ds-logo.png"
            alt="D S Group Logo"
            width={120}
            height={120}
            priority
            className="drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
          />
        </motion.div>

        {/* Company Name */}
        <motion.h1
          className="mt-16 font-[family:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[#111111]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          D S Group of Companies
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-center text-sm uppercase tracking-[0.35em] text-[#B8860B]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Establishing Righteousness to Build Excellence
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-neutral-200">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-5 text-sm text-neutral-500"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          Preparing your experience...
        </motion.p>
      </div>
    </motion.main>
  );
}