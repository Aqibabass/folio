import React from 'react';
import { Camera, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <Camera size={24} className="text-yellow-600 mr-2" />
                <span className="text-2xl font-serif font-bold">Stories</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Capturing the world's untold stories through compelling visuals and authentic narratives. 
                Every frame has a purpose, every story matters.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-yellow-600 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-yellow-600 transition-colors duration-200">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#featured" className="hover:text-yellow-600 transition-colors duration-200">
                    Featured Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-600 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentary Photography</li>
                <li>Video Journalism</li>
                <li>Editorial Writing</li>
                <li>Speaking Engagements</li>
                <li>Workshop Training</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>for storytellers everywhere</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Stories Through My Lens. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;