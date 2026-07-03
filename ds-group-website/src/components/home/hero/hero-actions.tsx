"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link href="/companies">
        <Button className="min-w-[220px]">
          Explore Companies

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>

      <Link href="/contact">
        <Button
          variant="outline"
          className="min-w-[220px]"
        >
          Contact Us
        </Button>
      </Link>
    </div>
  );
}