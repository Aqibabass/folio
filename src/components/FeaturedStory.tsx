import React from 'react';
import { ExternalLink, Play, Award } from 'lucide-react';

const FeaturedStory: React.FC = () => {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award size={32} className="text-yellow-600 mr-2" />
              <span className="text-yellow-600 font-semibold">Featured Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Voices from the Frontline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              An award-winning documentary series exploring the human impact of climate change 
              through the eyes of those living it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Featured Image/Video */}
            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Climate change documentary"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Play size={48} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full mb-4">
                  World Press Photo Winner 2023
                </span>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Rising Seas, Sinking Dreams
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This powerful documentary follows three families in Bangladesh as they face 
                  the daily reality of rising sea levels. Through intimate portraits and 
                  environmental storytelling, the series reveals the human cost of climate change.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">6-month investigation</h4>
                    <p className="text-gray-600">Living with affected communities in coastal Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-platform coverage</h4>
                    <p className="text-gray-600">Published across print, digital, and broadcast media</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global impact</h4>
                    <p className="text-gray-600">Featured in 15+ international publications</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors duration-200"
                >
                  Read Full Story
                  <ExternalLink size={18} className="ml-2" />
                </a>
                
                <button className="inline-flex items-center text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                  <Play size={18} className="mr-2" />
                  Watch Documentary
                </button>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              Story Impact
            </h4>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">2.3M</div>
                <div className="text-gray-600">People Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">15</div>
                <div className="text-gray-600">International Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">$500K</div>
                <div className="text-gray-600">Relief Funds Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;