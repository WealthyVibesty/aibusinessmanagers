import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Bot, Clock, ChartLine, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";

export default function Transportation() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-green-500 animate-bounce" />,
      title: "Real-time Updates",
      description: "Keep customers informed with instant updates and notifications"
    },
    {
      icon: <ChartLine className="h-8 w-8 text-blue-500 animate-pulse" />,
      title: "Route Optimization",
      description: "Improve efficiency with AI-powered route planning"
    },
    {
      icon: <Users2 className="h-8 w-8 text-purple-500 animate-float" />,
      title: "Customer Experience",
      description: "Enhance satisfaction with proactive support and communication"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <SEO 
        title="AI Solutions for Transportation | AI Business Managers"
        description="Optimize transportation operations with AI-powered solutions. Enhance routing, improve efficiency, and boost customer satisfaction."
      />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <Car className="h-20 w-20 text-green-600 mx-auto animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slideDown">
            Transform Transportation
            <span className="text-gradient block">With Intelligent AI</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Revolutionize your transportation operations with AI solutions that optimize routes,
            enhance customer communication, and improve efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
            <Button 
              size="lg"
              onClick={() => navigate("/create-bot")}
              className="group bg-green-600 hover:bg-green-700 text-lg px-8 py-6 h-auto"
            >
              Create Your AI Bot
              <Bot className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/checkout")}
              className="group text-lg px-8 py-6 h-auto hover:bg-gray-100"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slideDown">
            Key Benefits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-scale"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}