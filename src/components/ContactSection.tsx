"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Dictionary } from "@/dictionaries/types";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";

interface ContactSectionProps {
  dict: Dictionary;
}

const ContactFormContent: React.FC<ContactSectionProps> = ({ dict }) => {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "feasibility";
  const initialIndustry = searchParams.get("division") || searchParams.get("industry") || "energy";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "US",
    industry: initialIndustry,
    service: initialService,
    message: "",
  });

  useEffect(() => {
    const s = searchParams.get("service");
    const d = searchParams.get("division") || searchParams.get("industry");
    if (s || d) {
      setFormData((prev) => ({
        ...prev,
        ...(s ? { service: s } : {}),
        ...(d ? { industry: d } : {}),
      }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setErrorMsg("Por favor completa los campos requeridos.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "US",
      industry: "energy",
      service: "feasibility",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-forest-900 bg-white border border-surface-border">
            {dict.contact.tag}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {dict.contact.title}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {dict.contact.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Form & Corporate Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 sm:p-10 border border-surface-border shadow-2xs">
            {status === "success" ? (
              <div className="py-12 px-4 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-surface-canvas border border-surface-border flex items-center justify-center mx-auto text-forest-800">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-navy-900">
                    {dict.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    {dict.contact.form.successDesc}
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-md bg-surface-canvas hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors border border-surface-border"
                >
                  {dict.contact.form.resetBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-800">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={dict.contact.form.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.companyLabel} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={dict.contact.form.companyPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={dict.contact.form.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={dict.contact.form.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Country & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.countryLabel}
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors text-slate-800"
                    >
                      {dict.contact.form.countryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {dict.contact.form.industryLabel}
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors text-slate-800"
                    >
                      {dict.contact.form.industryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Service */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {dict.contact.form.serviceLabel}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors text-slate-800"
                  >
                    {dict.contact.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 5: Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {dict.contact.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={dict.contact.form.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 rounded-md bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === "submitting"
                      ? dict.contact.form.submittingBtn
                      : dict.contact.form.submitBtn}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-white rounded-xl p-8 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                  {dict.contact.info.locationTitle}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white mt-1">
                  CORE SYNFUELS LLC
                </h3>
              </div>

              {/* Texas Office */}
              <div className="pt-4 border-t border-navy-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-navy-850 border border-navy-700 flex items-center justify-center text-slate-200 flex-shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {dict.contact.info.texasTitle}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {dict.contact.info.texasDesc}
                  </p>
                </div>
              </div>

              {/* Mexico Representation */}
              <div className="pt-4 border-t border-navy-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-navy-850 border border-navy-700 flex items-center justify-center text-slate-200 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {dict.contact.info.mexicoTitle}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {dict.contact.info.mexicoDesc}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="pt-4 border-t border-navy-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-navy-850 border border-navy-700 flex items-center justify-center text-slate-200 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {dict.contact.info.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${dict.contact.info.emailValue}`}
                    className="text-xs text-slate-200 hover:text-white underline mt-0.5 block font-medium"
                  >
                    {dict.contact.info.emailValue}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-navy-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-navy-850 border border-navy-700 flex items-center justify-center text-slate-200 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {dict.contact.info.hoursTitle}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {dict.contact.info.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-6 rounded-xl bg-white border border-surface-border flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-navy-900">
                  {dict.contact.info.commitmentTitle}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {dict.contact.info.commitmentDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC<ContactSectionProps> = (props) => {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Cargando formulario...</div>}>
      <ContactFormContent {...props} />
    </Suspense>
  );
};
