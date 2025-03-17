import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Phone, ArrowRight,
  Wrench, Cog, Settings, Battery
} from 'lucide-react';

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
        { 
          name: "Spark Plugs", 
          price: 100, 
          sku: "VOL-AF-T5T6",
          image: "plugs.png"
        },
        { 
          name: "Volvo D4/D5 Oil Filter Kit", 
          price: 100, 
          sku: "VOL-OF-D4D5",
          image: "filter.png"
        },
      ]
    },
    {
      name: "Injectors",
      icon: Cog,
      items: [
        { 
          name: "Injectors", 
          price: 120, 
          sku: "VOL-ATF-01",
          image: "injectors.png"
        }
      ]
    },
    {
      name: "Fuel Pump",
      icon: Settings,
      items: [
        { 
          name: "Fuel Pump", 
          price: 300, 
          sku: "VOL-BP-01",
          image: "fuel-pump.png"
        }
      ]
    },
    {
      name: "Suspension Kit",
      icon: Settings,
      items: [
        { 
          name: "Suspension Kit", 
          price: 650, 
          sku: "VOL-BP-01",
          image: "suspensionkit.png"
        }
      ]
    },
    {
      name: "Steering Pump",
      icon: Settings,
      items: [
        { 
          name: "Steering Pump", 
          price: 250, 
          sku: "VOL-BP-01",
          image: "steeringpump.png"
        }
      ]
    },
    {
      name: "D5-Engine",
      icon: Battery,
      items: [
        { 
          name: "D5-Engine", 
          price: 2800, 
          sku: "VOL-BAT-01",
          image: "D5-engine.png"
        }
      ]
    }
  ];

  const volvoModels = ["XC90", "XC60", "XC40", "S90", "S60", "V90", "V60", "C40 Recharge"];
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  const filteredParts = useMemo(() => {
    let parts = categories.flatMap(cat => cat.items);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      parts = parts.filter(part => 
        part.name.toLowerCase().includes(query) || 
        part.sku.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      parts = categories
        .find(cat => cat.name === selectedCategory)
        ?.items || [];
    }

    return parts;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
<section 
  className="relative py-16 px-4 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/home.jpeg')",
    backgroundBlendMode: "overlay",
  }}
>
  {/* Overlay to ensure text readability */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
  
  <div className="relative z-10 max-w-6xl mx-auto">
    <h1 className="text-4xl text-white font-bold mb-8 text-center">
      Volvo Spare Parts Catalog
    </h1>
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search parts by name or SKU"
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="p-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:outline-none"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">Select Model</option>
          {volvoModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <select
          className="p-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:outline-none"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
</section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  category.name === selectedCategory ? 'bg-blue-900 text-white' : 'bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <category.icon className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className={category.name === selectedCategory ? 'text-blue-100' : 'text-gray-600'}>
                      {category.items.length} items
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredParts.map((part, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-4">SKU: {part.sku}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-900">${part.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredParts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No parts found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SparePartsPage;