import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { transitionMedium } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: "0 16px 48px -12px rgba(15, 23, 42, 0.14)",
              transition: transitionMedium,
            }
          : undefined
      }
      className={cn(
        "rounded-3xl border border-border bg-surface-card p-6 shadow-card",
        "transition-shadow duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
