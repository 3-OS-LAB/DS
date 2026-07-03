"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white hover:shadow-[0_20px_40px_rgba(212,175,55,.35)]",

        secondary:
          "border border-neutral-200 bg-white text-[#111111] hover:border-[#D4AF37] hover:text-[#D4AF37]",

        outline:
          "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white",

        ghost:
          "text-[#111111] hover:bg-[#D4AF37]/10",

        dark:
          "bg-[#111111] text-white hover:bg-black",
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6 text-base",

        lg: "h-14 px-8 text-lg",

        xl: "h-16 px-10 text-xl",

        icon: "h-12 w-12",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;

  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={
          !disabled && !loading
            ? {
                y: -3,
                scale: 1.01,
              }
            : undefined
        }
        whileTap={
          !disabled && !loading
            ? {
                scale: 0.98,
              }
            : undefined
        }
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };