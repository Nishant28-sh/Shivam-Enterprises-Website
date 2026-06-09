import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <div className="space-y-1.5">
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-surface px-4 py-3 font-body text-sm text-text-primary",
          "placeholder:text-text-secondary/70 transition-colors duration-200",
          "focus:border-primary focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary/15",
          error ? "border-red-400 focus:border-red-400 focus:ring-red-200" : "border-border",
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error ? (
        <p className="text-xs font-medium text-red-500" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  ),
);

Input.displayName = "Input";
