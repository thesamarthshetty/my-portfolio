import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      window.scrollTo({
        top: experienceSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-black px-4 "
      style={{ backgroundColor: "#F5F5F5" }}
    >
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
  
      {/* LEFT on Desktop | TOP on Mobile */}
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
        <img
          src="/images/myImage.png"
          alt="Samarth Shetty"
          className="w-full h-full object-cover"
        />
      </div>
    
      {/* RIGHT on Desktop | BELOW on Mobile */}
      <div className="text-center md:text-left">
        <p className="text-gray-500 md:text-xl mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {personalInfo.name}
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-600 mb-2">
            {personalInfo.title}
          </h2>
          <p className="text-m max-w-2xl mx-auto md:mx-0 leading-relaxed">
            A passionate developer crafting exceptional digital experiences through clean, efficient code and innovative solutions.
          </p>
        </div>
    
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
          <a
            href="/pdf/Samarth_Resume.pdf"
            download
            className="px-6 py-2 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            Download CV
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Contact Info
          </a>
        </div>
    
        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start">
          {/* <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <img src="/icons/linkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
          </a> */}
          {/* <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    
    </div>
    

      {/* Down Arrow */}
      <button
        onClick={scrollToExperience}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition, flex, justify-center"
        aria-label="Scroll to experience section"
      >
        <ArrowDown size={24} className="text-black" />
      </button>
    </section>
  );
};

export default Hero;
