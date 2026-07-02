"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingLogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function FloatingLogo({
  className,
  size = 420,
  interactive = true,
}: FloatingLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!interactive) return;

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
    >
      {/* Main Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute rounded-full bg-[#D4AF37]/30 blur-[90px]"
        style={{
          width: size,
          height: size,
        }}
      />

      {/* Outer Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="absolute rounded-full border border-[#D4AF37]/25"
        style={{
          width: size + 60,
          height: size + 60,
        }}
      />

      {/* Middle Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="absolute rounded-full border border-[#D4AF37]/15"
        style={{
          width: size + 20,
          height: size + 20,
        }}
      />

      {/* Pulse Ring */}

      <motion.div
        animate={{
          scale: [1, 1.18],
          opacity: [0.35, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute rounded-full border border-[#D4AF37]/40"
        style={{
          width: size,
          height: size,
        }}
      />

      {/* Floating Logo */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
        >
          <Image
            src="/logos/ds-logo.png"
            alt="D S Group Logo"
            width={size}
            height={size}
            priority
            className="drop-shadow-[0_20px_80px_rgba(212,175,55,.35)]"
          />
        </motion.div>
      </motion.div>

      {/* Decorative Orbs */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-6 top-10 h-4 w-4 rounded-full bg-[#D4AF37]"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute bottom-12 left-8 h-3 w-3 rounded-full bg-[#D4AF37]/80"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent"
      />
    </motion.div>
  );
}