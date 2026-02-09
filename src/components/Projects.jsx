import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPaperclip, FaLock, FaProjectDiagram, FaDatabase, FaVideo, FaTimes } from 'react-icons/fa';

const FreelanceProjectCaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
            <span className="text-sm text-gray-500">System Architecture & Case Study</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaTimes size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center"><FaProjectDiagram className="mr-2"/> The Challenge</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Client relied on manual Excel workflows for item requests, work order and purchase order processes, resulting in slow processes, slight data discrepancy and untraceable approvals. 
                Needed a strictly typed system to enforce "Request &rarr; Approval &rarr; PO" flows.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center"><FaDatabase className="mr-2"/> The Solution</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Deployed an on-premise <strong>Spring Boot 3.5.9</strong> ERP. Implemented a <strong>State Machine</strong> pattern for approval lifecycles and <strong>Optimistic Locking</strong> to handle concurrent warehouse updates.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">System Architecture (High Level)</h4>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center text-gray-400">
              {/* TODO: Upload Flowchart Image later */}
              <img src="https://via.placeholder.com/800x400?text=Architecture+Diagram+(Draw.io)+Placeholder" alt="Architecture" className="w-full h-full object-cover opacity-50 rounded-xl" />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              <b>Diagram illustrates the interaction between Client, Spring Boot Backend, Redis Cache, and PostgreSQL.</b>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Database Schema (ERD)</h4>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center text-gray-400">
               {/* TODO: Upload ERD Image later */}
              <img src="https://via.placeholder.com/800x400?text=PostgreSQL+ERD+Placeholder" alt="ERD" className="w-full h-full object-cover opacity-50 rounded-xl" />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              <b>Highlighting the Many-to-Many relationship between Work Orders and Purchase Orders.</b>
            </p>
          </div>

          <div>
             <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><FaVideo className="mr-2"/> System Walkthrough</h4>
             <div className="aspect-video bg-black rounded-xl flex items-center justify-center text-white">
                {/* TODO: Embed your YouTube/Loom video later */}
                <span className="text-gray-400">Demo Video Loading... (Coming Soon)</span>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
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
      // github: 'https://github.com/AuraKris/portfolio-v2', 
      demo: '', 
      category: 'Backend',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Authentic Aksara Jawa Recognition (ICHGIT) - On process for publication',
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
      title: 'SIPLah Spring Boot Migration (Blibli)',
      description: 'Enterprise development initiative for one of Indonesia\'s School procurement platform. Contributed on the backend feature development and migration of core services from Spring Boot 2.3 to 2.7 and GCE to GKE Adoption(Configuration).',
      image: './blibli-siplah.png',
      tags: ['Spring Boot', 'Kafka', 'PostgreSQL', 'MongoDB', 'Microservices', 'Command Pattern', 'Integration Testing'],
      github: '', 
      demo: '',
      isPrivate: true,
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Freelance Enterprise Procure-to-Pay System (Ongoing)',
      description: 'Designed and deployed an on-premise ERP solution to digitize complex procurement workflows. Implemented Role-Based Access Control (RBAC), Multi-Level Approvals, and a strict State Machine for PO generation, replacing legacy manual Excel processes.',
      image: '', // Upload diagram image later
      tags: ['Spring Boot 3.5.9', 'State Machine', 'PostgreSQL', 'Docker', 'System Design'],
      github: '', 
      demo: '',
      isPrivate: false,
      hasCaseStudy: true,
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Lung Cancer Classification (DenseNet201)',
      description: 'Deep learning implementation using Transfer Learning with DenseNet201. Applied advanced image masking, noise reduction, and augmentation techniques to classify lung cancer pathologies with high sensitivity.',
      image: './AOL-COMVIS.png',
      tags: ['AI', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/AuraKris/AOL-COMVIS',
      demo: '',
      category: 'AI'
    },
    {
      id: 6,
      title: 'Healthcare Forum Platform',
      description: 'Simple Full-stack healthcare management system featuring patient registration, appointment scheduling, and a community forum. Built with a focus on relational database design (MySQL) and responsive user experience.',
      image: './aol-wp.png',
      tags: ['Full Stack', 'Database Design', 'Web Development'],
      github: 'https://github.com/AuraKris/AOL-WP',
      demo: '',
      category: 'Web Dev'
    },
    {
      id: 7,
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
                  {project.hasCaseStudy && (
                    <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-purple-600 hover:text-purple-800 transition-colors text-sm font-bold"
                    >
                        <FaProjectDiagram className="mr-2" size={16} /> View Case Study
                    </button>
                  )}

                  {project.isPrivate && !project.hasCaseStudy && (
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
      <AnimatePresence>
        {selectedProject && (
            <FreelanceProjectCaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;