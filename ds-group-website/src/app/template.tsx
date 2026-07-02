"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(12px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(8px)",
  },
};

const pageTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Template({
  children,
}: TemplateProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}