"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CompanyIntro } from "@/components/sections/company-intro";
import { CoreAdvantages } from "@/components/sections/core-advantages";
import { Products } from "@/components/sections/products";
import { RDCapabilities } from "@/components/sections/rd-capabilities";
import { IndustryApplications } from "@/components/sections/industry-applications";
import { Partners } from "@/components/sections/partners";
import { News } from "@/components/sections/news";
import { CTA } from "@/components/sections/cta";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/animations";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messages = { en, zh };

export default function HomePage() {
  const [locale, setLocale] = useState<"en" | "zh">("en");
  const currentMessages = messages[locale];

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress color="accent" height="sm" />

      {/* Cursor Follower Effect */}
      <CursorFollower color="rgba(47, 128, 255, 0.08)" size={500} />

      <NextIntlClientProvider messages={currentMessages} locale={locale}>
        <Header
          translations={currentMessages}
          locale={locale}
          onLocaleChange={(newLocale) => setLocale(newLocale as "en" | "zh")}
        />
        <main>
          <Hero translations={currentMessages} locale={locale} />
          <CompanyIntro translations={currentMessages} locale={locale} />
          <CoreAdvantages translations={currentMessages} />
          <Products translations={currentMessages} locale={locale} />
          <RDCapabilities translations={currentMessages} locale={locale} />
          <IndustryApplications translations={currentMessages} locale={locale} />
          <Partners translations={currentMessages} locale={locale} />
          <News translations={currentMessages} locale={locale} />
          <CTA translations={currentMessages} locale={locale} />
        </main>
        <Footer translations={currentMessages} locale={locale} />
      </NextIntlClientProvider>
    </>
  );
}
