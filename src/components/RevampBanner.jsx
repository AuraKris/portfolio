import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaTimes, FaGithub, FaNetworkWired, FaRobot } from 'react-icons/fa';

const RevampBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gray-900 text-white relative z-[60]"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="bg-primary/20 p-2 rounded-full text-primary hidden md:block">
                  <FaTools size={14} />
              </div>
              <div>
                <span className="font-bold text-primary">Building V2:</span> 
                <span className="ml-2 text-gray-300">
                  Developing a <span className="text-white font-semibold">RAG Chatbot</span> & <span className="text-white font-semibold">Real-Time Tracer</span> CLI.
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-green-900 text-green-300 border border-green-700 flex items-center gap-1">
                  <FaNetworkWired size={10}/> Spring Boot 3.5.9 (Loom)
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-blue-900 text-blue-300 border border-blue-700 flex items-center gap-1">
                  <FaRobot size={10}/> RAG AI
                </span>
              </div>

              <div className="h-4 w-px bg-gray-700 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/AuraKris/portfolio-v2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary transition-colors flex items-center gap-2"
                >
                  <FaGithub /> Architecture
                </a>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevampBanner;