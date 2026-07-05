"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Battery, RefreshCw, Sparkles, Lock, Timer, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoreAdvantagesProps {
  translations: {
    advantages: {
      title: string;
      subtitle: string;
      safety: { title: string; desc: string };
      energy: { title: string; desc: string };
      charging: { title: string; desc: string };
      lifecycle: { title: string; desc: string };
    };
  };
}

const advantages = [
  {
    key: "safety",
    icon: Shield,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "shadow-emerald-500/20",
    accentColor: "#10B981",
    stat: "0",
    statLabel: "热失控事件",
  },
  {
    key: "energy",
    icon: Zap,
    gradient: "from-accent/20 via-accent/5 to-transparent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "hover:border-accent/40",
    glowColor: "shadow-accent/20",
    accentColor: "#2F80FF",
    stat: "570+",
    statLabel: "Wh/kg",
  },
  {
    key: "charging",
    icon: Timer,
    gradient: "from-cyan/20 via-cyan/5 to-transparent",
    iconBg: "bg-cyan/10",
    iconColor: "text-cyan",
    borderColor: "hover:border-cyan/40",
    glowColor: "shadow-cyan/20",
    accentColor: "#4FD1FF",
    stat: "10C",
    statLabel: "峰值放电",
  },
  {
    key: "lifecycle",
    icon: RefreshCw,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/40",
    glowColor: "shadow-purple-500/20",
    accentColor: "#A855F7",
    stat: "500+",
    statLabel: "循环寿命",
  },
];

export function CoreAdvantages({ translations }: CoreAdvantagesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-padding mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wider uppercase"
          >
            <Sparkles className="w-4 h-4" />
            {translations.advantages.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
          >
            {translations.advantages.subtitle}
          </motion.h2>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const data = translations.advantages[advantage.key as keyof typeof translations.advantages];
            const Icon = advantage.icon;

            return (
              <motion.div
                key={advantage.key}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative h-full rounded-2xl overflow-hidden",
                    "bg-gradient-to-br",
                    advantage.gradient,
                    "border border-white/[0.06]",
                    "transition-all duration-400",
                    advantage.borderColor,
                    "hover:shadow-2xl",
                    advantage.glowColor,
                    "p-7"
                  )}
                >
                  {/* Animated glow on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br from-white/[0.03] to-transparent"
                    )}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white/5 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center",
                        advantage.iconBg,
                        "group-hover:scale-110 transition-transform duration-300"
                      )}
                    >
                      <Icon className={cn("w-7 h-7", advantage.iconColor)} />
                    </div>
                    {/* Icon glow */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                        advantage.iconBg
                      )}
                      style={{ transform: "scale(1.5)", zIndex: -1 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {data.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                      {data.desc}
                    </p>
                  </div>

                  {/* Stat highlight */}
                  <div className="relative flex items-baseline gap-2">
                    <span
                      className={cn("text-3xl font-heading font-bold", advantage.iconColor)}
                      style={{ textShadow: `0 0 30px ${advantage.accentColor}40` }}
                    >
                      {advantage.stat}
                    </span>
                    <span className="text-sm text-white/30">{advantage.statLabel}</span>
                  </div>

                  {/* Animated border gradient on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      padding: "1px",
                      background: `linear-gradient(135deg, ${advantage.accentColor}40, transparent, ${advantage.accentColor}40)`,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
