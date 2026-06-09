import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useHomeContent } from "@/hooks/useContent";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const t = useHomeContent();

  return (
    <section className="relative flex min-h-[calc(100dvh-104px)] items-center overflow-hidden sm:min-h-[calc(100vh-104px)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/home%20page%20background%20video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      {/* Neutral overlay — original video colours show through */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.div variants={fadeUp}>
            <Badge className="border-white/25 bg-black/25 text-white backdrop-blur-sm">
              {t.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-heading text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white min-[400px]:text-3xl sm:mt-6 sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-[3.25rem]"
          >
            {t.h1a}
            <br />
            <span className="text-white/95">{t.h1b}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg font-body text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg"
          >
            {t.sub}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            <Link to="/contact" className="w-full no-underline min-[400px]:w-auto">
              <Button size="lg" className="w-full min-[400px]:w-auto">
                {t.cta1}
                <ArrowRight size={16} aria-hidden />
              </Button>
            </Link>
            <Link to="/services" className="w-full no-underline min-[400px]:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/70 bg-white/15 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-text-primary min-[400px]:w-auto"
              >
                {t.cta2}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-elevated">
            <video
              className="aspect-[4/3] w-full object-cover"
              src="/assets/home%20page%20background%20video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface-card/95 px-5 py-3 shadow-elevated backdrop-blur-sm"
          >
            <p className="font-heading text-2xl font-extrabold text-text-primary">{t.s1}</p>
            <p className="text-sm font-medium text-text-secondary">{t.s1l}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
