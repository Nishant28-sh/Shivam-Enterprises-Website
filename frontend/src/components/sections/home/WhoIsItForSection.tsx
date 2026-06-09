import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Sprout, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/common/SectionReveal";
import { TiltCard } from "@/components/common/TiltCard";
import { Card } from "@/components/ui/Card";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function WhoIsItForSection() {
  const t = useHomeContent();

  const cards = [
    { title: t.w1, sub: t.w1s, icon: Sprout },
    { title: t.w2, sub: t.w2s, icon: Users },
    { title: t.w3, sub: t.w3s, icon: Gauge },
  ];

  return (
    <SectionReveal className="bg-surface py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-heading text-2xl font-extrabold text-text-primary sm:text-3xl md:text-4xl"
        >
          {t.whoTitle}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <TiltCard>
                  <Card className="h-full">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                      <Icon size={24} className="text-primary-dark" aria-hidden />
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                      {card.sub}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary no-underline transition-colors hover:text-primary-dark"
                    >
                      Know More <ArrowRight size={14} aria-hidden />
                    </Link>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
