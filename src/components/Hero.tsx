
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing pt-32 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h1 className="hero-title text-primary mb-6">
              Legal Excellence.
              <span className="text-accent block">Delivered.</span>
            </h1>
            <p className="body-large text-muted-foreground mb-8 max-w-lg">
              Navigate complex legal challenges with confidence. Our experienced team provides 
              strategic counsel and innovative solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={scrollToContact} className="btn-primary group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToServices} variant="outline" className="btn-outline">
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div className="font-heading text-2xl font-semibold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="font-heading text-2xl font-semibold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="font-heading text-2xl font-semibold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl overflow-hidden shadow-large">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                  alt="Legal professionals in modern office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-large">
                <div className="font-heading text-xl font-semibold text-accent-foreground">
                  Trusted by Fortune 500
                </div>
                <div className="text-accent-foreground/80">
                  Companies & Individuals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
