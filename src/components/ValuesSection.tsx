"use client";

import React from "react";
import { Dictionary } from "@/dictionaries/types";

interface ValuesSectionProps {
  dict: Dictionary;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ dict }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block matching Screenshot 10 */}
        <div className="space-y-4">
          <div className="text-xs font-bold tracking-widest uppercase text-forest-900">
            {dict.values.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.values.title}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.values.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* 8 Values Cards matching Screenshot 10 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.values.items.map((val) => (
            <div
              key={val.number}
              className="bg-surface-canvas rounded-xl p-7 border border-surface-border flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black text-forest-900 tracking-widest block mb-4">
                  {val.number}
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
