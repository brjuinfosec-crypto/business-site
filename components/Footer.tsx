
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="glassmorphism py-12 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold font-orbitron tracking-wider text-white">BRJU Infosec</span>
            </div>
            <p className="text-gray-400">Securing the Future with an Intelligent and Integrated AI & Cybersecurity Eco System.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-white mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <NavLink to={link.path} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-white mb-4 tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                <span>123 Cyber Drive, Tech City, 10101</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@brjuinfosec.com" className="hover:text-cyan-400">contact@brjuinfosec.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-cyan-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-white mb-4 tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><Linkedin size={24}/></a>
                <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition-colors"><Twitter size={24}/></a>
                <a href="#" aria-label="GitHub" className="hover:text-cyan-400 transition-colors"><Github size={24}/></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BRJU Infosec Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;