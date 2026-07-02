"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export default function CTA() {
  return (
    <Section
      id="cta"
      background="black"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Gold Glow */}

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        {/* Decorative Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative Dots */}

        <div className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-[#D4AF37]" />
        <div className="absolute left-[70%] top-[40%] h-3 w-3 rounded-full bg-[#D4AF37]" />
        <div className="absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-[#D4AF37]" />
        <div className="absolute bottom-[25%] left-[40%] h-2 w-2 rounded-full bg-[#D4AF37]" />
        <div className="absolute bottom-[18%] right-[35%] h-3 w-3 rounded-full bg-[#D4AF37]" />
      </div>

      <Reveal>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            LET'S BUILD THE FUTURE
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            Have a vision?
            <br />
            Let's make it a reality.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Whether you're building the next breakthrough
            startup, exploring strategic partnerships, or
            investing in innovation, we'd love to hear from
            you.
          </p>

          <div className="mt-14">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(212,175,55,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(212,175,55,.35)]"
            >
              Get In Touch

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}