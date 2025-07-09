import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">QodeMorph Consulting</h3>
              <p className="text-gray-400">Adapting Technology, Enhancing Business.</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-center lg:justify-start">
                  <Mail size={18} className="mr-3 text-blue-400" />
                  <a
                    href="mailto:qodemorphconsulting@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    qodemorphconsulting@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <Phone size={18} className="mr-3 text-blue-400" />
                  <a
                    href="tel:+2348024167380"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +234 802 416 7380
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Follow Us</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-center lg:justify-start">
                  <Instagram size={18} className="mr-3 text-blue-400" />
                  <a
                    href="https://www.instagram.com/qodemorph_consulting"
                    className="hover:text-blue-400 transition-colors"
                  >
                    @qodemorph_consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Location</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-center lg:justify-start">
                  <MapPin size={18} className="mr-3 text-blue-400" />
                  <p>17A Colorado Street, Maitama, Abuja</p>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} QodeMorph Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}