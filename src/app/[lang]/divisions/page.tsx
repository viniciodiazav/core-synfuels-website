import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { DivisionsSection } from "@/components/DivisionsSection";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default async function DivisionsPage({
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
            <span className="font-bold text-forest-900">{dict.nav.divisions}</span>
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

      {/* Main Divisions / Industries Section */}
      <DivisionsSection dict={dict} lang={locale} />

      {/* Cross-Link Bottom Banner */}
      <section className="py-14 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              {locale === "es"
                ? "¿Requieres asesoría técnica para tu sector?"
                : "Need technical advisory for your sector?"}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {locale === "es"
                ? "Nuestros especialistas analizan la viabilidad y los requisitos normativos en Texas y México."
                : "Our specialists evaluate feasibility and regulatory standards across Texas and Mexico."}
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
      </section>
    </div>
  );
}
