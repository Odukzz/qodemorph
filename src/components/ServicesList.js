'use client'; // This is a Client Component

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import React from 'react';

export default function ServicesList({ allServices }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {allServices.map((service) => {
        const Icon = service.icon;
        return (
          <AnimatedSection key={service.id}>
            <Link href={`/services/${service.id}`} className="block w-full h-full text-left bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out group border-b-4 border-transparent hover:border-blue-600">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description.substring(0, 70)}...</p>
              <p className="mt-4 font-semibold text-blue-600 group-hover:underline">Learn More <ArrowRight className="inline-block" size={16} /></p>
            </Link>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
