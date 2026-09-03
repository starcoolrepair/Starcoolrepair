import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { businessData } from "../data/businessData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import BookingForm from "../components/BookingForm";
import InspectionNotice from "../components/InspectionNotice";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const initialAppliance = searchParams.get("appliance") || "AC";

  return (
    <>
      <SEO
        title="Book Appliance Repair in Navi Mumbai | Star Cool Service"
        description="Book doorstep AC, Washing Machine, Refrigerator, or Microwave repair across Navi Mumbai. Inspection charge ₹149. Experienced technician visits your home."
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Book a Repair" }]} />
        </div>
      </div>

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Quick WhatsApp Scheduling
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3">
              Book Doorstep Appliance Repair
            </h1>
            <p className="mt-3 text-base text-slate-600">
              Complete the request form below to send an instant pre-filled service inquiry to Star Cool Service on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <BookingForm initialAppliance={initialAppliance} />
            </div>

            {/* Right: Trust & Process Summary (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Inspection Callout */}
              <InspectionNotice />

              {/* Direct Booking Options */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Prefer Direct Contact?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your appliance breakdown is urgent or you prefer talking directly to a technician, call or message us directly:
                </p>

                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href={businessData.phoneTel}
                    className="btn-call text-sm font-semibold justify-center py-2.5"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>Call: {businessData.phoneFormatted}</span>
                  </a>

                  <a
                    href={businessData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-sm font-semibold justify-center py-2.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Doorstep Service Assurance
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>6+ Years Experience:</strong> Thorough diagnosis across all 4 core appliance categories.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Mon–Sun 9 AM–10 PM:</strong> 7 days a week service hours for your home convenience.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>All Navi Mumbai Covered:</strong> Prompt doorstep reach across residential nodes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Transparent Quotations:</strong> All repair work quoted post-inspection before repairs start.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
