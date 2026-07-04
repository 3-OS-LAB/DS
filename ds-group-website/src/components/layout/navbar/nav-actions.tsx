

"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { navigation } from "./navigation";
import type { NavItem } from "./types";
import { Button } from "@/components/ui/button";

export default function NavActions() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Search"
        className="rounded-xl border border-white/10 p-3 text-white transition hover:border-[#D4AF37]"
      >
        <Search className="h-5 w-5" />
      </button>

      <Link href="/contact">
        <Button>
          Get In Touch
        </Button>
      </Link>
    </div>
  );
}