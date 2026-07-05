"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animated/fade-in";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

export default function ContactPage() {
  const [locale, setLocale] = useState<"en" | "zh">("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentMessages = messages[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: locale === "zh" ? "地址" : "Address",
      content: locale === "zh"
        ? "深圳市南山区科技园"
        : "Shenzhen High-tech Park, China",
    },
    {
      icon: Phone,
      title: locale === "zh" ? "电话" : "Phone",
      content: "+86 755 XXXX XXXX",
    },
    {
      icon: Mail,
      title: locale === "zh" ? "邮箱" : "Email",
      content: "contact@swiftsafe.com",
    },
    {
      icon: Clock,
      title: locale === "zh" ? "营业时间" : "Business Hours",
      content: locale === "zh" ? "周一至周五 9:00 - 18:00" : "Monday - Friday, 9:00 - 18:00",
    },
  ];

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
                  <MessageCircle className="w-4 h-4 text-accent" />
                  {locale === "zh" ? "联系我们" : "Contact"}
                </motion.span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  {locale === "zh" ? "与我们联系" : "Get in Touch"}
                </h1>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                  {locale === "zh"
                    ? "无论您是想了解我们的技术、探讨合作机会，还是有任何问题，我们都期待与您交流。"
                    : "Whether you want to learn about our technology, explore partnerships, or have questions, we look forward to hearing from you."}
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-secondary/[0.02]">
            <div className="container-padding mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Info */}
                <FadeIn direction="right">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">
                      {locale === "zh" ? "联系方式" : "Contact Information"}
                    </h2>

                    <div className="space-y-6 mb-12">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-white font-medium mb-1">{info.title}</h3>
                            <p className="text-white/60">{info.content}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Map Placeholder */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-accent/50 mx-auto mb-4" />
                          <p className="text-white/50">Shenzhen, China</p>
                        </div>
                      </div>
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                    </motion.div>
                  </div>
                </FadeIn>

                {/* Contact Form */}
                <FadeIn direction="left" delay={0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 rounded-3xl glass-card"
                  >
                    <h2 className="text-2xl font-heading font-bold text-white mb-6">
                      {locale === "zh" ? "发送消息" : "Send a Message"}
                    </h2>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                          <Check className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-white mb-2">
                          {locale === "zh" ? "消息已发送！" : "Message Sent!"}
                        </h3>
                        <p className="text-white/60 mb-6">
                          {locale === "zh" ? "感谢您的留言，我们会尽快回复您。" : "Thank you! We'll get back to you soon."}
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                          {locale === "zh" ? "发送另一条" : "Send Another"}
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              {locale === "zh" ? "姓名 *" : "Name *"}
                            </label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder={locale === "zh" ? "请输入您的姓名" : "Enter your name"}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              {locale === "zh" ? "邮箱 *" : "Email *"}
                            </label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder={locale === "zh" ? "请输入您的邮箱" : "Enter your email"}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white/70 mb-2">
                            {locale === "zh" ? "公司" : "Company"}
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder={locale === "zh" ? "请输入您的公司名称" : "Enter your company"}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white/70 mb-2">
                            {locale === "zh" ? "留言 *" : "Message *"}
                          </label>
                          <Textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder={locale === "zh" ? "请输入您的留言内容..." : "Enter your message..."}
                            className="min-h-[150px]"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                          {isSubmitting ? (
                            locale === "zh" ? "发送中..." : "Sending..."
                          ) : (
                            <>
                              {locale === "zh" ? "发送消息" : "Send Message"}
                              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>

        <Footer translations={currentMessages} locale={locale} />
      </NextIntlClientProvider>
    </>
  );
}
