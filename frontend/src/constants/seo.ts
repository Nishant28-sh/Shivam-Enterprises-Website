import type { SeoMeta } from "@/types";

export const SITE_NAME = "Shivam Enterprises";
export const SITE_URL = "https://shivamenterprises.in";
export const DEFAULT_OG_IMAGE = "/assets/farmer-field.jpg";

export const SEO_PAGES: Record<string, SeoMeta> = {
  home: {
    title: "Shivam Enterprises | Smart Drone Spraying for Modern Farms",
    description:
      "Schedule aerial crop spraying with verified pilots. Get better coverage, lower chemical waste, and faster field turnaround.",
    path: "/",
  },
  services: {
    title: "Services | Shivam Enterprises",
    description:
      "Every Shivam Enterprises service is designed for speed, field safety, and measurable outcomes. Plan, spray, and monitor with one coordinated operations team.",
    path: "/services",
  },
  contact: {
    title: "Contact | Shivam Enterprises",
    description:
      "Share your farm details and our operations team will suggest the right spray plan, estimated timeline, and service package.",
    path: "/contact",
  },
};

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shivam Enterprises",
  description: "Precision drone spraying for modern farms. DGCA certified pilots.",
  telephone: ["+918502858582", "+918168564013"],
  url: SITE_URL,
  areaServed: "India",
  serviceType: "Agricultural Drone Spraying",
};
