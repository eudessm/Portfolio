import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Formação', href: '#education' },
    { name: 'Conhecimentos', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 py-6 md:px-12 lg:px-24 absolute top-0 left-0 z-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold tracking-tighter font-marker uppercase cursor-pointer text-white drop-shadow-md"
      >
        EUDES.DEV
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex space-x-8 text-sm font-medium"
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-green-200 transition-colors duration-300">
              {link.name}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-[#38703d]/95 backdrop-blur-md flex flex-col justify-center items-center md:hidden z-40"
          >
            <ul className="flex flex-col space-y-8 text-center text-2xl font-bold">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={link.href} 
                    className="hover:text-green-300 transition-colors text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;