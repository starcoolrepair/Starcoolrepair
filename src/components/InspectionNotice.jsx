import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { businessData } from "../data/businessData";

export default function InspectionNotice({ className = "" }) {
  return (
    <div
      className={`bg-blue-50/70 border border-blue-200/90 rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-md">
              Transparent Pricing Policy
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              Visit / Inspection Charge: {businessData.inspectionFee}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {businessData.inspectionNote}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Full on-site diagnostic check</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Transparent quote before work starts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>No repair action without your consent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Doorstep service across Navi Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
