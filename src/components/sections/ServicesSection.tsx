
import React from 'react'
import { Brain, CreditCard, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Medical Coding",
      description: "Automated coding with 99%+ accuracy using advanced machine learning algorithms",
      features: ["Real-time ICD-10 coding", "CPT code automation", "Smart documentation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Revenue Cycle Management", 
      description: "Streamlined billing and reimbursement processes to maximize your revenue",
      features: ["Claims processing", "Denial management", "Payment optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time compliance checks and audits to ensure regulatory adherence",
      features: ["Audit trails", "Risk assessment", "Regulatory updates"],
      color: "from-purple-500 to-violet-500"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Medical Coding </span>
            Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your healthcare operations with our suite of AI-powered solutions designed 
            to streamline workflows and maximize efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-border/50 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="inline-flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Seamless EHR Integration
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI engine integrates seamlessly with your existing EHR systems, 
              requiring no disruption to your current workflows.
            </p>
          </div>
          
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Schedule Integration Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
