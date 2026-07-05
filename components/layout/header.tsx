"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  translations: {
    nav: {
      home: string;
      about: string;
      products: string;
      technology: string;
      industries: string;
      news: string;
      contact: string;
    };
  };
  locale: string;
  onLocaleChange: (locale: string) => void;
}

export function Header({ translations, locale, onLocaleChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: `/${locale}`, label: translations.nav.home, key: "home" },
    { href: `/${locale}/about`, label: translations.nav.about, key: "about" },
    { href: `/${locale}/products`, label: translations.nav.products, key: "products" },
    { href: `/${locale}/technology`, label: translations.nav.technology, key: "technology" },
    { href: `/${locale}/industries`, label: translations.nav.industries, key: "industries" },
    { href: `/${locale}/news`, label: translations.nav.news, key: "news" },
    { href: `/${locale}/contact`, label: translations.nav.contact, key: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-primary/90 backdrop-blur-2xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="container-padding mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Swift Safe Energy"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <p className="font-heading font-semibold text-white text-sm leading-tight group-hover:text-accent transition-colors duration-300">
                  {locale === "zh" ? "深安锂能" : "Swift Safe Energy"}
                </p>
                <p className="text-[10px] text-white/40">
                  {locale === "zh" ? "高比能电池引领者" : "High Energy Density Battery Leader"}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                      "hover:text-white",
                      activeLink === item.key
                        ? "text-white bg-white/10"
                        : "text-white/60"
                    )}
                    onMouseEnter={() => setActiveLink(item.key)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {activeLink === item.key && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onLocaleChange(locale === "en" ? "zh" : "en")}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium hidden sm:inline">{locale}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-primary/95 backdrop-blur-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-heading font-semibold text-white">
                  {locale === "zh" ? "菜单" : "Menu"}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-6 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {translations.nav.contact}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
