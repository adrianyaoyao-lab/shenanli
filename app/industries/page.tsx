"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animated/fade-in";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";
import Image from "next/image";
import { Plane, Bot, Cog, Battery, Smartphone, ArrowRight, Check, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

const industries = [
  {
    id: "ev",
    icon: Plane,
    title: "UAVs & eVTOLs",
    titleZh: "无人机与eVTOL",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
    desc: "Our ultra-lightweight, high-energy-density solid-state batteries extend flight times and enable heavier payloads for commercial drones and electric vertical takeoff aircraft.",
    descZh: "我们的超轻量、高能量密度固态电池延长飞行时间，为商业无人机和电动垂直起降飞行器实现更大有效载荷。",
    specs: [
      "40%+ longer flight time",
      "30% weight reduction",
      "High discharge rate",
      "Wide temperature range",
    ],
    specsZh: [
      "飞行时间延长40%以上",
      "重量减轻30%",
      "高放电率",
      "宽温度范围",
    ],
  },
  {
    id: "drone",
    icon: Bot,
    title: "Embodied AI",
    titleZh: "具身智能",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    desc: "Reliable, long-lasting power solutions for humanoid robots and embodied AI systems that demand consistent high performance.",
    descZh: "为人形机器人和具身智能系统提供可靠、持久的高性能动力解决方案。",
    specs: [
      "High power output",
      "Rapid charging",
      "Long cycle life",
      "Compact design",
    ],
    specsZh: [
      "高功率输出",
      "快速充电",
      "长循环寿命",
      "紧凑设计",
    ],
  },
  {
    id: "robot",
    icon: Cog,
    title: "Quadruped Robots",
    titleZh: "四足机器狗",
    image: "https://images.unsplash.com/photo-1555696952-5e6d90c66c1f?w=1200&q=80",
    desc: "High-power-density batteries designed for legged robots used in inspection, exploration, and various industrial applications.",
    descZh: "专为巡检、探索和各种工业应用中的四足机器人设计的高功率密度电池。",
    specs: [
      "High discharge capability",
      "Shock resistant",
      "Long operational hours",
      "Fast charging support",
    ],
    specsZh: [
      "高放电能力",
      "抗冲击",
      "长运行时间",
      "支持快充",
    ],
  },
  {
    id: "storage",
    icon: Battery,
    title: "Underwater Robots",
    titleZh: "水下机器人",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&q=80",
    desc: "Specially engineered batteries for underwater ROVs and AUVs operating in extreme pressure and corrosive environments.",
    descZh: "专为在极端压力和腐蚀环境中作业的水下ROV和AUV设计的电池。",
    specs: [
      "High pressure rated",
      "Corrosion resistant",
      "Deep discharge capable",
      "Extended runtime",
    ],
    specsZh: [
      "耐高压",
      "耐腐蚀",
      "支持深度放电",
      "长运行时间",
    ],
  },
  {
    id: "electronics",
    icon: Smartphone,
    title: "Consumer Electronics",
    titleZh: "消费电子",
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1200&q=80",
    desc: "Compact, ultra-safe solid-state batteries for premium smartphones, laptops, wearables, and other personal devices.",
    descZh: "为高端智能手机、笔记本电脑、可穿戴设备和其他个人设备打造的紧凑型、极致安全的固态电池。",
    specs: [
      "All-day battery life",
      "15-minute fast charge",
      "Ultra-thin options",
      "Zero thermal runaway",
    ],
    specsZh: [
      "全天电池续航",
      "15分钟快充",
      "超薄选项",
      "零热失控",
    ],
  },
];

export default function IndustriesPage() {
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
                {locale === "zh" ? "行业应用" : "Industries"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {locale === "zh" ? "赋能各行各业" : "Powering Industries"}
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {locale === "zh"
                  ? "我们的固态电池技术为无人机、具身智能、四足机器狗、水下机器人和消费电子等行业提供创新的动力解决方案。"
                  : "Our solid-state battery technology provides innovative power solutions for UAVs, embodied AI, quadruped robots, underwater robots, and consumer electronics."}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Industries */}
        <div className="space-y-0">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={industry.id}
                className={`section-padding ${index % 2 === 0 ? 'bg-secondary/[0.02]' : 'bg-primary'} relative overflow-hidden`}
              >
                {/* Background Image (for odd sections) */}
                {!isEven && (
                  <div className="absolute inset-0">
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      className="object-cover opacity-10"
                    />
                  </div>
                )}

                <div className={`container-padding mx-auto relative ${isEven ? '' : 'bg-primary/80 rounded-3xl p-8 md:p-12'}`}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className={`${isEven ? '' : 'lg:order-2'}`}>
                      <FadeIn>
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                          <Image
                            src={industry.image}
                            alt={locale === "zh" ? industry.titleZh : industry.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                          {/* Icon */}
                          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <industry.icon className="w-6 h-6 text-cyan" />
                          </div>
                        </div>
                      </FadeIn>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? '' : 'lg:order-1'}`}>
                      <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                          {locale === "zh" ? industry.titleZh : industry.title}
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                          {locale === "zh" ? industry.descZh : industry.desc}
                        </p>

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {(locale === "zh" ? industry.specsZh : industry.specs).map((spec, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-accent" />
                              </div>
                              <span className="text-sm text-white/70">{spec}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={`/${locale}/contact`}>
                          <Button variant="outline" size="lg" className="group">
                            {locale === "zh" ? "获取方案" : "Get Solution"}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-primary">
          <div className="container-padding mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                {locale === "zh" ? "您的行业不在列表中？" : "Don't See Your Industry?"}
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                {locale === "zh"
                  ? "我们的团队可以根据您的特定需求提供定制化的解决方案。"
                  : "Our team can provide customized solutions based on your specific requirements."}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="group">
                  {locale === "zh" ? "联系我们" : "Contact Us"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
