import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaLaravel, FaBrain } from 'react-icons/fa';
import { SiCplusplus, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiPhp, SiMysql, SiVite, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const proficiencyLevels = {
    expert: { label: 'Expert', width: '95%' },
    advanced: { label: 'Advanced', width: '80%' },
    intermediate: { label: 'Intermediate', width: '65%' },
    familiar: { label: 'Familiar', width: '50%' },
    beginner: { label: 'Beginner', width: '35%' },
    novice: { label: 'Novice', width: '20%' }
  };

  const programmingSkills = [
    { name: 'Python', icon: <FaPython />, level: 'intermediate' },
    { name: 'HTML', icon: <FaHtml5 />, level: 'intermediate' },
    { name: 'CSS', icon: <FaCss3Alt />, level: 'intermediate' },
    { name: 'JavaScript', icon: <FaJs />, level: 'familiar' },
    { name: 'MySQL', icon: <SiMysql />, level: 'familiar' },
    { name: 'Java', icon: <FaJava />, level: 'beginner' },
    { name: 'C++', icon: <SiCplusplus />, level: 'beginner' },
    { name: 'PHP', icon: <SiPhp />, level: 'beginner' },
  ];

  const frameworkSkills = [
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 'intermediate' },
    { name: 'Scikit-Learn', icon: <SiScikitlearn />, level: 'intermediate' },
    { name: 'OpenCV', icon: <SiOpencv />, level: 'familiar' },
    { name: 'ReactJS', icon: <FaReact />, level: 'familiar' },
    { name: 'Laravel', icon: <FaLaravel />, level: 'familiar' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 'familiar' },
    { name: 'Vite', icon: <SiVite />, level: 'beginner' },
    { name: 'PyTorch', icon: <SiPytorch />, level: 'novice' },
    // { name: 'React Native', icon: <FaReact />, level: 'novice' },
  ];

  const domainSkills = [
    { name: 'Artificial Intelligence', level: 'intermediate' },
    { name: 'Machine Learning', level: 'intermediate' },
    { name: 'Deep Learning', level: 'intermediate' },
    { name: 'Computer Vision', level: 'intermediate' },
    { name: 'Web Development', level: 'intermediate' },
    { name: 'Data Science', level: 'familiar' },
    { name: 'Software Development', level: 'beginner' },
    { name: 'Natural Language Processing', level: 'beginner' },
  ];

  const softSkills = [
    {
      category: "Communication",
      skills: [
        "Explaining technical concepts clearly in research and group projects",
        "Writing structured documentation and academic research papers",
        "Adapting communication styles for effective teamwork"
      ]
    },
    {
      category: "Leadership & Teamwork",
      skills: [
        "Mentoring and guiding fellow students in technical subjects",
        "Coordinating group projects and fostering collaborative problem-solving",
        "Encouraging collaboration and knowledge-sharing"
      ]
    },
    {
      category: "Problem-Solving & Innovation",
      skills: [
        "Tackling real-world challenges with AI, ML, and software development",
        "Developing creative solutions for personal and academic projects",
        "Exploring efficient methodologies in research and technical problem-solving",
      ]
    },
    {
      category: "Research & Analytical Thinking",
      skills: [
        "Conducting AI research with published findings on image downscaling algorithms",
        "Applying structured, research-driven approaches to problem-solving",
        "Evaluating data and algorithms for improved performance and efficiency",
      ]
    },
    {
      category: "Professional & Time Management",
      skills: [
        "Time management across multiple projects and responsibilities",
        "Adapting to new technologies and learning in fast-paced environments",
        "Critical thinking and structured problem analysis for decision-making",
        "Research methodology and technical writing"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A comprehensive overview of my technical expertise and capabilities
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-primary text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2" 
                      style={{ width: proficiencyLevels[skill.level].width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Frameworks & Libraries</h3>
            <div className="space-y-6">
              {frameworkSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-blue-500 text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 rounded-full h-2" 
                      style={{ width: proficiencyLevels[skill.level].width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card p-6 md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Domain Expertise</h3>
            <div className="space-y-6">
              {domainSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-secondary rounded-full h-2" 
                      style={{ width: proficiencyLevels[skill.level].width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Proficiency Levels: Novice (started learning) → Beginner (basic knowledge) → 
            Familiar (working knowledge) → Intermediate (practical experience) → Advanced (strong proficiency)</p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-primary">{category.category}</h4>
                <ul className="list-disc space-y-2 ml-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="items-center text-gray-700">
                      {/* <span className="w-2 h-2 bg-secondary rounded-full mr-2 flex-0"></span> */}
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;