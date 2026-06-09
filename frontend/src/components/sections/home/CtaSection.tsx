import { Link } from "react-router-dom";
import { ArrowRight, Globe, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

export function CtaSection() {
  const t = useHomeContent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]"
      aria-label="Call to action"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/home%20page%20background%20video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      {/* Neutral dark overlay — natural video tones */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[90vh] sm:px-8 sm:py-20"
      >
        <motion.span
          variants={fadeUp}
          className="mb-5 inline-flex rounded-full border border-white/25 bg-surface-card/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-text-primary sm:text-sm"
        >
          {t.badge}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          {t.ctaTitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base md:text-lg"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
        >
          {t.ctaSub}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm"
        >
          <Globe size={15} className="shrink-0 text-white/90" aria-hidden />
          <span className="font-body text-xs font-medium text-white/90 sm:text-sm">
            {t.ctaServiceArea}
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <Link to="/contact" className="w-full no-underline sm:w-auto">
            <motion.span
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5",
                "font-heading text-sm font-semibold text-white sm:px-8 sm:text-base",
              )}
            >
              {t.cta1}
              <ArrowRight size={18} aria-hidden />
            </motion.span>
          </Link>

          <Link to="/services" className="w-full no-underline sm:w-auto">
            <motion.span
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex w-full items-center justify-center rounded-xl bg-surface-card/95 px-6 py-3.5",
                "font-heading text-sm font-semibold text-text-primary sm:px-8 sm:text-base",
              )}
            >
              {t.cta2}
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-6"
        >
          <motion.a
            href={`tel:${t.phone1}`}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 rounded-xl bg-black/35 px-4 py-2.5 font-heading text-sm font-semibold text-white no-underline backdrop-blur-sm sm:text-base"
          >
            <Phone size={16} aria-hidden />
            {t.phone1}
          </motion.a>
          <motion.a
            href={`tel:${t.phone2}`}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 rounded-xl bg-black/35 px-4 py-2.5 font-heading text-sm font-semibold text-white no-underline backdrop-blur-sm sm:text-base"
          >
            <Phone size={16} aria-hidden />
            {t.phone2}
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-white/15 bg-black/35 px-5 py-4 text-left backdrop-blur-sm sm:mt-10"
        >
          <MapPin size={18} className="mt-0.5 shrink-0 text-white/90" aria-hidden />
          <p className="font-body text-xs leading-relaxed text-white/85 sm:text-sm">
            {t.ctaAddress}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
