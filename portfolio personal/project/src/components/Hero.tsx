import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Adhithya Jayakumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            2nd Year Computer Science Student
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            An aspiring computer science student eagerly waiting to explore the vast field of technology. 
            Always curious about how things work and excited to learn something new every day.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Adhithya303" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github size={24} className="text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/adhithya-j-44b100326/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a href="mailto:adhithyajayakumar3@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;