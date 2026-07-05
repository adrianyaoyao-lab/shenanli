"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animated/fade-in";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";
import Image from "next/image";
import { Calendar, ArrowRight, Tag, Newspaper } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

const newsItems = [
  {
    id: 1,
    slug: "solid-state-battery-breakthrough",
    title: "Solid-State Battery Breakthrough Achieves 500Wh/kg",
    titleZh: "固态电池突破：达到500Wh/kg能量密度",
    date: "2024-01-15",
    category: "Technology",
    categoryZh: "技术",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    excerpt: "Our research team has achieved a major milestone by developing a solid-state battery with 500Wh/kg energy density, marking a significant advancement in battery technology.",
    excerptZh: "我们的研发团队开发出了能量密度达到500Wh/kg的固态电池，这是电池技术领域的重大突破。",
    featured: true,
  },
  {
    id: 2,
    slug: "strategic-partnership",
    title: "Strategic Partnership with Leading EV Manufacturer",
    titleZh: "与领先电动汽车制造商达成战略合作",
    date: "2024-01-10",
    category: "Business",
    categoryZh: "业务",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    excerpt: "We are pleased to announce a strategic partnership with a leading electric vehicle manufacturer to develop next-generation battery solutions.",
    excerptZh: "我们很高兴宣布与一家领先的电动汽车制造商建立战略合作，共同开发下一代电池解决方案。",
    featured: false,
  },
  {
    id: 3,
    slug: "rd-center-expansion",
    title: "New R&D Center Opens in Shenzhen",
    titleZh: "深圳新研发中心启用",
    date: "2024-01-05",
    category: "Company",
    categoryZh: "公司",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    excerpt: "Our state-of-the-art R&D center in Shenzhen is now operational, featuring advanced laboratories and testing facilities.",
    excerptZh: "我们位于深圳的先进研发中心现已投入运营，配备了先进的实验室和测试设施。",
    featured: false,
  },
  {
    id: 4,
    slug: "patent-awards",
    title: "30 Patents Granted in 2023",
    titleZh: "2023年获得30项专利",
    date: "2023-12-20",
    category: "Technology",
    categoryZh: "技术",
    image: "https://images.unsplash.com/photo-1518544866330-4e716499f800?w=800&q=80",
    excerpt: "Our commitment to innovation has resulted in 30 new patents being granted in 2023, covering key areas of solid-state battery technology.",
    excerptZh: "我们对创新的承诺在2023年带来了30项新专利，涵盖固态电池技术的关键领域。",
    featured: false,
  },
  {
    id: 5,
    slug: "global-expansion",
    title: "European Office Opening",
    titleZh: "欧洲办公室成立",
    date: "2023-12-15",
    category: "Company",
    categoryZh: "公司",
    image: "https://images.unsplash.com/photo-1467226632440-65f0b4957563?w=800&q=80",
    excerpt: "We're expanding our global presence with a new office in Munich, Germany, to better serve our European partners and customers.",
    excerptZh: "我们在德国慕尼黑设立新办公室，扩大全球业务范围，更好地为欧洲合作伙伴和客户提供服务。",
    featured: false,
  },
  {
    id: 6,
    slug: "industry-award",
    title: "Best Battery Innovation Award 2023",
    titleZh: "2023年度最佳电池创新奖",
    date: "2023-12-01",
    category: "Award",
    categoryZh: "奖项",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=800&q=80",
    excerpt: "We are honored to receive the Best Battery Innovation Award at the Global Energy Summit 2023.",
    excerptZh: "我们很荣幸在2023年全球能源峰会上获得最佳电池创新奖。",
    featured: false,
  },
];

const categories = ["All", "Technology", "Business", "Company", "Award"];
const categoriesZh = ["全部", "技术", "业务", "公司", "奖项"];

export default function NewsPage() {
  const [locale, setLocale] = useState<"en" | "zh">("en");
  const [activeCategory, setActiveCategory] = useState("All");
  const currentMessages = messages[locale];

  const filteredNews = activeCategory === "All"
    ? newsItems
    : newsItems.filter((item) => {
        const cat = locale === "zh" ? categoriesZh[categories.indexOf(activeCategory)] : activeCategory;
        return (locale === "zh" ? item.categoryZh : item.category) === cat;
      });

  const featuredItem = newsItems.find((item) => item.featured);

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
                {locale === "zh" ? "新闻中心" : "News"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {locale === "zh" ? "最新动态" : "Latest Updates"}
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {locale === "zh"
                  ? "了解深安锂能的最新发展、技术突破和行业动态。"
                  : "Stay updated with the latest developments, technological breakthroughs, and industry news from Deep Safe Lithium Energy."}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Article */}
        {featuredItem && (
          <section className="section-padding bg-secondary/[0.02]">
            <div className="container-padding mx-auto">
              <FadeIn>
                <Link href={`/${locale}/news/${featuredItem.slug}`}>
                  <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                    <div className="relative aspect-[21/9]">
                      <Image
                        src={featuredItem.image}
                        alt={locale === "zh" ? featuredItem.titleZh : featuredItem.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-sm font-medium text-accent">
                          {locale === "zh" ? featuredItem.categoryZh : featuredItem.category}
                        </span>
                        <div className="flex items-center gap-2 text-white/50">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{featuredItem.date}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 group-hover:text-accent transition-colors">
                        {locale === "zh" ? featuredItem.titleZh : featuredItem.title}
                      </h2>

                      <p className="text-white/60 max-w-2xl mb-6">
                        {locale === "zh" ? featuredItem.excerptZh : featuredItem.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-accent group-hover:text-cyan transition-colors">
                        {locale === "zh" ? "阅读更多" : "Read More"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </section>
        )}

        {/* News List */}
        <section className="section-padding bg-primary">
          <div className="container-padding mx-auto">
            {/* Category Filter */}
            <FadeIn className="flex flex-wrap gap-3 mb-12">
              {(locale === "zh" ? categoriesZh : categories).map((cat, index) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(categories[index])}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === categories[index]
                      ? "bg-accent text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </FadeIn>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.filter(item => !item.featured).map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.1}>
                  <article className="group cursor-pointer">
                    <Link href={`/${locale}/news/${item.slug}`}>
                      {/* Image */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={item.image}
                          alt={locale === "zh" ? item.titleZh : item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="flex items-center gap-3 text-white/40 mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs">
                          {locale === "zh" ? item.categoryZh : item.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">{item.date}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {locale === "zh" ? item.titleZh : item.title}
                      </h3>

                      <p className="text-sm text-white/50 line-clamp-2">
                        {locale === "zh" ? item.excerptZh : item.excerpt}
                      </p>
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer translations={currentMessages} locale={locale} />
    </NextIntlClientProvider>
  );
}
