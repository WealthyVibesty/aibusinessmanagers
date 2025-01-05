import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BarChart2, Clock, Users, Shield, Activity } from "lucide-react";

export default function HospitalOperationsLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
          Transform Your Hospital Operations with AI-Powered Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp max-w-3xl mx-auto" style={{ animationDelay: "100ms" }}>
          Streamline workflows, reduce costs, and improve patient care with intelligent automation and predictive analytics
        </p>
        <Button size="lg" className="animate-slideUp" style={{ animationDelay: "200ms" }}>
          Schedule a Demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Key Benefits Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits for Your Hospital</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-8 w-8 text-primary" />,
              title: "Reduce Wait Times",
              description: "Optimize patient flow and resource allocation with AI-powered scheduling"
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-primary" />,
              title: "Improve Efficiency",
              description: "Automate routine tasks and streamline administrative processes"
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Enhanced Staff Productivity",
              description: "Enable staff to focus on patient care rather than paperwork"
            },
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "Better Risk Management",
              description: "Predict and prevent potential issues before they occur"
            },
            {
              icon: <Activity className="h-8 w-8 text-primary" />,
              title: "Quality Care",
              description: "Maintain consistent high standards across all departments"
            },
            {
              icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
              title: "Compliance Assurance",
              description: "Stay compliant with automated tracking and reporting"
            }
          ].map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 mx-auto bg-muted rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Hospital Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Real-time bed management and capacity planning",
            "Automated staff scheduling and resource allocation",
            "Inventory tracking and supply chain optimization",
            "Patient flow analytics and bottleneck identification",
            "Equipment maintenance scheduling and tracking",
            "Emergency response coordination",
            "Performance analytics and reporting",
            "Integration with existing hospital systems"
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <Card className="max-w-4xl mx-auto p-8 bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospital Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading healthcare institutions that have already improved their operational efficiency by up to 40%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Watch Demo
            </Button>
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}