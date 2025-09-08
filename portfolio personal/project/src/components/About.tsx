import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a highly motivated individual with a genuine passion for learning new skills and 
              connecting with people. My journey in computer science began with simple curiosity, 
              and it has grown into a deep fascination with how technology can solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in the power of collaboration and teamwork. Whether it's working on group projects 
              or volunteering for community causes, I enjoy bringing people together to achieve common goals. 
              I'm resilient, adaptable, and always ready to take on new challenges with a positive attitude.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Team Work</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Leadership</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Communication</span>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-gray-600">Approaching challenges with analytical thinking and creative solutions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
              <Palette className="text-emerald-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership Qualities</h3>
              <p className="text-gray-600">Leading teams and initiatives with confidence and collaborative spirit.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <Zap className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Adaptability</h3>
              <p className="text-gray-600">Quick to adapt to new environments and embrace changing technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;