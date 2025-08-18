
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Office Location",
      value: "1200 Park Avenue, New York, NY 10128"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@caretlegal.com"
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri 8:00 AM - 7:00 PM EST"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-primary mb-6">
            Let's Discuss Your Legal Needs
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us today for a confidential consultation. 
            Our experienced attorneys are here to help you navigate complex legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in-up">
            <h3 className="subsection-title text-primary mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="card-elevated">
              <h3 className="subsection-title text-primary mb-6">
                Schedule a Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Legal Matter Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] resize-none"
                    placeholder="Please describe your legal needs and how we can assist you..."
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  All communications are confidential and protected by attorney-client privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
