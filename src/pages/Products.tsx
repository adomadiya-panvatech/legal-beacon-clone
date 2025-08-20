import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

export const Products: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const products = [
        {
            name: "Health Coder Pro",
            description: "Enterprise-grade AI coding solution for large healthcare systems",
            price: "Custom Pricing",
            features: [
                "Unlimited chart processing",
                "Multi-facility support",
                "Advanced analytics dashboard",
                "24/7 priority support",
                "Custom integrations",
                "Dedicated account manager"
            ],
            popular: true
        },
        {
            name: "Health Coder Standard",
            description: "Perfect for mid-size practices and clinics",
            price: "$2,999/month",
            features: [
                "Up to 10,000 charts/month",
                "EHR integration",
                "Real-time coding",
                "Audit reports",
                "Email support",
                "Training included"
            ],
            popular: false
        },
        {
            name: "Health Coder Starter",
            description: "Ideal for small practices getting started with AI coding",
            price: "$999/month",
            features: [
                "Up to 2,500 charts/month",
                "Basic EHR integration",
                "Standard reporting",
                "Online support",
                "Getting started training"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect Plan
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select the Health Coder solution that fits your practice size and needs. All plans include our core AI coding engine.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div 
                            key={index}
                            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                                product.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="text-3xl font-bold text-blue-600">{product.price}</div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                                product.popular 
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16" data-aos="fade-up">
                    <p className="text-gray-600 mb-4">Need a custom solution? We're here to help.</p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};
