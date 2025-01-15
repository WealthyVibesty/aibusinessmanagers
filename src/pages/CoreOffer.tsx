import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, MessageSquare, Globe, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function CoreOffer() {
  const navigate = useNavigate();

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
        description="Transform your customer service with AI-powered engagement, SMS marketing, and automated follow-ups"
        path="/core-offer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 animate-fadeIn">
            Transform Your Customer Engagement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slideUp">
            An AI-powered system that builds SMS marketing lists, streamlines customer calls, 
            and enables personalized follow-ups.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/sales")}
            className="text-lg px-8 py-6 h-auto animate-slideUp"
          >
            Schedule a Free Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Available Add-ons</h2>
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