import type { LucideIcon } from "lucide-react";

export type Language = "en" | "hi";

export interface NavItem {
  key: "home" | "services" | "contact";
  to: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceHighlight {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface ContactDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}
