import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaFlask } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Bridging the gap between theoretical AI concepts and real-world applications
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-lg mr-4">
                <FaGraduationCap className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-600">
              Currently pursuing a Computer Science degree at BINUS University, with a focus on Artificial Intelligence and Machine Learning.
              Study abroad experience at Xi'an Jiaotong Liverpool University.
            </p>
          </motion.div>

          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-lg mr-4">
                <FaLaptopCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <p className="text-gray-600">
              Proficient in Python, SQL, HTML, CSS, JavaScript, and React. An intermediate in developing AI and ML solutions.
            </p>
          </motion.div>

          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-lg mr-4">
                <FaFlask className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Research</h3>
            </div>
            <p className="text-gray-600">
              Published research on "Exploring the Impact of Image Downscaling Algorithms on Color Perception" 
              and actively working on various AI and ML projects.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-gray-50 p-6 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <p className="text-gray-600 mb-4">
            As a Computer Science undergraduate at BINUS University, I've developed a strong passion for artificial 
            intelligence, machine learning, deep learning, robotics, software development, computer vision, natural 
            language processing, and data science.
          </p>
          <p className="text-gray-600 mb-4">
            Throughout my academic journey, I've worked on numerous projects that have allowed me to apply theoretical 
            knowledge to practical solutions. My research paper on <i>"Exploring the Impact of Image Downscaling Algorithms 
            on Color Perception"</i> reflects my interest in how convolutional neural networks (CNNs) interpret color and 
            image quality.
          </p>
          <p className="text-gray-600 mb-4">
            Beyond my coursework, I had the opportunity to mentor fellow students for one semester in web programming, 
            compilation techniques, NLP, data mining, and computer vision. This experience enhanced my ability to break down 
            complex technical concepts, guide students through problem-solving, and support academic growth. Through mentoring, 
            I strengthened my technical communication, leadership, and adaptability skills while deepening my own understanding 
            of these subjects.
          </p> 
          <p className="text-gray-600 mb-4">
            During my semester abroad at Xi'an Jiaotong Liverpool University in China, I was exposed to cutting-edge developments 
            in AI, broadening my perspective on its implementation and future potential. Collaborating with peers from diverse backgrounds 
            improved my cross-cultural communication and adaptability.
          </p>
          <p className="text-gray-600">
            I'm constantly eager to learn and grow in this rapidly evolving field. My goal is to contribute to innovative solutions that leverage 
            AI and machine learning to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;