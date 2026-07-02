"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ReactNode,
  useRef,
} from "react";

interface Props {
  children: ReactNode;
}

export default function Magnetic({
  children,
}: Props) {
  const ref =
    useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);

  const springY = useSpring(y);

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect =
      ref.current?.getBoundingClientRect();

    if (!rect) return;

    const mx =
      e.clientX -
      rect.left -
      rect.width / 2;

    const my =
      e.clientY -
      rect.top -
      rect.height / 2;

    x.set(mx * 0.15);

    y.set(my * 0.15);
  }

  function reset() {
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
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}