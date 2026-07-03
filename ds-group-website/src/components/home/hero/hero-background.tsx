"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[140px]"
      />

      {/* Top Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Bottom Blur */}
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
    </div>
  );
}