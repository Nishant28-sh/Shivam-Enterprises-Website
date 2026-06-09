import { SeoHead } from "@/components/common/SeoHead";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { CtaSection } from "@/components/sections/home/CtaSection";
import { DroneStatsSection } from "@/components/sections/home/DroneStatsSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { WhoIsItForSection } from "@/components/sections/home/WhoIsItForSection";
import { SEO_PAGES } from "@/constants/seo";

export default function HomePage() {
  return (
    <>
      <SeoHead meta={SEO_PAGES.home} />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <DroneStatsSection />
      <WhoIsItForSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
