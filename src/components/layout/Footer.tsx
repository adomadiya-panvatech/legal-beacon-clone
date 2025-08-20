
import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaXTwitter,
  FaTiktok
} from 'react-icons/fa6'
import { FaMediumM } from 'react-icons/fa'
import '../../assets/css/footer.css'

export const Footer: React.FC = () => {
  const socialLinks = [
    { href: "https://medium.com/@healthcoderus", icon: FaMediumM, title: "Medium" },
    { href: "https://www.reddit.com/user/healthcoderUS/", icon: FaRedditAlien, title: "Reddit" },
    { href: "https://www.pinterest.com/healthcoder/", icon: FaPinterestP, title: "Pinterest" },
    { href: "https://www.tiktok.com/@healthcoder?lang=en", icon: FaTiktok, title: "TikTok" },
    { href: "https://www.youtube.com/@HealthCoder", icon: FaYoutube, title: "YouTube" },
    { href: "https://x.com/healthcoderus", icon: FaXTwitter, title: "Twitter/X" },
    { href: "https://www.facebook.com/profile.php?id=61574989017812", icon: FaFacebookF, title: "Facebook" },
    { href: "https://www.instagram.com/health_coder/?hl=en", icon: FaInstagram, title: "Instagram" },
    { href: "https://www.linkedin.com/in/health-coder-3b1638360/", icon: FaLinkedinIn, title: "LinkedIn" }
  ]

  return (
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
      </svg>

      <div className="footer-content container">
        <div className="footer-social-icons mt-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${link.title.toLowerCase()}`}
              title={link.title}
            >
              <link.icon />
            </a>
          ))}
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Health Coder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
