import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        gold: "bg-[#D4AF37]/10 text-[#D4AF37]",

        dark: "bg-[#111111] text-white",

        outline:
          "border border-[#D4AF37] text-[#D4AF37]",

        muted:
          "bg-neutral-100 text-neutral-700",
      },
    },

    defaultVariants: {
      variant: "gold",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}