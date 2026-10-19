import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitCommit } from "lucide-react";

export default async function HowWeWorkPage({
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

  const stageGates = [
    {
      gate: "Gate 01",
      title: locale === "es" ? "Alineación de Oportunidad" : "Opportunity Alignment",
      criterion:
        locale === "es"
          ? "Filtro inicial de viabilidad regulatoria y mercado antes de comprometer recursos de ingeniería."
          : "Initial regulatory and market feasibility filter before committing engineering resources.",
    },
    {
      gate: "Gate 02",
      title: locale === "es" ? "Bancabilidad y Factibilidad" : "Bankability & Feasibility",
      criterion:
        locale === "es"
          ? "Validación de modelos CAPEX/OPEX, permisos ambientales y estructura de capital."
          : "Validation of CAPEX/OPEX models, environmental permits, and capital structure.",
    },
    {
      gate: "Gate 03",
      title: locale === "es" ? "Cierre Contractual y Financiero" : "Contractual & Financial Close",
      criterion:
        locale === "es"
          ? "Aprobación de paquetes de licitación, contratos de proveedores y gobernanza de ejecución."
          : "Approval of bid packages, vendor contracts, and execution governance.",
    },
    {
      gate: "Gate 04",
      title: locale === "es" ? "Supervisión y Control" : "Supervision & Control",
      criterion:
        locale === "es"
          ? "Monitoreo continuo de hitos, auditoría de avance físico-financiero y mitigación de contingencias."
          : "Continuous milestone tracking, physical-financial audit, and contingency mitigation.",
    },
  ];

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
            <span className="font-bold text-forest-900">{dict.nav.howWeWork}</span>
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

      {/* Main 5-Stage Process Flow */}
      <HowWeWorkSection dict={dict} lang={locale} />

      {/* Stage-Gate Governance Protocol */}
      <section className="py-16 bg-surface-canvas border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-900">
              {locale === "es" ? "GOBERNANZA DE PROYECTOS" : "PROJECT GOVERNANCE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              {locale === "es"
                ? "Protocolo Stage-Gate: Disciplina y Control de Riesgo"
                : "Stage-Gate Protocol: Discipline & Risk Control"}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {locale === "es"
                ? "Nuestra metodología asegura que cada fase de consultoría y desarrollo cumpla con rigurosos criterios de control antes de autorizar las etapas subsecuentes."
                : "Our methodology ensures that each advisory and development phase fulfills rigorous control criteria before authorizing subsequent stages."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stageGates.map((gate, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-surface-border shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest-900 px-2 py-0.5 rounded bg-surface-canvas border border-surface-border">
                      {gate.gate}
                    </span>
                    <GitCommit className="w-4 h-4 text-forest-800" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{gate.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2 font-normal">
                    {gate.criterion}
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border flex items-center gap-1.5 text-[11px] font-semibold text-forest-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-800" />
                  <span>{locale === "es" ? "Revisión Verificada" : "Verified Review"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              {locale === "es"
                ? "¿Quieres iniciar la evaluación de tu proyecto?"
                : "Want to begin project assessment?"}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {locale === "es"
                ? "Contáctanos para estructurar la Etapa 1: Project Assessment."
                : "Contact us to structure Stage 1: Project Assessment."}
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
