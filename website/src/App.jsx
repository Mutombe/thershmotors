import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import VehiclesPage from './components/vehicles/vehicle.jsx';
import SparePartsPage from './components/spareparts/sparepage.jsx';
import { Car, Calculator, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import UpdatedServicesPage from './components/service/service.jsx';
import HomePage from './components/home/home.jsx';
import ValuationPage from './components/valuation/valuation.jsx';
import Navbar from './components/nav/nav.jsx';
import ContactPage from './components/contact/contact.jsx';
import TeamPage from './components/contact/team.jsx';
import Reviews from './components/contact/reviews.jsx';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/volvo-vehicles" element={<VehiclesPage />} />
              <Route path="/volvo-spares" element={<SparePartsPage />} />
              <Route path="/volvo-specialist-services" element={<UpdatedServicesPage />} />
              <Route path="/volvo-valuation" element={<ValuationPage />} />
              <Route path="/thersh-motors-contact" element={<ContactPage />} />
              <Route path="/thersh-team" element={<TeamPage />} />
              <Route path="/testimonials" element={<Reviews />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
};

export default App;