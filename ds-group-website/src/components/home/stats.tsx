"use client";

import Reveal from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import GlassCard from "@/components/shared/glass-card";
import AnimatedCounter from "@/components/shared/animated-counter";

import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <Section
      spacing="xl"
      background="white"
    >
      <Reveal>
        <div className="rounded-[40px] bg-[#0A0A0A] px-8 py-16 md:px-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.1}
              >
                <GlassCard
                  variant="dark"
                  className="h-full border-white/10 bg-white/[0.03]"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block text-5xl font-bold text-[#D4AF37]"
                  />

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {stat.label}
                  </h3>

                  <p className="mt-3 text-white/70">
                    {stat.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}