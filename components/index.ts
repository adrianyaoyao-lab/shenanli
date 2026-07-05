/**
 * Re-export all design system components from here
 * for cleaner imports across the application
 */

// UI Components
export { Button, buttonVariants, GlowButton } from "@/components/ui/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, GlassCard, FeatureCard, StatsCard } from "@/components/ui/card";
export { SectionHeader } from "@/components/ui/section-header";
export { ScrollProgress, ReadingProgress } from "@/components/ui/scroll-progress";
export { PageTransition, LoadingScreen } from "@/components/ui/page-transition";
export { BlurRevealImage, ParallaxImage, ImageOverlay } from "@/components/ui/image-effects";
export { MouseFollower, AnimatedNumber, TextReveal, TypingEffect, Marquee, PulsingDot, Skeleton } from "@/components/ui/effects";

// Layout Components
export { Header } from "@/components/layout/header";
export { Footer } from "@/components/layout/footer";

// Animation Components
export { FadeIn } from "@/components/animated/fade-in";
export { ScaleIn } from "@/components/animated/scale-in";
export { SlideIn } from "@/components/animated/slide-in";
export { TextReveal as AnimatedTextReveal } from "@/components/animated/text-reveal";
export { ParallaxImage as AnimatedParallax } from "@/components/animated/parallax-image";
export { NumberCounter } from "@/components/animated/number-counter";
