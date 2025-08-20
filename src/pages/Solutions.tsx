
import React from 'react'
import { Bot, TrendingUp, Shield, FileText, Clock, CheckCircle, Users, BarChart3, AlertTriangle, FileCheck } from 'lucide-react'

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI-Powered Coding Automation',
      description: 'Automate your medical coding process with 99.5% accuracy. Our AI engine processes charts instantly, reducing coding time by 90%.',
      features: [
        'Real-time processing',
        'ICD-10 & CPT codes',
        'Zero human intervention',
        'Direct billing integration'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Optimization',
      description: 'Maximize your revenue with intelligent claim processing and denial prevention. Our system identifies potential issues before submission.',
      features: [
        'Claim optimization',
        'Denial prevention',
        'Revenue analytics',
        'Performance tracking'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Support',
      description: 'Stay compliant with automated audit trails and comprehensive documentation. Built-in compliance checks ensure regulatory adherence.',
      features: [
        'Audit trails',
        'Compliance monitoring',
        'Documentation',
        'Risk assessment'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const benefits = [
    { icon: Clock, title: '90% Faster Processing', description: 'Reduce coding time from hours to minutes' },
    { icon: CheckCircle, title: '99.5% Accuracy Rate', description: 'Industry-leading precision in medical coding' },
    { icon: Users, title: 'Team Empowerment', description: 'Free up staff for high-value patient care' },
    { icon: BarChart3, title: 'Revenue Growth', description: 'Increase revenue by up to 15% with optimized coding' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              Healthcare Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your healthcare operations with our AI-driven solutions designed to optimize efficiency, accuracy, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
              >
                <div className={`w-16 h-16 rounded-2xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className={`w-8 h-8 ${solution.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Solutions?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, accuracy, and revenue with our proven healthcare solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who have already revolutionized their coding processes with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
