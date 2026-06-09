import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { SectionReveal } from "@/components/common/SectionReveal";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const t = useHomeContent();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <SectionReveal className="bg-surface py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          variants={fadeUp}
          className="text-center font-heading text-2xl font-extrabold text-text-primary sm:text-3xl md:text-4xl"
        >
          {t.faqTitle}
        </motion.h2>

        <div className="mt-10 space-y-3">
          {t.faqs.map((faq, i) => {
            const open = openFaq === i;
            return (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: open ? 0 : -2 }}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-surface-card transition-colors",
                  open ? "border-primary/40 shadow-soft" : "border-border hover:shadow-soft",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={open}
                >
                  <span
                    className={cn(
                      "font-heading text-base font-semibold",
                      open ? "text-primary" : "text-text-primary",
                    )}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-primary" aria-hidden>
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 font-body text-sm leading-relaxed text-text-secondary">
                        {faq.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
