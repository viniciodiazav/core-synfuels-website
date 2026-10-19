import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "es") {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-surface-canvas border-b border-surface-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Link href={`/${locale}`} className="hover:text-navy-900 transition-colors">
              {dict.nav.home}
            </Link>
            <span>/</span>
            <span className="font-bold text-forest-900">{dict.nav.about}</span>
          </div>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{locale === "es" ? "Volver al inicio" : "Back to home"}</span>
          </Link>
        </div>
      </div>

      {/* Main Corporate Platform Section */}
      <AboutSection dict={dict} lang={locale} />

      {/* Corporate Values */}
      <ValuesSection dict={dict} />

      {/* Professional Credentials & Governance Notice */}
      <section className="py-16 bg-surface-canvas border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                {locale === "es" ? "GOBERNANZA Y EQUIPO" : "GOVERNANCE & TEAM"}
              </span>
              <h3 className="text-xl font-bold text-navy-900">
                {locale === "es"
                  ? "Especialistas y Alianzas de Ingeniería Multidisciplinaria"
                  : "Specialists and Multidisciplinary Engineering Alliances"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {locale === "es"
                  ? "Core Synfuels articula firmas de ingeniería de primer nivel, consultores regulatorios y especialistas financieros con certificación internacional en Norteamérica."
                  : "Core Synfuels coordinates premier engineering firms, regulatory consultants, and financial specialists with international certifications across North America."}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              <span>{dict.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
