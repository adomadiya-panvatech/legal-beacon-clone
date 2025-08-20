import React, { useEffect, useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaRegArrowAltCircleRight, FaYoutube } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import "../assets/css/navmenu.css";
import { FaCircleArrowRight } from 'react-icons/fa6';
import logo from "../assets/images/healthcoder_logo_final.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../utils';
import { IoIosClose } from 'react-icons/io';

const NavMenu = () => {

    const [scrollY, setScrollY] = useState(0);
    const [fixedHeader, setFixedHeader] = useState('');
    const [close, setClose] = useState(true);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDistance = currentScrollY - scrollY;
        setScrollY(currentScrollY);
        currentScrollY >= 10 ? setFixedHeader("fixedHeader") : setFixedHeader("");
    };
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    useEffect(() => {
        handleScroll();
    }, []);

    const handleNavClose = (eve) => {
        setClose(!close);
    }



    return (
        <>
            <header className={`header-area top-0 ${fixedHeader} ${fixedHeader !== "" && "fadeInDown"}`}>
                <div className="container py-2">
                    <div className="header__main">
                        <NavLink href="#" className="logo">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <NavLink href="#" className="logo logo-light">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <div className="main-menu me-5 me-md-0">
                            <div className={`d-flex justify-content-between align-items-center navbar_sec ${close ? "close" : ""}`}>
                                <nav className='pe-5'>
                                    <ul>
                                        <li className='IoIosClose text-end'> <NavLink to="/"></NavLink> <IoIosClose className='' onClick={eve => handleNavClose(eve)} /></li>
                                        {/* <li> <NavLink to="/" onClick={eve => scrollToSection('home', eve)}>Home </NavLink> </li>
                                        <li> <NavLink to="/" onClick={eve => scrollToSection('about', eve)}>Services</NavLink></li> */}
                                        {/* <li> <NavLink to="/" onClick={eve => scrollToSection('features', eve)} >Features </NavLink> </li>
                                        <li> <NavLink to="/" onClick={eve => scrollToSection('getInTouch', eve)}>Get In Touch </NavLink> </li> */}
                                        {/* <li> <NavLink to="/" onClick={eve => scrollToSection('footer', eve)}>Contact Us </NavLink> </li> */}
                                    </ul>
                                </nav>
                                <button className="btn-menu d-flex btn_ss btn-2 hover-filled-slide-right" onClick={eve => scrollToSection('getInTouch', eve)}><span>Request A Demo <FaRegArrowAltCircleRight className='getInTouch' /></span> </button>

                            </div>
                            <div className='ui_bars'>
                                <FaBars onClick={eve => handleNavClose(eve)} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div className='whatsApp_sec position-fixed'>
                <NavLink to="https://wa.me/1-800-916-2459" target="_blank">
                    <RiWhatsappFill className='w-100 fs-1' />
                </NavLink>
            </div> */}
        </>
    )
}

export default NavMenu