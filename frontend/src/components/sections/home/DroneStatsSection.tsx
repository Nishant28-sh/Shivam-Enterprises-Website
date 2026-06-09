import { Clock3, Droplets, Gauge, ShieldCheck, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Card } from "@/components/ui/Card";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function DroneStatsSection() {
  const t = useHomeContent();

  const savings = [
    { value: t.p1, label: t.p1l, icon: Droplets },
    { value: t.p2, label: t.p2l, icon: Sprout },
    { value: t.p3, label: t.p3l, icon: Gauge },
  ];

  const perf = [
    { value: t.perf1, sub: t.perf1s, icon: Gauge },
    { value: t.perf2, sub: t.perf2s, icon: Clock3 },
    { value: t.perf3, sub: t.perf3s, icon: ShieldCheck },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Drone Image.webp')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-surface/90" aria-hidden />

      <SectionReveal className="relative py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.h2
              variants={fadeUp}
              className="text-center font-heading text-2xl font-extrabold leading-tight text-text-primary sm:text-3xl md:text-4xl lg:text-left lg:text-5xl"
            >
              {t.droneTitle}
              <br />
              {t.droneTitle2}
            </motion.h2>

            <Card hover className="p-5 sm:p-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-1 text-center sm:gap-2"
              >
                {savings.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      className={i < 2 ? "border-r border-border px-1 sm:px-2" : "px-1 sm:px-2"}
                    >
                      <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary-light sm:h-11 sm:w-11">
                        <Icon size={16} className="text-primary sm:hidden" aria-hidden />
                        <Icon size={18} className="hidden text-primary sm:block" aria-hidden />
                      </div>
                      <p className="font-heading text-lg font-extrabold text-text-primary sm:text-2xl md:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-0.5 text-[0.65rem] font-semibold leading-tight text-text-secondary sm:mt-1 sm:text-sm">
                        {item.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
              <p className="mt-5 text-center font-body text-xs leading-relaxed text-text-secondary sm:mt-6 sm:text-sm">
                {t.droneBody}
              </p>
            </Card>
          </div>
        </div>
      </SectionReveal>

      <div className="relative bg-primary-dark py-5 sm:py-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-8"
        >
          {perf.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl px-3 py-2 transition-colors hover:bg-white/5 sm:px-2"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-amber sm:h-12 sm:w-12">
                  <Icon size={18} className="text-primary-dark sm:hidden" aria-hidden />
                  <Icon size={20} className="hidden text-primary-dark sm:block" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-bold text-white sm:text-base">
                    {item.value}
                  </p>
                  <p className="text-xs font-medium text-primary sm:text-sm">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
