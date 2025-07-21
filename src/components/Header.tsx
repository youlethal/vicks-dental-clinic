"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const businessName = "Vicks Dental Clinic ";
  const category = "Dentist";
  const navItems = [{"name":"Home","href":"#home"},{"name":"Services","href":"#services"},{"name":"About","href":"#about"},{"name":"Contact","href":"#contact"}];
  const emailString = "info@vicks dental clinic .com";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  const getBusinessIcon = () => {
    switch (category.toLowerCase()) {
      case 'restaurant':
      case 'takeaway':
        return '🍽️';
      case 'gym':
        return '💪';
      case 'garage':
        return '🔧';
      case 'hairdresser':
        return '💇‍♀️';
      default:
        return '🏢';
    }
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent')}
    >
      {/* Top bar with contact info */}
      <div className={"hidden lg:block " + (scrolled ? 'bg-primary/10' : 'bg-black/20')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} className={scrolled ? 'text-gray-600' : 'text-white/80'} />
                <span className={scrolled ? 'text-gray-600' : 'text-white/80'}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className={scrolled ? 'text-gray-600' : 'text-white/80'} />
                <span className={scrolled ? 'text-gray-600' : 'text-white/80'}>{emailString}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className={scrolled ? 'text-gray-600' : 'text-white/80'} />
              <span className={scrolled ? 'text-gray-600' : 'text-white/80'}>Mon-Fri: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">{getBusinessIcon()}</span>
            </div>
            <div className="flex flex-col">
              <span className={"font-bold text-xl " + (scrolled ? 'text-gray-900' : 'text-white')}>{businessName}</span>
              <span className={"text-xs " + (scrolled ? 'text-gray-500' : 'text-white/70')}>Professional {category} Services</span>
            </div>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={"font-medium transition-colors relative " + (scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white')}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </motion.button>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={"p-2 rounded-lg " + (scrolled ? 'text-gray-700' : 'text-white')}>{isOpen ? <X size={24} /> : <Menu size={24} />}</motion.button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="md:hidden bg-white rounded-xl shadow-2xl mt-2 p-6 border border-gray-100">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button key={item.name} onClick={() => scrollToSection(item.href.replace('#', ''))} whileTap={{ scale: 0.95 }} className="text-left text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 last:border-b-0">{item.name}</motion.button>
                ))}
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors mt-4">Book Now</motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
