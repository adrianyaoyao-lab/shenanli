"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Bot, Cog, Battery, Truck, ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import Link from "next/link";

interface IndustryApplicationsProps {
  translations: {
    industries: {
      title: string;
      subtitle: string;
      ev: { title: string; desc: string };
      drone: { title: string; desc: string };
      robot: { title: string; desc: string };
      storage: { title: string; desc: string };
      electronics: { title: string; desc: string };
    };
  };
  locale: string;
}

const industries = [
  {
    key: "ev",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
  },
  {
    key: "drone",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    key: "robot",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
  },
  {
    key: "storage",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    key: "electronics",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
];

export function IndustryApplications({ translations, locale }: IndustryApplicationsProps) {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-padding mx-auto relative">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
            {locale === "zh" ? "行业应用" : "Industries"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {translations.industries.title}
          </h2>
          <p className="text-lg text-white/60">
            {translations.industries.subtitle}
          </p>
        </FadeIn>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const data = (translations.industries as Record<string, {title?: string; desc?: string}>)[industry.key];
            const Icon = industry.icon;
            const isLarge = index === 0 || index === 4;

            return (
              <FadeIn key={industry.key} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative rounded-3xl overflow-hidden ${isLarge ? 'lg:col-span-2' : ''}`}
                >
                  <Link href={`/${locale}/industries`}>
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={industry.image}
                        alt={data?.title ?? ''}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

                      {/* Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">
                          {data.title}
                        </h3>
                        <p className="text-sm text-white/60">
                          {data.desc}
                        </p>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-3xl transition-colors duration-300" />
                    </div>
                  </Link>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
