"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2"
    >
      <Sparkles className="h-4 w-4 text-[#D4AF37]" />

      <span className="text-sm font-medium text-[#D4AF37]">
        Enterprise Technology Group
      </span>
    </motion.div>
  );
}