import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Link } from "react-router-dom";

const ValuationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/fleet.webp')",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Expert Volvo Vehicle Valuation
            </motion.h1>
            <p className="text-xl text-blue-100 mb-8">
              Get an accurate market value for your Volvo from our certified
              specialists
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 text-left shadow-lg"
            >
              <ValuationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ValuationSteps />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ValuationFAQ />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AdditionalServices />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

const ValuationForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const models = [
    "XC90",
    "XC60",
    "XC40",
    "S90",
    "S60",
    "V90",
    "V60",
    "C40 Recharge",
    "XC40 Recharge",
    "S90 Recharge",
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between mb-8">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 ${
              index + 1 <= step ? "bg-blue-900" : "bg-gray-200"
            } ${index + 1 !== totalSteps ? "mr-2" : ""}`}
          />
        ))}
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-blue-900">
            Vehicle Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Select Volvo Model"
              >
                <option value="Model" className="text-gray-500">
                  Select Volvo Model
                </option>
                {models.map((model) => (
                  <option key={model} value={model} className="text-gray-500">
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <input
                type="number"
                min="1990"
                max="2024"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Vehicle Year"
              />
            </div>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-blue-900">
            Vehicle Condition
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mileage
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Current mileage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Overall Condition
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-lg text-gray-500">
                <option value="" className="text-gray-500">
                  Select Condition
                </option>
                <option value="excellent" className="text-gray-500">
                  Excellent
                </option>
                <option value="good" className="text-gray-500">
                  Good
                </option>
                <option value="fair" className="text-gray-500">
                  Fair
                </option>
                <option value="poor" className="text-gray-500">
                  Poor
                </option>
              </select>
            </div>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-blue-900">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Your full name"
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
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Your email address"
              />
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => (step < totalSteps ? setStep(step + 1) : null)}
          className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 ml-auto"
        >
          {step === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

const ValuationSteps = () => {
  const steps = [
    {
      icon: Car,
      title: "Vehicle Information",
      description:
        "Provide details about your Volvo model, year, and specifications",
    },
    {
      icon: Search,
      title: "Expert Assessment",
      description:
        "Our specialists evaluate your vehicle's condition and market position",
    },
    {
      icon: Calculator,
      title: "Detailed Valuation",
      description:
        "Receive a comprehensive valuation report with market analysis",
    },
    {
      icon: CheckCircle2,
      title: "Professional Consultation",
      description: "Discuss your options with our Volvo experts",
    },
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Valuation Process
        </h2>
        <p className="text-gray-600">
          Get an accurate valuation of your Volvo through our comprehensive
          process
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ValuationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the valuation process take?",
      answer:
        "Our initial online valuation is instant. For a detailed physical inspection and comprehensive valuation, we typically require 1-2 hours of your time at our facility.",
    },
    {
      question: "What factors affect my Volvo's value?",
      answer:
        "Key factors include the model, year, mileage, overall condition, service history, modifications, and current market trends specific to Volvo vehicles.",
    },
    {
      question: "Do you offer trade-in options?",
      answer:
        "Yes, we offer competitive trade-in values for your Volvo against any vehicle in our inventory. Our specialists can discuss the best options for your situation.",
    },
    {
      question: "Is the valuation service free?",
      answer:
        "Yes, our initial online valuation is completely free. If you proceed with a physical inspection for a detailed valuation report, our specialist will discuss any applicable fees.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Common questions about our Volvo valuation service
        </p>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <span className="font-medium text-blue-900">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-blue-900" />
              ) : (
                <Plus className="h-5 w-5 text-blue-900" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AdditionalServices = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Sales",
      description: "Browse our premium selection of Volvo vehicles",
      link: "/volvo-vehicles",
    },
    {
      icon: Cog,
      title: "Maintenance",
      description: "Expert Volvo servicing and repairs",
      link: "/volvo-spares",
    },
    {
      icon: Filter,
      title: "Genuine Parts",
      description: "Authentic Volvo parts and accessories",
      link: "/volvo-spares",
    },
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
          Additional Services
        </h2>
        <p className="text-gray-600">
          Discover our complete range of Volvo services
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-blue-900 mb-4">
              <service.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={service.link}
              className="text-blue-900 font-medium flex items-center group-hover:space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need More Information?
        </h2>
        <p className="text-blue-100">
          Our Volvo specialists are here to help with your valuation queries
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Call Us</p>
              <p className="font-medium">+263 78 203 2527</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Email Us</p>
              <p className="font-medium">valuations@thershmotors.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Business Hours</p>
              <p className="font-medium">Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Visit Us</p>
              <p className="font-medium">152 Nelson Mandela Ave, Harare</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 text-gray-900">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Schedule a Valuation
          </h3>
          <form className="space-y-4">
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
                <option value="afternoon">
                  Afternoon (12:00 PM - 4:00 PM)
                </option>
                <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-lg"
                rows="3"
                placeholder="Any specific requirements or questions?"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
            >
              Schedule Appointment
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValuationPage;
