import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Research = () => {
  const researchPapers = [
    {
      id: 1,
      title: "Exploring the Impact of Image Downscaling Algorithms on Color Perception",
      abstract: "This study evaluates the impact of image downscaling algorithms on color perception, an area that has received little attention. Using Quantitative Color Pattern Analysis (QCPA), we compare Bicubic Interpolation, Lanczos Resampling, Seam Carving, and Rapid Detail-Preserving Image Downscaling (RDPID) on the Imagenette and DIV2K datasets. Metrics such as color histogram similarity and dominant color shifts reveal that Bicubic Interpolation and RDPID preserve color fidelity better than Seam Carving. Findings highlight varying degrees of color loss, emphasizing the need for further research on downscaling methods and their implications for computer vision.",
      journal: "2024 International Seminar on Application for Technology of Information and Communication (iSemantic)",
      year: 2024,
      link: "https://ieeexplore.ieee.org/document/10762067",
      pdf: "https://example.com/research-paper.pdf",
    },
    // Add more research papers as they become available
  ];

  return (
    <section id="research" className="section bg-gray-50">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Research Publications
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My contributions to academic research in AI and Computer Vision
        </motion.p>

        <div className="space-y-8 mt-12">
          {researchPapers.map((paper, index) => (
            <motion.div 
              key={paper.id}
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <div className="text-sm text-gray-500 mb-4">
                Published in {paper.journal}, {paper.year}
              </div>
              <p className="text-gray-600 mb-4">
                {paper.abstract}
              </p>
              <div className="flex space-x-4">
                {/* <a 
                  href={paper.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <FaFilePdf className="mr-2" />
                  PDF
                </a> */}
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Publication
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-lg mb-2">Current Focus Areas</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Computer Vision and Image Processing</li>
                <li>Deep Learning for Visual Recognition</li>
                
                <li>Natural Language Processing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Future Research Directions</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Multimodal AI Systems</li>
                {/* <li>Explainable AI</li> */}
                <li>AI in Robotics</li>
                <li>Reinforcement Learning Applications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;