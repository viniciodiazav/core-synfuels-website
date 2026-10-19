import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { VisualLibrarySection } from "@/components/VisualLibrarySection";
import { ArrowLeft, ArrowUpRight, FolderKanban } from "lucide-react";

export default async function LibraryPage({
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
            <span className="font-bold text-forest-900">{dict.nav.library}</span>
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

      {/* Main Visual Library Section with Lightbox */}
      <VisualLibrarySection dict={dict} lang={locale} />

      {/* Future Project Documentation Template (PDF Requerimiento pág. 7 & 8) */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-forest-900">
              <FolderKanban className="w-3.5 h-3.5 text-forest-800" />
              <span>{locale === "es" ? "ESTRUCTURA DE EXPEDIENTE" : "PORTFOLIO FRAMEWORK"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              {locale === "es"
                ? "Plantilla Estándar de Casos y Proyectos Industriales"
                : "Standard Industrial Case & Project Framework"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {locale === "es"
                ? "Siguiendo los lineamientos de verificación corporativa, los proyectos futuros se publicarán bajo este esquema documental riguroso con métricas verificadas."
                : "Following corporate verification guidelines, future projects will be published under this rigorous documentation schema with verified metrics."}
            </p>
          </div>

          <div className="rounded-xl border border-surface-border bg-surface-canvas p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">01</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Nombre del Proyecto" : "Project Name"}
                </div>
                <div className="text-[11px] text-slate-600">
                  {locale === "es" ? "Identificación técnica" : "Technical ID"}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">02</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Industria" : "Industry"}
                </div>
                <div className="text-[11px] text-slate-600">
                  {locale === "es" ? "Sector productivo" : "Industrial sector"}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">03</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Ubicación" : "Location"}
                </div>
                <div className="text-[11px] text-slate-600">Texas / México</div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">04</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Objetivo" : "Objective"}
                </div>
                <div className="text-[11px] text-slate-600">
                  {locale === "es" ? "Meta económica/técnica" : "Economic/technical goal"}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">05</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Servicios Prestados" : "Services Rendered"}
                </div>
                <div className="text-[11px] text-slate-600">
                  {locale === "es" ? "Pilar de consultoría" : "Advisory pillar"}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-surface-border space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">06</span>
                <div className="text-xs font-bold text-navy-900">
                  {locale === "es" ? "Resultados Verificados" : "Verified Results"}
                </div>
                <div className="text-[11px] text-slate-600">
                  {locale === "es" ? "Métricas de éxito" : "Success metrics"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              {locale === "es"
                ? "¿Deseas evaluar una oportunidad técnica en tu planta?"
                : "Want to evaluate a technical opportunity at your facility?"}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {locale === "es"
                ? "Contáctanos para revisar especificaciones técnicas y modelos de viabilidad."
                : "Contact us to review technical specifications and feasibility models."}
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
