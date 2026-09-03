import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import { businessData } from "../data/businessData";

export default function BookingCTA({
  title = "Appliance Problem? We Come To You.",
  subtitle = "Quick doorstep diagnostic inspection and repair across All Navi Mumbai. Mon–Sun 9 AM–10 PM."
}) {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-4">
          <MapPin className="w-3.5 h-3.5 text-blue-300" />
          <span>Doorstep Appliance Service in Navi Mumbai</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-3 inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-amber-300">
          Visit / Inspection Charge: {businessData.inspectionFee}
        </div>

        {/* Action Buttons: Visually distinct */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* 1. Book a Repair - Primary Royal Blue */}
          <Link
            to="/booking"
            className="btn-primary text-base px-6 py-3.5 shadow-lg bg-blue-600 hover:bg-blue-700"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Book a Repair</span>
          </Link>

          {/* 2. Call Now - High-contrast distinct dark button */}
          <a
            href={businessData.phoneTel}
            className="btn-call text-base px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border-slate-600 shadow-lg"
          >
            <Phone className="w-5 h-5 text-blue-400" />
            <span>Call Now: {businessData.phone}</span>
          </a>

          {/* 3. WhatsApp Us - Recognizable WhatsApp Green */}
          <a
            href={businessData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-6 py-3.5 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
