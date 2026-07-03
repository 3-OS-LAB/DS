"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.3, 1, 0.3],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="h-8 w-8 text-[#D4AF37]" />
    </motion.div>
  );
}