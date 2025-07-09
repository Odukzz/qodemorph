'use client';
import AnimatedSection from '@/components/AnimatedSection';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="pt-20 bg-white">
            <div className="py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h1>
                        <p className="mt-4 text-xl text-gray-600">We&#39;d love to hear from you. Let&#39;s start a conversation.</p>
                    </AnimatedSection>
                </div>
            </div>
            <div className="py-20 lg:py-24 container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16 lg:mb-24">
                    <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows="5" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Send Message <Send size={20} className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </AnimatedSection>
                    <AnimatedSection className="space-y-12">
                         <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                         <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><Mail size={24} /></div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">Reach out for any inquiries.</p>
                                    <a href="mailto:info@techconsult.io" className="text-blue-600 hover:underline">info@techconsult.io</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><Phone size={24} /></div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">Give us a call.</p>
                                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><MapPin size={24} /></div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
                                    <p className="text-gray-600">17A Colorado</p>
                                </div>
                            </div>
                         </div>
                    </AnimatedSection>
                </div>
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find Us Here</h2>
                    <div className="h-96 w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <Image src="https://placehold.co/1200x400/e2e8f0/4a5568?text=Map+Placeholder" alt="Map Placeholder" className="w-full h-full object-cover" width={1200} height={400} />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};