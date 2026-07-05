"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animated/fade-in";
import { ScaleIn } from "@/components/animated/scale-in";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";
import { Timeline, Users, Award, Globe, Beaker, ArrowRight, Building2, Target, Eye, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

const teamMembers = [
  {
    name: "Chief Scientist",
    role: "Academician, Battery Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "30+ years in battery research"
  },
  {
    name: "CEO",
    role: "Technology Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Former CTO at leading battery company"
  },
  {
    name: "VP of R&D",
    role: "Materials Science PhD",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "MIT alumnus, 50+ publications"
  },
  {
    name: "Chief Engineer",
    role: "Battery Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "15+ years in battery system design"
  },
];

const milestones = [
  { year: "2020", title: "Company Founded", desc: "Established in Shenzhen with vision to revolutionize energy storage" },
  { year: "2021", title: "First Prototype", desc: "Successfully developed our first solid-state battery prototype with 400Wh/kg" },
  { year: "2022", title: "Major Breakthrough", desc: "Achieved 500Wh/kg energy density in laboratory conditions" },
  { year: "2023", title: "Mass Production Ready", desc: "Completed pilot production line with 100MWh capacity" },
  { year: "2024", title: "Global Expansion", desc: "Strategic partnerships with leading OEMs worldwide" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", titleZh: "创新", desc: "Pushing the boundaries of what's possible in energy storage technology", color: "#2F80FF" },
  { icon: Target, title: "Excellence", titleZh: "卓越", desc: "Relentless pursuit of quality in every product we develop", color: "#4FD1FF" },
  { icon: Heart, title: "Sustainability", titleZh: "可持续", desc: "Committed to reducing environmental impact through clean technology", color: "#10B981" },
  { icon: Globe, title: "Collaboration", titleZh: "合作", desc: "Working with partners worldwide to accelerate the energy transition", color: "#A855F7" },
];

const stats = [
  { value: "29+", label: "Patents" },
  { value: "50+", label: "Research Papers" },
  { value: "2000+", label: "m² R&D Center" },
  { value: "500MWh", label: "Capacity" },
];

export default function AboutPage() {
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
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 grid-pattern-strong opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px]" />

            <div className="container-padding mx-auto relative">
              <FadeIn className="text-center max-w-4xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6"
                >
                  <Building2 className="w-4 h-4 text-accent" />
                  {locale === "zh" ? "关于我们" : "About Us"}
                </motion.span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  {locale === "zh" ? "深安锂能" : "Swift Safe Energy"}
                </h1>
                <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                  {locale === "zh"
                    ? "我们是一家专注于高比能、高安全先进电池技术研发与产业化的新能源科技企业，致力于突破高能量密度电池在安全性、可靠性及工程化应用中的关键瓶颈。"
                    : "A new energy technology enterprise dedicated to R&D and industrialization of high energy density, high safety advanced battery technology."}
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Stats Banner */}
          <section className="py-12 bg-primary border-y border-white/5">
            <div className="container-padding mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-padding bg-secondary/[0.02]">
            <div className="container-padding mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <FadeIn direction="right">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-8 md:p-10 rounded-3xl glass-card-hover h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      {locale === "zh" ? "我们的使命" : "Our Mission"}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {locale === "zh"
                        ? "通过革命性的电池技术，加速世界向可持续能源的转型。我们致力于开发更安全、更高能量密度、更长寿命的固态电池，为清洁能源未来贡献力量。"
                        : "To accelerate the world's transition to sustainable energy through revolutionary battery technology."}
                    </p>
                  </motion.div>
                </FadeIn>
                <FadeIn direction="left" delay={0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-8 md:p-10 rounded-3xl glass-card-hover h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                      <Eye className="w-7 h-7 text-cyan" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      {locale === "zh" ? "我们的愿景" : "Our Vision"}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {locale === "zh"
                        ? "一个由安全、高性能储能驱动的世界，释放无限可能。我们相信，先进的电池技术将改变人类利用能源的方式。"
                        : "A world powered by safe, high-performance energy storage that enables infinite possibilities."}
                    </p>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="section-padding bg-primary">
            <div className="container-padding mx-auto">
              <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                  <Timeline className="w-4 h-4" />
                  {locale === "zh" ? "发展历程" : "Journey"}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {locale === "zh" ? "里程碑" : "Milestones"}
                </h2>
              </FadeIn>

              <div className="relative">
                <div className="absolute top-6 left-0 right-0 h-[2px] bg-white/10" />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                  {milestones.map((milestone, index) => (
                    <FadeIn key={milestone.year} delay={index * 0.1}>
                      <div className="relative text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="relative z-10 w-3 h-3 mx-auto mb-4 rounded-full bg-accent shadow-lg shadow-accent/50"
                        />
                        <h4 className="text-lg font-heading font-bold text-accent mb-1">{milestone.year}</h4>
                        <h5 className="text-white font-medium mb-2 text-sm">{milestone.title}</h5>
                        <p className="text-xs text-white/50 hidden md:block">{milestone.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding bg-secondary/[0.02]">
            <div className="container-padding mx-auto">
              <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                  <Award className="w-4 h-4" />
                  {locale === "zh" ? "企业文化" : "Values"}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {locale === "zh" ? "核心价值观" : "Core Values"}
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <FadeIn key={value.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="p-6 rounded-2xl glass-card-hover text-center group"
                    >
                      <div
                        className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${value.color}15` }}
                      >
                        <value.icon className="w-7 h-7" style={{ color: value.color }} />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-white mb-1">
                        {locale === "zh" ? value.titleZh : value.title}
                      </h3>
                      <p className="text-sm text-white/50">{value.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="section-padding bg-primary">
            <div className="container-padding mx-auto">
              <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wider uppercase">
                  <Users className="w-4 h-4" />
                  {locale === "zh" ? "研发团队" : "Team"}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {locale === "zh" ? "专家团队" : "Expert Team"}
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <FadeIn key={member.name} delay={index * 0.1}>
                    <ScaleIn>
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="group relative"
                      >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-white">{member.name}</h3>
                        <p className="text-sm text-accent mb-1">{member.role}</p>
                        <p className="text-xs text-white/40">{member.bio}</p>
                      </motion.div>
                    </ScaleIn>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gradient-to-br from-accent/10 via-primary to-cyan/10 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]" />

            <div className="container-padding mx-auto relative text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  {locale === "zh" ? "与我们合作" : "Partner With Us"}
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  {locale === "zh"
                    ? "如果您对我们的技术或合作机会感兴趣，欢迎联系我们。"
                    : "If you're interested in our technology or partnership opportunities, we'd love to hear from you."}
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
    </>
  );
}
