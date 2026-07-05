/**
 * Content Types - Central type definitions for all translations
 * All content strings are managed here for i18n support
 */

// Navigation
export interface NavContent {
  home: string;
  about: string;
  products: string;
  technology: string;
  industries: string;
  news: string;
  contact: string;
}

// Hero Section
export interface HeroKeywords {
  lowAltitude: string;
  embodiedAI: string;
  deepSea: string;
}

export interface HeroStats {
  energyDensity: string;
  cycleLife: string;
  patents: string;
}

export interface HeroContent {
  title: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  explore: string;
  contact: string;
  keywords: HeroKeywords;
  stats: HeroStats;
}

// About Section
export interface AboutContent {
  companyTitle: string;
  companyDesc: string;
}

// Advantages Section
export interface AdvantageItem {
  title: string;
  desc: string;
}

export interface AdvantagesContent {
  title: string;
  subtitle: string;
  safety: AdvantageItem;
  energy: AdvantageItem;
  charging: AdvantageItem;
  lifecycle: AdvantageItem;
}

// Products Section
export interface ProductItem {
  title: string;
  desc: string;
  specs: string;
}

export interface ProductsContent {
  title: string;
  subtitle: string;
  viewDetails: string;
  power: ProductItem;
  storage: ProductItem;
  drone: ProductItem;
  consumer: ProductItem;
}

// Technology Section
export interface TechnologyContent {
  title: string;
  subtitle: string;
  platform: string;
  platformDesc: string;
  materials: string;
  materialsDesc: string;
  patents: string;
  patentsDesc: string;
  team: string;
  teamDesc: string;
}

// Industries Section
export interface IndustryItem {
  title: string;
  desc: string;
}

export interface IndustriesContent {
  title: string;
  subtitle: string;
  ev: IndustryItem;
  drone: IndustryItem;
  robot: IndustryItem;
  storage: IndustryItem;
  electronics: IndustryItem;
}

// Partners Section
export interface PartnersContent {
  title: string;
  subtitle: string;
}

// News Section
export interface NewsContent {
  title: string;
  subtitle: string;
  readMore: string;
  viewAll: string;
}

// CTA Section
export interface CTAContent {
  title: string;
  subtitle: string;
  button: string;
}

// Footer Section
export interface FooterContent {
  description: string;
  quickLinks: string;
  products: string;
  technology: string;
  about: string;
  contact: string;
  legal: string;
  privacy: string;
  terms: string;
  copyright: string;
}

// Contact Section
export interface ContactContent {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  address: string;
  phone: string;
  hours: string;
}

// Timeline Section
export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface TimelineContent {
  title: string;
  subtitle: string;
  items: Record<string, string>;
}

// Complete translations structure
export interface Translations {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  advantages: AdvantagesContent;
  products: ProductsContent;
  technology: TechnologyContent;
  industries: IndustriesContent;
  partners: PartnersContent;
  news: NewsContent;
  cta: CTAContent;
  footer: FooterContent;
  contact: ContactContent;
  timeline: TimelineContent;
}

// Company Info (static)
export interface CompanyInfo {
  name: {
    zh: string;
    en: string;
  };
  slogan: {
    zh: string;
    en: string;
  };
  fullName: {
    zh: string;
    en: string;
  };
  address: {
    zh: string;
    en: string;
  };
  phone: string;
  email: string;
}

export const companyInfo: CompanyInfo = {
  name: {
    zh: "深安锂能",
    en: "Swift Safe Energy",
  },
  slogan: {
    zh: "高比能电池引领者",
    en: "High Energy Density Battery Leader",
  },
  fullName: {
    zh: "深安锂能（深圳）科技有限公司",
    en: "Swift Safe Energy (Shenzhen) Technology Co., Ltd.",
  },
  address: {
    zh: "深圳市",
    en: "Shenzhen, China",
  },
  phone: "+86-XXX-XXXX-XXXX",
  email: "contact@swiftsafeenergy.com",
};

// Social Links
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com/company/swiftsafeenergy", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com/swiftsafeenergy", icon: "Twitter" },
  { name: "YouTube", href: "https://youtube.com/@swiftsafeenergy", icon: "Youtube" },
];

// Partner logos placeholder
export interface PartnerLogo {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const partnerLogos: PartnerLogo[] = [
  { name: "Partner 1", logo: "/partners/partner-1.svg", width: 120, height: 40 },
  { name: "Partner 2", logo: "/partners/partner-2.svg", width: 100, height: 40 },
  { name: "Partner 3", logo: "/partners/partner-3.svg", width: 140, height: 40 },
  { name: "Partner 4", logo: "/partners/partner-4.svg", width: 110, height: 40 },
  { name: "Partner 5", logo: "/partners/partner-5.svg", width: 130, height: 40 },
  { name: "Partner 6", logo: "/partners/partner-6.svg", width: 100, height: 40 },
];
