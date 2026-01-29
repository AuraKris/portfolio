import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Aura Kristian</h2>
            <p className="text-gray-400 mt-2">Backend Engineer & AI Researcher</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/AuraKris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/aura-kristian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:aurakristian.20@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Aura Kristian Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link
              key="About"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              key="Projects"
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <a 
              href="./ATS_CV_Final.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm transition-colors" 
              title="Download Resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;