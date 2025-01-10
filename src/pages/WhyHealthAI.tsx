import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyHealthAI() {
  const benefits = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Advanced AI Technology",
      description: "Leveraging cutting-edge artificial intelligence to transform healthcare delivery and patient outcomes."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Patient-Centered Care",
      description: "Putting patients first with personalized healthcare solutions and improved accessibility."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Rapid Innovation",
      description: "Continuously evolving our technology to meet healthcare's most pressing challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Why Choose HealthAI?</h1>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing healthcare through artificial intelligence, making it more accessible, efficient, and effective for everyone.
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
          <Button asChild size="lg">
            <Link to="/technology" className="inline-flex items-center">
              Explore Our Technology
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}