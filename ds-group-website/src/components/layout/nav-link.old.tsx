"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative px-1 py-2 text-[15px] font-medium transition-colors duration-300",
        active
          ? "text-[#D4AF37]"
          : "text-[#111111] hover:text-[#D4AF37]"
      )}
    >
      {children}

      <motion.span
        initial={false}
        animate={{
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D4AF37]"
      />
    </Link>
  );
}