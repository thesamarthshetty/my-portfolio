import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <ThemeToggle /> */}
    </div>
  );
}

export default App;