"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: [
          "bg-accent text-white",
          "shadow-[0_0_20px_rgba(47,128,255,0.3)]",
          "hover:shadow-[0_0_30px_rgba(47,128,255,0.5)]",
          "hover:bg-accent/90",
        ].join(" "),
        secondary: [
          "bg-white/10 text-white border border-white/20",
          "hover:bg-white/15 hover:border-white/30",
          "hover:shadow-lg hover:shadow-white/5",
        ].join(" "),
        ghost: [
          "text-white/70",
          "hover:text-white hover:bg-white/5",
        ].join(" "),
        outline: [
          "border border-accent/50 text-accent",
          "hover:bg-accent/10 hover:border-accent",
        ].join(" "),
        glass: [
          "bg-white/5 backdrop-blur-xl border border-white/10",
          "hover:bg-white/10 hover:border-white/20",
          "hover:shadow-lg hover:shadow-accent/10",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-accent to-cyan text-white",
          "shadow-lg shadow-accent/30",
          "hover:shadow-xl hover:shadow-accent/50",
          "hover:shadow-cyan/30",
        ].join(" "),
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
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
  glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          glow && "animate-pulse-glow"
        )}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Glow Effect Button - Special variant with animated glow
export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", intensity = "medium", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    };

    const glowStyles = {
      low: "shadow-[0_0_15px_rgba(47,128,255,0.2)]",
      medium: "shadow-[0_0_25px_rgba(47,128,255,0.3)]",
      high: "shadow-[0_0_40px_rgba(47,128,255,0.4)]",
    };

    const baseClasses = variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90"
      : "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30";

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          baseClasses,
          glowStyles[intensity],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Glow pulse effect */}
        <span className="absolute inset-0 rounded-lg animate-pulse-glow opacity-30 bg-accent" />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
GlowButton.displayName = "GlowButton";

export { Button, buttonVariants, GlowButton };
