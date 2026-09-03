import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  Clock,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { businessData } from "../data/businessData";
import { servicesData } from "../data/servicesData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Detect scroll for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `font-medium text-sm transition-colors py-2 px-3 rounded-md ${
      isActive
        ? "text-blue-700 bg-blue-50/80 font-semibold"
        : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
    }`;

  return (
    <header className="w-full z-40 relative">
      {/* Top Value Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Doorstep Service across <strong>All Navi Mumbai</strong></span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Mon–Sun: 9:00 AM – 10:00 PM</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-amber-300 font-semibold">
              Visit / Inspection Charge: ₹149
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={businessData.phoneTel}
              className="flex items-center gap-1 text-slate-200 hover:text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{businessData.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={businessData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? "shadow-md border-slate-200/80 py-2.5"
            : "border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Star Cool Service Homepage"
          >
            <div className="relative p-0.5 rounded-full bg-white flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Star Cool Service Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform duration-200 group-hover:scale-105"
                width="56"
                height="56"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                STAR COOL SERVICE
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-600 hidden xs:block">
                Doorstep Appliance Repair
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 font-medium text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 py-2 px-3 rounded-md transition-colors focus:outline-none"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Doorstep Core Services
                  </div>
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/${svc.slug}`}
                      className="flex items-start gap-3 px-3.5 py-2.5 hover:bg-blue-50/70 transition-colors rounded-lg mx-1 text-slate-800 hover:text-blue-700"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{svc.name}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {svc.shortName === "Washing Machine"
                            ? "Front-load & top-load"
                            : "Inspection & repairs"}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="px-3 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Inspection: <strong className="text-slate-900">₹149</strong></span>
                    <span className="text-blue-600 font-medium">Navi Mumbai</span>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/service-areas" className={navLinkClass}>
              Service Areas
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Call Now Button - Distinct dark/slate contrast */}
            <a
              href={businessData.phoneTel}
              className="btn-call text-xs sm:text-sm py-2 px-3.5"
              aria-label="Call Star Cool Service directly"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Now</span>
            </a>

            {/* Book a Repair Button - Primary Star Cool Blue */}
            <Link
              to="/booking"
              className="btn-primary text-xs sm:text-sm py-2 px-4 shadow-sm"
              aria-label="Book an appliance repair service"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Book a Repair</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/booking"
              className="btn-primary text-xs py-1.5 px-3 font-semibold"
            >
              Book
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-800"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg my-1">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.id}
                        to={`/${svc.slug}`}
                        className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-md"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-800"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/service-areas"
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-800"
                  }`
                }
              >
                Service Areas
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-800"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-800"
                  }`
                }
              >
                Book a Repair
              </NavLink>
            </div>

            {/* Mobile Call & WhatsApp Actions */}
            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={businessData.phoneTel}
                className="btn-call w-full py-2.5 text-center text-sm font-semibold justify-center"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Now: {businessData.phone}</span>
              </a>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-2.5 text-center text-sm font-semibold justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
