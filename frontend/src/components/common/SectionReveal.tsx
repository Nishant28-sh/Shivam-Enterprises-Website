import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  stagger?: boolean;
}

export function SectionReveal({
  children,
  className,
  as = "section",
  id,
  stagger = false,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const motionProps = {
    ref,
    id,
    initial: "hidden" as const,
    animate: (inView || prefersReducedMotion ? "visible" : "hidden") as const,
    variants: stagger ? staggerContainer : fadeUp,
    className: cn(className),
  };

  if (as === "section") {
    return <motion.section {...motionProps}>{children}</motion.section>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}
