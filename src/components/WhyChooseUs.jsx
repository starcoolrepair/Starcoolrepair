import React from "react";
import {
  ShieldCheck,
  Home,
  MapPin,
  Clock,
  Search,
  MessageCircle
} from "lucide-react";
import { businessData } from "../data/businessData";

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Experienced Service Approach",
      description:
        "Over 6+ years of practical field experience diagnosing and repairing residential cooling and cleaning appliances.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Home,
      title: "Doorstep Convenience",
      description:
        "No hauling heavy appliances to workshops. Technicians arrive directly at your residence with testing instruments.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: MapPin,
      title: "Comprehensive Navi Mumbai Coverage",
      description:
        "Prompt service reach across all residential sectors of Navi Mumbai and adjoining service corridors.",
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: Clock,
      title: "Convenient Working Hours",
      description:
        "Available Monday through Sunday from 9:00 AM to 10:00 PM, accommodating both working professionals and busy households.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Search,
      title: "Inspection-Based Diagnosis (₹149)",
      description:
        "Thorough physical evaluation of the unit before any repair decisions. Transparent explanation with zero hidden costs.",
      color: "text-amber-600 bg-amber-50"
    },
    {
      icon: MessageCircle,
      title: "Easy Call / WhatsApp Booking",
      description:
        "Direct connection to responsive technicians via direct phone call or quick WhatsApp messaging.",
      color: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Our Service Standards
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Choose Star Cool Service
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We prioritize transparent inspections, technical integrity, and dependable doorstep assistance across Navi Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pt.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
