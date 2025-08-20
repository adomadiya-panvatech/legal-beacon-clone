import React from 'react';
import "../assets/css/aboutus.css";

// Import the SVGs
import { ReactComponent as ProductionCodingSvg } from "../assets/images/automation_charts.svg";
import { ReactComponent as BacklogProcessingSvg } from "../assets/images/audit_charts.svg";
import { ReactComponent as RealTimeAuditSvg } from "../assets/images/audit.svg";
import NavMenu from './NavMenu';

const ExploreServices = () => {
    return (
        <>
            <NavMenu />
            <section id='about' className="about-section py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="explore-sec-title text-center mb-4">
                            <h1 className="font-weight-bold animated-heading">Medical Coding Automation Services Built for You</h1>
                            <h5 className="mt-3 text-secondary animated-subheading">Panvatech's AI seamlessly integrates into your workflow</h5>
                        </div>
                        {/* First Row */}
                        <div className="row justify-content-center solution-row">
                            <div className="col-md-8 text-center">
                                <div className='service-svg'>
                                    <ProductionCodingSvg className='w-100 animated-svg' />
                                </div>
                            </div>
                            <div className="col-md-4 solution-text-block">
                                <p className='label-header'>AI-DRIVEN EFFICIENCY</p>
                                <h4 className='large-heading'>Coding Automation</h4>
                                <p className='subheader'>Direct to bill. No human intervention required.</p>
                                <p className='paragraph.text-dark'>
                                    Use our AI to ease the burden on your coding team. In one quick step, we can review your incoming charts, process the charts that can be coded by our system, and pass the remainder to your current coding operation. This allows them to focus on the most critical charts while drastically reducing your overall coding costs.
                                </p>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="row justify-content-center solution-row">
                            <div className="col-md-8 text-center">
                                <div className='service-svg'>
                                    <BacklogProcessingSvg className='w-100 animated-svg' />
                                </div>
                            </div>
                            <div className="col-md-4 solution-text-block">
                                <p className='label-header'>MITIGATE RISK</p>
                                <h4 className='large-heading'>Audit Complete</h4>
                                <p className='subheader'>The world’s first comprehensive, real-time coding audit</p>
                                <p className='paragraph.text-dark'>
                                    Use AI to check your coder or coding vendor’s work to ensure completion and accuracy. Our system looks at every coded chart and flags any that may represent a potential denial or unnecessary downcoding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreServices;
