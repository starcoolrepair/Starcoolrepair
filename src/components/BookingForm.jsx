import React, { useState } from "react";
import { MessageSquare, AlertCircle, Calendar, Clock, User, Phone, MapPin, Wrench, FileText, CheckCircle2 } from "lucide-react";
import { businessData } from "../data/businessData";

export default function BookingForm({ initialAppliance = "AC" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    appliance: initialAppliance,
    serviceNeeded: "Repair / Breakdown",
    problemDescription: "",
    area: "",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM – 1:00 PM)",
    additionalMessage: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const appliances = [
    { label: "AC (Air Conditioner)", value: "AC" },
    { label: "Washing Machine", value: "Washing Machine" },
    { label: "Refrigerator", value: "Refrigerator" },
    { label: "Microwave", value: "Microwave" }
  ];

  const services = [
    "Repair / Breakdown",
    "General Servicing / Cleaning",
    "Inspection & Diagnosis",
    "Not Cooling / Not Heating Issue",
    "Water Leakage",
    "Unusual Noise / Vibration",
    "Other Issue"
  ];

  const timeSlots = [
    "Morning (9:00 AM – 1:00 PM)",
    "Afternoon (1:00 PM – 5:00 PM)",
    "Evening (5:00 PM – 9:00 PM)",
    "Anytime Between 9:00 AM – 10:00 PM"
  ];

  const validate = () => {
    const errs = {};

    // Name
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name should be at least 2 characters long.";
    }

    // Mobile validation (Indian mobile numbers: 10 digits starting with 6, 7, 8, 9, allowing optional +91 or leading 0)
    const cleanMobile = formData.mobileNumber.replace(/[\s\-\(\)]/g, "");
    const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!cleanMobile) {
      errs.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!mobileRegex.test(cleanMobile)) {
      errs.mobileNumber = "Please enter a valid 10-digit Indian mobile number.";
    }

    // Appliance
    if (!formData.appliance) {
      errs.appliance = "Please select the appliance.";
    }

    // Service Needed
    if (!formData.serviceNeeded) {
      errs.serviceNeeded = "Please select the service required.";
    }

    // Problem Description
    if (!formData.problemDescription.trim()) {
      errs.problemDescription = "Please describe the problem you are experiencing.";
    }

    // Area
    if (!formData.area.trim()) {
      errs.area = "Please provide your locality/sector in Navi Mumbai.";
    }

    // Preferred Date
    if (!formData.preferredDate) {
      errs.preferredDate = "Please choose a preferred service date.";
    }

    // Preferred Time
    if (!formData.preferredTime) {
      errs.preferredTime = "Please choose a preferred time slot.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Exact message structure required by prompt:
    /*
    Hello Star Cool Service,
    I want to book an appliance repair service.

    Name:
    Mobile:
    Appliance:
    Service:
    Problem:
    Area:
    Preferred Date:
    Preferred Time:
    Additional Message:

    Please contact me regarding the service.
    */
    const message = `Hello Star Cool Service,
I want to book an appliance repair service.

Name: ${formData.fullName.trim()}
Mobile: ${formData.mobileNumber.trim()}
Appliance: ${formData.appliance}
Service: ${formData.serviceNeeded}
Problem: ${formData.problemDescription.trim()}
Area: ${formData.area.trim()}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Additional Message: ${formData.additionalMessage.trim() || "None"}

Please contact me regarding the service.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919137355620?text=${encodedMessage}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Form Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          <Wrench className="w-4 h-4" />
          <span>Doorstep Service Booking Request</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Request Appliance Inspection
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-300">
          Fill out the details below to generate a pre-filled booking request via WhatsApp.
          Visit / Inspection Charge is ₹149.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Full Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                  errors.fullName
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Mobile Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="mobileNumber"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                  errors.mobileNumber
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.mobileNumber && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.mobileNumber}</span>
              </p>
            )}
          </div>
        </div>

        {/* Appliance & Service Needed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="appliance"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Appliance *
            </label>
            <select
              id="appliance"
              name="appliance"
              value={formData.appliance}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors ${
                errors.appliance ? "border-red-500" : "border-slate-300 focus:border-blue-600"
              }`}
            >
              {appliances.map((app) => (
                <option key={app.value} value={app.value}>
                  {app.label}
                </option>
              ))}
            </select>
            {errors.appliance && (
              <p className="text-xs text-red-600 mt-1">{errors.appliance}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="serviceNeeded"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Service Needed *
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors ${
                errors.serviceNeeded ? "border-red-500" : "border-slate-300 focus:border-blue-600"
              }`}
            >
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            {errors.serviceNeeded && (
              <p className="text-xs text-red-600 mt-1">{errors.serviceNeeded}</p>
            )}
          </div>
        </div>

        {/* Problem Description */}
        <div>
          <label
            htmlFor="problemDescription"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Problem Description *
          </label>
          <div className="relative">
            <textarea
              id="problemDescription"
              name="problemDescription"
              rows={3}
              value={formData.problemDescription}
              onChange={handleChange}
              placeholder="e.g. AC is not cooling properly and making a buzzing noise..."
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                errors.problemDescription
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.problemDescription && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.problemDescription}</span>
            </p>
          )}
        </div>

        {/* Area / Location */}
        <div>
          <label
            htmlFor="area"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Area / Location in Navi Mumbai *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              id="area"
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g. Vashi Sector 14, Kharghar, Nerul, etc."
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                errors.area
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.area && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.area}</span>
            </p>
          )}
        </div>

        {/* Preferred Date & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Preferred Date *
            </label>
            <div className="relative">
              <input
                id="preferredDate"
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors ${
                  errors.preferredDate ? "border-red-500" : "border-slate-300 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.preferredDate && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.preferredDate}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors ${
                errors.preferredTime ? "border-red-500" : "border-slate-300 focus:border-blue-600"
              }`}
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="text-xs text-red-600 mt-1">{errors.preferredTime}</p>
            )}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label
            htmlFor="additionalMessage"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Additional Message (Optional)
          </label>
          <textarea
            id="additionalMessage"
            name="additionalMessage"
            rows={2}
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder="Any landmarks, model details, or special requests..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600"
          />
        </div>

        {/* Clear Notice: STRICT REQUIREMENT */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1">
          <p className="font-bold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Important Service Request Notice</span>
          </p>
          <p className="text-slate-700 leading-relaxed pl-5">
            Submitting this form creates a <strong>service request</strong> and is{" "}
            <strong>NOT an automatic appointment confirmation</strong>. Our team will contact you to confirm technician availability and schedule your inspection visit.
          </p>
        </div>

        {/* Submission CTA */}
        <div>
          <button
            type="submit"
            className="btn-whatsapp w-full py-3.5 text-base font-bold shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book via WhatsApp</span>
          </button>
        </div>

        {isSubmitted && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              WhatsApp opened with your pre-filled service request details. Click send on WhatsApp to submit!
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
