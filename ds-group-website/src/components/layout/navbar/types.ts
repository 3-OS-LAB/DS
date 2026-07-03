import { navigation } from "./navigation";

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}