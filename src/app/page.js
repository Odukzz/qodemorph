export const metadata = {
  title: 'qodemorph consulting | Innovative IT Solutions',
  description: 'qodemorph consulting delivers expert IT strategy, cybersecurity, cloud, web development, and data analysis to help your business thrive.',
  openGraph: {
    title: 'qodemorph consulting | Innovative IT Solutions',
    description: 'qodemorph consulting delivers expert IT strategy, cybersecurity, cloud, web development, and data analysis to help your business thrive.',
    url: 'https://yourdomain.com/',
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
    title: 'qodemorph consulting | Innovative IT Solutions',
    description: 'qodemorph consulting delivers expert IT strategy, cybersecurity, cloud, web development, and data analysis to help your business thrive.',
    images: ['/qodeT.png'],
  },
};

import Link from 'next/link';
import { Shield, Code, Cloud, Star, ArrowRight, Zap, Users, Award, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function HomePage() {
    const featuredServices = [
        { 
            icon: <Shield size={40} />, 
            title: "Cybersecurity Services", 
            description: "Advanced threat protection and security audits to safeguard your digital assets.",
            gradient: "from-red-500 to-pink-500"
        },
        { 
            icon: <Code size={40} />, 
            title: "Software & Web Development", 
            description: "Custom applications and responsive websites built with cutting-edge technology.",
            gradient: "from-blue-500 to-cyan-500"
        },
        { 
            icon: <Cloud size={40} />, 
            title: "Cloud & DevOps", 
            description: "Scalable cloud infrastructure and automated deployment pipelines.",
            gradient: "from-purple-500 to-indigo-500"
        },
    ];
    
    const testimonials = [
        { 
            name: "Alex Johnson", 
            company: "Innovate Inc.", 
            quote: "Their expertise in cloud solutions completely transformed our workflow. The team's professionalism and technical depth exceeded our expectations.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        { 
            name: "Samantha Lee", 
            company: "Market Movers", 
            quote: "The cybersecurity audit was thorough and insightful. We now have complete confidence in our digital security posture.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        { 
            name: "Michael Chen", 
            company: "TechFlow Solutions", 
            quote: "Outstanding web development services. They delivered a beautiful, fast, and user-friendly platform that our customers love.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
    ];

    const stats = [
        { number: "150+", label: "Projects Completed", icon: <Award size={24} /> },
        { number: "98%", label: "Client Satisfaction", icon: <Users size={24} /> },
        { number: "24/7", label: "Support Available", icon: <Zap size={24} /> },
        { number: "5+", label: "Years Experience", icon: <TrendingUp size={24} /> },
    ];

    const benefits = [
        "Innovative & Scalable Solutions",
        "Expert IT Consultation", 
        "Secure & Efficient Services",
        "24/7 Premium Support",
        "Proven Track Record",
        "Cutting-Edge Technology"
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                        alt="Modern technology workspace" 
                        className="w-full h-full object-cover" 
                        width={1740} 
                        height={800} 
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-black/70"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-8 glass px-6 py-3 rounded-2xl shadow-2xl float-animation">
                    <p className="font-semibold text-white flex items-center">
                        <Sparkles className="mr-2" size={20} />
                        Adapting Technology
                    </p>
                </div>
                <div className="absolute bottom-32 right-8 glass px-6 py-3 rounded-2xl shadow-2xl float-animation" style={{animationDelay: '1s'}}>
                    <p className="font-semibold text-white flex items-center">
                        <TrendingUp className="mr-2" size={20} />
                        Enhancing Businesses
                    </p>
                </div>

                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <AnimatedSection>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                            Transform Your
                            <span className="block text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Digital Future
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Empowering businesses with innovative IT solutions, cutting-edge technology, and expert consultation to drive growth and success.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center justify-center md:justify-start text-gray-200">
                                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={20} />
                                    <span className="text-sm md:text-base font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link 
                                href="/services" 
                                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 pulse-glow"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Our Services
                                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </Link>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-4 shadow-lg">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We provide comprehensive IT solutions designed to accelerate your business growth and digital transformation.
                        </p>
                    </AnimatedSection>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredServices.map((service, index) => (
                            <AnimatedSection key={service.title} className="group">
                                <div className="modern-card bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full relative overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    <div className={`w-full h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    
                    <AnimatedSection className="text-center mt-16">
                        <Link 
                            href="/services" 
                            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            View All Services
                            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                        </p>
                    </AnimatedSection>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection key={testimonial.name} className="group">
                                <div className="modern-card bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                                    <div className="flex text-yellow-400 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} fill="currentColor" size={20} className="mr-1" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full mr-4 shadow-lg"
                                        />
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                                            <p className="text-gray-500">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            Ready to Elevate Your
                            <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Business?
                            </span>
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Let's collaborate to build innovative solutions that drive growth, enhance security, and transform your digital presence.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link 
                                href="/contact" 
                                className="group inline-flex items-center px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
                            >
                                Start Your Project Today
                                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                            </Link>
                            <Link 
                                href="/about" 
                                className="inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}