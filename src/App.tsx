import React from 'react';
import { Building2, Users2, BarChart3, Rocket, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8" />
            <span className="text-2xl font-bold">Alpha Lotus</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-purple-200">Services</a>
            <a href="#about" className="hover:text-purple-200">About</a>
            <a href="#contact" className="hover:text-purple-200">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Transform Your Business with AlphaLotus</h1>
            <p className="text-xl mb-8">Innovative solutions to drive your success forward. We combine expertise with cutting-edge strategies to help your business thrive.</p>
            <a href="#contact" className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Business Consulting</h3>
              <p className="text-gray-600">Strategic guidance to optimize your operations and maximize growth potential.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users2 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Team Development</h3>
              <p className="text-gray-600">Build and nurture high-performing teams that drive success.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">Data-driven insights to inform strategic decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Modern office space"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Alpha Lotus</h2>
              <p className="text-gray-600 mb-6">
                At Alpha Lotus, we're dedicated to helping businesses reach their full potential. Our team of experts brings years of experience and a passion for innovation to every project.
              </p>
              <p className="text-gray-600">
                We believe in building lasting partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-600" />
                <span>alphalotus.biz</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-purple-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-purple-600" />
                <span>123 Business Avenue, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="h-6 w-6" />
              <span className="text-xl font-bold">Alpha Lotus</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alpha Lotus. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;