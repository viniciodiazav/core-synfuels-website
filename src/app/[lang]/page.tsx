import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { DivisionsSection } from "@/components/DivisionsSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { ArrowUpRight } from "lucide-react";

export default async function HomePage({
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
    <>
      {/* 1. Hero */}
      <Hero dict={dict} lang={locale} />

      {/* 2. Brand Promise / Executive Highlight (Screenshot 3) */}
      <section className="py-12 bg-surface-canvas border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-surface-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-900">
                {locale === "es" ? "PROMESA DE MARCA" : "BRAND PROMISE"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight leading-snug">
                {locale === "es"
                  ? "Claridad estratégica. Integración de capacidades. Rigor técnico y financiero. Disciplina de ejecución."
                  : "Strategic clarity. Capability integration. Technical and financial assessment. Execution discipline."}
              </h2>
            </div>
            <div className="lg:border-l lg:border-surface-border lg:pl-8 space-y-3 max-w-sm">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {locale === "es"
                  ? "Una plataforma de consultoría enfocada en convertir oportunidades complejas en proyectos industriales viables y bancables."
                  : "A consulting platform dedicated to turning complex opportunities into viable and bankable industrial projects."}
              </p>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
              >
                <span>{locale === "es" ? "Conocer nuestra plataforma" : "Explore our platform"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <ServicesSection dict={dict} lang={locale} showAllCta />

      {/* 4. Industries / Divisions Overview */}
      <DivisionsSection dict={dict} lang={locale} showAllCta />

      {/* 5. Methodology Overview */}
      <HowWeWorkSection dict={dict} lang={locale} showAllCta />

      {/* 6. Ready to Discuss CTA Banner */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-navy-800 bg-navy-850 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                {locale === "es" ? "ESTRUCTURACIÓN Y CONSULTORÍA" : "STRUCTURING & ADVISORY"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {locale === "es"
                  ? "¿Tienes una oportunidad industrial en evaluación?"
                  : "Do you have an industrial opportunity under evaluation?"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {locale === "es"
                  ? "Acompañamos a inversionistas y empresas en Texas y México desde el estudio preliminar hasta el cierre técnico y contractual."
                  : "We guide investors and enterprises across Texas and Mexico from preliminary studies to technical and contractual closing."}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              <span>{dict.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
