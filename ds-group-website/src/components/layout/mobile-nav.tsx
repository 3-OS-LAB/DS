"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, Mail } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import Logo from "./logo";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-[340px] flex-col border-l bg-white p-0"
        >
          <SheetHeader className="border-b px-6 py-6">
            <SheetTitle className="text-left">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          {/* Navigation */}

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300",
                        active
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-[#111111] hover:bg-neutral-100"
                      )}
                    >
                      <span className="font-medium">
                        {item.title}
                      </span>

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}

          <div className="border-t p-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <Button className="mb-6 w-full">
                Get In Touch
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="mailto:info@dsgroup.com"
                aria-label="Email"
                className="rounded-full border border-neutral-200 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              © {new Date().getFullYear()} D S Group of Companies.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}