"use client";

import Reveal from "@/components/shared/reveal";
import GlassCard from "@/components/shared/glass-card";
import { Section } from "@/components/shared/section";

import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <Section
      id="industries"
      spacing="xl"
      background="white"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            INDUSTRIES
          </span>

          <h2 className="mt-6">
            Driving innovation
            <br />
            across industries.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl">
            D S Group invests in technologies that solve
            real-world challenges and create long-term
            impact across multiple industries.
          </p>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <Reveal
              key={industry.title}
              delay={index * 0.08}
            >
              <GlassCard
                variant="light"
                className="h-full"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                  <Icon className="h-8 w-8 text-[#D4AF37]" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8">
                  {industry.description}
                </p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}