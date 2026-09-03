import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ThermometerSnowflake,
  Wind,
  Droplets,
  Volume2
} from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData } from "../data/servicesData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import InspectionNotice from "../components/InspectionNotice";
import HowItWorks from "../components/HowItWorks";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";

export default function ACRepairPage() {
  const service = servicesData.find((s) => s.slug === "ac-repair");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AC Repair & Service in Navi Mumbai",
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
    "serviceType": "Air Conditioning Repair & Servicing",
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
          <Breadcrumbs items={[{ label: "AC Repair & Service" }]} />
        </div>
      </div>

      {/* UNIQUE AC HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
                <ThermometerSnowflake className="w-4 h-4 text-blue-700" />
                <span>Navi Mumbai Doorstep AC Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                AC Repair & Service in <br className="hidden sm:inline" />
                <span className="text-blue-700">Navi Mumbai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Expert doorstep air conditioner repair, cooling troubleshooting, gas checking, and scheduled servicing for split and window AC units across all Navi Mumbai residential sectors.
              </p>

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

              {/* Key Trust Checkpoints */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Split & Window AC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>₹149 Inspection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>6+ Years Experience</span>
                </div>
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
                  Split AC Servicing & Inspection
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
              Common AC Failures We Resolve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Common Air Conditioner Problems
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our technicians carry precision diagnostic tools to identify and repair all typical AC faults on-site.
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

      {/* DETAILED SERVICE OPTIONS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              AC Service & Repair Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Comprehensive cooling care for residential split and window units.
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
                  Performed by experienced technicians using accurate pressure gauges and electrical multimeters.
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
        title="Need Doorstep AC Repair in Navi Mumbai?"
        subtitle="Call or WhatsApp us now to schedule an inspection visit at your residence. Mon–Sun 9 AM–10 PM."
      />

      {/* FAQS */}
      <FAQAccordion
        items={service.faqs}
        title="AC Repair FAQs"
        subtitle="Common questions regarding AC cooling issues, water leakage, and our ₹149 inspection."
      />
    </>
  );
}
