import React from 'react';
import { ArrowDown, Camera, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Journalist at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <Camera size={64} className="mx-auto mb-6 text-yellow-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Capturing Stories
          <span className="block text-yellow-400">Through My Lens</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          Multimedia Journalist | Visual Storyteller | Digital Creator
        </p>
        
        <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
          Documenting human experiences with compelling visuals and authentic narratives 
          that bridge cultures and inspire understanding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Explore My Work
          </button>
          
          <button className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200">
            <Play size={20} className="mr-2" />
            Watch Demo Reel
          </button>
        </div>

        <button onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown size={32} className="text-white/70 hover:text-yellow-400 transition-colors duration-200" />
        </button>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-8 right-8 text-white text-right hidden lg:block">
        <div className="mb-4">
          <div className="text-4xl font-bold text-yellow-400">150+</div>
          <div className="text-sm uppercase tracking-wide">Stories Published</div>
        </div>
        <div className="mb-4">
          <div className="text-4xl font-bold text-yellow-400">25</div>
          <div className="text-sm uppercase tracking-wide">Countries Covered</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-yellow-400">8</div>
          <div className="text-sm uppercase tracking-wide">Awards Won</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;