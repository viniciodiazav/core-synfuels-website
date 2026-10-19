"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import {
  Zap,
  Droplets,
  Gem,
  Recycle,
  Cpu,
  Factory,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface DivisionsSectionProps {
  dict: Dictionary;
  lang: Locale;
  showAllCta?: boolean;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  dict,
  lang,
  showAllCta = false,
}) => {
  const getDivisionIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Droplets":
        return <Droplets className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Gem":
        return <Gem className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Recycle":
        return <Recycle className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Factory":
        return <Factory className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      default:
        return <Layers className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block matching Screenshot 3 */}
        <div className="space-y-4">
          <div className="text-xs font-bold tracking-widest uppercase text-forest-900">
            {dict.divisions.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.divisions.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.divisions.subtitle}
              </p>
              {showAllCta && (
                <Link
                  href={`/${lang}/divisions`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Explorar todas las industrias</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 6 Industry Cards Grid (Screenshots 4 & 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dict.divisions.items.map((div) => (
            <div
              key={div.id}
              className="bg-white rounded-xl p-8 border border-surface-border shadow-2xs hover:border-forest-800 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                    {div.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-surface-canvas border border-surface-border flex items-center justify-center text-forest-800">
                    {getDivisionIcon(div.icon)}
                  </div>
                </div>

                {/* Division Name & Tagline */}
                <h3 className="text-2xl font-black text-navy-900 mb-1 tracking-tight">
                  {div.name}
                </h3>
                <div className="text-xs font-semibold text-forest-900 mb-4 min-h-[2.25rem] flex items-start leading-snug">
                  {div.tagline}
                </div>

                {/* Description */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {div.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6 pt-4 border-t border-surface-border">
                  {div.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-800 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Detail Page Link */}
              <Link
                href={`/${lang}/divisions/${div.id}`}
                className="inline-flex items-center gap-2 pt-4 border-t border-surface-border text-xs font-bold text-forest-900 hover:text-forest-700 transition-colors uppercase tracking-wider group-hover:translate-x-1"
              >
                <span>{div.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Transversal Area: Project Solutions Card */}
        <div className="rounded-xl border border-surface-border bg-white p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase text-forest-900 bg-surface-canvas border border-surface-border">
                <Layers className="w-3.5 h-3.5 text-forest-800" />
                <span>{dict.divisions.transversalBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
                {dict.divisions.transversal.name}
              </h3>
              <p className="text-sm font-semibold text-forest-900">
                {dict.divisions.transversal.tagline}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed max-w-3xl">
                {dict.divisions.transversal.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {dict.divisions.transversal.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-forest-800 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href={`/${lang}/divisions/project-solutions`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                <span>{dict.divisions.transversal.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
