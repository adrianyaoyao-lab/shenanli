"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import Link from "next/link";

interface NewsProps {
  translations: {
    news: {
      title: string;
      subtitle: string;
      readMore: string;
      viewAll: string;
    };
  };
  locale: string;
}

const newsItems = [
  {
    id: 1,
    title: "Solid-State Battery Breakthrough Achieves 500Wh/kg",
    date: "2024-01-15",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    id: 2,
    title: "Strategic Partnership with Leading EV Manufacturer",
    date: "2024-01-10",
    category: "Business",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
  },
  {
    id: 3,
    title: "New R&D Center Opens in Shenzhen",
    date: "2024-01-05",
    category: "Company",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
];

export function News({ translations, locale }: NewsProps) {
  return (
    <section className="section-padding bg-primary relative">
      <div className="container-padding mx-auto">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase">
              {locale === "zh" ? "新闻动态" : "News"}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {translations.news.title}
            </h2>
            <p className="text-white/60 mt-2">{translations.news.subtitle}</p>
          </div>

          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-accent hover:text-cyan transition-colors duration-300 group"
          >
            <span className="font-medium">{translations.news.viewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Link href={`/${locale}/news`}>
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <span className="text-xs font-medium text-white">{item.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 text-white/40 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.date}</span>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:text-cyan transition-colors duration-300">
                      {translations.news.readMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
