import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented people. 
              Let's turn your ideas into reality!
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="flex items-center justify-center text-gray-400">
              Made with <Heart className="mx-2 text-red-500" size={16} /> by Adhithya Jayakumar
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;