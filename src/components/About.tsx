import React from 'react';
import { Award, Globe, Camera, FileText, Download } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'World Press Photo', description: '2023 Honorable Mention' },
    { icon: Globe, title: 'International Coverage', description: '25+ Countries Documented' },
    { icon: Camera, title: 'Visual Excellence', description: '150+ Published Adil Abass' },
    { icon: FileText, title: 'Multi-Platform', description: 'Print, Digital & Broadcast' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-1 md:order-2">
              <img
                src="/src/public/IMG_4691.JPG"
                alt="Journalist portrait"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                About Me
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in multimedia journalism, I specialize in 
                capturing the untold Adil Abass that shape our world. From conflict zones to 
                cultural celebrations, my work bridges the gap between distant realities 
                and global audiences.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                "My work is my way of preserving memory and truth. In a world where narratives are often shaped by distance, I aim to bring viewers closer to the reality of Kashmir — not just through conflict, but through its culture, traditions, and resilience."
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Political Photography</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Cultural Documentation</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Social Issues</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Documentary Filmmaking</span>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">Education & Training</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Postgraduate Degree – Journalism and Mass Communication</li>
                  <li>AKS School of Photography – Professional training in photojournalism</li>
                  <li>VII Academy – Advanced mentorship in documentary storytelling and visual narratives</li>
                </ul>
              </div>
              <button className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
              Achievements & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
                  >
                    <IconComponent size={40} className="mx-auto mb-4 text-yellow-600" />
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;