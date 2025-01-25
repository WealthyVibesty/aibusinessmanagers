import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, MessageSquare, Globe, Database, Instagram, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function CoreOffer() {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }
  };

  const features = [
    {
      title: "SMS Marketing List Building",
      description: "Turn inbound inquiries into long-term leads with automated SMS marketing campaigns",
      icon: <MessageSquare className="w-6 h-6 text-primary" />
    },
    {
      title: "Smart Conversation Flow",
      description: "AI assistants guide customers through queries without human intervention",
      icon: <Phone className="w-6 h-6 text-primary" />
    },
    {
      title: "Multilingual Support",
      description: "Serve global customers in their preferred language",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "CRM & Twilio Integration",
      description: "Seamless integration with your existing tools for efficient follow-ups",
      icon: <Database className="w-6 h-6 text-primary" />
    }
  ];

  const pricingTiers = [
    {
      name: "Basic Setup",
      price: "$3,000",
      features: [
        "AI Assistant Configuration",
        "Basic SMS Marketing",
        "Call Handling",
        "Standard Support"
      ]
    },
    {
      name: "Professional",
      price: "$7,000",
      features: [
        "Everything in Basic",
        "CRM Integration",
        "One Language Add-on",
        "Premium Support",
        "Analytics Dashboard"
      ]
    },
    {
      name: "Enterprise",
      price: "$10,000",
      features: [
        "Everything in Professional",
        "Multiple Language Support",
        "Custom Voice Options",
        "Advanced Analytics",
        "24/7 Priority Support"
      ]
    }
  ];

  const addOns = [
    {
      name: "Multilingual Capability",
      price: "$1,000 - $2,000",
      description: "Per additional language"
    },
    {
      name: "CRM Integration",
      price: "$1,500",
      description: "One-time setup fee"
    },
    {
      name: "Twilio SMS Follow-Up",
      price: "$500",
      description: "Plus usage-based pricing"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI-Powered Customer Engagement System"
        description="Transform customer service with AI voice agents, SMS marketing & Instagram automation. 24/7 support, multilingual capabilities & CRM integration."
        path="/core-offer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 animate-fadeIn">
            Increase Customer Service & Engage Customers Over The Phone & Instagram messenger with AI-Powered Assistants 🚀
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slideUp">
            From 24/7 AI customer support to SMS marketing, Instagram comment automation, and CRM integrations, 
            we help businesses streamline operations, build loyal audiences, and grow revenue—all with the power of AI.
          </p>
          
          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-xl animate-scale">
            <iframe 
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/E0BGE2jpMGE"
              title="AI Customer Service Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slideUp">
            <Button 
              size="lg"
              onClick={handleDemoClick}
              className="text-lg px-8 py-6 h-auto group"
            >
              See How It Works (Live Demo)
              <Bot className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDemoClick}
              className="text-lg px-8 py-6 h-auto group"
            >
              Find Your Solution
              <MessageSquare className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleDemoClick}
              className="text-lg px-8 py-6 h-auto group"
            >
              Let's Chat!
              <Globe className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feature Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Instagram Comment Automation Made Easy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-slideUp">
              <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatic Responses</h3>
              <p className="text-muted-foreground">
                Automatically respond to common questions, mentions, or DMs.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow animate-slideUp delay-100">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
              <p className="text-muted-foreground">
                Turn comments into conversations that drive leads and sales.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow animate-slideUp delay-200">
              <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Never miss a customer inquiry—your AI assistant is always on!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{tier.price}</p>
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-8"
                  onClick={() => navigate("/sales")}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Available Add-ons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{addon.price}</p>
                <p className="text-muted-foreground">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Customer Engagement?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free demo to see how our AI-powered system can help your business grow.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/sales")}
            className="text-lg px-8 py-6 h-auto"
          >
            Schedule Your Demo Now
          </Button>
        </div>
      </section>
    </div>
  );
}
