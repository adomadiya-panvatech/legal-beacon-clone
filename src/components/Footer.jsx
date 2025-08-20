import React from 'react';
import "../assets/css/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaXTwitter,
  FaTiktok
} from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
      </svg>

      <div className="footer-content container">

        <div className="footer-social-icons mt-5">
          <a href="https://medium.com/@healthcoderus" target="_blank" rel="noopener noreferrer" className="social-icon medium" title="Medium"><FaMediumM /></a>
          <a href="https://www.reddit.com/user/healthcoderUS/" target="_blank" rel="noopener noreferrer" className="social-icon reddit" title="Reddit"><FaRedditAlien /></a>
          <a href="https://www.pinterest.com/healthcoder/" target="_blank" rel="noopener noreferrer" className="social-icon pinterest" title="Pinterest"><FaPinterestP /></a>
          <a href="https://www.tiktok.com/@healthcoder?lang=en" target="_blank" rel="noopener noreferrer" className="social-icon tiktok" title="TikTok"><FaTiktok /></a>
          <a href="https://www.youtube.com/@HealthCoder" target="_blank" rel="noopener noreferrer" className="social-icon youtube" title="YouTube"><FaYoutube /></a>
          <a href="https://x.com/healthcoderus" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Twitter/X"><FaXTwitter /></a>
          <a href="https://www.facebook.com/profile.php?id=61574989017812" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/health_coder/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/health-coder-3b1638360/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn"><FaLinkedinIn /></a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Health Coder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
