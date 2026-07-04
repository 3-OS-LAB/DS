"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handler);

    return () =>
      window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <DesktopNav />
        <MobileNav />
      </div>
    </motion.header>
  );
}