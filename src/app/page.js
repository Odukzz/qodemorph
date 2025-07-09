'use client';
import Link from 'next/link';
import { Shield, Code, Cloud, Star, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function HomePage() {
    const featuredServices = [
        { icon: <Shield size={40} />, title: "Cybersecurity Services", description: "Protect your digital assets with our robust security solutions." },
        { icon: <Code size={40} />, title: "Software & Web Development", description: "Custom applications tailored to your business needs." },
        { icon: <Cloud size={40} />, title: "Cloud & DevOps", description: "Optimize your infrastructure for scalability and efficiency." },
    ];
    
    const testimonials = [
        { name: "Alex Johnson", company: "Innovate Inc.", quote: "Their expertise in cloud solutions completely transformed our workflow. Highly recommended!" },
        { name: "Samantha Lee", company: "Market Movers", quote: "The cybersecurity audit was thorough and insightful. We feel much more secure now." },
    ];

    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Hands typing on a laptop" className="w-full h-full object-cover" width={1740} height={800} />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>
                <div className="absolute top-24 left-8 bg-blue-600/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                    <p className="font-semibold">Adapting Technology</p>
                </div>
                <div className="absolute bottom-24 right-8 bg-blue-600/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                    <p className="font-semibold">Enhancing Businesses</p>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold">Why Choose Us?</h1>
                    <div className="mt-8 space-y-4">
                        <p className="text-xl md:text-2xl text-gray-300"><span className="text-blue-400 mr-2">✓</span> Innovative & Scalable Solutions</p>
                        <p className="text-xl md:text-2xl text-gray-300"><span className="text-blue-400 mr-2">✓</span> Expert IT Consultation</p>
                        <p className="text-xl md:text-2xl text-gray-300"><span className="text-blue-400 mr-2">✓</span> Secure & Efficient Services</p>
                    </div>
                </div>
            </section>
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide a wide range of IT services to help your business succeed in the digital age.</p>
                    </AnimatedSection>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredServices.map(service => (
                            <AnimatedSection key={service.title} className="bg-gray-50 p-8 rounded-xl text-center hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <div className="text-blue-600 inline-block p-4 bg-blue-100 rounded-full mb-6">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection className="text-center mt-16">
                        <Link href="/services" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                            View All Services <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                     <AnimatedSection className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">We build strong relationships with our clients, and they have great things to say about us.</p>
                    </AnimatedSection>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map(testimonial => (
                            <AnimatedSection key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
                                <p className="text-gray-600 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold">Ready to Elevate Your Business?</h2>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">Let&#39;s work together to build the solutions you need to grow and succeed.</p>
                         <Link href="/contact" className="mt-8 inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                            Get in Touch
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}