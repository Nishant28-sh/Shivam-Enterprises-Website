import type { Language } from "@/types";

export const layoutCopy: Record<
  Language,
  {
    home: string;
    services: string;
    contact: string;
    contactUs: string;
    lang: string;
    rights: string;
    strip: string;
    footerTagline: string;
    footerDescription: string;
    pages: string;
    contactLabel: string;
    addressLabel: string;
    address: string;
    serviceArea: string;
    precisionTag: string;
  }
> = {
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    contactUs: "Contact Us",
    lang: "हिंदी",
    rights: "All rights reserved.",
    strip: "Smart Solutions for a Greener Planet",
    footerTagline: "Precision Agriculture Technology",
    footerDescription: "Precision drone spraying for modern farms. DGCA certified pilots.",
    pages: "Pages",
    contactLabel: "Contact",
    addressLabel: "Address",
    address:
      "Ground Floor, CS-03, 235, Anantraj Assarya, Neemrana, Alwar, Rajasthan – 301705",
    serviceArea: "Serving farmers across all of India",
    precisionTag: "🌱 Precision Agriculture Technology",
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    contact: "संपर्क",
    contactUs: "संपर्क करें",
    lang: "EN",
    rights: "सर्वाधिकार सुरक्षित।",
    strip: "एक हरे कल के लिए नवाचार",
    footerTagline: "प्रिसिजन एग्रीकल्चर टेक्नोलॉजी",
    footerDescription: "Precision drone spraying for modern farms. DGCA certified pilots.",
    pages: "पेज",
    contactLabel: "संपर्क",
    addressLabel: "पता",
    address:
      "ग्राउंड फ्लोर, CS-03, 235, अनंतराज अस्सरया, नीमराना, अलवर, राजस्थान – 301705",
    serviceArea: "पूरे भारत में किसानों की सेवा",
    precisionTag: "🌱 Precision Agriculture Technology",
  },
};
