import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Wrench,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData, generalFaqs } from "../data/servicesData";
import SEO from "../components/SEO";
import TrustStrip from "../components/TrustStrip";
import InspectionNotice from "../components/InspectionNotice";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceAreaCoverage from "../components/ServiceAreaCoverage";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": businessData.name,
    "image": `${businessData.website}/logo.png`,
    "telephone": businessData.phone,
    "url": businessData.website,
    "priceRange": "₹149 Inspection",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Navi Mumbai"
    },
    "description":
      "Expert doorstep appliance repair and service for AC, Washing Machine, Refrigerator, and Microwave across Navi Mumbai. 6+ years experience. ₹149 visit & inspection charge."
  };

  return (
    <>
      <SEO
        title="Star Cool Service | Expert Appliance Repair at Your Doorstep Navi Mumbai"
        description="Reliable doorstep AC, Washing Machine, Refrigerator & Microwave repair service across Navi Mumbai. 6+ Years Experience. Mon–Sun 9 AM–10 PM. ₹149 visit & inspection charge."
        schemaData={structuredData}
      />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle decorative glow */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>6+ Years Experience</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Expert Appliance Repair <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800">
                  at Your Doorstep
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Reliable AC, Washing Machine, Refrigerator & Microwave repair service across{" "}
                <strong className="text-slate-900 font-semibold">Navi Mumbai</strong>.
              </p>

              {/* Visit / Inspection Charge Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Visit / Inspection Charge: {businessData.inspectionFee}</span>
              </div>

              {/* CTAs: 3 Distinct CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                {/* Primary CTA: Book a Repair (Star Cool Blue) */}
                <Link
                  to="/booking"
                  className="btn-primary text-sm sm:text-base px-6 py-3.5 shadow-md"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Book a Repair</span>
                </Link>

                {/* Secondary CTA: Call Now (Distinct Dark Slate) */}
                <a
                  href={businessData.phoneTel}
                  className="btn-call text-sm sm:text-base px-6 py-3.5 shadow-md"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>Call Now</span>
                </a>

                {/* Additional CTA: WhatsApp Us (WhatsApp Green) */}
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

              {/* Quick Trust Highlights under CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Mon–Sun 9 AM–10 PM</span>
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Doorstep Inspection</span>
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Transparent Diagnosis</span>
                </span>
              </div>
            </div>

            {/* Right Side: Realistic Visual + Floating Depth Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Soft Blue Glow behind image */}
                <div
                  className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-3xl blur-xl"
                  aria-hidden="true"
                />

                {/* Main Hero Visual */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white">
                  <img
                    src="/images/home-hero.jpg"
                    alt="Professional appliance technician working on a home appliance in a modern residence"
                    className="w-full h-auto object-cover aspect-[4/3]"
                    width="600"
                    height="450"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Inspection Card */}
                <div className="absolute -bottom-5 left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    ₹149
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Doorstep Visit & Inspection</div>
                    <div className="text-[11px] text-slate-500">Transparent on-site diagnosis</div>
                  </div>
                </div>

                {/* Floating Coverage Badge */}
                <div className="absolute -top-4 right-4 sm:-right-4 bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold">All Navi Mumbai Covered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE STRIP */}
      <TrustStrip />

      {/* 3. QUICK SERVICE SELECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Choose Your Appliance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              What Appliance Needs Attention?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Select your appliance category to explore common issues, inspection details, and book doorstep service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((svc) => (
              <Link
                key={svc.id}
                to={`/${svc.slug}`}
                className="group p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {svc.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (4 Premium Visual Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Specialized Doorstep Repair Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Each service is backed by experienced diagnostics, transparent ₹149 inspection, and dedicated Navi Mumbai coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={svc.heroImage}
                    alt={svc.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                    {svc.name}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    Inspection: {businessData.inspectionFee}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {svc.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {svc.shortDescription}
                    </p>

                    {/* Common Problems Checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Frequently Resolved Issues:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                        {svc.commonProblems.slice(0, 4).map((prob, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{prob}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      to={`/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800"
                    >
                      <span>View Full Service Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/booking"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Book This Repair
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Policy Banner */}
          <div className="mt-12">
            <InspectionNotice />
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE STAR COOL SERVICE */}
      <WhyChooseUs />

      {/* 6. HOW IT WORKS (4-Step Workflow) */}
      <HowItWorks />

      {/* 7. SERVICE AREAS SECTION */}
      <ServiceAreaCoverage showAllLink={true} />

      {/* 8. BOOKING CTA */}
      <BookingCTA />

      {/* 9. FACTUAL FAQS */}
      <FAQAccordion
        items={generalFaqs}
        title="Frequently Asked Questions"
        subtitle="Clear, factual answers regarding our doorstep visit charge, repair estimation, and Navi Mumbai coverage."
      />
    </>
  );
}
