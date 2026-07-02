"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUp, Mail } from "lucide-react";

import { footerNavigation } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 xl:px-16">
        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <Image
                src="/logos/ds-logo.png"
                alt="D S Group"
                width={56}
                height={56}
              />

              <div>
                <h3 className="font-[family:var(--font-playfair)] text-2xl">
                  D S Group
                </h3>

                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">
                  Establishing Righteousness
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-md leading-8 text-white/70">
              Building ethical technology companies across Artificial
              Intelligence, Cybersecurity, Enterprise Software,
              Creator Economy, and Future Ventures.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="mailto:info@dsgroup.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}

          <div>
            <h4 className="mb-6 font-semibold">
              Company
            </h4>

            <ul className="space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#D4AF37]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}

          <div>
            <h4 className="mb-6 font-semibold">
              Companies
            </h4>

            <ul className="space-y-4">
              {footerNavigation.companies.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#D4AF37]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h4 className="mb-6 font-semibold">
              Legal
            </h4>

            <ul className="space-y-4">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#D4AF37]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} D S Group of Companies. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}