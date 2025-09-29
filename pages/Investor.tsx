
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart, FileText, Bot, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { INVESTOR_HIGHLIGHTS } from '../constants';

const StatCard: React.FC<{ icon: LucideIcon, title: string, value: string, index: number }> = ({ icon: Icon, title, value, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glassmorphism p-6 rounded-lg text-center"
    >
        <Icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-orbitron text-white">{title}</h3>
        <p className="text-3xl font-bold text-cyan-400 mt-2">{value}</p>
    </motion.div>
);

const HighlightCard: React.FC<{ icon: LucideIcon, title: string, description: string, index: number }> = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="glassmorphism p-6 rounded-lg"
    >
        <Icon className="h-10 w-10 text-cyan-400 mb-4" />
        <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const Investor: React.FC = () => {
  return (
    <div className="py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold font-orbitron text-center mb-4 text-white">
        Investor <span className="text-cyan-400">Relations</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl mx-auto text-gray-300 text-center mb-12"
      >
        We are at the forefront of the technology revolution, creating long-term value for our shareholders through strategic growth and relentless innovation in AI and Cybersecurity.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <StatCard icon={Rocket} title="Founded" value="2024" index={0} />
        <StatCard icon={TrendingUp} title="Projected Growth" value="+30% QoQ" index={1} />
        <StatCard icon={Target} title="Seed Funding" value="$15M" index={2} />
        <StatCard icon={Bot} title="IP Portfolio" value="5+ Patents" index={3} />
      </div>

      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-white mb-12">The BRJU Infosec <span className="text-cyan-400">Advantage</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INVESTOR_HIGHLIGHTS.map((highlight, index) => (
                <HighlightCard key={highlight.title} {...highlight} index={index} />
            ))}
        </div>
      </div>


      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glassmorphism p-8 rounded-lg text-center"
      >
          <h2 className="text-2xl font-orbitron text-white mb-4">Resources & Contact</h2>
          <p className="text-gray-400 mb-6">For financial reports, inquiries, or more information, please reach out to our investor relations team.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:investors@brjuinfosec.com" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                investors@brjuinfosec.com
            </a>
            <button className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <FileText className="mr-2 h-5 w-5" /> Download Prospectus
            </button>
          </div>
      </motion.div>
    </div>
  );
};

export default Investor;