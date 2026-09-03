import React from "react";
import { Link } from "react-router-dom";
import { Home, ShieldCheck, Phone } from "lucide-react";
import { businessData } from "../data/businessData";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Star Cool Service"
        description="The page you are looking for does not exist. Return to Star Cool Service homepage or book doorstep appliance repair in Navi Mumbai."
      />

      <section className="min-h-[65vh] flex items-center justify-center py-16 px-4 bg-slate-50">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/90 p-8 text-center shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center mx-auto mb-4">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The page you requested could not be located. You can navigate back to our homepage, book a doorstep repair, or call our technician team directly.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {/* Back to Home */}
            <Link
              to="/"
              className="btn-primary text-sm font-bold py-3 justify-center"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            {/* Book a Repair */}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 text-sm font-bold transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Book a Repair</span>
            </Link>

            {/* Call Now */}
            <a
              href={businessData.phoneTel}
              className="btn-call text-sm font-bold py-3 justify-center"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Now: {businessData.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
