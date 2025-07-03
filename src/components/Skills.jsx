import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/resumeData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my career
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="flex items-center justify-center mb-3 text-3xl">
                <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
              </div>
              {/* <img src={skill.icon} alt={skill.name} className="flex items-center justify-cente  mb-3 " /> */}
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;