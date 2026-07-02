"use client";

import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let frame = 0;

    function update(e: MouseEvent) {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    }

    window.addEventListener("mousemove", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", update);
    };
  }, []);

  return position;
}