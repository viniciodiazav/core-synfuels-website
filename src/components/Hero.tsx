"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Sparkles, Globe2 } from "lucide-react";

interface HeroProps {
  dict: Dictionary;
  lang: Locale;
}

export const Hero: React.FC<HeroProps> = ({ dict, lang }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white border-b border-surface-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Positioning & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Pill Badge matching Screenshot 1 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase text-forest-900 bg-surface-canvas border border-surface-border">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-800" />
              <span>{dict.hero.tag}</span>
            </div>

            {/* Display Title with solid colors */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-navy-900 tracking-tight leading-[1.12]">
              {dict.hero.title}{" "}
              <span className="text-forest-800 border-b-4 border-forest-800 pb-0.5">
                {dict.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed">
              {dict.hero.subtitle}
            </p>

            {/* Action Buttons: Solid & Minimalist */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-surface-canvas text-navy-900 font-bold text-xs sm:text-sm tracking-wide border border-surface-border transition-colors whitespace-nowrap"
              >
                <span>{dict.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Four Corporate Badges: Solid, Clean, Non-crammed */}
            <div className="pt-6 border-t border-surface-border w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-canvas border border-surface-border text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-forest-800 flex-shrink-0" />
                <span className="truncate">{dict.hero.badges.businessStrength}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-canvas border border-surface-border text-xs font-semibold text-slate-800">
                <Compass className="w-4 h-4 text-forest-800 flex-shrink-0" />
                <span className="truncate">{dict.hero.badges.engineering}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-canvas border border-surface-border text-xs font-semibold text-slate-800">
                <Sparkles className="w-4 h-4 text-forest-800 flex-shrink-0" />
                <span className="truncate">{dict.hero.badges.evolution}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-canvas border border-surface-border text-xs font-semibold text-slate-800">
                <Globe2 className="w-4 h-4 text-forest-800 flex-shrink-0" />
                <span className="truncate">{dict.hero.badges.globalReach}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Corporate Presentation Card matching Screenshot 1 */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl border border-surface-border bg-white shadow-sm overflow-hidden">
              {/* Card Header */}
              <div className="p-5 border-b border-surface-border bg-surface-canvas flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-900">
                    CORE SYNFUELS / GLOBAL SOLUTIONS
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-navy-900 tracking-tight mt-0.5">
                    PROJECTS THAT CONNECT OPPORTUNITIES
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-forest-900 bg-white border border-surface-border">
                  Global
                </span>
              </div>

              {/* Realistic Industrial Visual Banner */}
              <div className="relative h-48 sm:h-52 bg-navy-900 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-navy-900/60" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold tracking-wide text-[11px] sm:text-xs">
                    Global Solutions | Integrated Project Management
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-white font-bold bg-forest-900/90 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
              </div>

              {/* Card Body: Highlights & Points */}
              <div className="p-6 space-y-4 bg-white">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {dict.hero.previewCard.description}
                </p>

                <div className="space-y-2 pt-1">
                  {dict.hero.previewCard.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-forest-800 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Dark Footer Banner matching Screenshot 1 */}
              <div className="p-5 bg-navy-900 text-white border-t border-navy-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] tracking-widest uppercase font-bold text-slate-400">
                    VISION 2026
                  </div>
                  <div className="text-sm font-bold tracking-tight text-white mt-0.5">
                    {dict.hero.previewCard.bannerTitle}
                  </div>
                  <div className="text-[10px] text-slate-400 tracking-wider uppercase mt-1">
                    {dict.hero.previewCard.bannerSubtitle}
                  </div>
                </div>

                <Link
                  href={`/${lang}/about`}
                  className="inline-flex items-center justify-between pt-2.5 border-t border-navy-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <span>{dict.hero.previewCard.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
