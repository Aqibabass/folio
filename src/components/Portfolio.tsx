import React, { useState } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'photography' | 'video' | 'written';
  image: string;
  description: string;
  link?: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Muharram Procession in Kashmir',
      category: 'photography',
      image: 'https://imagenes2.fotos.europapress.es/preview/6839170.webp?s=1000',
      description: 'A visual documentation of the deeply spiritual Muharram processions, exploring the intersection of faith, tradition, and political restrictions in Kashmir.',
      link: 'https://fotos.europapress.es/actualidadinternacional/f6839170/'
    },
    {
      id: 2,
      title: 'Israeli-Iranian Conflict – Kashmir Connection',
      category: 'photography',
      image: 'https://imagenes2.fotos.europapress.es/preview/6796989.webp?s=1000',
      description: 'A photographic essay drawing parallels between global conflicts and local tensions in Kashmir, highlighting how international events shape everyday lives here.',
      link: 'https://fotos.europapress.es/actualidadinternacional/f6796989'
    },
  
    {
      id: 3,
      title: 'After the Gunfire: Pahalgam Attack',
      category: 'photography',
      image: 'https://fl-i.thgim.com/public/incoming/x6pyac/article69501159.ece/alternates/LANDSCAPE_1200/Baisaran%20Valley.jpg',
      description: 'Scenes from Pahalgam after the terrorist attack, featuring security personnel, deserted marketplaces, and tourists. Photo essay by Adil Abass.',
      link: 'https://frontline.thehindu.com/the-nation/kashmir-pahalgam-terrorist-attack-2025-tourist-shooting-tragedy/article69501220.ece'
    },
    {
      id: 4,
      title: 'Tourism and Environmental Crisis in Gurez Valley',
      category: 'photography',
      image: 'https://fl-i.thgim.com/public/society/lkxncr/article68523286.ece/alternates/LANDSCAPE_1200/Gurez%20Valley.jpg',
      description: 'Photo essay documenting environmental degradation, tribal life, and pollution in Gurez Valley. Photo essay by Adil Abass.',
      link: 'https://frontline.thehindu.com/photo-essay/kashmir-gurez-valley-srinagar-loc-tourism-krishnaganga-river-pollution-environment/article68523273.ece'
    },
    {
      id: 5,
      title: 'Ramzan in Kashmir: Traditions and Resilience',
      category: 'photography',
      image: 'https://fl-i.thgim.com/public/incoming/k469ud/article69320420.ece/alternates/LANDSCAPE_1200/Breaking%20Ramzan%20fast.jpeg',
      description: 'Captures Ramzan traditions, prayers, and community life in Srinagar. Photo essay by Adil Abass.',
      link: 'https://frontline.thehindu.com/profile/photographers/ramzan-in-kashmir-2025-traditions-struggles/article69320401.ece'
    },
    
      
    {
      id: 6,
      title: 'Adil Abass Interview – Frontline India',
      category: 'video',
      image: 'https://img.youtube.com/vi/oMqSfWsIFuE/maxresdefault.jpg',
      description: 'Interview with Adil Abass on Frontline India, discussing his work and experiences as a photojournalist.',
      link: 'https://youtu.be/oMqSfWsIFuE?si=IV74Y9kSXD97OKHI'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'photography', label: 'Photography' },
    { key: 'video', label: 'Video' },
    { key: 'written', label: 'Written Adil Abass' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-center">
              Portfolio
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
              A collection of Adil Abass that matter, told through compelling visuals and authentic narratives.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                      {item.category === 'video' && (
                        <Play size={48} className="mx-auto text-yellow-400" />
                      )}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-full overflow-auto">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    {selectedItem.title}
                  </h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full capitalize">
                    {selectedItem.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    View Full Story
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;

<p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
  My work has been published in and featured by: <span className="font-bold text-yellow-400">Europa Press</span>, <span className="font-bold text-yellow-400">Flipboard</span>, <span className="font-bold text-yellow-400">Frontline India</span>.
</p>