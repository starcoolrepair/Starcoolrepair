import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Home,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Wrench,
  CheckCircle2
} from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData } from "../data/servicesData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import InspectionNotice from "../components/InspectionNotice";
import BookingCTA from "../components/BookingCTA";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Star Cool Service | Professional Doorstep Appliance Repair Navi Mumbai"
        description="Learn about Star Cool Service, providing 6+ years of experienced doorstep repair for AC, Washing Machine, Refrigerator, and Microwave appliances across Navi Mumbai."
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>6+ Years Experience</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            About Star Cool Service
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A professional doorstep home appliance repair and service brand serving residents across{" "}
            <strong className="text-slate-900">All Navi Mumbai</strong>.
          </p>

          <div className="mt-4 text-xs sm:text-sm font-bold tracking-wider text-blue-700 uppercase">
            {businessData.slogan}
          </div>
        </div>
      </section>

      {/* Core Company Profile Narrative */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-base">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Our Professional Service Approach
            </h2>
            <p>
              <strong>Star Cool Service</strong> provides dedicated doorstep diagnostic inspection and repair services for essential residential home appliances. Operating across Navi Mumbai, our focus is on technical accuracy, customer convenience, and transparent communication.
            </p>
            <p>
              With over <strong>6+ years of practical field experience</strong>, we specialize exclusively in four core appliance categories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {servicesData.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/${svc.slug}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors"
                >
                  <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{svc.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Doorstep Model & Inspection Approach */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Doorstep Convenience & Inspection-Based Diagnosis
            </h2>
            <p>
              We believe that repairing major home appliances should never require customers to disassemble and transport bulky equipment to workshops. Our mobile technicians travel directly to your home with the necessary multimeters, pressure gauges, and testing tools.
            </p>
            <p>
              Every service begins with our standardized <strong>₹149 visit and inspection</strong>. We diagnose the root cause of the breakdown, explain the issue clearly, and provide an accurate cost estimate based on actual requirements and parts needed before performing any repair.
            </p>
          </div>

          {/* Direct Communication */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Convenient Call & WhatsApp Communication
            </h2>
            <p>
              We keep booking direct and hassle-free. Whether you prefer a phone call to explain unusual noises or sending a quick WhatsApp message with your appliance details, our team responds promptly throughout our operating hours: <strong>Monday to Sunday from 9:00 AM to 10:00 PM</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={businessData.phoneTel}
                className="btn-call text-sm"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call: {businessData.phoneFormatted}</span>
              </a>

              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Transparent Inspection Callout */}
          <InspectionNotice />
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Core Service Pillars
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Built upon factual technical expertise and consistent doorstep service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessData.trustPillars.slice(0, 3).map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="inline-block px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold mb-3">
                  {pillar.badge}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
