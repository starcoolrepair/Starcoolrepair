import React from "react";
import { PhoneCall, Search, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { businessData } from "../data/businessData";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      name: "CONTACT",
      icon: PhoneCall,
      title: "Reach Out to Us",
      desc: "Call 9137355620 or chat on WhatsApp with your appliance type and issue.",
      badge: "Step 1"
    },
    {
      num: "02",
      name: "INSPECTION",
      icon: Search,
      title: "Doorstep Inspection",
      desc: "Our technician arrives at your home. Visit/inspection charge is ₹149.",
      badge: "Step 2"
    },
    {
      num: "03",
      name: "DIAGNOSIS",
      icon: FileCheck,
      title: "Accurate Diagnosis",
      desc: "We pinpoint the exact fault, explain the required work, and provide transparent pricing.",
      badge: "Step 3"
    },
    {
      num: "04",
      name: "REPAIR / SERVICE",
      icon: CheckCircle,
      title: "Professional Service",
      desc: "Work begins only after your approval. Your appliance is repaired, tested, and handed over.",
      badge: "Step 4"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Transparent Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A straightforward 4-step doorstep service process designed for clarity and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col relative group"
              >
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {step.name}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {step.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                  <span>{step.badge}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
