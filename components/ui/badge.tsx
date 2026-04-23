import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--line)] bg-[#141936] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
