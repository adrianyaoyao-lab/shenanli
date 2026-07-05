"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  translations: {
    footer: {
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
    };
    nav: {
      products: string;
      technology: string;
      about: string;
      contact: string;
    };
  };
  locale: string;
}

export function Footer({ translations, locale }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { href: `/${locale}/products`, label: translations.nav.products },
    { href: `/${locale}/technology`, label: translations.nav.technology },
    { href: `/${locale}/about`, label: translations.nav.about },
    { href: `/${locale}/contact`, label: translations.nav.contact },
  ];

  const legalLinks = [
    { href: "#", label: translations.footer.privacy },
    { href: "#", label: translations.footer.terms },
  ];

  return (
    <footer className="relative bg-primary border-t border-white/5">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative container-padding mx-auto">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Swift Safe Energy"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-heading font-semibold text-white text-sm leading-tight">
                  {locale === "zh" ? "深安锂能" : "Swift Safe Energy"}
                </p>
                <p className="text-[10px] text-white/50">
                  {locale === "zh" ? "高比能电池引领者" : "High Energy Density Battery Leader"}
                </p>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {translations.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              {translations.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              {translations.footer.legal}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              {locale === "zh" ? "关注我们" : "Follow Us"}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={cn(
                    "w-10 h-10 rounded-xl bg-white/5 border border-white/10",
                    "flex items-center justify-center",
                    "text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20",
                    "transition-all duration-300"
                  )}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <p className="text-sm text-white/30 text-center">
            {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
