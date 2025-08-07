import { Mail, Phone, MapPin, Instagram, ArrowUp, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    'IT Strategy & Consulting',
    'Web Development',
    'Cybersecurity',
    'Cloud & DevOps',
    'Data Analysis',
    'ERP & CRM Solutions'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center">
                  QodeMorph
                  <Sparkles className="ml-2 text-blue-400" size={24} />
                </h3>
                <p className="text-blue-300 font-semibold mb-4">Consulting</p>
                <p className="text-gray-400 leading-relaxed">
                  Transforming businesses through innovative technology solutions and expert consultation.
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/qodemorph_consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group cursor-pointer">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email us</p>
                    <a
                      href="mailto:qodemorphconsulting@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      qodemorphconsulting@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Call us</p>
                    <a
                      href="tel:+2348024167380"
                      className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      +234 802 416 7380
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Visit us</p>
                    <p className="text-white font-medium">17A Colorado Street, Maitama, Abuja</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Section */}
        <AnimatedSection className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} QodeMorph Consulting. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Crafted with ❤️ for digital excellence
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}