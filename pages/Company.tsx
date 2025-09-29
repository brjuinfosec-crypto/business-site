
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_TIMELINE, LEADERSHIP_TEAM } from '../constants';
import type { TimelineEventData, TeamMember } from '../types';

const TimelineEvent: React.FC<{ event: TimelineEventData, index: number }> = ({ event, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-8 flex justify-between items-center w-full"
    >
      <div className={`order-1 w-5/12 ${isEven ? 'text-right' : ''}`}></div>
      <div className="z-20 flex items-center order-1 bg-cyan-500 shadow-xl w-16 h-12 rounded-md">
        <h1 className="mx-auto font-bold text-md text-black">{event.year}</h1>
      </div>
      <div className={`order-1 glassmorphism rounded-lg shadow-xl w-5/12 px-6 py-4 ${isEven ? '' : 'text-right'}`}>
        <h3 className="mb-3 font-bold text-white text-xl font-orbitron">{event.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

const TeamCard: React.FC<{ member: TeamMember, index: number }> = ({ member, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="glassmorphism p-6 rounded-lg text-center"
    >
        <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-400" />
        <h3 className="text-xl font-orbitron text-white">{member.name}</h3>
        <p className="text-cyan-400">{member.title}</p>
    </motion.div>
);

const Company: React.FC = () => {
  return (
    <div className="py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold font-orbitron text-center mb-12 text-white">
        About <span className="text-cyan-400">Our Company</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glassmorphism p-8 rounded-lg"
        >
          <h2 className="text-2xl font-orbitron text-cyan-400 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To provide unparalleled cybersecurity and AI solutions, empowering businesses to thrive securely in a digital-first world. We are committed to innovation, integrity, and excellence.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glassmorphism p-8 rounded-lg"
        >
          <h2 className="text-2xl font-orbitron text-cyan-400 mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be the global leader in intelligent security ecosystems, creating a future where technology and human ingenuity converge to solve the most complex challenges.
          </p>
        </motion.div>
      </div>
      
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-white mb-4">Research & Development</h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-gray-300">
            Innovation is the lifeblood of BRJU Infosec. Our dedicated R&D division is pioneering new frontiers in technology. Currently, our primary research focuses on developing novel <span className="text-cyan-400">neural network architectures</span> to build a more efficient, powerful, and ethical AI ecosystem. This work is fundamental to the evolution of our IntelligentLLM platform and our commitment to shaping the future of AI.
        </motion.p>
      </div>

      <h2 className="text-3xl font-bold font-orbitron text-center my-12 text-white">Our Journey</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-cyan-400 h-full border" style={{left: '50%'}}></div>
        {COMPANY_TIMELINE.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold font-orbitron text-center mb-12 text-white">Meet Our <span className="text-cyan-400">Leadership</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Company;