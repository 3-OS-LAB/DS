"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  iconOnly?: boolean;
}

export default function Logo({
  className,
  showSubtitle = true,
  iconOnly = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="D S Group of Companies"
      className={cn(
        "inline-flex items-center gap-4",
        className
      )}
    >
      <motion.div
        whileHover={{
          rotate: 2,
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl"
      >
        {/* Gold Glow */}

        <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/15 blur-xl" />

        <Image
          src="/logos/ds-logo.png"
          alt="D S Group Logo"
          width={56}
          height={56}
          priority
          className="relative z-10 object-contain"
        />
      </motion.div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-[family:var(--font-playfair)] text-xl font-semibold tracking-tight text-[#111111]">
            D S Group
          </span>

          {showSubtitle && (
            <span className="mt-1 text-xs uppercase tracking-[0.22em] text-[#666666]">
              Establishing Righteousness
            </span>
          )}
        </div>
      )}
    </Link>
  );
}