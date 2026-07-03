"use client";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroScrollIndicator from "./hero-scroll-indicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      <HeroBackground />

      <HeroContent />

      <HeroScrollIndicator />
    </section>
  );
}