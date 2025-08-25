import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Let's Tell Your Story
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you have a story to share, a project to collaborate on, or just want to connect, 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 resize-vertical"
                    placeholder="Tell me more about your story or project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail size={20} className="mr-4 text-yellow-600 flex-shrink-0" />
                    <span>contact@storiesthrough.lens</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Phone size={20} className="mr-4 text-yellow-600 flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <MapPin size={20} className="mr-4 text-yellow-600 flex-shrink-0" />
                    <span>Based in New York, NY<br />Available worldwide</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Follow My Journey</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Available For:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Documentary Photography</li>
                  <li>• Video Journalism Projects</li>
                  <li>• Speaking Engagements</li>
                  <li>• Editorial Assignments</li>
                  <li>• Workshop & Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;