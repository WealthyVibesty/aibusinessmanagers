import { Microscope, Database, Share2, Brain, ChartBar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MedicalResearchLanding() {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Management",
      description: "Centralized research data storage with advanced analytics capabilities"
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Collaboration Tools",
      description: "Seamless sharing and collaboration features for research teams"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Analysis",
      description: "Advanced AI algorithms for pattern recognition and hypothesis generation"
    },
    {
      icon: <ChartBar className="h-8 w-8 text-primary" />,
      title: "Statistical Tools",
      description: "Comprehensive statistical analysis and visualization tools"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Accelerate Medical Research with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your research workflow with cutting-edge AI tools designed for medical professionals and researchers.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 h-auto animate-slideUp">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Research Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Research Platform?
              </h2>
              <div className="space-y-4">
                {[
                  "Accelerate research timelines with AI-powered analysis",
                  "Ensure data security and compliance with industry standards",
                  "Collaborate seamlessly with research teams globally",
                  "Generate insights faster with advanced analytics"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Microscope className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading research institutions already using our platform
          </p>
          <div className="space-x-4">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}