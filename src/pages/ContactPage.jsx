import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  Globe,
  Clock,
  MapPin,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { businessData } from "../data/businessData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import InspectionNotice from "../components/InspectionNotice";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": businessData.name,
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
    }
  };

  return (
    <>
      <SEO
        title="Contact Star Cool Service | Appliance Repair in Navi Mumbai"
        description="Contact Star Cool Service for doorstep AC, Washing Machine, Refrigerator & Microwave repair across Navi Mumbai. Call 9137355620 or chat on WhatsApp. Mon–Sun 9 AM–10 PM."
        schemaData={structuredData}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </div>
      </div>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3">
              Contact Star Cool Service
            </h1>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Direct and transparent doorstep appliance repair assistance across All Navi Mumbai.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Phone
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {businessData.phone}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct call for immediate appliance service queries.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={businessData.phoneTel}
                    className="btn-call w-full text-sm font-semibold justify-center py-2.5"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official WhatsApp
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                    {businessData.phone}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Quick messaging for photos, error codes, and slot booking.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={businessData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-sm font-semibold justify-center py-2.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Working Hours</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Monday to Sunday
                </div>
                <div className="text-xs text-slate-600">
                  9:00 AM – 10:00 PM
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Service Area</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  All Navi Mumbai
                </div>
                <div className="text-xs text-slate-600">
                  Doorstep Mobile Service
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Official Website</span>
                </div>
                <div className="text-sm font-bold text-slate-900 truncate">
                  starcoolrepair.online
                </div>
                <div className="text-xs text-slate-600">
                  Secure Portal
                </div>
              </div>
            </div>

            {/* Book a Repair CTA */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Ready to Book an Inspection?</h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                  Visit / Inspection Charge is ₹149. Experienced technician visits your home.
                </p>
              </div>
              <Link
                to="/booking"
                className="btn-call text-xs sm:text-sm px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-100 shrink-0 font-bold border-0 shadow-md"
              >
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Book a Repair</span>
              </Link>
            </div>

            {/* Note regarding physical address */}
            <div className="text-xs text-slate-500 leading-relaxed pt-2">
              <strong className="text-slate-700">Notice:</strong> Star Cool Service provides 100% doorstep mobile home appliance repair services throughout Navi Mumbai. We do not operate physical retail walk-in offices or showrooms.
            </div>
          </div>

          <div className="mt-8">
            <InspectionNotice />
          </div>
        </div>
      </section>
    </>
  );
}
