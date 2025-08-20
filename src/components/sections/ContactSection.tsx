
import React from 'react'

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-8">
          Ready to transform your medical coding process?
        </p>
        <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Contact Us
        </button>
      </div>
    </section>
  )
}
