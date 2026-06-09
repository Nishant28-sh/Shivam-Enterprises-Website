import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("relative transition-shadow duration-300", className)}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300",
          hovered && "opacity-100",
        )}
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(22,163,74,0.08), transparent 40%)",
        }}
      />
      {children}
    </motion.div>
  );
}
