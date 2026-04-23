import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-xl border border-[color:var(--line)] bg-[#121836] px-3 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/70",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
