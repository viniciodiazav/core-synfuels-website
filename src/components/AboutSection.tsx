"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import { Compass, Target, Eye, MapPin, Building2, ShieldAlert, ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  dict: Dictionary;
  lang: Locale;
  showCta?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ dict, lang, showCta = false }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block matching Screenshot 2 & 3 */}
        <div className="space-y-4">
          <div className="text-xs font-bold tracking-widest uppercase text-forest-900">
            {dict.about.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.about.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.about.subtitle}
              </p>
              {showCta && (
                <Link
                  href={`/${lang}/about`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Conocer más sobre nosotros</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards: Purpose, Mission, Vision matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 01: Purpose */}
          <div className="bg-white rounded-xl p-8 border border-surface-border shadow-2xs relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest-800" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-extrabold text-forest-900 tracking-wider">
                  {dict.about.purpose.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-surface-canvas border border-surface-border flex items-center justify-center text-forest-800">
                  <Compass className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {dict.about.purpose.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {dict.about.purpose.description}
              </p>
            </div>
          </div>

          {/* Card 02: Mission */}
          <div className="bg-white rounded-xl p-8 border border-surface-border shadow-2xs relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest-800" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-extrabold text-forest-900 tracking-wider">
                  {dict.about.mission.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-surface-canvas border border-surface-border flex items-center justify-center text-forest-800">
                  <Target className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {dict.about.mission.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {dict.about.mission.description}
              </p>
            </div>
          </div>

          {/* Card 03: Vision */}
          <div className="bg-white rounded-xl p-8 border border-surface-border shadow-2xs relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest-800" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-extrabold text-forest-900 tracking-wider">
                  {dict.about.vision.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-surface-canvas border border-surface-border flex items-center justify-center text-forest-800">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {dict.about.vision.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {dict.about.vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Presence & Scope Clarification */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-surface-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold text-forest-900 bg-surface-canvas border border-surface-border">
                <MapPin className="w-3.5 h-3.5 text-forest-800" />
                {dict.about.geography.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {dict.about.geography.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {dict.about.geography.description}
              </p>

              {/* Texas & Mexico Hubs */}
              <div className="pt-2 space-y-3">
                <div className="p-4 rounded-lg bg-surface-canvas border border-surface-border flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      {dict.about.geography.texasLabel}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {dict.about.geography.texasDetail}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-surface-canvas border border-surface-border flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      {dict.about.geography.mexicoLabel}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {dict.about.geography.mexicoDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Minimalist Bilateral Diagram: Solid, non-glowing */}
            <div className="lg:col-span-7 bg-navy-900 text-white rounded-xl p-6 sm:p-8 relative">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    North America Industrial Axis
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium px-2 py-0.5 rounded bg-navy-800 border border-navy-700">
                    Bilateral Operations
                  </span>
                </div>

                {/* Nodes & Corridor */}
                <div className="relative py-4 flex flex-col items-center justify-center space-y-4">
                  {/* Texas Node */}
                  <div className="w-full p-4 rounded-lg bg-navy-850 border border-navy-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-forest-500" />
                      <div>
                        <div className="text-sm font-bold text-white">Texas Strategic Hub</div>
                        <div className="text-xs text-slate-400">Headquarters • Global Structuring</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-800 text-slate-200 border border-navy-700">
                      USA
                    </span>
                  </div>

                  {/* Connected Axis */}
                  <div className="flex items-center justify-center gap-3 text-slate-300 text-xs font-medium py-1">
                    <div className="w-8 h-px bg-slate-600" />
                    <span className="text-center">{dict.about.geography.corridorLabel}</span>
                    <div className="w-8 h-px bg-slate-600" />
                  </div>

                  {/* Mexico Node */}
                  <div className="w-full p-4 rounded-lg bg-navy-850 border border-navy-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-forest-500" />
                      <div>
                        <div className="text-sm font-bold text-white">Mexico Industrial Presence</div>
                        <div className="text-xs text-slate-400">Project Development • Regional Specialists</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-800 text-slate-200 border border-navy-700">
                      MEX
                    </span>
                  </div>
                </div>

                {/* Scope Transparency Disclaimer */}
                <div className="p-3.5 rounded-lg bg-navy-950 border border-navy-800 flex items-start gap-2.5 text-xs text-slate-400">
                  <ShieldAlert className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-[11px] sm:text-xs">
                    {dict.about.geography.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
