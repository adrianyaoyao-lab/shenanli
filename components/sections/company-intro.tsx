"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animated/fade-in";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CompanyIntroProps {
  translations: {
    about: {
      companyTitle: string;
      companyDesc: string;
    };
    nav: {
      about: string;
    };
  };
  locale: string;
}

export function CompanyIntro({ translations, locale }: CompanyIntroProps) {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-padding mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <FadeIn direction="right">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase"
              >
                {locale === "zh" ? "关于我们" : "About Us"}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6"
              >
                {translations.about.companyTitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 leading-relaxed mb-8"
              >
                {translations.about.companyDesc}
              </motion.p>

              <Link href={`/${locale}/about`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 text-accent hover:text-cyan transition-colors duration-300 group"
                >
                  <span className="font-medium">
                    {locale === "zh" ? "了解更多" : "Learn More"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </div>
          </FadeIn>

          {/* Right: Image */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/about-company.png"
                  alt="Company"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating Stats Card - Moved to not overlap with image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 p-5 rounded-2xl glass-card z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-accent">10+</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {locale === "zh" ? "年研发经验" : "Years R&D Experience"}
                    </p>
                    <p className="text-sm text-white/50">
                      {locale === "zh" ? "专注固态电池" : "Solid-State Focus"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-cyan/10 rounded-full" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
