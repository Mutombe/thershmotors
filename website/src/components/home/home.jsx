import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car,
  HammerIcon,
  Calculator,
  ArrowRight,
  Star,
  Shield,
  Users,
  Phone,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50 z-10" />
          <img
            src="volvo.jpg"
            alt="Volvo Fleet"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Trusted Partner for All Things Volvo
            </h1>
            <p className="text-xl text-blue-100">
              Experience excellence in Volvo services, from genuine spare parts
              to expert valuations and premium vehicle sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                          <motion.button
                              onClick={() => navigate('/volvo-specialist-services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
                          <motion.button
                              onClick={() => navigate('/thersh-motors-contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Comprehensive Volvo Services
            </h2>
            <p className="text-gray-600">
              From vehicle sales to maintenance, we provide end-to-end solutions
              for your Volvo needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Thersh Motors
            </h2>
            <p className="text-blue-100">
              We deliver excellence through expertise, quality, and customer
              satisfaction
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Experience Excellence?
              </h2>
              <p className="text-blue-100">
                Contact us today to discuss your Volvo needs and discover how we
                can help
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/thersh-motors-contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Phone className="h-4 w-4" />
                  <span>Get in Touch</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, index, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group"
    >
      <div className="text-blue-900 mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-blue-900 font-medium flex items-center group-hover:space-x-2"
      >
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all" />
      </Link>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="text-center p-6">
      <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    icon: Car,
        title: "Vehicle Sales",
    link: "/volvo-vehicles",
    description:
      "Find your perfect Volvo from our carefully curated selection of premium vehicles",
  },
  {
    icon: HammerIcon,
      title: "Genuine Spares",
    link: "/volvo-spares",
    description:
      "Access authentic Volvo parts ensuring optimal performance and reliability",
  },
  {
    icon: Calculator,
      title: "Expert Valuation",
    link: "/volvo-valuation",
    description:
      "Get accurate market valuations from our certified Volvo specialists",
  },
];

// Previous code remains the same until features array...

const features = [
  {
    icon: Star,
    title: "Expert Team",
    description: "Certified Volvo specialists with years of experience",
  },
  {
    icon: Shield,
    title: "Genuine Parts",
    description: "100% authentic Volvo components",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated to exceeding your expectations",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Efficient and timely service delivery",
  },
];

// Add Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Volvo XC90 Owner",
      content:
        "Exceptional service and genuine parts. Thersh Motors has been maintaining my Volvo for years with outstanding results.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Volvo S60 Owner",
      content:
        "Their valuation service was professional and their team provided detailed insights about my vehicle's worth.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Volvo V90 Owner",
      content:
        "The spare parts are authentic and reasonably priced. Their expertise in Volvo vehicles is unmatched.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Trusted by Volvo owners across the region
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-50 p-6 rounded-xl"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <h4 className="font-semibold text-blue-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Add Contact Info Section
const ContactInfoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-blue-900"
            >
              Ready to Get Started?
            </motion.h2>
            <p className="text-gray-600">
              Visit our showroom or contact us for inquiries about our services,
              spare parts, or vehicle valuations.
            </p>
            <div className="space-y-4">
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+263 78 203 2527"
              />
              <ContactItem
                icon={<MessageSquare className="h-5 w-5" />}
                label="Email"
                value="info@thershmotors.com"
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Address"
                value="152 Nelson Mandela Ave, Harare"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <QuickContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-blue-900 text-white p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-blue-900">{value}</p>
      </div>
    </div>
  );
};

const QuickContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          rows="4"
          placeholder="How can we help you?"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
      >
        Send Message
      </motion.button>
    </form>
  );
};

// Update the main HomePage component to include new section

export default HomePage;
