
import { CheckCircle, Award, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Consistently ranked among top legal firms by industry publications"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International network of legal experts and strategic partnerships"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support for urgent legal matters"
    }
  ];

  const values = [
    "Client-focused approach with personalized attention",
    "Innovative legal strategies backed by deep expertise",
    "Transparent communication throughout every engagement",
    "Commitment to achieving exceptional outcomes"
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="section-title text-primary mb-6">
              Trusted Legal Partners Since 1998
            </h2>
            <p className="body-large text-muted-foreground mb-8">
              With over two decades of experience, CaretLegal has evolved from a boutique 
              practice to a full-service law firm serving clients across multiple industries 
              and jurisdictions.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-4 flex-shrink-0" />
                  <p className="text-foreground">{value}</p>
                </div>
              ))}
            </div>

            <Button onClick={scrollToContact} className="btn-primary">
              Partner With Us
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="card-simple">
                    <div className="flex items-start">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Team Photo */}
              <div className="mt-6">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
                    alt="Legal team in conference room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
