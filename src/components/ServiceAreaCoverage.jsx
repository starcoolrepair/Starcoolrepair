import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { businessData } from "../data/businessData";

export default function ServiceAreaCoverage({ showAllLink = true }) {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Doorstep Coverage Network
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Serving All Navi Mumbai & Key Environs
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our certified mobile technicians visit your doorstep across all residential nodes in Navi Mumbai and surrounding service locations.
          </p>
        </div>

        {/* Primary Service Banner */}
        <div className="bg-white rounded-2xl border border-blue-200/80 p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Primary Service Area: All Navi Mumbai
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fast doorstep response across every residential sector & building complex.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inspection Fee: ₹149</span>
            </span>
          </div>

          {/* Navi Mumbai Nodes Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Major Navi Mumbai Nodes Covered:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm font-medium text-slate-700">
              {businessData.naviMumbaiNodes.map((node) => (
                <div key={node} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{node}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Service Areas */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Additional Doorstep Service Areas
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            We also provide doorstep service coverage to the following specific locations and postal codes:
          </p>

          <div className="flex flex-wrap gap-2.5">
            {businessData.serviceAreas
              .filter((area) => area !== "All Navi Mumbai")
              .map((area, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium border border-slate-200/80"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{area}</span>
                </span>
              ))}
          </div>

          {/* Important Notice Callout */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
            <strong className="text-slate-700">Please Note:</strong> All locations listed above represent active technician <strong>doorstep service coverage areas only</strong>. Star Cool Service does not maintain physical retail shops, branches, or walk-in showrooms at these locations.
          </div>
        </div>

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <span>View full service area details & scheduling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
