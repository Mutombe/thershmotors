import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Trophy,
  HammerIcon,
  Calculator,
  ArrowRight,
  HeartHandshake,
  Star,
  Shield,
  Users,
  Phone,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = ({ navigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images - replace with your actual Volvo images
  const carouselImages = [
    {
      id: 1,
      src: "/volvo.jpg",
      alt: "Volvo Fleet Flagship Models"
    },
    {
      id: 2,
      src: "/fleet.webp",
      alt: "Volvo Service Center"
    },
    {
      id: 3,
      src: "/home3.jpg",
      alt: "Volvo Parts Department"
    },
    {
      id: 4,
      src: "/home4.avif",
      alt: "Volvo Certified Specialists"
    },
    {
      id: 5,
      src: "/home6.jpg",
      alt: "Volvo Premium Interior"
    }
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel images */}
      <AnimatePresence>
        {carouselImages.map((image, index) => (
          index === currentSlide && (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-8000 ease-in-out transform scale-105"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
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
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group shadow-md"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => navigate('/thersh-motors-contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full">
     
      {/*<HeroCarousel />*/}
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

      <WhyChooseUs />

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
        className="text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-full font-medium flex items-center group-hover:space-x-2"
      >
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all" />
      </Link>
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



const features = [
  {
    icon: Trophy,
    title: "Quality Service",
    description: "Premium automotive care with attention to detail",
    link: "/volvo-specialist-services"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Efficient service without compromising quality",
    link: "/thersh-motors-contact"
  },
  {
    icon: Shield,
    title: "Expert Team",
    description: "Certified professionals with years of experience",
    link: "/thersh-team"
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Dedicated to exceeding your expectations",
    link: "/testimonials"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Why Choose Thersh Motors
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            We deliver excellence through expertise, quality, and customer satisfaction
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Link to={link}>
      <motion.div 
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-center p-4 sm:p-6 bg-blue-800/50 rounded-lg transition-colors hover:bg-blue-800/70"
      >
        <div className="bg-white/10 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-blue-100 text-sm sm:text-base">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-center text-blue-200 text-sm sm:text-base border border-blue-200 rounded-full px-4 py-2">
          <span>Learn More</span>
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomePage;
