"use client";

import React from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import {
  FileBarChart,
  DraftingCompass,
  Workflow,
  Network,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServicesSectionProps {
  dict: Dictionary;
  lang: Locale;
  showAllCta?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  dict,
  lang,
  showAllCta = false,
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "FileBarChart":
        return <FileBarChart className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "DraftingCompass":
        return <DraftingCompass className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      case "Network":
        return <Network className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
      default:
        return <FileBarChart className="w-5 h-5 text-forest-800" strokeWidth={1.8} />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-forest-900 bg-surface-canvas border border-surface-border">
            {dict.services.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.services.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.services.subtitle}
              </p>
              {showAllCta && (
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Ver catálogo completo de servicios</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.services.items.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-surface-canvas rounded-xl p-8 sm:p-9 border border-surface-border flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-900 px-3 py-1 rounded-md bg-white border border-surface-border">
                    PILAR {svc.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white border border-surface-border flex items-center justify-center text-forest-800">
                    {renderIcon(svc.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy-900 mb-3 tracking-tight">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {svc.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-surface-border mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Entregables Clave de Consultoría
                  </div>
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-forest-800 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link to Contact Form */}
              <Link
                href={`/${lang}/contact?service=${svc.id}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-surface-border text-xs font-bold text-forest-900 hover:text-forest-700 transition-colors uppercase tracking-wider"
              >
                <span>{svc.cta}</span>
                <div className="w-7 h-7 rounded-md bg-white border border-surface-border flex items-center justify-center text-forest-900">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
