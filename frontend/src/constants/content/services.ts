import { Clock3, Droplets, Radar, ShieldCheck, Sparkles } from "lucide-react";
import type { Language } from "@/types";

export const servicesCopy = {
  en: {
    badge: "Service Portfolio",
    heading: "Built for High-Trust Farm Operations",
    body: "Every Shivam Enterprises service is designed for speed, field safety, and measurable outcomes. Plan, spray, and monitor with one coordinated operations team.",
    live: "Operations dashboard in real time",
    learnMore: "Learn More",
    serviceHighlights: [
      { title: "50 Acres/Day", subtitle: "High throughput operations", icon: Radar },
      { title: "5 Min/Acre", subtitle: "Fast mission turnaround", icon: Clock3 },
      { title: "DGCA Ready", subtitle: "Certified pilot network", icon: ShieldCheck },
    ],
    services: [
      {
        title: "Pesticide Spray",
        description:
          "Uniform pesticide distribution with route-optimized drone missions for broad-acre and high-density crop patterns.",
        icon: Droplets,
      },
      {
        title: "Nutrient Boost",
        description:
          "Scheduled micronutrient applications tailored to crop stages for healthier canopy growth and resilient output.",
        icon: Sparkles,
      },
      {
        title: "Crop Mapping",
        description:
          "Multi-angle aerial mapping to identify stress pockets, track variability, and optimize intervention strategy.",
        icon: Radar,
      },
    ],
  },
  hi: {
    badge: "सेवा पोर्टफोलियो",
    heading: "उच्च भरोसे वाली कृषि सेवाओं के लिए तैयार",
    body: "Shivam Enterprises की हर सेवा तेज़ गति, खेत की सुरक्षा और मापने योग्य परिणामों के लिए बनाई गई है। एक ही समन्वित टीम के साथ योजना बनाएं, स्प्रे करें और मॉनिटर करें।",
    live: "ऑपरेशन्स डैशबोर्ड रियल टाइम में",
    learnMore: "और जानें",
    serviceHighlights: [
      { title: "50 एकड़/दिन", subtitle: "उच्च क्षमता संचालन", icon: Radar },
      { title: "5 मिनट/एकड़", subtitle: "तेज़ मिशन टर्नअराउंड", icon: Clock3 },
      { title: "DGCA प्रमाणित", subtitle: "प्रमाणित पायलट नेटवर्क", icon: ShieldCheck },
    ],
    services: [
      {
        title: "कीटनाशक स्प्रे",
        description:
          "ब्रॉड-एकर और हाई-डेंसिटी फसल पैटर्न के लिए रूट-ऑप्टिमाइज़्ड ड्रोन मिशन के साथ समान कीटनाशक वितरण।",
        icon: Droplets,
      },
      {
        title: "पोषक तत्व स्प्रे",
        description:
          "फसल के चरणों के अनुसार निर्धारित माइक्रोन्यूट्रिएंट एप्लिकेशन, ताकि वृद्धि बेहतर हो और उत्पादन मजबूत बने।",
        icon: Sparkles,
      },
      {
        title: "फसल मैपिंग",
        description:
          "स्ट्रेस क्षेत्रों की पहचान, विविधता ट्रैकिंग और बेहतर हस्तक्षेप रणनीति के लिए मल्टी-एंगल एरियल मैपिंग।",
        icon: Radar,
      },
    ],
  },
} satisfies Record<Language, object>;
