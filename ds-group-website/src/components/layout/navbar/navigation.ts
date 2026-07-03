import { NavItem } from "./types";


export const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Companies",
    href: "/companies",
    children: [
      {
        title: "CreatorVerse",
        href: "/companies/creatorverse",
      },
      {
        title: "Autonomous Security",
        href: "/companies/autonomous-security",
      },
      {
        title: "Future Ventures",
        href: "/companies/future-ventures",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Investors",
    href: "/investors",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];