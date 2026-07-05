"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animated/fade-in";
import { ScaleIn } from "@/components/animated/scale-in";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";
import Image from "next/image";
import { Beaker, FileText, Award, Users, ChevronRight, Check, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NumberCounter } from "@/components/animated/number-counter";
import { motion } from "framer-motion";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

const coreTechnologies = [
  {
    icon: Beaker,
    title: "Solid Electrolyte",
    titleZh: "固态电解质",
    desc: "Our proprietary sulfide-based solid electrolyte enables high ionic conductivity while maintaining excellent stability and safety characteristics.",
    descZh: "我们专有的硫化物基固态电解质具有高离子电导率，同时保持优异的稳定性和安全性。",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    icon: FileText,
    title: "Electrode Materials",
    titleZh: "电极材料",
    desc: "Advanced lithium metal anodes and high-nickel cathodes designed specifically for solid-state battery applications.",
    descZh: "专为固态电池应用设计的高级锂金属阳极和高镍阴极。",
    image: "https://images.unsplash.com/photo-1518544866330-4e716499f800?w=600&q=80",
  },
  {
    icon: Award,
    title: "Cell Design",
    titleZh: "电芯设计",
    desc: "Innovative bipolar stacking architecture that maximizes energy density while minimizing internal resistance.",
    descZh: "创新的双极堆叠架构，最大化能量密度同时最小化内阻。",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
];

const patents = [
  { id: "CN112345678", title: "Solid Electrolyte Composition", date: "2023" },
  { id: "CN112345679", title: "High Energy Density Cathode", date: "2023" },
  { id: "US2023045678", title: "Bipolar Cell Architecture", date: "2024" },
  { id: "EP2345678.1", title: "Manufacturing Process", date: "2024" },
  { id: "CN112345680", title: "Safety Protection System", date: "2023" },
  { id: "US2023045679", title: "Fast Charging Protocol", date: "2024" },
];

export default function TechnologyPage() {
  const [locale, setLocale] = useState<"en" | "zh">("en");
  const currentMessages = messages[locale];

  return (
    <>
      <ScrollProgress color="accent" height="sm" />
      <CursorFollower color="rgba(47, 128, 255, 0.08)" size={500} />

      <NextIntlClientProvider messages={currentMessages} locale={locale}>
        <Header
          translations={currentMessages}
          locale={locale}
          onLocaleChange={(newLocale) => setLocale(newLocale as "en" | "zh")}
        />

        <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

          <div className="container-padding mx-auto relative">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                {locale === "zh" ? "技术研发" : "Technology"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {locale === "zh" ? "核心技术" : "Core Technology"}
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {locale === "zh"
                  ? "我们拥有世界领先的固态电池技术，涵盖材料研发、电芯设计和制造工艺等全产业链核心技术。"
                  : "We possess world-leading solid-state battery technology, covering core technologies across the entire value chain including materials R&D, cell design, and manufacturing processes."}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/[0.02] border-y border-white/5">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 30, suffix: "+", label: locale === "zh" ? "授权专利" : "Patents Granted" },
                { value: 50, suffix: "+", label: locale === "zh" ? "研发人员" : "R&D Engineers" },
                { value: 100, suffix: "M+", label: locale === "zh" ? "研发投入" : "R&D Investment" },
                { value: 5, suffix: "", label: locale === "zh" ? "全球实验室" : "Global Labs" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div>
                    <p className="text-4xl font-heading font-bold text-white">
                      <NumberCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/50 mt-1">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="section-padding bg-primary">
          <div className="container-padding mx-auto">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                {locale === "zh" ? "核心技术" : "Core Technologies"}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {locale === "zh" ? "三大技术支柱" : "Three Technical Pillars"}
              </h2>
            </FadeIn>

            <div className="space-y-16">
              {coreTechnologies.map((tech, index) => {
                const isEven = index % 2 === 0;
                return (
                  <FadeIn key={tech.title} delay={index * 0.1}>
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`${isEven ? '' : 'lg:order-2'}`}>
                        <ScaleIn>
                          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <Image
                              src={tech.image}
                              alt={locale === "zh" ? tech.titleZh : tech.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </ScaleIn>
                      </div>
                      <div className={`${isEven ? '' : 'lg:order-1'}`}>
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                          <tech.icon className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                          {locale === "zh" ? tech.titleZh : tech.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          {locale === "zh" ? tech.descZh : tech.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="section-padding bg-secondary/[0.02]">
          <div className="container-padding mx-auto">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                {locale === "zh" ? "知识产权" : "Intellectual Property"}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {locale === "zh" ? "专利墙" : "Patent Portfolio"}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patents.map((patent, index) => (
                <FadeIn key={patent.id} delay={index * 0.05}>
                  <div className="p-6 rounded-2xl glass-card hover:border-accent/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent">
                        {patent.id}
                      </span>
                      <span className="text-sm text-white/40">{patent.date}</span>
                    </div>
                    <h4 className="text-white font-medium">{patent.title}</h4>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* R&D Platform */}
        <section className="section-padding bg-primary">
          <div className="container-padding mx-auto">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                {locale === "zh" ? "研发平台" : "R&D Platform"}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {locale === "zh" ? "世界级研发设施" : "World-Class R&D Facilities"}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Materials Lab",
                  titleZh: "材料实验室",
                  desc: "State-of-the-art equipment for electrolyte and electrode material synthesis and characterization.",
                  descZh: "用于电解质和电极材料合成与表征的先进设备。",
                },
                {
                  title: "Cell Assembly",
                  titleZh: "电芯组装",
                  desc: "Automated dry room and cell assembly lines with precision environmental control.",
                  descZh: "配备精密环境控制的自动化干燥室和电芯组装线。",
                },
                {
                  title: "Testing Center",
                  titleZh: "测试中心",
                  desc: "Comprehensive testing capabilities including cycle life, safety, and performance validation.",
                  descZh: "全面的测试能力，包括循环寿命、安全性和性能验证。",
                },
              ].map((lab, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl glass-card">
                    <h3 className="text-xl font-heading font-semibold text-white mb-3">
                      {locale === "zh" ? lab.titleZh : lab.title}
                    </h3>
                    <p className="text-white/50">
                      {locale === "zh" ? lab.descZh : lab.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-primary">
          <div className="container-padding mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                {locale === "zh" ? "想了解我们的技术？" : "Want to Learn More About Our Technology?"}
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                {locale === "zh"
                  ? "我们的技术团队随时准备回答您的问题并提供详细的技术咨询。"
                  : "Our technical team is ready to answer your questions and provide detailed technical consultation."}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="group">
                  {locale === "zh" ? "技术咨询" : "Technical Inquiry"}
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer translations={currentMessages} locale={locale} />
    </NextIntlClientProvider>
  );
}
