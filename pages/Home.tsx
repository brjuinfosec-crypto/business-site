
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Code, Rocket, Users, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glassmorphism p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
    >
        <Icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15rem)] text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold font-orbitron tracking-tight text-white uppercase"
        >
          BRJU Infosec Inc.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl max-w-3xl text-gray-300"
          style={{ textShadow: '0 0 8px rgba(0,255,255,0.7)' }}
        >
          Securing the Future with an <span className="text-cyan-400">Intelligent</span> and <span className="text-cyan-400">Integrated</span> AI & Cybersecurity Eco System.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NavLink to="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            Explore Services
          </NavLink>
          <NavLink to="/company" className="px-8 py-3 text-white rounded-full uppercase tracking-widest hover:text-cyan-400 transition-all duration-300">
            Learn More
          </NavLink>
        </motion.div>
      </div>

      <section className="py-20">
        <h2 className="text-3xl font-bold font-orbitron text-center mb-12 text-white">Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={ShieldCheck} title="Cybersecurity" description="Advanced threat detection and response to safeguard your critical infrastructure." index={0} />
            <FeatureCard icon={BrainCircuit} title="AI Ecosystem" description="Building intelligent platforms that drive automation, insight, and efficiency." index={1} />
            <FeatureCard icon={Code} title="Full-Stack Development" description="End-to-end development of robust web, mobile, and cloud applications." index={2} />
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold font-orbitron text-center mb-12 text-white">Why <span className="text-cyan-400">BRJU Infosec</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={Rocket} title="Cutting-Edge Innovation" description="We are at the forefront of technology, constantly pushing the boundaries of what's possible in AI and security." index={0} />
            <FeatureCard icon={Users} title="Expert-Led Teams" description="Our teams consist of industry veterans and leading researchers dedicated to solving complex challenges." index={1} />
            <FeatureCard icon={Lock} title="Uncompromising Security" description="Security is in our DNA. We build solutions that are secure by design, ensuring your peace of mind." index={2} />
        </div>
      </section>
    </>
  );
};

export default Home;