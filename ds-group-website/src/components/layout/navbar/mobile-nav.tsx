"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import NavLogo from "./nav-logo";
import { navigation } from "./navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 bg-[#050505] border-t border-white/10">
          <div className="p-6">
            <NavLogo />

            <nav className="mt-8 flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-[#D4AF37]"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}