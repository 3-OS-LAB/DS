"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

import Logo from "./logo";
import NavLink from "./nav-link";
import MobileNav from "./mobile-nav";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",

          scrolled
            ? "border-b border-neutral-200 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 md:px-10 xl:px-16 2xl:px-20">
          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main Navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center gap-2 rounded-full",
                "bg-gradient-to-r from-[#D4AF37] to-[#B8860B]",
                "px-6 py-3",
                "font-medium text-white",
                "shadow-lg",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              Get In Touch

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile */}

          <MobileNav />
        </div>
      </motion.header>
    </AnimatePresence>
  );
}