"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import { Logo } from "./Logo";
import { ShieldAlert, ArrowUpRight, Globe } from "lucide-react";

interface FooterProps {
  dict: Dictionary;
  lang: Locale;
}

export const Footer: React.FC<FooterProps> = ({ dict, lang }) => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="full" dark />
            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy-800 text-slate-200 border border-navy-700">
                Texas, USA
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy-800 text-slate-200 border border-navy-700">
                Mexico
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {dict.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={`/${lang}`} className="hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="hover:text-white transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/divisions`} className="hover:text-white transition-colors">
                  {dict.nav.divisions}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/how-we-work`} className="hover:text-white transition-colors">
                  {dict.nav.howWeWork}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/library`} className="hover:text-white transition-colors">
                  {dict.nav.library}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {dict.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {dict.services.items.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/${lang}/services#${svc.id}`}
                    className="hover:text-white transition-colors block text-slate-400 hover:text-slate-200"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {dict.footer.industriesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {dict.divisions.items.map((div) => (
                <li key={div.id}>
                  <Link
                    href={`/${lang}/divisions/${div.id}`}
                    className="hover:text-white transition-colors block text-slate-400 hover:text-slate-200"
                  >
                    {div.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${lang}/divisions/project-solutions`}
                  className="text-forest-500 hover:text-forest-200 block font-semibold mt-2"
                >
                  {dict.divisions.transversal.name}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-navy-850 border border-navy-800 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px] sm:text-xs">
            {dict.footer.scopeNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Language Selector */}
        <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{dict.footer.copyright}</div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <Link
                href="/es"
                className={`hover:text-white transition-colors ${
                  lang === "es" ? "text-white font-bold" : "text-slate-400"
                }`}
              >
                Español
              </Link>
              <span>|</span>
              <Link
                href="/en"
                className={`hover:text-white transition-colors ${
                  lang === "en" ? "text-white font-bold" : "text-slate-400"
                }`}
              >
                English
              </Link>
            </div>

            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-1 hover:text-white transition-colors text-slate-400"
            >
              <span>Core Synfuels</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
