import type { Variants, Transition } from "framer-motion";

export const easePremium: Transition["ease"] = [0.22, 1, 0.36, 1];

export const transitionFast: Transition = {
  duration: 0.25,
  ease: easePremium,
};

export const transitionMedium: Transition = {
  duration: 0.55,
  ease: easePremium,
};

export const transitionSlow: Transition = {
  duration: 0.65,
  ease: easePremium,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionMedium,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitionMedium,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const navUnderline: Variants = {
  inactive: { scaleX: 0, opacity: 0 },
  active: {
    scaleX: 1,
    opacity: 1,
    transition: transitionFast,
  },
};
