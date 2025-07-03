import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resumeData';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br text-white" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            //className="text-3xl md:text-4xl font-bold mb-4"
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
          Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            //className="mt-6 text-lg text-blue-200 max-w-2xl mx-auto"
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            //className="rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105"
            className="rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 cart"
            style={{ backgroundColor: "rgb(59 130 246" }}
          >
            <div className="inline-block p-4 rounded-full bg-blue-600 mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-white">Email</h3>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-white hover:text-black transition-colors"
            >
              {personalInfo.email}
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            //className="bg-blue-600 rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105"
            className="rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 cart"
            style={{ backgroundColor: "rgb(59 130 246" }}
          >
            <div className="inline-block p-4 rounded-full bg-blue-600 mb-4">
              <Linkedin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              Connect with me
            </a>
          </motion.div>
        </div>
        
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-blue-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Send me a message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-md text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-md text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-md text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-md text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;