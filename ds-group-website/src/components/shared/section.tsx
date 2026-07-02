import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full overflow-hidden", {
  variants: {
    background: {
      white: "bg-white text-[#111111]",
      black: "bg-[#0A0A0A] text-white",
      transparent: "bg-transparent",
      muted: "bg-neutral-50 text-[#111111]",
      gradient:
        "bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_40%),#ffffff]",
    },

    spacing: {
      none: "py-0",
      sm: "py-16",
      md: "py-24",
      lg: "py-32",
      xl: "py-40",
    },
  },

  defaultVariants: {
    background: "white",
    spacing: "lg",
  },
});

const containerVariants = cva(
  "mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 2xl:px-20"
);

type SectionElement = HTMLElement;

type AsElement = keyof JSX.IntrinsicElements;

export interface SectionProps
  extends VariantProps<typeof sectionVariants> {
  id?: string;

  children: React.ReactNode;

  className?: string;

  container?: boolean;

  containerClassName?: string;

  as?: AsElement;
}

const Section = React.forwardRef<SectionElement, SectionProps>(
  (
    {
      id,
      children,
      className,
      container = true,
      containerClassName,
      background,
      spacing,
      as = "section",
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref as never}
        id={id}
        className={cn(
          sectionVariants({
            background,
            spacing,
          }),
          className
        )}
      >
        {container ? (
          <div
            className={cn(
              containerVariants(),
              containerClassName
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Section.displayName = "Section";

export { Section, sectionVariants };
export default Section;