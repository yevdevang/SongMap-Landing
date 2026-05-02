import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-300 border border-primary/30",
        secondary: "bg-secondary/20 text-secondary-300 border border-secondary/30",
        accent: "bg-accent/20 text-accent border border-accent/30",
        success: "bg-green-500/20 text-green-400 border border-green-500/30",
        pro: "bg-gradient-to-r from-secondary/30 to-accent/30 text-white border border-secondary/40",
        outline: "text-foreground border border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
