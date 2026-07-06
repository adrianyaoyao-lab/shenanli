"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Zap, Battery, Cpu, Settings } from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductsProps {
  translations: {
    products: {
      title: string;
      subtitle: string;
      viewDetails: string;
      power: { title: string; desc: string; specs: string };
      storage: { title: string; desc: string; specs: string };
      drone: { title: string; desc: string; specs: string };
      consumer: { title: string; desc: string; specs: string };
    };
  };
  locale: string;
}

const products = [
  {
    key: "power",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    icon: Zap,
    badge: "360-P",
    gradient: "from-accent/20 to-transparent",
    accentColor: "#2F80FF",
  },
  {
    key: "storage",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    icon: Battery,
    badge: "400-E",
    gradient: "from-emerald-500/20 to-transparent",
    accentColor: "#10B981",
  },
  {
    key: "drone",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    icon: Cpu,
    badge: "460-X",
    gradient: "from-purple-500/20 to-transparent",
    accentColor: "#A855F7",
  },
  {
    key: "consumer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: Settings,
    badge: "System",
    gradient: "from-orange-500/20 to-transparent",
    accentColor: "#F97316",
  },
];

export function Products({ translations, locale }: ProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="section-padding bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute inset-0 grid-pattern-strong opacity-30" />

      <div className="container-padding mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
            {locale === "zh" ? "产品中心" : "Products"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {translations.products.title}
          </h2>
          <p className="text-lg text-white/60">
            {translations.products.subtitle}
          </p>
        </motion.div>

        {/* Products Grid - Bento style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const data = (translations.products as Record<string, {title?: string; desc?: string; specs?: string}>)[product.key];
            const Icon = product.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={sectionInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <Link href={`/${locale}/products`}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "relative rounded-3xl overflow-hidden",
                      "bg-gradient-to-br",
                      product.gradient,
                      "border border-white/[0.06]",
                      "hover:border-white/[0.12]",
                      "transition-all duration-400",
                      isLarge ? "aspect-[16/10]" : "aspect-[4/3] md:aspect-square"
                    )}
                  >
                    {/* Background Image with Parallax */}
                    <ProductImage src={product.image} alt={data?.title ?? ''} />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <span className="text-xs font-medium text-white">{product.badge}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ color: product.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {data.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/60 mb-3 line-clamp-2">
                        {data.desc}
                      </p>
                      <p className="text-xs md:text-sm font-medium tracking-wide" style={{ color: product.accentColor }}>
                        {data.specs}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Animated border glow on hover */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${product.accentColor}40`,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 text-accent hover:text-cyan transition-colors duration-300 group"
          >
            <span className="font-medium">
              {locale === "zh" ? "查看全部产品" : "View All Products"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Product image with subtle parallax
function ProductImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
