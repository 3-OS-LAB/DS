"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-[32px]",
    "border",
    "transition-all",
    "duration-500",
    "ease-out",
    "will-change-transform",
  ].join(" "),
  {
    variants: {
      variant: {
        light: [
          "bg-white/80",
          "backdrop-blur-xl",
          "border-neutral-200",
          "shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
          "hover:-translate-y-2",
          "hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)]",
        ].join(" "),

        dark: [
          "bg-white/[0.05]",
          "backdrop-blur-xl",
          "border-white/10",
          "text-white",
          "hover:-translate-y-2",
          "hover:border-[#D4AF37]/30",
        ].join(" "),

        gold: [
          "bg-gradient-to-br",
          "from-white",
          "to-[#fffaf0]",
          "border-[#D4AF37]/25",
          "shadow-[0_20px_60px_rgba(212,175,55,0.12)]",
          "hover:-translate-y-2",
          "hover:shadow-[0_30px_80px_rgba(212,175,55,0.25)]",
        ].join(" "),
      },

      padding: {
        sm: "p-6",
        md: "p-8",
        lg: "p-10",
        xl: "p-12",
      },
    },

    defaultVariants: {
      variant: "light",
      padding: "lg",
    },
  }
);

export interface GlassCardProps
  extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof glassCardVariants> {
  hover?: boolean;
  children?: React.ReactNode;
}

export function GlassCard({
  children,
  className,
  variant,
  padding,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        glassCardVariants({
          variant,
          padding,
        }),
        className
      )}
      {...props}
    >
      {/* Gold glow */}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
          "group-hover:opacity-100"
        )}
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-80 w-80",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-full",
            "bg-[#D4AF37]/10",
            "blur-3xl"
          )}
        />
      </div>

      {/* Animated border */}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[32px]",
          "ring-1 ring-transparent",
          "transition-all duration-500",
          "group-hover:ring-[#D4AF37]/30"
        )}
      />

      {/* Shine */}

      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2",
          "bg-gradient-to-r",
          "from-transparent",
          "via-white/40",
          "to-transparent",
          "-skew-x-12",
          "opacity-0",
          "transition-all duration-1000",
          "group-hover:left-[140%]",
          "group-hover:opacity-100"
        )}
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;