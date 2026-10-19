import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries/types";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";

  return {
    title: isEs
      ? "Core Synfuels | Consultoría y Desarrollo de Proyectos Industriales"
      : "Core Synfuels | Industrial Consulting & Project Development",
    description: isEs
      ? "Core Synfuels estructura proyectos industriales, articula capacidades técnicas y asesora oportunidades binacionales entre Texas y México."
      : "Core Synfuels structures industrial projects, connects technical capabilities, and advises cross-border opportunities between Texas, USA and Mexico.",
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "es") {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar dict={dict} lang={lang as Locale} />
      <main className="flex-grow">{children}</main>
      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
