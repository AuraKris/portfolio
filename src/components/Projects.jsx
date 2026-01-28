import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPaperclip, FaLock } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Terminal Portfolio V2 (Ongoing)',
      description: 'An enhanced portfolio featuring a RAG-based CLI chatbot that answers questions about my experience. The backend leverages Spring Boot 3.5.9 and Virtual Threads (Loom) to visualize distributed request tracing in real-time. The frontend simulates a terminal environment with split-second latency.',
      image: './terminal-preview.png',
      tags: [
        'Spring Boot 3.5.9', 
        'Virtual Threads (Loom)', 
        'WebFlux', 
        'PostgreSQL', 
        'RAG AI', 
        'React Router v7'
      ],
      github: 'https://github.com/AuraKris/portfolio-v2', 
      demo: '', 
      category: 'Backend',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Authentic Aksara Jawa Recognition (ICHGIT)',
      description: 'International Conference (ICHGIT) accepted research. Developed a novel dataset of 3,528 authentic handwritten Javanese characters. Engineered a Cross-Language Transfer Learning model using PyTorch that achieved a 98.48% F1-score, outperforming standard ImageNet baselines.',
      image: './aksara-jawa.png',
      tags: ['AI Research', 'PyTorch', 'Computer Vision', 'Publication'],
      github: '',
      demo: 'https://ieeexplore.ieee.org/',
      isResearch: true,
      category: 'AI'
    },
    {
      id: 3,
      title: 'SIPLah Microservices Migration (Blibli)',
      description: 'Enterprise development initiative for Indonesia\'s B2G procurement platform. Contributed on the backend feature development and migration of core services from Spring Boot 2.3 to 2.7.',
      image: './blibli-architecture.png',
      tags: ['Spring Boot', 'Kafka', 'PostgreSQL', 'MongoDB', 'Microservices'],
      github: '', 
      demo: '',
      isPrivate: true,
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Lung Cancer Classification (DenseNet201)',
      description: 'Deep learning implementation using Transfer Learning with DenseNet201. Applied advanced image masking, noise reduction, and augmentation techniques to classify lung cancer pathologies with high sensitivity.',
      image: './AOL-COMVIS.png',
      tags: ['AI', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/AuraKris/AOL-COMVIS',
      demo: '',
      category: 'AI'
    },
    {
      id: 5,
      title: 'Healthcare Forum Platform',
      description: 'Simple Full-stack healthcare management system featuring patient registration, appointment scheduling, and a community forum. Built with a focus on relational database design (MySQL) and responsive user experience.',
      image: './aol-wp.png',
      tags: ['Full Stack', 'Database Design', 'Web Development'],
      github: 'https://github.com/AuraKris/AOL-WP',
      demo: '',
      category: 'Web Dev'
    },
    {
      id: 6,
      title: 'RecipeHub App',
      description: 'Responsive React frontend application for recipe discovery. Features filtering logic by ingredients, taste profiles, and cuisine types, utilizing modern CSS grid layouts and Tailwind styling.',
      image: './recipehub.png',
      tags: ['Frontend', 'React', 'Tailwind'],
      github: 'https://github.com/AuraKris/recipehub-app',
      demo: 'https://aurakris.github.io/recipehub-app/',
      category: 'Web Dev'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.some(tag => tag.includes(filter) || project.category === filter));

  const categories = ['All', 'Backend', 'AI Research', 'Spring Boot', 'Computer Vision', 'Full Stack'];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Selected Projects & Research
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A collection of enterprise work, published research, and technical experiments
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'AI Research' ? 'AI & Research' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Project+Thumbnail'}} 
                />
                {project.isPrivate && (
                    <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                        <FaLock className="mr-1" size={10} /> Proprietary
                    </div>
                )}
                {project.isResearch && (
                    <div className="absolute top-2 right-2 bg-blue-600 bg-opacity-90 text-white text-xs px-2 py-1 rounded flex items-center">
                        <FaPaperclip className="mr-1" size={10} /> Publication
                    </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-primary-light bg-opacity-10 text-primary-dark px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <FaGithub className="mr-2" size={18} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="mr-2" size={16} /> 
                      {project.isResearch ? 'Read Paper' : 'Live Demo'}
                    </a>
                  )}
                  {project.isPrivate && (
                    <span className="text-gray-400 text-sm flex items-center cursor-not-allowed">
                        <FaLock className="mr-2" size={14} /> Internal Tool
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          More will be added soon...
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/AuraKris" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;