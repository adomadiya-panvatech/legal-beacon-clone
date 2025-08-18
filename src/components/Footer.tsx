
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    "Corporate Law",
    "Real Estate",
    "Contract Law",
    "Employment Law",
    "Intellectual Property",
    "Litigation"
  ];

  const quickLinks = [
    "About Us",
    "Services",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Attorney Directory"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 text-accent mr-3" />
              <span className="font-heading font-bold text-2xl">CaretLegal</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Providing exceptional legal services with integrity, expertise, and dedication 
              to achieving the best outcomes for our clients.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span>contact@caretlegal.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                <span>1200 Park Avenue<br />New York, NY 10128</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a 
                    href="#services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal Notice</h3>
            <div className="text-sm text-primary-foreground/80 leading-relaxed space-y-3">
              <p>
                Licensed to practice in New York, New Jersey, and Connecticut.
              </p>
              <p>
                Attorney advertising. Prior results do not guarantee future outcomes.
              </p>
              <p>
                This website does not constitute legal advice. Consultation required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div>
              © {currentYear} CaretLegal. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <span>Crafted with excellence for legal professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
