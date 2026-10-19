"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries/types";
import { Info, ArrowUpRight, ArrowRight, X } from "lucide-react";

interface VisualLibrarySectionProps {
  dict: Dictionary;
  lang?: Locale;
  showAllCta?: boolean;
}

export const VisualLibrarySection: React.FC<VisualLibrarySectionProps> = ({
  dict,
  lang,
  showAllCta = false,
}) => {
  const [selectedImage, setSelectedImage] = useState<Dictionary["library"]["items"][number] | null>(null);

  const imageUrls: Record<string, string> = {
    "energy-grid":
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    petrochemical:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "mining-logistics":
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    "circular-plant":
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    "industrial-automation":
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    "modern-manufacturing":
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="text-xs font-bold tracking-widest uppercase text-forest-900">
            {dict.library.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.library.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.library.subtitle}
              </p>
              <div className="p-3.5 rounded-lg bg-white border border-surface-border flex items-start gap-2.5 text-xs text-slate-700">
                <Info className="w-4 h-4 text-forest-800 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{dict.library.disclaimer}</span>
              </div>
              {showAllCta && lang && (
                <Link
                  href={`/${lang}/library`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Explorar galería completa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.library.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-xl overflow-hidden border border-surface-border shadow-2xs hover:border-forest-800 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-56 bg-navy-900 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${imageUrls[item.id] || imageUrls["energy-grid"]}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-navy-900/40" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy-900 text-white border border-navy-700">
                      {item.division}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-navy-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Focus Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.focus.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-canvas text-slate-800 border border-surface-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 bg-surface-canvas border-t border-surface-border flex items-center justify-between text-xs font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                <span>Ampliar referencia visual</span>
                <ArrowUpRight className="w-4 h-4 text-forest-900" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden border border-surface-border shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 bg-navy-900">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${imageUrls[selectedImage.id] || imageUrls["energy-grid"]}')`,
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-md bg-navy-900 text-white border border-navy-700 hover:bg-navy-800 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-canvas text-[11px] font-bold text-forest-900 border border-surface-border">
                {selectedImage.division} • {selectedImage.badge}
              </div>
              <h3 className="text-2xl font-bold text-navy-900">{selectedImage.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{selectedImage.description}</p>
              <div className="pt-2 flex flex-wrap gap-2">
                {selectedImage.focus.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs bg-surface-canvas border border-surface-border text-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
