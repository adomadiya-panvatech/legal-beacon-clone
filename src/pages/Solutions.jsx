
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "../assets/css/aboutus.css";

const Solutions = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const solutions = [
        {
            title: "AI-Powered Coding Automation",
            description: "Automate your medical coding process with 99.5% accuracy. Our AI engine processes charts instantly, reducing coding time by 90%.",
            features: ["Real-time processing", "ICD-10 & CPT codes", "Zero human intervention", "Direct billing integration"],
            icon: "🤖"
        },
        {
            title: "Revenue Cycle Optimization",
            description: "Maximize your revenue with intelligent claim processing and denial prevention. Our system identifies potential issues before submission.",
            features: ["Claim optimization", "Denial prevention", "Revenue analytics", "Performance tracking"],
            icon: "💰"
        },
        {
            title: "Compliance & Audit Support",
            description: "Stay compliant with automated audit trails and comprehensive documentation. Built-in compliance checks ensure regulatory adherence.",
            features: ["Audit trails", "Compliance monitoring", "Documentation", "Risk assessment"],
            icon: "🛡️"
        },
        {
            title: "EHR Integration",
            description: "Seamlessly integrate with your existing EHR systems. No workflow disruption, just enhanced efficiency and accuracy.",
            features: ["Multi-EHR support", "API integration", "Workflow automation", "Data synchronization"],
            icon: "🔗"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive Healthcare Solutions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your healthcare operations with our AI-driven solutions designed to optimize efficiency, accuracy, and revenue.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                            <p className="text-gray-600 mb-6">{solution.description}</p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Operations?</h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
