"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="D S Group Home"
    >
      <motion.div
        whileHover={{ rotate: 6, scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/logos/ds-logo.png"
          alt="D S Group"
          width={48}
          height={48}
          priority
        />
      </motion.div>

      <div>
        <h2 className="font-playfair text-xl font-semibold text-white transition-colors group-hover:text-[#D4AF37]">
          D S Group
        </h2>

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
          Establishing Righteousness
        </p>
      </div>
    </Link>
  );
}