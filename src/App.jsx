import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ACRepairPage from "./pages/ACRepairPage";
import WashingMachineRepairPage from "./pages/WashingMachineRepairPage";
import RefrigeratorRepairPage from "./pages/RefrigeratorRepairPage";
import MicrowaveRepairPage from "./pages/MicrowaveRepairPage";
import AboutPage from "./pages/AboutPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ac-repair" element={<ACRepairPage />} />
          <Route path="washing-machine-repair" element={<WashingMachineRepairPage />} />
          <Route path="refrigerator-repair" element={<RefrigeratorRepairPage />} />
          <Route path="microwave-repair" element={<MicrowaveRepairPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service-areas" element={<ServiceAreasPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
