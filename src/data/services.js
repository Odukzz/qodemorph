import { Briefcase, BarChart, Code, Network, PenTool, BookOpen, Cloud, Shield, ShoppingCart, Users } from 'lucide-react';

export const allServices = [
    { 
        id: 'it-strategy', 
        icon: Briefcase, 
        title: "IT Strategy & Consulting", 
        description: "We align your technology roadmap with your business goals, providing expert guidance on digital transformation, infrastructure planning, and IT governance to maximize ROI.",
        benefits: ["Align IT with business objectives for better outcomes.", "Optimize technology spending and reduce costs.", "Gain a competitive advantage through strategic innovation."]
    },
    { 
        id: 'web-dev', 
        icon: Code, 
        title: "Software & Web Development", 
        description: "From responsive websites to complex enterprise applications, our development team builds scalable, secure, and high-performance solutions using modern technology stacks.",
        benefits: ["Create custom solutions perfectly tailored to your needs.", "Ensure scalability to support future growth.", "Deliver exceptional user experiences across all devices."]
    },
    { 
        id: 'data-analysis', 
        icon: BarChart, 
        title: "Data Analysis", 
        description: "Unlock the power of your data. We provide advanced analytics, business intelligence, and data visualization services to help you make informed, data-driven decisions.",
        benefits: ["Gain actionable insights from complex data sets.", "Improve decision-making with predictive analytics.", "Visualize performance with interactive dashboards."]
    },
    { 
        id: 'networking', 
        icon: Network, 
        title: "Networking", 
        description: "Design, implementation, and management of robust and secure network infrastructures, including LAN, WAN, and wireless solutions to ensure reliable connectivity.",
        benefits: ["Achieve high-speed, reliable connectivity.", "Enhance network security and prevent breaches.", "Simplify network management and reduce downtime."]
    },
    { 
        id: 'graphic-design', 
        icon: PenTool, 
        title: "Graphic Design", 
        description: "Our creative team crafts compelling visual identities, branding, and user interfaces that resonate with your audience and enhance your brand's digital presence.",
        benefits: ["Build a strong and memorable brand identity.", "Create intuitive and beautiful user interfaces (UI/UX).", "Increase user engagement with compelling visuals."]
    },
    { 
        id: 'it-support', 
        icon: BookOpen, 
        title: "IT Training & Support", 
        description: "Empower your team with our comprehensive training programs and rely on our 24/7 helpdesk support to resolve technical issues quickly and efficiently.",
        benefits: ["Increase team productivity with targeted training.", "Minimize downtime with responsive helpdesk support.", "Improve user adoption of new technologies."]
    },
    { 
        id: 'erp-crm', 
        icon: Users, 
        title: "ERP & CRM Solutions", 
        description: "We implement and customize ERP and CRM systems to streamline your business processes, improve customer relationships, and enhance operational efficiency.",
        benefits: ["Integrate and automate core business processes.", "Gain a 360-degree view of your customer interactions.", "Improve operational efficiency and reduce manual work."]
    },
    { 
        id: 'cybersecurity', 
        icon: Shield, 
        title: "Cybersecurity Services", 
        description: "Protect your organization from evolving threats with our multi-layered security services, including vulnerability assessments, penetration testing, and incident response.",
        benefits: ["Proactively identify and mitigate security vulnerabilities.", "Ensure compliance with industry regulations (GDPR, HIPAA).", "Protect brand reputation and maintain customer trust."]
    },
    { 
        id: 'cloud-devops', 
        icon: Cloud, 
        title: "Cloud & DevOps Services", 
        description: "Accelerate your development lifecycle and improve scalability with our cloud and DevOps expertise. We manage cloud infrastructure and automate deployment pipelines.",
        benefits: ["Achieve faster time-to-market for new features.", "Improve application reliability and uptime.", "Optimize cloud costs and resource utilization."]
    },
    { 
        id: 'ecommerce', 
        icon: ShoppingCart, 
        title: "E-Commerce & Digital Solutions", 
        description: "Build and grow your online business with our end-to-end e-commerce solutions, from platform development to digital marketing and payment gateway integration.",
        benefits: ["Create a seamless and secure online shopping experience.", "Increase online sales and customer retention.", "Integrate with payment gateways and shipping providers."]
    },
];
