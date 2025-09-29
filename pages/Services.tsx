
import React from 'react';
import { SERVICES_LIST } from '../constants';
import { motion } from 'framer-motion';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const { icon: Icon, title, description } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glassmorphism p-6 rounded-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
    >
      <Icon className="h-12 w-12 text-cyan-400 mb-4" />
      <h3 className="text-xl font-orbitron font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="py-16">
        <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold font-orbitron text-center mb-4 text-white">
            Our <span className="text-cyan-400">Services</span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto text-gray-300 mb-12"
        >
            We provide a comprehensive suite of services designed to address the most complex challenges in the digital landscape. From fortifying your defenses to building intelligent systems, we are your dedicated technology partner.
        </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SERVICES_LIST.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center glassmorphism p-8 md:p-12 rounded-lg"
      >
        <h2 className="text-3xl font-bold font-orbitron text-white mb-4">Our Integrated Approach</h2>
        <p className="max-w-4xl mx-auto text-gray-300">
            At BRJU Infosec, we believe that true innovation lies at the intersection of disciplines. We don't just offer individual services; we create synergistic solutions. Our expertise in cybersecurity informs our AI development for enhanced security, while our AI capabilities provide predictive insights for our security platforms. This holistic approach ensures our clients receive robust, intelligent, and future-proof solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default Services;