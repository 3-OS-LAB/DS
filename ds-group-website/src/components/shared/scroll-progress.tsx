"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700]"
      />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9998] h-1 w-full origin-left blur-md bg-[#D4AF37]/70"
      />
    </>
  );
}