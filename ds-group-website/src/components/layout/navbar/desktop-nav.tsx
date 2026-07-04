"use client";

import { useState } from "react";

import NavLogo from "./nav-logo";
import NavLink from "./nav-link";
import MegaMenu from "./mega-menu";
import NavActions from "./nav-actions";
import { navigation } from "./navigation";

export default function DesktopNav() {
  const [megaOpen, setMegaOpen] = useState(false);

  const company = navigation.find(
    (item) => item.title === "Companies"
  );

  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <NavLogo />

      <nav className="flex items-center gap-8">
        {navigation.map((item) =>
          item.children ? (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <NavLink
                title={item.title}
                href={item.href}
              />

              <MegaMenu
                open={megaOpen}
                items={company?.children ?? []}
              />
            </div>
          ) : (
            <NavLink
              key={item.href}
              title={item.title}
              href={item.href}
            />
          )
        )}
      </nav>

      <NavActions />
    </div>
  );
}