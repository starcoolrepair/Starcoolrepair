import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { businessData } from "../data/businessData";

export default function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.12)]"
      role="region"
      aria-label="Mobile Quick Contact Actions"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* CALL NOW Button - Deep Slate / High Contrast */}
        <a
          href={businessData.phoneTel}
          className="btn-call text-sm font-bold py-3 px-2 rounded-xl flex items-center justify-center gap-2 text-white shadow-md active:scale-95"
          aria-label={`Call Star Cool Service at ${businessData.phone}`}
        >
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <span>CALL NOW</span>
        </a>

        {/* WHATSAPP Button - Recognizable WhatsApp Green */}
        <a
          href={businessData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-sm font-bold py-3 px-2 rounded-xl flex items-center justify-center gap-2 text-white shadow-md active:scale-95"
          aria-label="Chat with Star Cool Service on WhatsApp"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
          </div>
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
}
