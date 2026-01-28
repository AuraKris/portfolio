import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Research = () => {
  const researchPapers = [
    {
      id: 1,
      title: "Authentic Dataset Development and Exploration of Cross-Language Transfer Learning for Aksara Jawa Recognition",
      abstract: "Developed a novel dataset of 3,528 authentic handwritten Javanese characters to address low-resource language scarcity. Engineered a new-strategy approach using Cross-Language Transfer Learning from Devanagari script. Achieved a peak F1-score of 98.48% using an EfficientNet-B0-SA architecture, systematically outperforming standard ImageNet baselines.",
      journal: "Accepted at ICHGIT International Conference",
      year: 2026, 
      link: "", 
      status: "Accepted"
    },
    {
      id: 2,
      title: "Exploring the Impact of Image Downscaling Algorithms on Color Perception",
      abstract: "Evaluated the impact of downscaling algorithms on color perception using Quantitative Color Pattern Analysis (QCPA). Comparative analysis of Bicubic, Lanczos, Seam Carving, and RDPID on Imagenette/DIV2K datasets. Proved that RDPID achieves optimal fidelity (SSIM 0.768) while Seam Carving degrades color retention to 20.8%.",
      journal: "2024 International Seminar on Application for Technology of Information and Communication (iSemantic)",
      year: 2024,
      link: "https://ieeexplore.ieee.org/document/10762067",
      status: "Published"
    },
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
          {researchPapers.map((paper) => (
            <motion.div 
              key={paper.id}
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    paper.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                    {paper.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 pr-12">{paper.title}</h3>
              <div className="text-sm text-primary font-medium mb-4 flex items-center">
                <FaAward className="mr-2" />
                {paper.journal}, {paper.year}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {paper.abstract}
              </p>
              <div className="flex space-x-4">
                {paper.link ? (
                    <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium"
                    >
                    <FaExternalLinkAlt className="mr-2" size={14}/>
                    View Publication
                    </a>
                ) : (
                    <span className="text-gray-400 text-sm italic">Link coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Research Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Core Specializations</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>Computer Vision:</b> CNN Architectures (EfficientNet, ResNet), Image Quality Assessment (SSIM, QCPA).</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>Transfer Learning:</b> Cross-lingual adaptation for low-resource scripts (Javanese/Devanagari).</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>Deep Learning:</b> Model optimization and fine-tuning for specialized datasets.</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Future Interests</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>AI in Robotics:</b> Integrating vision systems with autonomous control.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>Applied AI in Application:</b> Integrating Artificial Intellegence tailored to each application purposes.</span>
                </li>
                 <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600"><b>Explainable AI (XAI):</b> Making deep learning models more interpretable for enterprise use.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;