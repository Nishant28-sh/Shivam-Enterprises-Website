import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_PRIMARY } from "@/constants/navigation";
import { transitionFast } from "@/lib/animations";

export function FloatingCallButton() {
  return (
    <motion.a
      href={`tel:${PHONE_PRIMARY}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, transition: transitionFast }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/75 text-primary shadow-elevated backdrop-blur-nav sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 md:bottom-8 md:right-8"
      aria-label="Call Shivam Enterprises"
    >
      <Phone size={22} strokeWidth={2.2} aria-hidden />
    </motion.a>
  );
}
