import { BadgeCheck, Gauge, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CountUpStat } from "@/components/common/CountUpStat";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function StatsBar() {
  const t = useHomeContent();

  const stats = [
    { value: t.s1, label: t.s1l, icon: Gauge },
    { value: t.s2, label: t.s2l, icon: Users },
    { value: t.s3, label: t.s3l, icon: BadgeCheck },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 -mt-4 border-y border-border bg-surface-card px-3 py-6 shadow-elevated sm:-mt-8 sm:px-0 sm:py-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-1 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <CountUpStat {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
