import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import { ContactSection } from "@/components/ContactSection";
import { ArrowLeft } from "lucide-react";

export default async function ContactPage({
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
            <span className="font-bold text-forest-900">{dict.nav.contact}</span>
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

      {/* Main Contact Section */}
      <ContactSection dict={dict} />
    </div>
  );
}
