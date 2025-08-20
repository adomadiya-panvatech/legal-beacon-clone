import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const team = [
        {
            name: "Dr. Sarah Johnson",
            role: "CEO & Co-Founder",
            bio: "Former healthcare executive with 15+ years in medical coding and revenue cycle management.",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Michael Chen",
            role: "CTO & Co-Founder",
            bio: "AI researcher and former Google engineer specializing in natural language processing and healthcare AI.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Dr. Emily Rodriguez",
            role: "Chief Medical Officer",
            bio: "Board-certified physician and medical coding expert with deep expertise in clinical documentation.",
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Revolutionizing Healthcare with AI
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At Health Coder, we're on a mission to transform medical coding through artificial intelligence, 
                        helping healthcare providers focus on what matters most - patient care.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2020 by a team of healthcare professionals and AI experts, Health Coder was born 
                            from the frustration of seeing talented medical professionals spending countless hours on 
                            administrative tasks instead of patient care.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We recognized that medical coding, while critical for healthcare operations, was ripe for 
                            automation. Our breakthrough AI technology now processes medical charts with unprecedented 
                            accuracy, reducing coding time by 90% while improving accuracy rates.
                        </p>
                        <p className="text-gray-600">
                            Today, we serve healthcare providers across the country, from small clinics to large 
                            hospital systems, helping them optimize their revenue cycle and focus on patient care.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <img 
                            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                            alt="Healthcare team" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy First</h3>
                            <p className="text-gray-600">We never compromise on accuracy. Our AI achieves 99.5% coding accuracy rates.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                            <p className="text-gray-600">We're not just a vendor, we're your partner in transforming healthcare operations.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">We continuously push the boundaries of what's possible with AI in healthcare.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div 
                                key={index} 
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
