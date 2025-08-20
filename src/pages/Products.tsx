
import React, { useState } from 'react'
import { Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Users, Building, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Products: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional')

  const products = [
    {
      icon: Brain,
      title: 'Health Coder AI Engine',
      description: 'Our flagship AI-powered medical coding solution that transforms clinical documentation into accurate billing codes.',
      features: [
        'Real-time ICD-10 & CPT coding',
        'Natural language processing',
        'Context-aware suggestions',
        'Continuous machine learning',
        'Multi-specialty support',
        '99.8% accuracy guarantee'
      ],
      plans: ['Starter', 'Professional', 'Enterprise'],
      color: 'from-blue-500 to-cyan-500',
      badge: 'Most Popular'
    },
    {
      icon: Zap,
      title: 'Revenue Cycle Optimizer',
      description: 'Complete revenue cycle management solution that automates billing processes and maximizes reimbursement.',
      features: [
        'Automated claim generation',
        'Real-time eligibility verification',
        'Denial management',
        'Payment posting automation',
        'Analytics & reporting',
        'Compliance monitoring'
      ],
      plans: ['Professional', 'Enterprise'],
      color: 'from-green-500 to-emerald-500',
      badge: 'Best ROI'
    },
    {
      icon: Shield,
      title: 'Compliance Guardian',
      description: 'Advanced compliance monitoring and audit protection system that keeps you ahead of regulatory changes.',
      features: [
        'Real-time compliance checks',
        'Automated regulatory updates',
        'Audit trail generation',
        'Risk assessment tools',
        'Documentation assistance',
        'Regulatory reporting'
      ],
      plans: ['Professional', 'Enterprise'],
      color: 'from-purple-500 to-violet-500',
      badge: 'New'
    }
  ]

  const plans = [
    {
      name: 'Starter',
      price: 299,
      period: 'per provider/month',
      description: 'Perfect for small practices getting started with AI coding',
      features: [
        'AI coding for up to 5 providers',
        'Basic ICD-10 & CPT coding',
        'Email support',
        'Standard integrations',
        'Monthly reporting',
        '1GB storage'
      ],
      notIncluded: [
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      icon: Users,
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      period: 'per provider/month',
      description: 'Comprehensive solution for growing practices and small hospitals',
      features: [
        'AI coding for unlimited providers',
        'Advanced ICD-10 & CPT coding',
        'Revenue cycle management',
        'Priority phone & email support',
        'Custom integrations',
        'Advanced reporting & analytics',
        'Compliance monitoring',
        '10GB storage',
        'API access'
      ],
      notIncluded: [
        'Dedicated account manager',
        'Custom training programs'
      ],
      icon: Building,
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large health systems and hospitals',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom training programs',
        'SLA guarantees',
        'On-premises deployment options',
        'Advanced security features',
        'Custom reporting',
        'Unlimited storage',
        'White-label options'
      ],
      notIncluded: [],
      icon: Stethoscope,
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      company: 'Regional Healthcare System',
      content: 'Health Coder has transformed our coding accuracy and reduced our administrative burden by 60%. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Revenue Cycle Director',
      company: 'Metropolitan Medical Group',
      content: 'The AI engine is incredibly accurate and has streamlined our entire revenue cycle. Our denial rates dropped by 75%.',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      role: 'Practice Manager',
      company: 'Sunshine Family Practice',
      content: 'As a small practice, we needed something simple yet powerful. Health Coder delivered exactly that and more.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Products for
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Modern Healthcare</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive suite of AI-powered products designed to revolutionize 
              your healthcare operations, from coding accuracy to revenue optimization.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-muted-foreground">Core Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product Suite</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each product is designed to work independently or as part of an integrated solution, 
              giving you the flexibility to choose what works best for your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-background rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-border/50 overflow-hidden group"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                )}

                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Available in:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.plans.map((plan, planIndex) => (
                        <span
                          key={planIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and needs. All plans include our core AI coding engine.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-background rounded-3xl p-8 shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-primary transform scale-105 shadow-2xl'
                    : 'hover:shadow-xl hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-primary">${plan.price}</span>
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded-full flex-shrink-0 mt-0.5"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 group ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include 30-day free trial • No setup fees • Cancel anytime
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Need a custom solution? Contact our sales team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what healthcare professionals say about our products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-primary font-medium">{testimonial.role}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations that trust Health Coder to streamline 
            their revenue cycle and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-background text-background rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-200"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
