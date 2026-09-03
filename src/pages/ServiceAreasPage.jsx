import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, CheckCircle2, Phone, MessageSquare, AlertCircle } from "lucide-react";
import { businessData } from "../data/businessData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import InspectionNotice from "../components/InspectionNotice";
import BookingCTA from "../components/BookingCTA";

export default function ServiceAreasPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Appliance Repair Service Areas in Navi Mumbai",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": businessData.name,
      "telephone": businessData.phone,
      "url": businessData.website
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Navi Mumbai"
      },
      ...businessData.serviceAreas.map((area) => ({
        "@type": "AdministrativeArea",
        "name": area
      }))
    ],
    "description":
      "Doorstep appliance repair service coverage areas across All Navi Mumbai, Panvel station area, Dombivli, Diva, Kalwa, Palava, and nearby nodes."
  };

  return (
    <>
      <SEO
        title="Appliance Repair Service Areas in Navi Mumbai | Star Cool Service"
        description="Serving All Navi Mumbai with doorstep repair for AC, Washing Machine, Refrigerator & Microwave. Inspection charge ₹149. Coverage includes Vashi, Nerul, Kharghar, Panvel & more."
        schemaData={structuredData}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 text-blue-700" />
            <span>Doorstep Service Coverage</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Serving All Navi Mumbai
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Star Cool Service delivers on-site appliance repair and diagnostics directly to your residence across all major nodes and residential sectors.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold">
            <span>Doorstep Visit / Inspection Charge: {businessData.inspectionFee}</span>
          </div>
        </div>
      </section>

      {/* Primary Navi Mumbai Coverage */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Coverage Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-blue-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Coverage: All Navi Mumbai Nodes
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Daily mobile technician presence throughout all Navi Mumbai municipal sectors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              {businessData.naviMumbaiNodes.map((node) => (
                <div
                  key={node}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-sm font-medium text-slate-800 hover:border-blue-300 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{node}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Service Areas */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Additional Supported Service Areas
            </h2>
            <p className="text-sm text-slate-600">
              In addition to all Navi Mumbai sectors, our mobile technicians also serve the following specific locations and postal corridors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {businessData.serviceAreas
                .filter((area) => area !== "All Navi Mumbai")
                .map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-sm font-semibold text-slate-800"
                  >
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
            </div>

            {/* Strict Notice: Service areas only */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 mt-6 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block mb-1">
                  Important Service Area Policy:
                </strong>
                These locations represent <strong>mobile doorstep service zones only</strong>. Star Cool Service does NOT have retail branches, workshops, or walk-in showrooms at these addresses. Our certified technicians travel directly to your home with diagnostic equipment upon booking.
              </div>
            </div>
          </div>

          {/* Inspection Notice */}
          <InspectionNotice />
        </div>
      </section>

      <BookingCTA
        title="Living in Navi Mumbai or Surrounding Service Zones?"
        subtitle="Call or WhatsApp us now to schedule an inspection visit at your residence."
      />
    </>
  );
}
