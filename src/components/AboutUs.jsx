import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../assets/css/aboutus.css";

// Import the SVGs
import { ReactComponent as ProductionCodingSvg } from "../assets/images/Reduce_Costs.svg";
import { ReactComponent as BacklogProcessingSvg } from "../assets/images/Support_Teams.svg";
import { ReactComponent as RealTimeAuditSvg } from "../assets/images/Improve_Capture.svg";
import { ReactComponent as Accelerate_Cycles } from "../assets/images/Accelerate_Cycles.svg";
import qrimg3 from "../assets/images/healthcoder_bg.png";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-in-out', // Easing for smoothness
      once: true, // Only trigger the animation once
    });
  }, []);

  const handleExploreServicesClick = () => {
    navigate('/services'); // Redirect to /services
  };

  return (
    <section id='about' className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="sec-title text-center mb-4 panva" data-aos="fade-up">
            <h3 className='mb-0'>Health Coder's Autonomous Medical Coding Engine</h3>
            <p className='mb-4' style={{ fontSize: "17px" }}>Empowering health systems, hospitals, and physician groups to enhance operational efficiency, maximize financial performance, and minimize administrative burdens allowing providers to dedicate more time to patient care.</p>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="100">
              {/* Add SVG to Production coding */}
              <div className="d-flex justify-content-center service-icon">
                <ProductionCodingSvg className='w-25' />
              </div>
              <h4>Slash Medical Coding Costs</h4>
            </div>

            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="200">
              {/* Add SVG to Backlog processing */}
              <div className="d-flex justify-content-center service-icon">
                <BacklogProcessingSvg className='w-25' />
              </div>
              <h4>Empower Medical Coding Teams</h4>
            </div>

            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="300">
              {/* Add SVG to Real-time audit */}
              <div className="d-flex justify-content-center service-icon">
                <RealTimeAuditSvg className='w-25' />
              </div>
              <h4>Maximize Revenue Potential</h4>
            </div>

            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="400">
              {/* Add SVG to Accelerate cycles */}
              <div className="d-flex justify-content-center service-icon">
                <Accelerate_Cycles className='w-25' />
              </div>
              <h4>Speed Up Reimbursement Cycles</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
