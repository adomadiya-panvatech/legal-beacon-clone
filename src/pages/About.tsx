
import React from 'react'
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver unmatched accuracy in medical coding through advanced AI algorithms.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our technology to stay ahead of industry needs.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Working closely with healthcare providers to understand their unique challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality and reliability.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      experience: '15+ years in healthcare technology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      experience: 'Former AI lead at major tech companies',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Martinez',
      role: 'VP of Customer Success',
      experience: '12+ years in healthcare operations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              About Health Coder
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionizing Healthcare with
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded by healthcare professionals and AI experts, Health Coder is on a mission to 
              transform medical coding through intelligent automation, helping healthcare organizations 
              focus on what matters most - patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that healthcare professionals should spend their time caring for patients, 
                not wrestling with complex coding systems. Our mission is to eliminate the administrative 
                burden of medical coding through innovative AI technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Reduce Administrative Burden</h3>
                    <p className="text-muted-foreground">Automate complex coding tasks to free up valuable time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Maximize Revenue Integrity</h3>
                    <p className="text-muted-foreground">Ensure accurate coding for optimal reimbursement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Enhance Patient Care</h3>
                    <p className="text-muted-foreground">Enable providers to focus on delivering exceptional care.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-background rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground mb-6">Healthcare Partners</div>
                    <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-muted-foreground mb-6">Coding Accuracy</div>
                    <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                    <div className="text-muted-foreground">Revenue Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we build solutions 
              for the healthcare industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines deep healthcare expertise with cutting-edge AI technology 
              to deliver solutions that truly understand your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Medical Coding?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations that trust Health Coder 
            to streamline their revenue cycle operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-background text-background rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
