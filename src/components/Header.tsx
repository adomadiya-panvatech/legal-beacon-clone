import { useState, useEffect } from "react";
import { Menu, X, Rocket, Heart, Users, Shield, Plane, BarChart3, CreditCard, FileText, FolderOpen, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";

const practiceAreas = [
  {
    icon: FolderOpen,
    title: "Case Management",
    description: "Manage all your cases in one place with robust case management features that help you track and manage all aspects of a case.",
    learnMore: "Learn more about case management",
    color: "#4F46E5" // Indigo
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Leave missed deadlines and forgotten tasks behind with powerful workflows that automate routine, time-consuming tasks.",
    learnMore: "Learn more about workflow automation",
    color: "#10B981" // Emerald
  },
  {
    icon: BarChart3,
    title: "Reporting and Analytics",
    description: "Unlock the power of data-driven decision-making with intuitive dashboards and customizable reports for your firm's performance.",
    learnMore: "Learn more about reporting and analytics",
    color: "#F59E0B" // Amber
  },
  {
    icon: CreditCard,
    title: "Billing, Accounting & Payments",
    description: "Bring clarity to complex processes with simple, customizable rate cards, time entries, invoices and more.",
    learnMore: "Learn more about billing, accounting & payments",
    color: "#EF4444" // Red
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Bring order to the chaos by keeping your crucial files organized and secured, and automating manual processes.",
    learnMore: "Learn more about document management",
    color: "#3B82F6" // Blue
  },
  {
    icon: Users,
    title: "Prospect & Contact Management",
    description: "Organize your crucial contact information in our single, easy-to-navigate dashboard for clients and prospects.",
    learnMore: "Learn more about prospect & contact management",
    color: "#8B5CF6" // Purple
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { handleNavClick } = useSmoothScroll();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Product" },
    { href: "#practice-areas", label: "Who we Serve", dropdown: true },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-background/95 backdrop-blur"
        }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setIsPracticeOpen(true)}
                onMouseLeave={() => setIsPracticeOpen(false)}
              >
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isPracticeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-0 mt-5 w-[700px] bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 z-50"
                    >
                      {practiceAreas.map((area, idx) => (
                        <a
                          key={idx}
                          href="#practice-areas"
                          className="flex items-start space-x-4 p-4 rounded-xl transition-all transform hover:scale-[1.02] hover:shadow-md hover:bg-muted/40 cursor-pointer"
                          onClick={(e) => handleNavClick(e, "practice-areas")}
                        >
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-full ${area.color}`}
                          >
                            <area.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {area.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {area.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
                onClick={(e) => handleNavClick(e, link.href.replace("#", ""))}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://stageadmin.ringremind.com/Onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-md px-6">
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container px-4 py-6 space-y-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href} className="space-y-3">
                    <span className="block text-sm font-semibold text-foreground">
                      {link.label}
                    </span>
                    <div className="grid grid-cols-1 gap-4">
                      {practiceAreas.map((area, idx) => (
                        <a
                          key={idx}
                          href="#practice-areas"
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted/40 transition-colors"
                          onClick={(e) => {
                            handleNavClick(e, "practice-areas");
                            setIsMenuOpen(false);
                          }}
                        >
                          <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${area.color}`}
                          >
                            <area.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-medium">
                            {area.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      handleNavClick(e, link.href.replace("#", ""));
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                )
              )}

              <a
                href="https://stageadmin.ringremind.com/Onboarding"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-4 bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-md">
                  <Rocket className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
