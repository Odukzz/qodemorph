import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { allServices } from '@/data/services';

export const metadata = {
  title: 'Our Services | qodemorph consulting',
  description: 'Explore our comprehensive IT services, including cybersecurity, cloud & DevOps, web development, data analysis, and more.',
  openGraph: {
    title: 'Our Services | qodemorph consulting',
    description: 'Explore our comprehensive IT services, including cybersecurity, cloud & DevOps, web development, data analysis, and more.',
    url: 'https://yourdomain.com/services',
    siteName: 'qodemorph consulting',
    images: [
      {
        url: '/qodeT.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | qodemorph consulting',
    description: 'Explore our comprehensive IT services, including cybersecurity, cloud & DevOps, web development, data analysis, and more.',
    images: ['/qodeT.png'],
  },
};

export default function ServicesPage() {
    return (
        <div className="pt-20 bg-gray-50">
            <div className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h1>
                        <p className="mt-4 text-xl text-gray-600">Comprehensive solutions to drive your business forward.</p>
                    </AnimatedSection>
                </div>
            </div>
            <div className="py-20 lg:py-24 container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service) => (
                         <AnimatedSection key={service.id}>
                             <Link href={`/services/${service.id}`} className="block w-full h-full text-left bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out group border-b-4 border-transparent hover:border-blue-600">
                                 <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                     {React.createElement(service.icon, { size: 40 })}
                                 </div>
                                 <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                 <p className="mt-2 text-gray-600">{service.description.substring(0, 70)}...</p>
                                 <p className="mt-4 font-semibold text-blue-600 group-hover:underline">Learn More <ArrowRight className="inline-block" size={16} /></p>
                             </Link>
                         </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};