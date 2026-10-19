import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import {
  Zap,
  Droplets,
  Gem,
  Recycle,
  Cpu,
  Factory,
  Layers,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

interface IndustryDetailProps {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateStaticParams() {
  const ids = [
    "energy",
    "oil-gas",
    "minerals",
    "recycling",
    "technology",
    "manufacturing",
    "project-solutions",
  ];
  return [
    ...ids.map((id) => ({ lang: "es", id })),
    ...ids.map((id) => ({ lang: "en", id })),
  ];
}

export default async function IndustryDetailPage({ params }: IndustryDetailProps) {
  const { lang, id } = await params;

  if (lang !== "en" && lang !== "es") {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  // Check if it's transversal or standard industry
  const isTransversal = id === "project-solutions";
  const currentDivision = isTransversal
    ? {
        id: "project-solutions",
        number: dict.divisions.transversal.number,
        name: dict.divisions.transversal.name,
        tagline: dict.divisions.transversal.tagline,
        description: dict.divisions.transversal.description,
        icon: "Layers",
        bullets: dict.divisions.transversal.bullets,
        actionText: dict.divisions.transversal.actionText,
        detailKeyAreas: [
          locale === "es" ? "Consultoría Estratégica" : "Strategic Consulting",
          locale === "es" ? "Modelación de Negocio" : "Business Modeling",
          locale === "es" ? "Coordinación Interdisciplinaria" : "Interdisciplinary Coordination",
          locale === "es" ? "Acompañamiento en Cierre" : "Closing Execution",
        ],
      }
    : dict.divisions.items.find((item) => item.id === id);

  if (!currentDivision) {
    notFound();
  }

  // Next / Previous navigation calculation
  const allIds = [
    ...dict.divisions.items.map((d) => d.id),
    "project-solutions",
  ];
  const currentIndex = allIds.indexOf(id);
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : allIds[allIds.length - 1];
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : allIds[0];

  const getDivisionIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      case "Droplets":
        return <Droplets className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      case "Gem":
        return <Gem className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      case "Recycle":
        return <Recycle className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      case "Factory":
        return <Factory className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
      default:
        return <Layers className="w-8 h-8 text-forest-800" strokeWidth={1.8} />;
    }
  };

  const sectorImages: Record<string, string> = {
    energy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    "oil-gas": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    minerals: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    recycling: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    technology: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    manufacturing: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    "project-solutions": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-surface-canvas border-b border-surface-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Link href={`/${locale}`} className="hover:text-navy-900 transition-colors">
              {dict.nav.home}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/divisions`} className="hover:text-navy-900 transition-colors">
              {dict.nav.divisions}
            </Link>
            <span>/</span>
            <span className="font-bold text-forest-900">{currentDivision.name}</span>
          </div>

          <Link
            href={`/${locale}/divisions`}
            className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{locale === "es" ? "Todas las industrias" : "All industries"}</span>
          </Link>
        </div>
      </div>

      {/* Sector Hero Header */}
      <section className="py-14 lg:py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-forest-900 bg-surface-canvas border border-surface-border">
                <span>{currentDivision.number}</span>
                {isTransversal && <span>• {dict.divisions.transversalBadge}</span>}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {currentDivision.name}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-forest-900 leading-snug">
                {currentDivision.tagline}
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {currentDivision.description}
              </p>

              {/* Action Link to Contact */}
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/contact?division=${currentDivision.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>
                    {locale === "es"
                      ? `Solicitar asesoría en ${currentDivision.name}`
                      : `Request advisory in ${currentDivision.name}`}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-surface-canvas text-navy-900 font-bold text-xs uppercase tracking-wider border border-surface-border transition-colors"
                >
                  <span>{locale === "es" ? "Ver metodología de servicios" : "View service methodology"}</span>
                </Link>
              </div>
            </div>

            {/* Industrial Photography Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-surface-border bg-navy-900 shadow-sm">
                <div
                  className="h-64 sm:h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${sectorImages[currentDivision.id] || sectorImages["energy"]}')`,
                  }}
                />
                <div className="absolute inset-0 bg-navy-900/40" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-navy-950/90 border border-navy-800 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                      {getDivisionIcon(currentDivision.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{currentDivision.name}</div>
                      <div className="text-[10px] text-slate-300">
                        {locale === "es" ? "Marco de Capacidad Industrial" : "Industrial Capability Framework"}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-forest-900 text-white font-bold">
                    Referencial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope, Focus Areas & Consulting Deliverables */}
      <section className="py-16 bg-surface-canvas border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-forest-900">
              {locale === "es" ? "ALCANCE TÉCNICO" : "TECHNICAL SCOPE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mt-1">
              {locale === "es"
                ? "Líneas de Intervención y Estructuración"
                : "Intervention & Structuring Lines"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentDivision.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-surface-border flex items-start gap-3.5 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-md bg-surface-canvas border border-surface-border flex items-center justify-center text-forest-800 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-1">
                    {locale === "es" ? `Línea de Acción 0${idx + 1}` : `Action Line 0${idx + 1}`}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {bullet}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Areas / Advisory Components */}
          <div className="bg-white rounded-xl p-8 border border-surface-border space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
              {locale === "es"
                ? "Capacidades de Coordinación y Asesoría Aplicada"
                : "Coordination & Applied Advisory Capabilities"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentDivision.detailKeyAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-surface-canvas border border-surface-border text-xs font-semibold text-slate-800 flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-forest-800 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope Transparency Disclaimer */}
      <section className="py-10 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border flex items-start gap-3 text-xs text-slate-700">
            <ShieldCheck className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {locale === "es"
                ? "Aviso de Alcance: Core Synfuels actúa como estructurador, consultor y coordinador de proyectos en Texas y México, integrando especialistas técnicos y firmas de ingeniería aliadas. No declara la operación o propiedad directa de instalaciones industriales no confirmadas."
                : "Scope Notice: Core Synfuels acts as project structurer, advisor, and coordinator across Texas and Mexico, integrating specialized technical experts and allied engineering firms. It does not declare direct operation or ownership of unconfirmed industrial facilities."}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Prev / Next Industry Navigation */}
      <section className="py-8 bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href={`/${locale}/divisions/${prevId}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "es" ? "Industria Anterior" : "Previous Industry"}</span>
          </Link>

          <Link
            href={`/${locale}/contact?division=${currentDivision.id}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>{dict.nav.ctaButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/${locale}/divisions/${nextId}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
          >
            <span>{locale === "es" ? "Siguiente Industria" : "Next Industry"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
