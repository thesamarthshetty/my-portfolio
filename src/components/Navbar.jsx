import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Samarth_Resume.pdf";  // Update filename if different
    link.download = "Samarth_Shetty_Resume.pdf";  
    link.click();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`font-bold text-xl ${scrolled ? 'text-white' : 'text-black'}`}>
              {personalInfo.name.split(' ')[0]}<span className="text-blue-500">.</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${scrolled ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`${scrolled ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`${scrolled ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`${scrolled ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${scrolled ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            >
              Contact
            </button>
            <button 
              onClick={downloadResume} 
              className={`${scrolled ? 'text-white' : 'text-black'} flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors`}
            >
              <Download size={16} /> Resume
            </button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Contact
            </button>
            <button 
              onClick={downloadResume} 
              className="flex items-center gap-1 w-full px-3 py-2 text-blue-500 hover:bg-blue-50 rounded-md"
            >
              <Download size={16} /> Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;