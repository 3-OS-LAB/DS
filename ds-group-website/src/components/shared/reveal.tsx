"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "none";

interface RevealProps {
  children: ReactNode;

  className?: string;

  delay?: number;

  duration?: number;

  once?: boolean;

  amount?: number;

  direction?: RevealDirection;

  stagger?: boolean;

  staggerChildren?: number;

  blur?: boolean;
}

const getVariants = (
  direction: RevealDirection,
  blur: boolean
): Variants => {
  switch (direction) {
    case "up":
      return {
        hidden: {
          opacity: 0,
          y: 50,
          filter: blur ? "blur(12px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
      };

    case "down":
      return {
        hidden: {
          opacity: 0,
          y: -50,
          filter: blur ? "blur(12px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
      };

    case "left":
      return {
        hidden: {
          opacity: 0,
          x: 50,
          filter: blur ? "blur(12px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        },
      };

    case "right":
      return {
        hidden: {
          opacity: 0,
          x: -50,
          filter: blur ? "blur(12px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        },
      };

    case "scale":
      return {
        hidden: {
          opacity: 0,
          scale: 0.92,
          filter: blur ? "blur(10px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      };

    default:
      return {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      };
  }
};

export default function Reveal({
  children,
  className,

  direction = "up",

  delay = 0,

  duration = 0.8,

  once = true,

  amount = 0.2,

  stagger = false,

  staggerChildren = 0.12,

  blur = true,
}: RevealProps) {
  const variants = getVariants(direction, blur);

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger
          ? staggerChildren
          : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}