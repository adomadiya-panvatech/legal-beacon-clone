
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import healthCoderLogo from '../../assets/images/healthcoder_logo_final.png'
import '../../assets/css/navmenu.css'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <header className={`header-area ${isScrolled ? 'menu-fixed' : ''}`}>
        <div className="container">
          <div className="header__main">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={healthCoderLogo} alt="Health Coder Logo" />
            </Link>

            <nav className={`main-menu ${isScrolled ? '' : 'main-menu-light'} hidden lg:block`}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className={location.pathname === item.path ? 'text-blue-600' : ''}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:hidden">
              <button 
                onClick={toggleMenu}
                className="ui_bars text-2xl p-2"
              >
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </div>
          </div>
        </div>

        <div className={`navbar_sec lg:hidden ${isMenuOpen ? '' : 'close'}`}>
          <nav>
            <ul className="space-y-4 p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    onClick={closeMenu}
                    className={`block py-2 ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="whatsApp_sec fixed">
        <FaWhatsapp size={40} />
      </div>
    </>
  )
}
