
import React from 'react'
import { Brain, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Users, Clock, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Coding Engine',
      description: 'Advanced machine learning algorithms that understand medical terminology and context to provide accurate coding suggestions in real-time.',
      features: [
        'Natural language processing for clinical notes',
        'Real-time ICD-10 and CPT code suggestions',
        'Context-aware coding recommendations',
        'Continuous learning from user feedback'
      ],
      benefits: [
        '99.8% coding accuracy',
        '75% reduction in coding time',
        'Automated quality assurance'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Automated Revenue Cycle',
      description: 'Streamline your entire revenue cycle from patient encounter to payment with intelligent automation and workflow optimization.',
      features: [
        'Automated claim generation and submission',
        'Real-time eligibility verification',
        'Intelligent denial management',
        'Payment posting automation'
      ],
      benefits: [
        '40% faster reimbursement',
        '60% reduction in denials',
        'Improved cash flow'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Protection',
      description: 'Stay compliant with ever-changing regulations through automated monitoring and comprehensive audit trails.',
      features: [
        'Real-time compliance monitoring',
        'Automated regulatory updates',
        'Comprehensive audit trails',
        'Risk assessment and mitigation'
      ],
      benefits: [
        '100% audit readiness',
        'Reduced compliance risk',
        'Automated documentation'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const industries = [
    {
      title: 'Hospitals & Health Systems',
      description: 'Enterprise-grade solutions for large healthcare organizations',
      icon: Users,
      stats: ['500+ bed capacity', '24/7 support', 'Multi-location support']
    },
    {
      title: 'Physician Groups',
      description: 'Scalable solutions for multi-specialty practices',
      icon: TrendingUp,
      stats: ['5-100 providers', 'Specialty-specific workflows', 'Group reporting']
    },
    {
      title: 'Ambulatory Surgery Centers',
      description: 'Specialized coding for outpatient procedures',
      icon: Clock,
      stats: ['Procedure-focused', 'Quick turnaround', 'Volume pricing']
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
              AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Intelligent Solutions for
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Every Healthcare Need</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Discover how our comprehensive suite of AI-powered solutions can transform your 
              healthcare organization's revenue cycle, from coding accuracy to compliance monitoring.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$50M+</div>
                <div className="text-muted-foreground">Revenue Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Solution Suite</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated platform provides end-to-end solutions for healthcare revenue cycle management, 
              combining AI intelligence with industry expertise.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-center p-4 bg-secondary/10 rounded-lg">
                        <div className="font-bold text-primary">{benefit}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
                    <div className="bg-background rounded-2xl p-8 shadow-xl">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <solution.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="h-3 bg-primary/20 rounded w-1/3"></div>
                            <div className="text-xs text-primary font-semibold">Active</div>
                          </div>
                          <div className="h-4 bg-secondary/20 rounded w-3/4"></div>
                          <div className="h-4 bg-primary/20 rounded w-1/2"></div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <div className="h-3 bg-green-100 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions by Industry</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions designed to meet the unique needs of different healthcare organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Calculate Your ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  See how much you could save with Health Coder's AI-powered solutions. 
                  Most organizations see ROI within 90 days.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-500" />
                    <span><strong>Average savings:</strong> $2.5M annually</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span><strong>Time to value:</strong> 30 days or less</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-500" />
                    <span><strong>ROI guarantee:</strong> Within 90 days</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-background rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
                    >
                      Calculate My ROI
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      Free consultation • No commitment required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
