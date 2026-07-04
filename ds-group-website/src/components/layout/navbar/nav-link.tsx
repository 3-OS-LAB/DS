"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  title: string;
  href: string;
}

export default function NavLink({
  title,
  href,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative px-1 py-2 text-sm font-medium transition-colors",
        active
          ? "text-[#D4AF37]"
          : "text-white hover:text-[#D4AF37]"
      )}
    >
      {title}

      {active && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#D4AF37]"
        />
      )}
    </Link>
  );
}