import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionReveal } from "@/components/common/SectionReveal";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

const pillOval = "overflow-hidden rounded-[50%/45%] shadow-card";

export function AboutSection() {
  const t = useHomeContent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionReveal className="bg-surface py-14 sm:py-20 lg:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        {/* Reference layout: 2 stacked ovals left | 1 tall oval right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3 sm:max-w-md sm:gap-4"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`h-36 sm:h-44 md:h-48 ${pillOval}`}
            >
              <video
                className="h-full w-full object-cover"
                src="/assets/Home%20page%20background%20image.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`h-36 sm:h-44 md:h-48 ${pillOval}`}
            >
              <video
                className="h-full w-full object-cover"
                src="/assets/Home%20page%20background%20image.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            className={`relative h-[calc(2*9rem+0.75rem)] sm:h-[calc(2*11rem+1rem)] md:h-[calc(2*12rem+1rem)] ${pillOval}`}
          >
            <img
              src="/assets/farmer-photoi.png"
              alt="farmer"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="px-3 text-center font-heading text-base font-extrabold leading-tight text-white sm:text-lg md:text-xl"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
              >
                {t.farmingTag}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            {t.whatTitle}
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            {t.whatBody}
          </p>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
