import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold uppercase tracking-[0.09em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(120deg,var(--accent),#54e2ff)] text-[#041a22] shadow-[0_10px_26px_rgba(107,242,255,0.42)] hover:-translate-y-0.5 hover:brightness-105",
        outline: "border border-[color:var(--line)] bg-[#11162d]/70 text-[color:var(--text-primary)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
        ghost: "text-[color:var(--text-muted)] hover:bg-[#151a36]/60 hover:text-[color:var(--text-primary)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        lg: "h-12 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
