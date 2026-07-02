"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { companies } from "@/data/companies";

import GlassCard from "@/components/shared/glass-card";
import Reveal from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export default function Companies() {
  return (
    <Section
      id="companies"
      spacing="xl"
      background="white"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            OUR COMPANIES
          </span>

          <h2 className="mt-6">
            Building businesses that
            shape the future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl">
            Each company within D S Group is focused on
            solving meaningful problems through innovation,
            ethical leadership, and cutting-edge technology.
          </p>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {companies.map((company, index) => {
          const Icon = company.icon;

          return (
            <Reveal
              key={company.id}
              delay={index * 0.12}
            >
              <GlassCard
                className="flex h-full flex-col"
                variant="light"
              >
                {/* Icon */}

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">
                  <Icon className="h-10 w-10 text-[#D4AF37]" />
                </div>

                {/* Title */}

                <h3 className="text-3xl font-semibold">
                  {company.title}
                </h3>

                {/* Description */}

                <p className="mt-6 flex-1">
                  {company.description}
                </p>

                {/* CTA */}

                <Link
                  href={company.href}
                  className="group mt-10 inline-flex items-center gap-2 font-semibold text-[#D4AF37]"
                >
                  Learn More

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}