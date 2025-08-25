import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "An exceptional storyteller who brings humanity to every frame. Their work has consistently elevated our publication's impact.",
      author: "Sarah Johnson",
      role: "Editor-in-Chief",
      company: "National Geographic"
    },
    {
      quote: "Remarkable ability to capture the essence of complex social issues through powerful visual narratives.",
      author: "Michael Chen",
      role: "Photo Director",
      company: "Time Magazine"
    },
    {
      quote: "Their documentary work has set new standards for multimedia journalism. Truly inspiring storytelling.",
      author: "Emma Rodriguez",
      role: "Documentary Producer",
      company: "BBC World Service"
    }
  ];

  const collaborations = [
    { name: 'National Geographic', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Time Magazine', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'BBC World Service', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Reuters', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Associated Press', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'The Guardian', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Feedback from editors, colleagues, and industry professionals I've had the privilege to work with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <Quote size={40} className="text-yellow-600 mb-6" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaborations */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Collaborations & Features
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My work has been featured in leading publications and media organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {collaborations.map((collaboration, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 grayscale hover:grayscale-0"
              >
                <span className="text-gray-600 font-semibold text-sm text-center">
                  {collaboration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;