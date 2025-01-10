import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Shield, Zap, Network, Lock, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Technology() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
            Advanced AI Technology for Healthcare
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp max-w-3xl mx-auto">
            Our cutting-edge voice AI technology transforms healthcare communication and operations
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/landing")}
            className="animate-slideUp"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Features Grid */}
        <section className="container px-4 py-16 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-8 w-8 text-primary" />,
                title: "Advanced AI Processing",
                description: "State-of-the-art natural language processing for accurate medical communication"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "HIPAA Compliant",
                description: "Secure, compliant infrastructure for healthcare data protection"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Real-time Response",
                description: "Instant voice processing and response generation"
              },
              {
                icon: <Network className="h-8 w-8 text-primary" />,
                title: "Seamless Integration",
                description: "Easy integration with existing healthcare systems"
              },
              {
                icon: <Lock className="h-8 w-8 text-primary" />,
                title: "Enterprise Security",
                description: "Multi-layer security protocols for data protection"
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Analytics Dashboard",
                description: "Comprehensive insights and performance metrics"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 mx-auto">
          <Card className="max-w-4xl mx-auto p-8 bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-center">
              Join leading healthcare institutions using our AI voice technology
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/landing")}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}