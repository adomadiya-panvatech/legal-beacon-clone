
import React from 'react'
import { TrendingUp, Users, Zap, Shield } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Slash Medical Coding Costs',
      description: 'Reduce operational expenses by up to 60% with automated coding processes.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Empower Medical Coding Teams',
      description: 'Free up your team to focus on complex cases while AI handles routine coding.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Maximize Revenue Potential',
      description: 'Ensure optimal reimbursement with accurate coding and compliance checks.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Speed Up Reimbursement Cycles',
      description: 'Accelerate cash flow with faster, more accurate claim processing.',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Why Choose Health Coder?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Health Coder's Autonomous
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Medical Coding Engine</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Empowering health systems, hospitals, and physician groups to enhance operational efficiency, 
            maximize financial performance, and minimize administrative burdens allowing providers to 
            dedicate more time to patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '99%+', label: 'Coding Accuracy' },
            { number: '60%', label: 'Cost Reduction' },
            { number: '24/7', label: 'Automated Processing' },
            { number: '500+', label: 'Healthcare Partners' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
