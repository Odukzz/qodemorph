import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { allServices } from '@/data/services';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
  const service = allServices.find(s => s.id === params.serviceId);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: `${service.title} | Tech Solutions`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
    const service = allServices.find(s => s.id === params.serviceId);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="pt-20 bg-white">
            <div className="py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <AnimatedSection>
                        <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 group">
                           <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform"/> Back to All Services
                        </Link>
                        <div className="text-blue-600"><Icon size={60} /></div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{service.title}</h1>
                    </AnimatedSection>
                </div>
            </div>
             <div className="py-20 lg:py-24 container mx-auto px-6 lg:px-8 max-w-4xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">{service.description}</p>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                     <ul className="list-disc list-inside space-y-3 text-gray-600 text-lg mb-12">
                        {service.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                 </AnimatedSection>
            </div>
        </div>
    );
}
