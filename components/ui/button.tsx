import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#152a50] text-white hover:bg-[#152a50]/90 shadow-lg shadow-black/10 hover:shadow-black/20 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90",
        primary:
          "bg-[#152a50] text-white hover:bg-[#152a50]/90 shadow-lg shadow-black/10 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90",
        secondary:
          "bg-[#152a50] text-white hover:bg-[#152a50]/90 shadow-lg shadow-black/10 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90",
        outline:
          "border border-primary/40 dark:border-white/40 bg-transparent text-gray-900 dark:text-white hover:bg-primary/10 hover:border-primary/60 dark:hover:border-white/60",
        ghost:
          "bg-[#152a50] text-white hover:bg-[#152a50]/90 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90",
        link:
          "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 py-3 text-base",
        xl: "h-14 px-10 py-3 text-lg",
        icon: "h-10 w-10",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
