import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, MessageSquare, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/landing/Header";

export default function WhyHealthAI() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Advanced Voice AI Technology",
      description: "Leveraging cutting-edge artificial intelligence to transform business communication and customer service."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "24/7 Customer Support",
      description: "Provide round-the-clock support with intelligent voice agents that understand and respond naturally."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Rapid Implementation",
      description: "Get up and running quickly with our easy-to-deploy voice agent solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Why Choose AI Marketing Profile?</h1>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing business communication through artificial intelligence, making it more efficient, effective, and accessible for companies of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate("/")}
            className="inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}