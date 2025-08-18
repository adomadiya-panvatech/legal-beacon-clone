
import { FolderOpen, Workflow, BarChart3, CreditCard, FileText, Users, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Product = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Our Legal Practice Management Software",
      description: "Leave standalone software behind with our comprehensive legal practice management solution that integrates all aspects of your firm's operations.",
      benefits: ["Centralized case management", "Integrated billing system", "Document automation", "Client portal access"]
    },
    {
      icon: Workflow,
      title: "Case Management",
      description: "Manage all your cases in one place with powerful case tracking, deadline management, and task automation.",
      benefits: ["Case timeline tracking", "Automated deadline alerts", "Task assignment", "Progress monitoring"]
    },
    {
      icon: FileText,
      title: "Document Solutions",
      description: "Streamline document creation, storage, and management with automated templates and secure cloud storage.",
      benefits: ["Document templates", "Version control", "Secure storage", "Easy sharing"]
    },
    {
      icon: BarChart3,
      title: "Reporting and Analytics",
      description: "Gather insights into your firm's performance with comprehensive reporting and analytics tools.",
      benefits: ["Financial reports", "Performance metrics", "Time tracking", "Custom dashboards"]
    },
    {
      icon: CreditCard,
      title: "Billing, Accounting and Payments",
      description: "Increase billable time and cashflow with automated billing, expense tracking, and payment processing.",
      benefits: ["Automated invoicing", "Payment processing", "Expense tracking", "Financial reporting"]
    },
    {
      icon: Users,
      title: "Client Communication",
      description: "Reach and collaborate with your clients through secure messaging, client portals, and automated updates.",
      benefits: ["Client portal", "Secure messaging", "Automated notifications", "Document sharing"]
    },
    {
      icon: UserCheck,
      title: "Prospect and Contact Management",
      description: "Grow your client list with comprehensive CRM tools designed specifically for legal professionals.",
      benefits: ["Lead tracking", "Contact management", "Follow-up automation", "Conversion analytics"]
    }
  ];

  return (
    <>
      <SEO 
        title="CARET Legal Product Features - Complete Legal Practice Management"
        description="Discover all CARET Legal features including case management, billing, document solutions, and more. Streamline your legal practice with our comprehensive software."
        keywords="legal practice management, case management software, legal billing, document management, legal CRM"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Complete Legal Practice Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything your law firm needs in one integrated platform. Streamline operations, increase efficiency, and grow your practice with CARET Legal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  CARET Legal Practice Management Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive tools designed specifically for legal professionals to manage every aspect of their practice efficiently.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/5 py-20">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of legal professionals who trust CARET Legal to manage their practice efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Product;
