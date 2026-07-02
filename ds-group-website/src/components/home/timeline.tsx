"use client";

import { timeline } from "@/data/timeline";
import Reveal from "@/components/shared/reveal";
import GlassCard from "@/components/shared/glass-card";
import { Section } from "@/components/shared/section";

export default function Timeline() {
  return (
    <Section
      id="timeline"
      spacing="xl"
      background="white"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            OUR JOURNEY
          </span>

          <h2 className="mt-6">
            Building the future,
            <br />
            one milestone at a time.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl">
            Our roadmap reflects our commitment to innovation,
            ethical leadership, and building sustainable
            technology businesses.
          </p>
        </div>
      </Reveal>

      {/* Desktop Timeline */}

      <div className="relative mt-24 hidden lg:block">
        {/* Gold Line */}

        <div className="absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#E8C55A] to-[#D4AF37]" />

        <div className="grid grid-cols-4 gap-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.12}
              >
                <div className="relative">
                  {/* Dot */}

                  <div className="absolute left-1/2 top-8 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,.5)]" />

                  <div className="pt-20">
                    <GlassCard className="h-full text-center">
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                        <Icon className="h-8 w-8 text-[#D4AF37]" />
                      </div>

                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                        {item.year}
                      </span>

                      <h3 className="mt-4 text-2xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-4">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}

      <div className="mt-20 space-y-8 lg:hidden">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              key={item.title}
              delay={index * 0.08}
            >
              <GlassCard>
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                    <Icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>

                  <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}