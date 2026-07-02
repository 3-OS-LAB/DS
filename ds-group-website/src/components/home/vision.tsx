"use client";

import {
  Lightbulb,
  ShieldCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import GlassCard from "@/components/shared/glass-card";

const values = [
  {
    title: "Innovation",
    description:
      "Building future-ready technologies powered by AI, automation, and intelligent systems.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description:
      "Every decision is guided by transparency, ethics, and long-term trust.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "Delivering premium products with uncompromising quality and engineering standards.",
    icon: Trophy,
  },
  {
    title: "Impact",
    description:
      "Creating sustainable businesses that positively influence people, industries, and society.",
    icon: Sparkles,
  },
];

export default function Vision() {
  return (
    <Section
      id="vision"
      background="black"
      spacing="xl"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            OUR VISION
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Creating value today,
            <br />
            shaping tomorrow.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            We are committed to building companies that
            combine innovation, ethics, and technology to
            create meaningful value for the future.
          </p>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {values.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.1}
          >
            <GlassCard
              variant="dark"
              className="h-full"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                <item.icon className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                {item.description}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}