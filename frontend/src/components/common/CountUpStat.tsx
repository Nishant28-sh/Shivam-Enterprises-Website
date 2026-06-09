import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface CountUpStatProps {
  value: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { end: 0, suffix: value, decimals: 0 };
  const numeric = Number(match[1].replace(/,/g, ""));
  return {
    end: numeric,
    suffix: match[2] || "",
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

export function CountUpStat({ value, label, icon: Icon, className }: CountUpStatProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { end, suffix, decimals } = parseStatValue(value);

  return (
    <div
      ref={ref}
      className={cn(
        "group flex items-center gap-3 rounded-2xl border border-border bg-surface-card p-4 sm:gap-4 sm:p-5",
        "shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
        <Icon size={22} strokeWidth={2} aria-hidden />
      </div>
      <div>
        <p className="font-heading text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
          {inView ? (
            <CountUp end={end} duration={2} decimals={decimals} separator="," suffix={suffix} />
          ) : (
            value
          )}
        </p>
        <p className="mt-0.5 text-sm font-medium text-text-secondary">{label}</p>
      </div>
    </div>
  );
}
