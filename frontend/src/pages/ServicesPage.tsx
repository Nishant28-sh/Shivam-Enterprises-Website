import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SeoHead } from "@/components/common/SeoHead";
import { SectionReveal } from "@/components/common/SectionReveal";
import { TiltCard } from "@/components/common/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useServicesContent } from "@/hooks/useContent";
import { SEO_PAGES } from "@/constants/seo";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ServicesPage() {
  const t = useServicesContent();

  return (
    <>
      <SeoHead meta={SEO_PAGES.services} />

      <SectionReveal className="bg-gradient-to-b from-primary-light/40 to-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div variants={fadeUp}>
            <Badge>{t.badge}</Badge>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              {t.body}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl border border-border bg-surface-card p-3 shadow-elevated">
            <div className="relative h-80 overflow-hidden rounded-2xl bg-primary-dark">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/istockphoto-2009338133-640_adpp_is.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-text-primary/20" />
              <div className="absolute bottom-4 left-4 rounded-xl border border-border bg-white/90 px-4 py-2 text-sm font-semibold text-text-primary backdrop-blur-sm">
                {t.live}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionReveal>

      <SectionReveal className="border-y border-border bg-surface-card py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-6 lg:px-8"
        >
          {t.serviceHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <Card>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Icon size={20} aria-hidden />
                  </span>
                  <p className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-secondary">{item.subtitle}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionReveal>

      <SectionReveal className="bg-surface py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 xl:grid-cols-3 sm:px-6 lg:px-8"
        >
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <TiltCard>
                  <Card className="group h-full">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon size={22} strokeWidth={2.1} aria-hidden />
                    </span>
                    <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-text-primary">
                      {service.title}
                    </h2>
                    <p className="mt-3 font-body text-text-secondary">{service.description}</p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-6"
                      onClick={() => undefined}
                      aria-label={t.learnMore}
                    >
                      {t.learnMore}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Button>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionReveal>
    </>
  );
}
