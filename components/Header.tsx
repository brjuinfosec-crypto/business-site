import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Cpu, X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#00ffff',
    textShadow: '0 0 5px #00ffff',
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold font-orbitron tracking-wider text-white">
              BRJU Infosec
            </span>
          </NavLink>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 tracking-widest"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glassmorphism"
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 tracking-widest text-lg"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;