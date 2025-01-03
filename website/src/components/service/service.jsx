import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Cog,
  Calculator,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Shield,
  Settings,
  Clock4
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Vehicle Diagnostics",
      description: "Comprehensive diagnostic services using latest Volvo-specific equipment",
      icon: Search,
      features: [
        "Complete system scanning",
        "Error code interpretation",
        "Performance analysis",
        "Digital health reports"
      ]
    },
    {
      title: "Maintenance Service",
      description: "Regular maintenance and servicing to keep your Volvo in optimal condition",
      icon: Cog,
      features: [
        "Scheduled maintenance",
        "Oil and filter changes",
        "Brake system service",
        "Technical inspections"
      ]
    },
    {
      title: "Spare Parts Supply",
      description: "Genuine Volvo parts with warranty and expert installation",
      icon: Car,
      features: [
        "Original Volvo parts",
        "Parts warranty",
        "Installation service",
        "Parts consultation"
      ]
    },
    {
      title: "Performance Upgrades",
      description: "Authorized Volvo performance enhancements and modifications",
      icon: Settings,
      features: [
        "Engine optimization",
        "Suspension upgrades",
        "Brake system improvements",
        "ECU tuning"
      ]
    },
    {
      title: "Body & Paint",
      description: "Professional body repairs and paint services for Volvo vehicles",
      icon: Shield,
      features: [
        "Collision repairs",
        "Paint restoration",
        "Scratch removal",
        "Paint protection"
      ]
    },
    {
      title: "Express Service",
      description: "Quick service solutions for busy Volvo owners",
      icon: Clock4,
      features: [
        "Oil change service",
        "Battery replacement",
        "Brake pad replacement",
        "Basic diagnostics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Expert Volvo Services
            </motion.h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive care services delivered by certified Volvo specialists
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold"
            >
              Schedule Service
            </motion.button>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceBenefit
              icon={Shield}
              title="Certified Expertise"
              description="Factory-trained technicians specializing in Volvo vehicles"
            />
            <ServiceBenefit
              icon={Cog}
              title="Genuine Parts"
              description="100% authentic Volvo parts with full warranty coverage"
            />
            <ServiceBenefit
              icon={Clock}
              title="Efficient Service"
              description="Quick turnaround times without compromising quality"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive care solutions for your Volvo, delivered with expertise and precision
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ServiceProcess />
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ServiceBookingForm />
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <WarrantyInfo />
        </div>
      </section>
    </div>
  );
};

const ServiceBenefit = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServiceCard = ({ title, description, icon: Icon, features, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue-900/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-blue-900" />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-900"
        >
          {isExpanded ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </button>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <CheckCircle2 className="h-4 w-4 mr-2 text-blue-900" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-blue-900 font-medium flex items-center hover:space-x-2 transition-all"
      >
        <span>Book Service</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </motion.button>
    </motion.div>
  );
};

const ServiceProcess = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule a service time that works for you"
    },
    {
      icon: Search,
      title: "Vehicle Inspection",
      description: "Complete diagnostic assessment of your Volvo"
    },
    {
      icon: Cog,
      title: "Service Execution",
      description: "Expert service by certified technicians"
    },
    {
      icon: CheckCircle2,
      title: "Quality Check",
      description: "Final inspection and service verification"
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Service Process
        </h2>
        <p className="text-gray-600">
          Our streamlined process ensures quality service delivery
        </p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ServiceBookingForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Schedule Service</h2>
        <p className="text-gray-600">Book your Volvo service appointment today</p>
      </motion.div>
      <form className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Volvo Model
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="e.g., XC90, S60"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select className="w-full p-3 border border-gray-200 rounded-lg">
            <option value="">Select Service</option>
            <option value="maintenance">Regular Maintenance</option>
            <option value="repair">Repair Service</option>
            <option value="diagnostic">Diagnostic Check</option>
            <option value="bodywork">Body Work</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Details
          </label>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg"
            rows="4"
            placeholder="Please describe the service you need"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-200 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <select className="w-full p-3 border border-gray-200 rounded-lg">
            <option value="">Select Time</option>
            <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
          >
            Schedule Appointment
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const WarrantyInfo = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Service Warranty
        </h2>
        <p className="text-blue-100 mb-12">
          We stand behind our work with comprehensive warranty coverage
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 p-6 rounded-xl"
        >
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Parts Warranty</h3>
          <p className="text-blue-100">
            All genuine Volvo parts come with manufacturer warranty coverage for your peace of mind
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 p-6 rounded-xl"
        >
          <Cog className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Labor Guarantee</h3>
          <p className="text-blue-100">
            Our workmanship is guaranteed for 12 months or 20,000 kilometers, whichever comes first
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 p-6 rounded-xl"
        >
          <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Satisfaction Promise</h3>
          <p className="text-blue-100">
            We ensure your complete satisfaction with our service quality and support
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Emergency Service Banner Component
const EmergencyServiceBanner = () => {
  return (
    <div className="bg-red-600 text-white py-3 pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <Phone className="h-5 w-5 animate-pulse" />
          <p className="font-medium">
            24/7 Emergency Service Available: 
            <a href="tel:+263782032527" className="ml-2 underline">
              +263 78 203 2527
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Service Plans Component
const ServicePlans = () => {
  const plans = [
    {
      name: "Basic Care",
      description: "Essential maintenance for your Volvo",
      price: "From $150",
      features: [
        "Oil and filter change",
        "Multi-point inspection",
        "Fluid level check",
        "Battery test"
      ]
    },
    {
      name: "Comprehensive Care",
      description: "Complete care package for optimal performance",
      price: "From $299",
      features: [
        "All Basic Care services",
        "Brake system service",
        "Air conditioning check",
        "Computer diagnostics",
        "Alignment check"
      ]
    },
    {
      name: "Premium Care",
      description: "Ultimate care for your Volvo",
      price: "From $499",
      features: [
        "All Comprehensive Care services",
        "Transmission service",
        "Cooling system service",
        "Advanced diagnostics",
        "Interior/exterior detail"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Service Plans
          </h2>
          <p className="text-gray-600">
            Choose the right care package for your Volvo
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-blue-900 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-900" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add these components to the main ServicesPage component
const UpdatedServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyServiceBanner />
          <ServicesPage />
      <ServicePlans />
      {/* Rest of the sections */}
    </div>
  );
};

export default UpdatedServicesPage;