import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "../assets/css/banner.css";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { scrollToSection } from '../utils';
import qrimg3 from "../assets/images/Business Analysis.gif";

const Slider_Sec = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <section id='home'>
            <div className="container">
                <div className='row p-mt-md-5'>
                <div className="col-xl-5 col-md-7 d-flex flex-column justify-content-center">
                    <div className="">
                        {/* Heading Animation */}
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className="banner-heading fs-xl-3x"
                        >
                            Simplifying Medical Coding
                        </h1>

                        {/* Paragraph Animation */}
                        <p
                            data-aos="fade-right"
                            data-aos-delay="400"
                            className="mt-50 banner_text"
                        >
                            Health Coder redefines revenue cycle management by fully automating the medical coding process.
                            Our advanced AI-driven coding engine seamlessly interprets clinical language from patient charts,
                            instantly assigning accurate medical codes eliminating errors, reducing costs, and requiring zero human intervention.
                            Optimize efficiency, accelerate reimbursements, and maximize revenue with cutting-edge automation.

                        </p>
                    </div>
                </div>
                <div className="col-xl-7 col-md-5">
                    <div className='banner__content'
                            data-aos="fade-left"
                            data-aos-delay="500">
                        {/* Image Animation */}
                        <img
                            src={qrimg3}
                            alt="QR Code"
                            className="panva-md-img"
                        />
                    </div>
                </div>
                </div>
                
            </div>
        </section>
    )
}

export default Slider_Sec;
