import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Filter, Search, Clock, Calendar, MapPin, Fuel, Shield, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehiclesPage = () => {
  const [filters, setFilters] = useState({
    model: '',
    year: '',
    price: '',
    bodyType: '',
    transmission: '',
    fuelType: ''
  });

  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const vehicles = [
    {
      id: 1,
      model: "Volvo XC90 T8 Recharge",
      year: 2023,
      price: 85000,
      mileage: "15,000",
      transmission: "Automatic",
      fuelType: "Hybrid",
      bodyType: "SUV",
      color: "Crystal White",
      features: [
        "AWD",
        "7 Seats",
        "Bowers & Wilkins Audio",
        "Advanced Safety Package",
        "Panoramic Sunroof"
      ],
      images: ["/t8.jpg", "/xc90-2.jpg", "/xc90-3.jpg"],
      description: "Premium SUV with hybrid powertrain and luxury features",
      specifications: {
        engine: "2.0L 4-cylinder Hybrid",
        power: "455 hp",
        acceleration: "5.3s (0-100 km/h)",
        fuelEconomy: "2.5 L/100km"
      }
    },
    {
      id: 2,
      model: "Volvo S90 B5",
      year: 2023,
      price: 65000,
      mileage: "12,500",
      transmission: "Automatic",
      fuelType: "Mild Hybrid",
      bodyType: "Sedan",
      color: "Platinum Grey",
      features: [
        "Premium Sound",
        "Leather Interior",
        "City Safety",
        "Pilot Assist",
        "Head-up Display"
      ],
      images: ["/90b5.jpg", "/s90-2.jpg", "/s90-3.jpg"],
      description: "Elegant sedan with advanced safety features",
      specifications: {
        engine: "2.0L 4-cylinder Mild Hybrid",
        power: "250 hp",
        acceleration: "6.9s (0-100 km/h)",
        fuelEconomy: "7.2 L/100km"
      }
    },
    {
      id: 3,
      model: "Volvo XC60 B6",
      year: 2023,
      price: 72000,
      mileage: "8,900",
      transmission: "Automatic",
      fuelType: "Mild Hybrid",
      bodyType: "SUV",
      color: "Denim Blue",
      features: [
        "AWD",
        "Premium Package",
        "Harman Kardon Audio",
        "360° Camera",
        "Air Suspension"
      ],
      images: ["/b6.jpg", "/xc60-2.jpg", "/xc60-3.jpg"],
      description: "Mid-size luxury SUV with sophisticated design",
      specifications: {
        engine: "2.0L 4-cylinder Mild Hybrid",
        power: "300 hp",
        acceleration: "6.2s (0-100 km/h)",
        fuelEconomy: "8.0 L/100km"
      }
    }
  ];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const matchesSearch = vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return vehicle[key].toString() === value;
      });
      return matchesSearch && matchesFilters;
    });
  }, [vehicles, filters, searchQuery]);

  return (
    <div className="pt-20">
      {/* Search and Filter Header */}
      <section className="sticky top-20 bg-white z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 py-4">
                  <FilterSelect
                    label="Model"
                    options={["XC90", "XC60", "S90"]}
                    value={filters.model}
                    onChange={(value) => setFilters({...filters, model: value})}
                  />
                  <FilterSelect
                    label="Body Type"
                    options={["SUV", "Sedan", "Estate"]}
                    value={filters.bodyType}
                    onChange={(value) => setFilters({...filters, bodyType: value})}
                  />
                  <FilterSelect
                    label="Year"
                    options={["2023", "2022", "2021"]}
                    value={filters.year}
                    onChange={(value) => setFilters({...filters, year: value})}
                  />
                  <FilterSelect
                    label="Transmission"
                    options={["Automatic", "Manual"]}
                    value={filters.transmission}
                    onChange={(value) => setFilters({...filters, transmission: value})}
                  />
                  <FilterSelect
                    label="Fuel Type"
                    options={["Hybrid", "Mild Hybrid", "Electric"]}
                    value={filters.fuelType}
                    onChange={(value) => setFilters({...filters, fuelType: value})}
                  />
                  <button
                    onClick={() => setFilters({})}
                    className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const VehicleCard = ({ model, year, price, mileage, features, images, specifications, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={images[0]}
          alt={model}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
          {year}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{model}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-900">${price.toLocaleString()}</span>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{mileage} km</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          <motion.div
            animate={{ height: showDetails ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              <p className="text-gray-600">{description}</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-sm text-gray-500">{key}</span>
                    <p className="font-medium text-blue-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-900 font-medium flex items-center hover:space-x-2 transition-all"
            >
              <span>{showDetails ? "Show Less" : "Show More"}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
            <Link
              to="#"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default VehiclesPage;