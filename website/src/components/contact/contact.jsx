import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight,
  Car,
  Cog,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Add map-related components
const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Our Location</h3>
        <p className="text-gray-600 mb-4">152 Nelson Mandela Ave, Harare, Zimbabwe</p>
      </div>
      <div className="h-96 w-full">
        <iframe
          title="Thersh Motors Location"
          className="w-full h-full border-0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=31.033039093017582%2C-17.831394914759608%2C31.035485267639164%2C-17.829751280483023&amp;layer=mapnik&amp;marker=-17.830573099863937%2C31.034262180328373"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <a 
          href="https://www.openstreetmap.org/?mlat=-17.83057&amp;mlon=31.03426#map=19/-17.83057/31.03426"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-700 font-medium flex items-center justify-center"
        >
          View Larger Map
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Thersh Motors</h1>
            <p className="text-xl text-blue-100">Your trusted Volvo specialist in Harare</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none">
                      <option value="valuation">Vehicle Valuation</option>
                      <option value="repair">Repair & Maintenance</option>
                      <option value="parts">Spare Parts Inquiry</option>
                      <option value="sales">Vehicle Sales</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows="6"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-900 text-white py-4 rounded-lg font-medium"
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <LocationMap />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value="+263 78 203 2527"
                  />
                  <ContactItem
                    icon={<Mail className="h-5 w-5" />}
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

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <BusinessHourItem day="Monday - Friday" hours="8:00 AM - 5:00 PM" />
                  <BusinessHourItem day="Saturday" hours="9:00 AM - 2:00 PM" />
                  <BusinessHourItem day="Sunday" hours="Closed" />
                </div>
              </div>

              {/* Emergency Service */}
              <div className="bg-blue-900 text-white rounded-xl shadow-sm p-8">
                <AlertCircle className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-blue-100 mb-4">For urgent Volvo assistance outside business hours</p>
                <div className="text-2xl font-bold">+263 78 203 2527</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Car className="h-8 w-8" />}
              title="Vehicle Sales"
              description="Premium pre-owned Volvo vehicles"
            />
            <ServiceCard
              icon={<Cog className="h-8 w-8" />}
              title="Repair & Maintenance"
              description="Expert Volvo servicing and repairs"
            />
            <ServiceCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Consultation"
              description="Professional Volvo advice and support"
            />
            <ServiceCard
              icon={<Clock className="h-8 w-8" />}
              title="Quick Service"
              description="Efficient maintenance solutions"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-lg text-blue-900">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

const BusinessHourItem = ({ day, hours }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{day}</span>
    <span className="font-medium text-gray-900">{hours}</span>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm"
  >
    <div className="text-blue-900 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default ContactPage;