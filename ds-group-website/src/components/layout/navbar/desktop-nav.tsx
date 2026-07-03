"use client";

import NavLogo from "./nav-logo";
import NavLink from "./nav-link";
import { navigation } from "./navigation";
import type { NavItem } from "./types";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/companies",
    label: "Companies",
  },
  {
    href: "/industries",
    label: "Industries",
  },
  {
    href: "/investors",
    label: "Investors",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function DesktopNav() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <NavLogo />

      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <NavLink
            key={link.href}
            {...link}
          />
        ))}
      </nav>
    </div>
  );
}