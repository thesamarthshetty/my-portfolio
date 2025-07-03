import React from 'react';
import { experience } from '../data/resumeData';
import { ExternalLink, Building } from 'lucide-react';
//578FCA
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey building digital experiences and solving complex problems.
          </p>
        </div>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 text-white flex items-center justify-center p-6 md:w-48 bg-blue-700">
                  <Building size={48} />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                      <div className="flex items-center mt-1">
                        <a 
                          href={job.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 flex items-center group"
                        >
                          {job.company}
                          <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>
                    <span className="mt-2 md:mt-0 inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;