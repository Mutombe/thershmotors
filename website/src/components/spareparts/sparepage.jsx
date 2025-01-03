import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Wrench, Calculator, Search, Filter, Phone, 
  Mail, MapPin, Calendar, Clock, ArrowRight, 
  Plus, Minus, Cog, Battery,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SparePartsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const categories = [
    {
      name: "Engine Components",
      icon: Wrench,
      items: [
        { name: "Volvo D4/D5 Oil Filter Kit", price: 45, sku: "VOL-OF-D4D5" },
        { name: "Volvo T5/T6 Air Filter Assembly", price: 65, sku: "VOL-AF-T5T6" },
        { name: "Volvo XC90 Timing Belt Kit", price: 245, sku: "VOL-TB-XC90" },
        { name: "Volvo S60 Turbocharger", price: 1200, sku: "VOL-TC-S60" }
      ]
    },
    {
      name: "Transmission Parts",
      icon: Cog,
      items: [
        { name: "Volvo Automatic Transmission Fluid", price: 55, sku: "VOL-ATF-01" },
        { name: "Volvo XC60 Gearbox Mount", price: 125, sku: "VOL-GM-XC60" },
        { name: "Volvo V90 Clutch Kit", price: 450, sku: "VOL-CK-V90" }
      ]
    },
    {
      name: "Brake System",
      icon: Settings,
      items: [
        { name: "Volvo Premium Brake Pad Set", price: 95, sku: "VOL-BP-01" },
        { name: "Volvo XC40 Brake Discs (Pair)", price: 180, sku: "VOL-BD-XC40" },
        { name: "Volvo S90 Brake Caliper", price: 275, sku: "VOL-BC-S90" }
      ]
    },
    {
      name: "Electrical Systems",
      icon: Battery,
      items: [
        { name: "Volvo OEM Battery", price: 225, sku: "VOL-BAT-01" },
        { name: "Volvo XC90 Alternator", price: 450, sku: "VOL-ALT-XC90" },
        { name: "Volvo Starter Motor", price: 320, sku: "VOL-SM-01" }
      ]
    }
  ];

  const volvoModels = [
    "XC90", "XC60", "XC40",
    "S90", "S60",
    "V90", "V60",
    "C40 Recharge"
  ];

  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Genuine Volvo Spare Parts</h1>
            <p className="text-xl text-blue-100 mb-8">
              Maintain your Volvo's excellence with our comprehensive range of authentic spare parts
            </p>
            <div className="bg-white rounded-xl p-6">
              <PartsSearchForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                volvoModels={volvoModels}
                years={years}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Browse Parts by Category</h2>
            <p className="text-gray-600">Explore our extensive collection of Volvo parts</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <PartsCategory
                key={index}
                {...category}
                isSelected={selectedCategory === category.name}
                onSelect={() => setSelectedCategory(category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Popular Volvo Parts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategory
                ? categories
                    .find(cat => cat.name === selectedCategory)
                    ?.items.map((item, index) => (
                      <PartCard key={index} {...item} />
                    ))
                : categories
                    .flatMap(cat => cat.items)
                    .slice(0, 6)
                    .map((item, index) => (
                      <PartCard key={index} {...item} />
                    ))
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parts Inquiry Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Can't Find Your Part?</h2>
              <p className="mb-8">
                Our Volvo specialists are here to help you find the exact part you need
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Parts Department</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PartsSearchForm = ({
  searchQuery,
  setSearchQuery,
  selectedModel,
  setSelectedModel,
  selectedYear,
  setSelectedYear,
  volvoModels,
  years
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search parts by name or SKU"
          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:outline-none placeholder:text-gray-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <select
        className="p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-600"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="" className='text-gray-600'>Select Model</option>
        {volvoModels.map((model) => (
          <option key={model} value={model} className='text-gray-600'>{model}</option>
        ))}
      </select>
      <select
        className="p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-600"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="" className='text-gray-600'>Select Year</option>
        {years.map((year) => (
          <option key={year} value={year} className='text-gray-600'>{year}</option>
        ))}
      </select>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
      >
        <Search className="h-5 w-5" />
        <span>Search</span>
      </motion.button>
    </div>
  );
};

const PartsCategory = ({ name, icon: Icon, items, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onSelect}
      className={`p-6 rounded-xl cursor-pointer transition-all ${
        isSelected ? 'bg-blue-900 text-white' : 'bg-white shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-center space-x-4">
        <Icon className="h-8 w-8" />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className={isSelected ? 'text-blue-100' : 'text-gray-600'}>
            {items.length} items available
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PartCard = ({ name, price, sku }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">SKU: {sku}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-blue-900">${price}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <span>Inquire</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SparePartsPage;