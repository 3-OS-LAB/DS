import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative overflow-hidden rounded-3xl transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border border-neutral-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl",

        premium:
          "border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 shadow-lg hover:-translate-y-2 hover:shadow-2xl",

        glass:
          "border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg",

        dark:
          "border border-white/10 bg-[#0A0A0A] text-white hover:border-[#D4AF37]/40",

        gold:
          "border border-[#D4AF37]/20 bg-gradient-to-br from-[#FFF9E6] to-white shadow-lg hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,.25)]",
      },

      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },

      hover: {
        true: "cursor-pointer",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "lg",
      hover: true,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<
  HTMLDivElement,
  CardProps
>(({ className, variant, padding, hover, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          padding,
          hover,
        }),
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";