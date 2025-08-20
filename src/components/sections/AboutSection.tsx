
import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">About Health Coder</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Health Coder is revolutionizing the healthcare industry with AI-powered medical coding solutions 
            that streamline revenue cycle management and improve accuracy.
          </p>
        </div>
      </div>
    </section>
  )
}
