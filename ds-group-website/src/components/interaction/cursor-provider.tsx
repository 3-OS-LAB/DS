"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

interface CursorContextType {
  x: number;
  y: number;
  hovered: boolean;
  setHovered: (value: boolean) => void;
  isTouchDevice: boolean;
}

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hovered, setHovered] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, [isTouchDevice]);

  const value = useMemo(
    () => ({
      x,
      y,
      hovered,
      setHovered,
      isTouchDevice,
    }),
    [x, y, hovered, isTouchDevice]
  );

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error(
      "useCursor must be used inside CursorProvider"
    );
  }

  return context;
}