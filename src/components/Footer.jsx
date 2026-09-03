import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData } from "../data/servicesData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Star Cool Service Logo"
                className="h-12 w-12 object-contain bg-white rounded-full p-0.5"
                width="48"
                height="48"
              />
              <div>
                <span className="text-lg font-black tracking-tight text-white block">
                  STAR COOL SERVICE
                </span>
                <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                  {businessData.slogan}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {businessData.tagline}. Doorstep diagnostic inspection and repair for AC,
              Washing Machine, Refrigerator, and Microwave across Navi Mumbai.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>{businessData.experience}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-amber-300">
                <span>Inspection: {businessData.inspectionFee}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/${svc.slug}`}
                    className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-slate-400 hover:text-white transition-colors">
                  Book a Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h3>

            <div className="flex items-start gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-500 block">Phone Support</span>
                <a
                  href={businessData.phoneTel}
                  className="text-white hover:text-blue-400 font-semibold tracking-wide transition-colors"
                >
                  {businessData.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-500 block">Official WhatsApp</span>
                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-500 block">Working Hours</span>
                <span className="text-slate-300 font-medium">{businessData.workingHours}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-500 block">Service Model</span>
                <span className="text-slate-300 font-medium">
                  Doorstep Service across <strong>{businessData.primaryServiceArea}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            © {currentYear} {businessData.name}. All rights reserved. Doorstep Home Appliance Repair & Service.
          </p>
          <p className="max-w-xl text-[11px] text-slate-500">
            * Visit/Inspection charge is {businessData.inspectionFee}. Total repair and servicing cost is determined post-inspection based on required parts, labor, and appliance condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
