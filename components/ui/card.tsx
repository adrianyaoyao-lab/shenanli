"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        hover: "hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-1",
        glow: "hover:border-accent/30",
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={variant === "hover" ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-heading font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-white/60", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Glass Card with enhanced effects
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: "accent" | "cyan" | "white";
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  glowColor = "accent",
  as: Component = "div",
}: GlassCardProps) {
  const glowColors = {
    accent: "group-hover:shadow-[0_0_40px_rgba(47,128,255,0.2)]",
    cyan: "group-hover:shadow-[0_0_40px_rgba(79,209,255,0.2)]",
    white: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
  };

  const glowBorders = {
    accent: "group-hover:border-accent/30",
    cyan: "group-hover:border-cyan/30",
    white: "group-hover:border-white/20",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Component
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "bg-white/[0.03] backdrop-blur-xl",
          "border border-white/[0.06]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
          "transition-all duration-300",
          hover && [
            "cursor-pointer",
            "hover:bg-white/[0.05]",
            "hover:border-white/[0.1]",
            glowColors[glowColor],
            glowBorders[glowColor],
          ],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}

// Feature Card with Icon
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconColor?: "accent" | "cyan" | "green" | "purple" | "orange";
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  iconColor = "accent",
}: FeatureCardProps) {
  const iconColors = {
    accent: "bg-accent/10 text-accent",
    cyan: "bg-cyan/10 text-cyan",
    green: "bg-emerald-500/10 text-emerald-400",
    purple: "bg-purple-500/10 text-purple-400",
    orange: "bg-orange-500/10 text-orange-400",
  };

  return (
    <GlassCard hover glow className={cn("p-6", className)}>
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          iconColors[iconColor]
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-heading font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </GlassCard>
  );
}

// Stats Card
interface StatsCardProps {
  value: number;
  unit?: string;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({
  value,
  unit,
  suffix = "",
  label,
  icon,
  className,
}: StatsCardProps) {
  return (
    <GlassCard className={cn("p-6 text-center", className)}>
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 text-accent">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
        <span className="text-accent">{value}</span>
        {unit && <span className="text-accent/70">{unit}</span>}
        {suffix && <span className="text-white/50 text-2xl">{suffix}</span>}
      </div>
      <p className="text-sm text-white/50">{label}</p>
    </GlassCard>
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
