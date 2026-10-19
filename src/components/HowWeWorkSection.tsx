"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import {
  Search,
  TrendingUp,
  Layers,
  Cog,
  LayoutDashboard,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface HowWeWorkSectionProps {
  dict: Dictionary;
  lang?: Locale;
  showAllCta?: boolean;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  dict,
  lang,
  showAllCta = false,
}) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Layers":
        return <Layers className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Cog":
        return <Cog className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      default:
        return <Search className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-forest-900 bg-surface-canvas border border-surface-border">
            {dict.howWeWork.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.howWeWork.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.howWeWork.subtitle}
              </p>
              {showAllCta && lang && (
                <Link
                  href={`/${lang}/how-we-work`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Conocer etapas de la metodología</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 5-Step Connected Flow Container */}
        <div className="relative">
          {/* Horizontal Desktop Solid Connector Line */}
          <div className="hidden xl:block absolute top-1/2 left-10 right-10 h-0.5 bg-surface-border -translate-y-16 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
            {dict.howWeWork.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-surface-canvas rounded-xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between min-h-[310px]"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-7 h-7 rounded-md bg-forest-800 text-white font-extrabold text-xs flex items-center justify-center">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-surface-border flex items-center justify-center text-forest-800">
                      {getStepIcon(st.icon)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2.5 tracking-tight">
                    {st.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {st.description}
                  </p>
                </div>

                {/* Tangible Output Card */}
                <div className="pt-3 border-t border-surface-border">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Entregable de Etapa
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-forest-900 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">{st.outputs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
