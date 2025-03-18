import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFile, FaFilePdf } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Aura Kristian</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              AI and Robotics Enthusiast
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Computer Science undergraduate at BINUS University with a passion for Artificial Intelligence, 
              Robotics, Machine Learning and Software Development. 
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-primary">Get in Touch</button>
              </Link>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-outline">View Projects</button>
              </Link>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/AuraKris" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/aura-kristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:aurakristian.20@gmail.com" className="text-gray-700 hover:text-primary transition-colors" title='Gmail'>
                <FaEnvelope size={24} />
              </a>
              <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors" alt="Resume" title="Resume">
                <FaFilePdf size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <img src="./PP-aura.jpg" alt="" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;