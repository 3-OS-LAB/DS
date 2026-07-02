"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  strength?: number;
}

export default function MagneticCard({
  children,
  strength = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 260,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 260,
    damping: 20,
  });

  function move(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const mx =
      e.clientX - rect.left - rect.width / 2;

    const my =
      e.clientY - rect.top - rect.height / 2;

    x.set(mx * strength);
    y.set(my * strength);
  }

  function leave() {
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
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </motion.div>
  );
}