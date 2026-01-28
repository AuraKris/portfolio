import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaJs, FaDatabase, FaLaravel, FaDocker } from 'react-icons/fa';
import { SiCplusplus, SiTensorflow, SiPytorch, 
  SiScikitlearn, SiOpencv, SiVite, SiTailwindcss, 
  SiApachekafka, SiSpring, SiKubernetes, SiPostgresql, SiMongodb 
} from 'react-icons/si';

const Skills = () => {
  const proficiencyLevels = {
    expert: { label: 'Expert', width: '95%' },
    advanced: { label: 'Advanced', width: '80%' },
    intermediate: { label: 'Intermediate', width: '65%' },
    familiar: { label: 'Familiar', width: '50%' },
    beginner: { label: 'Beginner', width: '35%' }
  };

  const programmingSkills = [
    { name: 'Java (SE/EE)', icon: <FaJava />, level: 'advanced' },
    { name: 'Python', icon: <FaPython />, level: 'intermediate' },
    { name: 'SQL', icon: <FaDatabase />, level: 'intermediate' },
    { name: 'JavaScript', icon: <FaJs />, level: 'familiar' },
    { name: 'C++', icon: <SiCplusplus />, level: 'familiar' },
    { name: 'ReactJS/TS', icon: <FaReact />, level: 'familiar' },
    { name: 'Laravel', icon: <FaLaravel />, level: 'familiar' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 'familiar' },
    { name: 'Vite', icon: <SiVite />, level: 'familiar' }
  ];

  const backendCloudSkills = [
    { name: 'Spring Boot (MVC/WebFlux)', icon: <SiSpring />, level: 'advanced' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'intermediate' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'intermediate' },
    { name: 'Docker', icon: <FaDocker />, level: 'intermediate' },
    { name: 'Apache Kafka', icon: <SiApachekafka />, level: 'familiar' },
    { name: 'Kubernetes (GKE)', icon: <SiKubernetes />, level: 'beginner' },
  ];

  const aiResearchSkills = [
    { name: 'PyTorch', icon: <SiPytorch />, level: 'intermediate' },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 'intermediate' },
    { name: 'Computer Vision (OpenCV)', icon: <SiOpencv />, level: 'intermediate' },
    { name: 'Scikit-Learn', icon: <SiScikitlearn />, level: 'intermediate' },
  ];

  const softSkills = [
    {
      category: "Engineering Impact",
      skills: [
        "Mentored junior students in Computer Vision and Web Programming",
        "Contributed to Spring Boot migrations of microservices (Spring Boot 2.3 → 2.7)",
        "Maintained Code Quality & Test Coverage (SonarQube)"
      ]
    },
    {
      category: "Research & Analysis",
      skills: [
        "Quantitative Color Pattern Analysis (QCPA) methodology",
        "Technical writing for international conferences (ICHGIT/iSemantic)",
        "Data-driven decision making for algorithm optimization"
      ]
    },
    {
      category: "Collaboration & Agile",
      skills: [
        "Agile/Scrum workflow (Jira, 2-week sprints)",
        "Cross-functional communication with DevOps and Product teams",
        "Writing comprehensive API documentation & contracts"
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
          Core competencies in Backend Engineering, Cloud Infrastructure, and AI Research
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FaJava className="text-primary"/> Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-1000" 
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
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <SiSpring className="text-green-600"/> Backend & Cloud
            </h3>
            <div className="space-y-6">
              {backendCloudSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 rounded-full h-2 transition-all duration-1000" 
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
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <SiPytorch className="text-orange-600"/> AI & Research
            </h3>
            <div className="space-y-6">
              {aiResearchSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {proficiencyLevels[skill.level].label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 rounded-full h-2 transition-all duration-1000" 
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
          <p>Proficiency Levels: Beginner (basic knowledge) → 
            Familiar (working knowledge) → Intermediate (practical experience) → Advanced (strong proficiency)</p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Professional Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-bold mb-4 text-gray-800">{category.category}</h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start text-gray-600 text-sm">
                      <span className="mr-2 text-primary mt-1">•</span>
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