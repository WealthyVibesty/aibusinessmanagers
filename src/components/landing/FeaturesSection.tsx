import { Card } from "@/components/ui/card";
import { Bot, Brain, Clock, LineChart, Shield, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI-Powered Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI systems"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Smart Decision Making",
      description: "Get data-driven insights and recommendations for better business decisions"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Operation",
      description: "Your AI Business Manager works round the clock, never taking a break"
    },
    {
      icon: <LineChart className="w-8 h-8 text-primary" />,
      title: "Performance Analytics",
      description: "Track and analyze business metrics in real-time with detailed reporting"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security and data protection for your business operations"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Deployment",
      description: "Get started quickly with our easy-to-use platform and templates"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI Business Manager combines cutting-edge technology with practical business solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}