import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Lung Cancer Classification with Transfer Learning and Image Masking',
      description: 'Practice of Transfer Learning using DenseNet201 with Imagenet weights to classify lung cancer diseases. Noise reduction, image masking, and data augmentation techniques were applied to improve the model performance.',
      image: './AOL-COMVIS.png',
      tags: ['AI', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/AuraKris/AOL-COMVIS',
      demo: '',
    },
    {
      id: 2,
      title: 'Healthcare and Forum Website',
      description: 'This was a web programming course final project that I completed in 2024. It was a simple full-stack web development project that involved creating a healthcare and forum website using Laravel and MySQL. The project was built using a modern and responsive design, with a focus on user experience and accessibility. The forum was also able to handle multiple threads and posts, and the healthcare section had a feature for patient registration and appointment scheduling.',
      image: './aol-wp.png',
      tags: ['Web Development', 'Full Stack'],
      github: 'https://github.com/AuraKris/AOL-WP',
      demo: '',
    },
    {
      id: 3,
      title: 'RecipeHub App',
      description: 'A frontend recipe finder website built with react and tailwind. It allows users to search for recipes by ingredients, taste, and cuisine type. The website also features a recipe detail page with an image, description, and ingredients list. The app is responsive and mobile-friendly, making it easy to use on any device. ',
      image: './recipehub.png',
      tags: ['Web Development'],
      github: 'https://github.com/AuraKris/recipehub-app',
      demo: 'https://aurakris.github.io/recipehub-app/',
    },
    // {
    //   id: 4,
    //   title: 'E-commerce Platform',
    //   description: 'Developed a full-stack e-commerce platform using React, Node.js, and MongoDB with features like user authentication, product catalog, and payment integration.',
    //   image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   tags: ['Web Development', 'Full Stack'],
    //   github: 'https://github.com/yourusername/project4',
    //   demo: 'https://project4-demo.com',
    // },
    // {
    //   id: 5,
    //   title: 'Predictive Analytics Tool',
    //   description: 'Created a machine learning-based predictive analytics tool that forecasts business metrics using historical data and advanced statistical models.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   tags: ['Machine Learning', 'Data Science'],
    //   github: 'https://github.com/yourusername/project5',
    //   demo: 'https://project5-demo.com',
    // },
    // {
    //   id: 6,
    //   title: 'Computer Vision for Retail',
    //   description: 'Implemented a computer vision system for retail stores to track customer movement patterns and optimize store layouts for better customer experience.',
    //   image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   tags: ['Computer Vision', 'AI'],
    //   github: 'https://github.com/yourusername/project6',
    //   demo: 'https://project6-demo.com',
    // },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const categories = ['all', 'AI', 'Machine Learning', 'Computer Vision', 'NLP', 'Data Science', 'Web Development', 'Full Stack'];

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
          My Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore some of my recent work across various domains
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  {/* <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a> */}
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