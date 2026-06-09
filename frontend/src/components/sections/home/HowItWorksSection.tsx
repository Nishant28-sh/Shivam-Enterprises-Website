import { MapPinned, PhoneCall, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionReveal } from "@/components/common/SectionReveal";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HowItWorksSection() {
  const t = useHomeContent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const steps = [
    { label: t.step1, step: "1", icon: PhoneCall },
    { label: t.step2, step: "2", icon: MapPinned },
    { label: t.step3, step: "3", icon: Wallet },
  ];

  return (
    <SectionReveal className="bg-surface-card py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-heading text-2xl font-bold text-text-primary sm:text-3xl"
        >
          {t.howTitle}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mt-12 grid gap-5 sm:grid-cols-3"
        >
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent sm:block" />

          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative rounded-3xl bg-surface p-8 shadow-soft transition-shadow hover:shadow-card"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary-light"
                >
                  <Icon size={26} className="text-primary-dark" aria-hidden />
                </motion.div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Step {item.step}
                </p>
                <p className="mt-2 font-heading text-base font-bold text-text-primary">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
