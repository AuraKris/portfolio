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
          Engineer at the intersection of Scalable Backend Systems and Computer Vision Research
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
                <FaLaptopCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Backend Engineering</h3>
            </div>
            <p className="text-gray-600">
              Building enterprise microservices at <b>Blibli</b> using <b>Spring Boot (2.7/3.4)</b>, <b>Kafka</b>, and <b>Project Reactor</b>. 
              Contributed to major framework migrations (2.3 to 2.7) by refactoring legacy dependencies into hybrid reactive architectures.
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
                <FaFlask className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">AI Research</h3>
            </div>
            <p className="text-gray-600">
              Published author at <b>ICHGIT</b> & <b>iSemantic</b> conferences. 
              Specializing in Computer Vision, Transfer Learning, and Quantitative Color Pattern Analysis (QCPA).
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
                <FaGraduationCap className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-600">
              Computer Science at <b>BINUS University</b> (GPA 3.75). 
              International exposure via study abroad at <b>Xi'an Jiaotong-Liverpool University</b>, China.
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
          <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              I am a <b>Software Engineer</b> with a dual focus on robust backend infrastructure and applied artificial intelligence. 
              Currently, I work with the <b>B2G Technology Team at Blibli</b>, where I help maintain the SIPLah procurement platform.
            </p>
            <p>
              My core expertise lies in <b>developing features and modernizing legacy systems</b>. I recently contributed to technical initiatives to continue the 
              migration of synchronous Spring Boot services to <b>hybrid-reactive patterns (WebFlux/Reactor)</b> (2.3 to 2.7), optimizing high-concurrency flows while preserving system stability. 
              I also contributed in cloud infrastructure transitions, resolving <b>Google Kubernetes Engine (GKE)</b> configuration with DevOps and debugging 
              distributed systems using ArgoCD and SigNoz.
            </p>
            <p>
              In parallel, I am an active researcher in the field of <b>Computer Vision</b>. My work on <i>"Authentic Dataset Development for Aksara Jawa"</i> 
              introduced a novel dataset and transfer learning strategy that achieved a <b>98.48% F1-score</b>, accepted for publication at the 
              ICHGIT International Conference.
            </p> 
            <p>
              Beyond code, I am passionate about problem solving, debugging complex algorithms and understanding software design patterns. 
              My goal is to continue building systems that are not only performant and scalable but also intelligent and adaptive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;