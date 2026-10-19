"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Dictionary, Locale } from "@/dictionaries/types";
import { ArrowUpRight, Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  dict: Dictionary;
  lang: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ dict, lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;

  // Switch locale while preserving sub-path
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === lang) return pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "es")) {
      segments[0] = newLocale;
      return `/${segments.join("/")}`;
    }
    return `/${newLocale}`;
  };

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home, exact: true },
    { href: `/${lang}/about`, label: dict.nav.about, exact: false },
    { href: `/${lang}/services`, label: dict.nav.services, exact: false },
    { href: `/${lang}/divisions`, label: dict.nav.divisions, exact: false },
    { href: `/${lang}/how-we-work`, label: dict.nav.howWeWork, exact: false },
    { href: `/${lang}/library`, label: dict.nav.library, exact: false },
    { href: `/${lang}/contact`, label: dict.nav.contact, exact: false },
  ];

  const isActive = (itemHref: string, exact: boolean) => {
    if (exact) {
      return pathname === itemHref || pathname === `${itemHref}/`;
    }
    return pathname.startsWith(itemHref);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-surface-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href={`/${lang}`} className="focus:outline-none">
            <Logo variant="full" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold transition-colors rounded-lg whitespace-nowrap ${
                    active
                      ? "text-forest-900 bg-surface-canvas font-bold border-b-2 border-forest-800 rounded-b-none"
                      : "text-slate-700 hover:text-forest-800 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
            {/* Language Switcher with solid, calm styling */}
            <div className="inline-flex items-center p-1 rounded-full bg-surface-canvas border border-surface-border text-xs font-bold shrink-0">
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />
              <Link
                href={switchLocale("es")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "es"
                    ? "bg-forest-800 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ES
              </Link>
              <span className="text-slate-300 mx-0.5">/</span>
              <Link
                href={switchLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "en"
                    ? "bg-forest-800 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                EN
              </Link>
            </div>

            {/* CTA Button with solid matte forest green (matching screenshot 1) */}
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap shrink-0"
            >
              <span>{dict.nav.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="inline-flex items-center p-0.5 rounded-full bg-surface-canvas border border-surface-border text-[11px] font-bold">
              <Link
                href={switchLocale("es")}
                className={`px-2 py-0.5 rounded-full ${
                  lang === "es" ? "bg-forest-800 text-white" : "text-slate-600"
                }`}
              >
                ES
              </Link>
              <Link
                href={switchLocale("en")}
                className={`px-2 py-0.5 rounded-full ${
                  lang === "en" ? "bg-forest-800 text-white" : "text-slate-600"
                }`}
              >
                EN
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-3 pb-6 space-y-3 shadow-md">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    active
                      ? "bg-surface-canvas text-forest-900 font-bold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-forest-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href={`/${lang}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-800 text-white font-bold text-sm"
            >
              <span>{dict.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
