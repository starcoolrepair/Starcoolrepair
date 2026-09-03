import React from "react";
import { ShieldCheck, Home, MapPin, Clock, BadgePercent } from "lucide-react";
import { businessData } from "../data/businessData";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "6+ Years Experience",
      detail: "Expert appliance troubleshooting",
      accent: "text-blue-600 bg-blue-50"
    },
    {
      icon: Home,
      title: "Doorstep Service",
      detail: "Inspection & repair at your home",
      accent: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: MapPin,
      title: "All Navi Mumbai",
      detail: "Fast response across all nodes",
      accent: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: Clock,
      title: "Mon–Sun 9 AM–10 PM",
      detail: "Convenient 7 days a week",
      accent: "text-purple-600 bg-purple-50"
    },
    {
      icon: BadgePercent,
      title: "₹149 Visit / Inspection",
      detail: "Transparent upfront diagnosis",
      accent: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${item.accent}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
