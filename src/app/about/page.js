import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Tech Solutions',
  description: 'Learn about our mission, vision, and the expert team at Tech Solutions dedicated to driving business success through technology.',
};

export default function AboutPage() {
    return (
        <div className="pt-20 bg-white">
            <div className="py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Our Company</h1>
                        <p className="mt-4 text-xl text-gray-600">Driving innovation through technology.</p>
                    </AnimatedSection>
                </div>
            </div>
            <div className="py-20 lg:py-24 container mx-auto px-6 lg:px-8 max-w-7xl space-y-24">
                <AnimatedSection className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                        At QodeMorph, our mission is to craft innovative IT solutions that help our clients reach their business goals. We focus on building lasting partnerships rooted in trust, clarity, and a strong grasp of each client’s unique needs. By embracing new technologies and staying ahead of the curve, we strive to be the driving force behind their digital growth and success.
                        </p>
                    </div>
                    <div className="lg:order-first">
                        <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887" alt="Team collaborating on a project" className="rounded-lg shadow-2xl w-full h-96 object-cover" width={800} height={384} />
                    </div>
                </AnimatedSection>
                <AnimatedSection className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                        QodeMorph envisions a future where businesses of all sizes harness technology to streamline operations, enhance security, and unlock new opportunities for growth. We strive to be a leader in this transformation by providing the expertise and support needed for companies to thrive in a digitally connected world.
                        </p>
                    </div>
                     <div>
                        <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932" alt="Business professionals looking at a futuristic interface" className="rounded-lg shadow-2xl w-full h-96 object-cover" width={800} height={384} />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};