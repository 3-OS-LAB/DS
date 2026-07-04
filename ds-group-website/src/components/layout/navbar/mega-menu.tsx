

"use client";
import { navigation } from "./navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "./types";

interface MegaMenuProps {
  open: boolean;
  items: NavItem[];
}

export default function MegaMenu({
  open,
  items,
}: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="absolute left-1/2 top-full mt-4 w-[700px] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#111111]/95 p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-transparent p-5 transition-all hover:border-[#D4AF37]/40 hover:bg-white/5"
              >
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-neutral-400">
                  {item.description ??
                    "Learn more about this company."}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}