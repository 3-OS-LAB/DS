"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export default function Cursor() {
  const { x, y } = useMousePosition();

  const springX = useSpring(x, {
    stiffness: 350,
    damping: 28,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 350,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    springX.set(x);
    springY.set(y);
  }, [x, y, springX, springY]);

  return (
    <>
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none fixed z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]"
      />

      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none fixed z-[10000] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]"
      />
    </>
  );
}