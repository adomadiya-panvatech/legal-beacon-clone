
import React from 'react'
import { Mail, Phone, MessageSquare, ArrowRight, MapPin, Clock } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch with our team',
      contact: 'hello@healthcoder.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our experts',
      contact: '+1 (555) 123-4567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with support',
      contact: 'Available 24/7',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Medical Coding?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join hundreds of healthcare organizations that have revolutionized their 
                revenue cycle with Health Coder's AI-powered solutions.
              </p>
            </div>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                    <p className="font-semibold text-primary">{method.contact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Headquarters</p>
                  <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Support Hours</p>
                  <p className="text-muted-foreground text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-background rounded-3xl p-8 shadow-2xl border border-border/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Start Your Free Trial</h3>
              <p className="text-muted-foreground">
                Experience the power of AI-driven medical coding with a 30-day free trial.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@healthcare.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Healthcare Organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your medical coding needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              No credit card required. Setup takes less than 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
