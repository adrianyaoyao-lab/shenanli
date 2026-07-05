"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/animated/fade-in";
import { cn } from "@/lib/utils";

interface PartnersProps {
  translations: {
    partners: {
      title: string;
      subtitle: string;
    };
  };
  locale: string;
}

// Partner categories - representing target industries/applications
const partnerCategories = [
  { name: "低空飞行", nameEn: "UAV & eVTOL", icon: "🚁", color: "#2F80FF" },
  { name: "具身智能", nameEn: "Embodied AI", icon: "🤖", color: "#4FD1FF" },
  { name: "深海装备", nameEn: "Underwater", icon: "🌊", color: "#10B981" },
  { name: "四足机器人", nameEn: "Legged Robots", icon: "🦿", color: "#A855F7" },
  { name: "特种装备", nameEn: "Special Equipment", icon: "⚡", color: "#F97316" },
  { name: "科研合作", nameEn: "Research", icon: "🔬", color: "#EC4899" },
];

export function Partners({ translations, locale }: PartnersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-padding mx-auto relative">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
            {translations.partners.title}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {translations.partners.subtitle}
          </h2>
        </FadeIn>

        {/* Partner Categories Grid - Card Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partnerCategories.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative rounded-2xl overflow-hidden",
                  "bg-white/[0.03] border border-white/[0.06]",
                  "transition-all duration-300",
                  "hover:bg-white/[0.06] hover:border-white/[0.12]",
                  "aspect-square flex flex-col items-center justify-center p-4",
                  hoveredIndex === index && "shadow-2xl"
                )}
                style={{
                  boxShadow: hoveredIndex === index
                    ? `0 0 40px ${partner.color}20, 0 20px 40px rgba(0,0,0,0.3)`
                    : undefined,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  )}
                  style={{
                    background: `radial-gradient(circle at center, ${partner.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <motion.span
                  className="text-4xl md:text-5xl mb-3 relative z-10"
                  animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {partner.icon}
                </motion.span>

                {/* Label */}
                <div className="text-center relative z-10">
                  <p className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    hoveredIndex === index ? "text-white" : "text-white/60"
                  )}>
                    {partner.name}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5 hidden md:block">
                    {partner.nameEn}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  )}
                  style={{
                    boxShadow: `inset 0 0 0 1px ${partner.color}40`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.5}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 text-sm text-white/40"
          >
            {locale === "zh" ? "合作 Logo 持续更新中，欢迎联系我们洽谈合作" : "Logos coming soon. Contact us to explore partnerships"}
          </motion.p>
        </FadeIn>
      </div>
    </section>
  );
}
