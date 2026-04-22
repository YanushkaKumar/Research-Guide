import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-300/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-100",
        className
      )}
    >
      {children}
    </span>
  );
}
