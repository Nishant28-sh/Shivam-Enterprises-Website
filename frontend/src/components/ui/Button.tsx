import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";
import { transitionFast } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-dark hover:shadow-elevated focus-visible:ring-primary/40",
  secondary:
    "bg-primary-dark text-white shadow-soft hover:bg-primary-dark/90 focus-visible:ring-primary-dark/40",
  outline:
    "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:ring-primary/30",
  ghost: "bg-transparent text-text-primary hover:bg-surface focus-visible:ring-border",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ y: -2, transition: transitionFast }}
      whileTap={{ scale: 0.98, transition: transitionFast }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
        "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  ),
);

Button.displayName = "Button";
