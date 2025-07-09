import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="text-2xl font-bold text-white">QodeMorph Consulting</h3>
            <p className="text-gray-400 mt-2">Adapting Technology, Enhancing Business.</p>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-center md:justify-start"><Mail size={18} className="mr-3 text-blue-400" /><a href="mailto:info@techconsult.io" className="hover:text-blue-400 transition-colors">info@techconsult.io</a></li>
                <li className="flex items-center justify-center md:justify-start"><Phone size={18} className="mr-3 text-blue-400" /><a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Follow Us</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-center md:justify-start"><Instagram size={18} className="mr-3 text-blue-400" /><a href="#" className="hover:text-blue-400 transition-colors">@TechConsultancy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Location</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-center md:justify-start"><MapPin size={18} className="mr-3 text-blue-400" /><p>17A Colorado</p></li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Qodemorph Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}