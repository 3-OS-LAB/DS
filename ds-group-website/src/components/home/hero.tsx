"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Globe2, Cpu } from "lucide-react";

import FloatingLogo from "@/components/shared/floating-logo";
import Reveal from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

const features = [
  {
    icon: Cpu,
    title: "AI First",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade",
  },
  {
    icon: Globe2,
    title: "Global Vision",
  },
  {
    icon: Sparkles,
    title: "Ethical by Design",
  },
];

export default function Hero() {
  return (
    <Section
      id="hero"
      background="gradient"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      </div>

      <div className="relative grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <Reveal direction="up">
          <div>
            <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              ESTABLISHING RIGHTEOUSNESS
            </span>

            <h1 className="mt-8 font-[family:var(--font-playfair)] text-5xl leading-none text-[#111111] md:text-7xl xl:text-8xl">
              BUILDING
              <br />
              <span className="text-[#D4AF37]">
                EXCELLENCE.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#666666]">
              Building visionary companies across Artificial
              Intelligence, Cybersecurity, Enterprise
              Software, Creator Economy, and Future
              Technologies with ethics at the core.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/companies"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-7 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Companies

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-medium transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Contact Us
              </Link>
            </div>

            {/* Features */}

            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-xl bg-[#D4AF37]/10 p-3 text-[#D4AF37]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}

        <Reveal
          direction="scale"
          delay={0.2}
        >
          <div className="flex justify-center lg:justify-end">
            <FloatingLogo size={420} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}