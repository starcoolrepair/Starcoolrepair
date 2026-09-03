import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  RotateCw,
  Sparkles
} from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData } from "../data/servicesData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import InspectionNotice from "../components/InspectionNotice";
import HowItWorks from "../components/HowItWorks";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";

export default function WashingMachineRepairPage() {
  const service = servicesData.find((s) => s.slug === "washing-machine-repair");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Washing Machine Repair in Navi Mumbai",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": businessData.name,
      "telephone": businessData.phone,
      "url": businessData.website
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Navi Mumbai"
    },
    "serviceType": "Washing Machine Repair & Servicing",
    "description": service.metaDescription
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        schemaData={structuredData}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Washing Machine Repair" }]} />
        </div>
      </div>

      {/* UNIQUE WASHING MACHINE HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
                <RotateCw className="w-4 h-4 text-blue-700" />
                <span>Front-Load & Top-Load Specialist Diagnostics</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Washing Machine Repair in <br className="hidden sm:inline" />
                <span className="text-blue-700">Navi Mumbai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Reliable doorstep troubleshooting for <strong className="text-slate-900">Front-Load</strong>, Top-Load, and Semi-Automatic washing machines across all Navi Mumbai residential sectors. Fast resolution for spin faults, drainage clogs, door locks, and error codes.
              </p>

              {/* Front-load callout badge */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Front-Load Washing Machines Fully Supported</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Top-Load & Semi-Automatic</span>
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Visit / Inspection Charge: {businessData.inspectionFee}</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/booking"
                  className="btn-primary text-sm sm:text-base px-6 py-3.5 shadow-md"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Book a Repair</span>
                </Link>

                <a
                  href={businessData.phoneTel}
                  className="btn-call text-sm sm:text-base px-6 py-3.5 shadow-md"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm sm:text-base px-6 py-3.5 shadow-md"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <img
                  src={service.heroImage}
                  alt={service.imageAlt}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  width="600"
                  height="450"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  Front-Load Drum & Seal Inspection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS SECTION */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Typical Washer Faults
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Common Washing Machine Problems
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our technicians perform methodical diagnostics to pinpoint mechanical, electronic, and plumbing issues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{prob}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Diagnosed on-site during our ₹149 inspection visit.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Inspection Notice */}
          <div className="mt-10">
            <InspectionNotice />
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Washing Machine Repair Services
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Complete doorstep coverage for major residential laundry appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.serviceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Performed directly at your doorstep by qualified technicians with diagnostic multimeters and tools.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP WORKFLOW */}
      <HowItWorks />

      {/* BOOKING CTA */}
      <BookingCTA
        title="Washing Machine Not Spinning or Draining?"
        subtitle="Book an experienced doorstep inspection technician across Navi Mumbai today."
      />

      {/* FAQS */}
      <FAQAccordion
        items={service.faqs}
        title="Washing Machine Repair FAQs"
        subtitle="Answers regarding front-load washer issues, drain pump blockages, and our ₹149 inspection charge."
      />
    </>
  );
}
