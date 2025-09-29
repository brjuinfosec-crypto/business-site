
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ExternalLink, Zap, Code, Shield, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="glassmorphism p-6 rounded-lg text-left">
        <Icon className="h-8 w-8 text-cyan-400 mb-3" />
        <h3 className="text-lg font-orbitron text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const AiPlatform: React.FC = () => {
  return (
    <div className="py-16 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold font-orbitron mb-4 text-white">
        Our <span className="text-cyan-400">AI Eco System</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl mx-auto text-gray-300 mb-16"
      >
        At BRJU Infosec, we are building a comprehensive AI ecosystem designed to drive innovation and efficiency. Our platforms leverage cutting-edge machine learning and data science to deliver transformative solutions across industries.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="glassmorphism rounded-xl p-8 lg:p-12 border-2 border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.4)]"
      >
        <div className="flex justify-center mb-6">
            <BrainCircuit className="h-16 w-16 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-orbitron font-bold text-white">Intelligent<span className="text-cyan-400">LLM</span></h2>
        <p className="text-lg text-gray-400 mt-2 mb-6">Our flagship generative AI platform.</p>
        
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
            IntelligentLLM is a next-generation Large Language Model platform, offering unparalleled capabilities in natural language understanding, generation, and reasoning. Built upon our proprietary neural network research, it forms the core of our AI-driven services.
        </p>

        <h3 className="text-2xl font-orbitron text-white mb-8">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
            <FeatureCard icon={Zap} title="Advanced Reasoning" description="Complex problem-solving and multi-step reasoning capabilities." />
            <FeatureCard icon={Code} title="Seamless Integration" description="Flexible APIs for easy integration into existing enterprise workflows." />
            <FeatureCard icon={Shield} title="Ethical AI Framework" description="Built-in safeguards for fairness, transparency, and data privacy." />
            <FeatureCard icon={Layers} title="Multi-Modal Ready" description="Architecture designed to process and understand text, images, and data." />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
                href="https://intelligentllm.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
                Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a 
                href="https://intelligentllm.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-500 text-white rounded-full uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AiPlatform;