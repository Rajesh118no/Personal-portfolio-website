import React, { useState, useEffect } from 'react';
import { Menu, X, Share2 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
            <Share2 size={18} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-violet-400 transition-colors">
            Creator<span className="text-violet-500">.io</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-violet-200 transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="text-lg font-medium text-violet-400 hover:text-white py-2 text-left"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;