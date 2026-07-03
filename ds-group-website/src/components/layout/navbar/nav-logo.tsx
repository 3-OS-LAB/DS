"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "./navigation";
import type { NavItem } from "./types";
export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logos/ds-logo.png"
        alt="D S Group"
        width={42}
        height={42}
        priority
      />

      <div>
        <h2 className="font-playfair text-lg font-semibold text-white">
          D S Group
        </h2>

        <p className="text-xs tracking-[0.35em] text-[#D4AF37] uppercase">
          Excellence
        </p>
      </div>
    </Link>
  );
}