"use client";

import { motion } from "framer-motion";

import HeroActions from "./hero-actions";
import HeroBadge from "./hero-badge";
import HeroStats from "./hero-stats";

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl text-center">
      <HeroBadge />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
      >
        Building the Future Through{" "}
        <span className="text-[#D4AF37]">
          Technology
        </span>{" "}
        and{" "}
        <span className="text-[#D4AF37]">
          Innovation
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300"
      >
        D S Group of Companies creates ethical, scalable,
        and future-focused businesses spanning Artificial
        Intelligence, Cybersecurity, Enterprise Software,
        Creator Economy, and Emerging Technologies.
      </motion.p>

      <HeroActions />

      <HeroStats />
    </div>
  );
}