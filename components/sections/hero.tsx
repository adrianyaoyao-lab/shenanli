"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroProps {
  translations: {
    hero: {
      title: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      explore: string;
      contact: string;
      keywords: {
        lowAltitude: string;
        embodiedAI: string;
        deepSea: string;
      };
      stats: {
        energyDensity: string;
        cycleLife: string;
        patents: string;
      };
    };
  };
  locale: string;
}

// Animated counter component
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          let start = 0;
          const increment = value / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Hero({ translations, locale }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Smooth spring for background
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // Floating particles state
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const statsData = [
    { value: 570, unit: "+", label: translations.hero.stats.energyDensity },
    { value: 500, unit: "+", label: translations.hero.stats.cycleLife },
    { value: 29, unit: "+", label: translations.hero.stats.patents },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 grid-pattern-strong opacity-50" />

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-accent/10 via-transparent to-cyan/10 rounded-full blur-[150px]" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-accent/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative container-padding mx-auto text-center z-10 pt-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {locale === "zh" ? "高比能 · 高安全 · 固态电池" : "High Energy · Ultra Safe · Solid-State"}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white tracking-[0.02em] leading-[1.2] mb-8"
          >
            <motion.span
              className="block gradient-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {translations.hero.titleLine1}
            </motion.span>
            <motion.span
              className="block mt-2"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {translations.hero.titleLine2}
            </motion.span>
          </motion.h1>

          {/* Application Keywords */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-10 px-4"
          >
            {[
              translations.hero.keywords.lowAltitude,
              translations.hero.keywords.embodiedAI,
              translations.hero.keywords.deepSea,
            ].map((keyword, index) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold highlight-text whitespace-nowrap">
                  {keyword}
                </span>
                {/* Underline animation */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent to-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                />
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {translations.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href={`/${locale}/technology`}>
              <Button size="lg" className="group min-w-[180px]">
                {translations.hero.explore}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button variant="secondary" size="lg" className="min-w-[180px]">
                {translations.hero.contact}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-3xl mx-auto px-4"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.15 }}
                className="relative group"
              >
                <div className="text-center">
                  {/* Value */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-accent">{stat.unit}</span>
                  </div>
                  {/* Label */}
                  <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                {/* Connecting line */}
                {index < statsData.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-5 w-6 lg:w-10 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">
            {locale === "zh" ? "向下滚动" : "Scroll"}
          </span>
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-20 h-20 border-l border-t border-white/10 rounded-tl-xl opacity-50" />
      <div className="absolute top-20 right-6 w-20 h-20 border-r border-t border-white/10 rounded-tr-xl opacity-50" />
      <div className="absolute bottom-20 left-6 w-20 h-20 border-l border-b border-white/10 rounded-bl-xl opacity-50" />
      <div className="absolute bottom-20 right-6 w-20 h-20 border-r border-b border-white/10 rounded-br-xl opacity-50" />
    </section>
  );
}
