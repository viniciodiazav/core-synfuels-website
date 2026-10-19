import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { ServicesSection } from "@/components/ServicesSection";
import { ArrowLeft, ArrowUpRight, ArrowRight, Layers, ShieldCheck } from "lucide-react";

export default async function ServicesPage({
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
            <span className="font-bold text-forest-900">{dict.nav.services}</span>
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

      {/* Distinction Header Note (PDF Requerimiento 4) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-xl p-6 bg-surface-canvas border border-surface-border flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900">
              {locale === "es" ? "Diferenciación Clave de Servicios" : "Key Service Distinction"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {locale === "es"
                ? "Diferenciamos nuestros servicios profesionales de consultoría y gestión de las industrias en las que participamos. Cada servicio representa una capacidad metodológica transversal aplicable a cualquier sector industrial."
                : "We distinguish our professional advisory and management services from the industries we operate in. Each service represents a transversal methodological capability applicable across any industrial sector."}
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Industrial Advisory */}
      <ServicesSection dict={dict} lang={locale} />

      {/* Connected Industries Cross-Link */}
      <section className="py-16 bg-surface-canvas border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-forest-900">
                <Layers className="w-3.5 h-3.5 text-forest-800" />
                <span>{locale === "es" ? "SECTORES DE APLICACIÓN" : "APPLICATION SECTORS"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                {locale === "es"
                  ? "Aplica estos servicios en seis industrias clave"
                  : "Apply these services across six core industries"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {locale === "es"
                  ? "Conoce nuestras capacidades sectoriales en Energía, Hidrocarburos, Minerales, Reciclaje, Tecnología y Manufactura."
                  : "Explore our sector capabilities in Energy, Oil & Gas, Minerals, Recycling, Technology, and Manufacturing."}
              </p>
            </div>
            <Link
              href={`/${locale}/divisions`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-surface-canvas text-navy-900 font-bold text-xs uppercase tracking-wider border border-surface-border transition-colors whitespace-nowrap"
            >
              <span>{locale === "es" ? "Ver Industrias" : "View Industries"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              {locale === "es" ? "¿Necesitas estructurar un proyecto?" : "Need to structure an industrial project?"}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {locale === "es"
                ? "Solicita una consulta preliminar confidencial con nuestros asesores técnicos."
                : "Request a confidential preliminary consultation with our technical advisors."}
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
