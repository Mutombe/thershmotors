import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/vehicles', label: 'Vehicles' },
    { path: '/spares', label: 'Spare Parts' },
    { path: '/valuation', label: 'Valuation' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`bg-white/95 fixed top w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95  shadow-md' : 'bg-white/95'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Thersh Motors"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
                  Thersh Motors
                </span>
                <span className={`text-xs ${scrolled ? 'text-blue-600' : 'text-blue-900'}`}>
                  Volvo Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  scrolled={scrolled}
                  active={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white px-6 py-2 rounded-full flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-blue-900' : 'text-blue-900'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-blue-900' : 'text-blue-900'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl">
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-900">Menu</span>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 text-blue-900" />
                  </button>
                </div>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-blue-900"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
                <div className="pt-6 border-t">
                  <a
                    href="tel:+263782032527"
                    className="flex items-center justify-center space-x-2 bg-blue-900 text-white p-3 rounded-lg"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+263 78 203 2527</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, children, scrolled, active }) => {
  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors ${
        scrolled ? 'text-gray-600 hover:text-blue-900' : 'text-gray-600 hover:text-blue-900'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-900"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Navigation;
