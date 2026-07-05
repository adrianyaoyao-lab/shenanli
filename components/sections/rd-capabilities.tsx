"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FlaskConical, Layers, FileText, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RDCapabilitiesProps {
  translations: {
    technology: {
      title: string;
      subtitle: string;
      platform: string;
      platformDesc: string;
      materials: string;
      materialsDesc: string;
      patents: string;
      patentsDesc: string;
      team: string;
      teamDesc: string;
    };
    timeline: {
      title: string;
      subtitle: string;
      items: Record<string, string>;
    };
  };
  locale: string;
}

const capabilities = [
  {
    key: "platform",
    icon: Layers,
    color: "accent",
    gradient: "from-accent/20 to-transparent",
    stats: "4",
    statsLabel: locale => locale === "zh" ? "材料体系" : "Material Systems",
  },
  {
    key: "materials",
    icon: FlaskConical,
    color: "cyan",
    gradient: "from-cyan/20 to-transparent",
    stats: "50+",
    statsLabel: locale => locale === "zh" ? "学术论文" : "Papers",
  },
  {
    key: "patents",
    icon: FileText,
    color: "purple",
    gradient: "from-purple-500/20 to-transparent",
    stats: "29+",
    statsLabel: locale => locale === "zh" ? "发明专利" : "Patents",
  },
  {
    key: "team",
    icon: Users,
    color: "green",
    gradient: "from-emerald-500/20 to-transparent",
    stats: "1",
    statsLabel: locale => locale === "zh" ? "院士团队" : "Academician Team",
  },
];

const colorMap = {
  accent: { text: "text-accent", bg: "bg-accent/10", glow: "shadow-accent/30" },
  cyan: { text: "text-cyan", bg: "bg-cyan/10", glow: "shadow-cyan/30" },
  purple: { text: "text-purple-400", bg: "bg-purple-400/10", glow: "shadow-purple-400/30" },
  green: { text: "text-emerald-400", bg: "bg-emerald-400/10", glow: "shadow-emerald-400/30" },
};

export function RDCapabilities({ translations, locale }: RDCapabilitiesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const timelineYears = Object.keys(translations.timeline.items);

  return (
    <section ref={containerRef} className="section-padding bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-padding mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wider uppercase">
            <FlaskConical className="w-4 h-4" />
            R&D
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {translations.technology.title}
          </h2>
          <p className="text-lg text-white/60">
            {translations.technology.subtitle}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap, index) => {
            const data = translations.technology[cap.key as keyof typeof translations.technology];
            const Icon = cap.icon;
            const colors = colorMap[cap.color as keyof typeof colorMap];

            return (
              <motion.div
                key={cap.key}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={sectionInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <Link href={`/${locale}/technology`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "relative rounded-2xl overflow-hidden",
                      "bg-gradient-to-br",
                      cap.gradient,
                      "border border-white/[0.06]",
                      "hover:border-white/[0.12]",
                      "transition-all duration-400",
                      "p-6 h-full",
                      "group-hover:shadow-2xl",
                      colors.glow
                    )}
                  >
                    {/* Icon */}
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                      "group-hover:scale-110 transition-transform duration-300",
                      colors.bg
                    )}>
                      <Icon className={cn("w-7 h-7", colors.text)} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">
                      {data}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {translations.technology[`${cap.key}Desc` as keyof typeof translations.technology]}
                    </p>

                    {/* Stats */}
                    <div className="flex items-baseline gap-2">
                      <span className={cn("text-3xl font-heading font-bold", colors.text)}>
                        {cap.stats}
                      </span>
                      <span className="text-sm text-white/40">
                        {cap.statsLabel(locale)}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              {translations.timeline.title}
            </h3>
            <p className="text-white/50">
              {translations.timeline.subtitle}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress line background */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-white/10" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-6 left-0 h-[2px] bg-gradient-to-r from-accent to-cyan"
              style={{ width: `${timelineProgress}%` }}
            />

            {/* Timeline items */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {timelineYears.map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="relative text-center"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={sectionInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="relative z-10 w-3 h-3 mx-auto mb-4 rounded-full bg-accent shadow-lg shadow-accent/50"
                  />

                  {/* Year */}
                  <div className="text-lg font-heading font-bold text-white mb-1">
                    {year}
                  </div>

                  {/* Title */}
                  <div className="text-xs md:text-sm text-white/50">
                    {translations.timeline.items[year]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 p-8 md:p-10 rounded-3xl glass-card"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 29, suffix: "+", label: locale === "zh" ? "发明专利" : "Invention Patents" },
              { value: 50, suffix: "+", label: locale === "zh" ? "学术论文" : "Research Papers" },
              { value: 500, suffix: "MWh", label: locale === "zh" ? "产能规模" : "Production Capacity" },
              { value: 2000, suffix: "+", label: locale === "zh" ? "平米研发中心" : "R&D Center (m²)" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {stat.value}<span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/technology`}
            className="inline-flex items-center gap-2 text-accent hover:text-cyan transition-colors duration-300 group"
          >
            <span className="font-medium">
              {locale === "zh" ? "了解更多研发实力" : "Learn More About Our R&D"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
