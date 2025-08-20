
import React from 'react'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "AI Medical Coding",
      description: "Automated coding with 99%+ accuracy"
    },
    {
      title: "Revenue Cycle Management", 
      description: "Streamlined billing and reimbursement"
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance checks and audits"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive medical coding solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
