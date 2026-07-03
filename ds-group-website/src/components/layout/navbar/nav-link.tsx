"use client";
import { navigation } from "./navigation";
import type { NavItem } from "./types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({
  href,
  label,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors",
        active
          ? "text-[#D4AF37]"
          : "text-white hover:text-[#D4AF37]"
      )}
    >
      {label}

      {active && (
        <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#D4AF37]" />
      )}
    </Link>
  );
}