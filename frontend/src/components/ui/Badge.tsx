import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary-light/60",
        "px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
