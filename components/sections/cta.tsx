"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  translations: {
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  locale: string;
}

export function CTA({ translations, locale }: CTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sectionInView = useInView(ref, { once: true, margin: "-100px" });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary to-cyan/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating orbs */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[150px]"
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-cyan/20 rounded-full opacity-30" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-accent/50" />
      <div className="absolute bottom-20 left-20 w-2 h-2 rounded-full bg-cyan/50" />

      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon with glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={sectionInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative inline-block mb-8"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-accent/30 blur-xl" />
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-cyan/30 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/50 mb-6"
          >
            <Zap className="w-4 h-4 text-accent" />
            {locale === "zh" ? "立即联系，开启合作" : "Start Your Partnership Today"}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            {translations.cta.title.split(" ").map((word, i, arr) => (
              <span key={i} className={cn(
                i === arr.length - 1 || (arr[i-1] && arr[i-1].endsWith("?")) ? "gradient-text" : ""
              )}>
                {word}{" "}
              </span>
            ))}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto"
          >
            {translations.cta.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={`/${locale}/contact`}>
              <Button size="xl" className="group min-w-[200px]">
                <MessageCircle className="mr-2 w-5 h-5" />
                {translations.cta.button}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={`/${locale}/products`}>
              <Button variant="secondary" size="xl" className="min-w-[200px]">
                {locale === "zh" ? "探索产品" : "Explore Products"}
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {locale === "zh" ? "24小时内响应" : "Response within 24h"}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {locale === "zh" ? "专业技术支持" : "Technical Support"}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              {locale === "zh" ? "定制化方案" : "Custom Solutions"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
