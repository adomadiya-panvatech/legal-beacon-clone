import React, { useEffect } from 'react';
import AOS from 'aos';
import "../assets/css/services.css";
import "aos/dist/aos.css";
import privacy from "../assets/images/privacy.png";
import lawyerComapre from "../assets/images/lawyer.png";
import lawyerComapre2 from "../assets/images/lawyer3.png";
import videoCall from "../assets/images/videoCall.png";
import support from "../assets/images/support.png";
import privacy2 from "../assets/images/privacy2.png";
import PCLogo from "../assets/images/PCLogo.png";
import support1 from "../assets/images/hc_services_1.png";
import support2 from "../assets/images/EHR_illustrations.png";
import support3 from "../assets/images/healthcoder_services2.png";
import support4 from "../assets/images/healthcoder_services4.png";
import support5 from "../assets/images/healthcoder_services3.png";

const Services = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <section id='features'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 d-flex flex-column justify-content-center" data-aos="fade-right" data-aos-delay="300">
                        <h3 className='text-center'>Health Coder AI Engine</h3>
                        <p className="mt-3 text-center" style={{ fontSize: "17px" }}>
                            Your advance cutting edge AI powered intelligent assistant that automates coding,
                            streamlines documentations and enhance perforamnce. Get accurate ICD & CPT instantly,
                            reduce claim denials and maximize revenue so you can focus on what matters most: patient care. Work smarter, code faster, and stay ahead.
                        </p>
                    </div>
                    <div className="col-xl-6 d-flex justify-content-center" data-aos="fade-left" data-aos-delay="300">
                        <img src={support1} alt="" className='panva-serviceimg mt-3' />
                    </div>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="400">
                    <div className="col-xl-6">
                        <img src={support2} alt="" className='w-100' />
                    </div>
                    <div className="col-xl-6 d-flex flex-column justify-content-center mb-3">
                        <h3 className='text-center'>Seamless Integration</h3>
                        <p className="mt-3 text-center" style={{ fontSize: "17px" }}>
                            The Health Coder Assistant seamlessly integrates within your browser, allowing you to access it alongside your EHR no more switching between multiple tools.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 d-flex flex-column justify-content-center my-3" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className='text-center'>AI-Powered Precision: <br /> Diagnosis & Billing in No Time</h3>
                        <p className="mt-3 text-center" style={{ fontSize: "17px" }}>
                            Harness the power of AI with the Health Coder Assistant! Instantly document diagnoses and generate accurate billing codes using Smart Lists, an intelligent system that learns, adapts, and streamlines your workflow eliminating guesswork and boosting efficiency like never before.
                        </p>
                    </div>
                    <div className="col-xl-6" data-aos="zoom-in" data-aos-delay="500">
                        <img src={support3} alt="" className='w-100' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6" data-aos="fade-right" data-aos-delay="600">
                        <img src={support4} alt="" className='w-100' />
                    </div>
                    <div className="col-xl-6 d-flex flex-column justify-content-center my-3">
                        <h3 className='text-center'>Medical coding simplified</h3>
                        <p className="mt-3 text-center" style={{ fontSize: "17px" }}>
                            Seamless Data Access Exactly When You Need It
                            The Health Coder Assistant empowers you with real-time access to relevant clinical data right at the point of patient care.
                        </p>
                    </div>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="700">
                    <div className="col-xl-6 d-flex flex-column justify-content-center my-3">
                        <h3 className='text-center'>Artificial Intelligence</h3>
                        <p className="mt-3 text-center" style={{ fontSize: "17px" }}>
                            The Health Coder analyzes your clinical notes in real time, delivering intelligent, value-added suggestions to enhance accuracy and efficiency. By streamlining medical coding, it ensures compliance, reduces errors, and optimizes reimbursement. Designed for seamless integration, it empowers healthcare professionals with data-driven insights at the point of care.
                        </p>
                    </div>
                    <div className="col-xl-6">
                        <img src={support5} alt="" className='w-100' />
                    </div>
                </div>

                <div className="text-center mt-5 mb-5" data-aos="zoom-out" data-aos-delay="800">
                    <h3>Integrates Seamlessly with your EHR Interface</h3>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        <div className="row justify-content-center mb-5 align-items-center">
                            <div className="col panva-imglogo" data-aos="flip-left" data-aos-delay="900">
                                <img decoding="async" src={PCLogo} title="Patient Click logo" alt="Patient Click logo" loading="lazy" className="w-125" />
                            </div>
                            <div className="col panva-imglogo" data-aos="flip-right" data-aos-delay="1000">
                                <img decoding="async" src="https://nym.health/wp-content/uploads/elementor/thumbs/Untitled-design-90-r3hryj64tvkgvn2ukec4aow542c7px0qozh9ek06ds.png" title="Epic logo" alt="Epic logo" loading="lazy" className="w-125" />
                            </div>
                            <div className="col panva-imglogo" data-aos="flip-left" data-aos-delay="1100">
                                <img decoding="async" src="https://nym.health/wp-content/uploads/2023/11/Cerner_Corporation_logo-768x207.png" title="Cerner logo" alt="Cerner logo" loading="lazy" className="w-125" />
                            </div>
                            <div className="col panva-imglogo" data-aos="flip-right" data-aos-delay="1200">
                                <img decoding="async" src="https://nym.health/wp-content/uploads/2024/12/Untitled-design-79-768x402.png" title="Veradigm logo" alt="Veradigm logo" loading="lazy" className="w-125" />
                            </div>
                            <div className="col panva-imglogo" data-aos="flip-left" data-aos-delay="1300">
                                <img decoding="async" src="https://nym.health/wp-content/uploads/2023/11/athenahealthlogo.png" title="Athenahealth logo" alt="Athenahealth logo" loading="lazy" className="w-125" />
                            </div>
                            <div className="col panva-imglogo" data-aos="flip-right" data-aos-delay="1400">
                                <img decoding="async" src="https://nym.health/wp-content/uploads/2023/11/Meditech-logo-768x111.png" title="Meditech logo" alt="Meditech logo" loading="lazy" className="w-125" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
