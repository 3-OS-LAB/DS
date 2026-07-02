"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ReactNode,
  useRef,
} from "react";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 0.35,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 22,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 22,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const mouseX =
      e.clientX - rect.left - rect.width / 2;

    const mouseY =
      e.clientY - rect.top - rect.height / 2;

    x.set(mouseX * strength);
    y.set(mouseY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}