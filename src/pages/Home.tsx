
import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { ContactSection } from '../components/sections/ContactSection'

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
