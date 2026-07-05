"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  blur?: number;
  scale?: number;
  duration?: number;
  parallax?: boolean;
  parallaxIntensity?: number;
}

export function BlurRevealImage({
  src,
  alt,
  className,
  containerClassName,
  blur = 20,
  scale = 1.1,
  duration = 0.8,
  parallax = false,
  parallaxIntensity = 0.2,
}: BlurRevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [`-${parallaxIntensity * 100}%`, `${parallaxIntensity * 100}%`] : ["0%", "0%"]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        initial={{ opacity: 0, scale: scale, filter: `blur(${blur}px)` }}
        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{
          duration,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full h-full"
      >
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className={cn("object-cover", className)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.5,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}

// Gradient overlay helper
interface ImageOverlayProps {
  variant?: "dark" | "light" | "gradient" | "none";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function ImageOverlay({
  variant = "gradient",
  intensity = "medium",
  className,
}: ImageOverlayProps) {
  const intensityValues = {
    low: "20%",
    medium: "40%",
    high: "60%",
  };

  const overlayStyles = {
    dark: `linear-gradient(to top, rgba(11, 16, 32, ${intensityValues[intensity]}) 0%, transparent 100%)`,
    light: `linear-gradient(to top, rgba(255, 255, 255, ${intensityValues[intensity]}) 0%, transparent 100%)`,
    gradient: `linear-gradient(to top, rgba(11, 16, 32, 0.8) 0%, transparent 60%)`,
    none: "transparent",
  };

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ background: overlayStyles[variant] }}
    />
  );
}
