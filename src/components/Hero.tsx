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
    <section className="hero-section relative flex flex-col items-center justify-center min-h-screen text-center">
      <div className="absolute inset-0 w-full h-full">
        <img src="/src/public/IMG_0854.JPG" alt="Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-8">
          
          <div className="mb-8 flex justify-center">
            <Camera size={40} className="mx-auto mb-6 text-yellow-400 hidden sm:block" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-center">
            Independent Documentary Photographer & Filmmaker
            <span className="block text-yellow-400"></span>
          </h1>
          <p className="text-lg mb-12 text-gray-500 max-w-2xl mx-auto text-center">
            Capturing Kashmir’s political, social, and cultural landscape through photography and film.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Explore My Work
            </button>
            <a href="https://www.instagram.com/reel/DGvr_83P3lb/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200">
              <Play size={20} className="mr-2" />
              Watch Instagram Reel
            </a>
          </div>
          <button onClick={scrollToAbout} className="animate-bounce mx-auto block">
            <ArrowDown size={32} className="text-white/70 hover:text-yellow-400 transition-colors duration-200" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 text-white text-right hidden lg:block">
        <div className="mb-4">
          <div className="text-4xl font-bold text-yellow-400">150+</div>
          <div className="text-sm uppercase tracking-wide">Adil Abass Published</div>
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