import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Phone, Globe, Send, Instagram, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DemoRequestForm from "@/components/DemoRequestForm";
import StrategyCallForm from "@/components/StrategyCallForm";
import { useState } from "react";
import SEO from "@/components/SEO";
import AISolutionFinder from "@/components/solutions/AISolutionFinder";

export default function AIBusinessSolutions() {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isStrategyCallOpen, setIsStrategyCallOpen] = useState(false);
  const [isSolutionFinderOpen, setIsSolutionFinderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Business Solutions" 
        description="Revolutionize customer service and digital engagement with AI-powered solutions for voice, chat, web, and social media automation."
      />

      {/* Problems Section - Moved to top */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Is Your Business Struggling With...?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-red-500" />,
                text: "Overflowing customer service requests that overwhelm your team"
              },
              {
                icon: <Instagram className="h-8 w-8 text-red-500" />,
                text: "Missed opportunities to engage customers on social media"
              },
              {
                icon: <Send className="h-8 w-8 text-red-500" />,
                text: "Inefficient follow-ups that let leads slip through the cracks"
              },
              {
                icon: <Globe className="h-8 w-8 text-red-500" />,
                text: "A website that fails to convert visitors into customers"
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Mid-Size and Large Companies Hire AI Business Managers To Maximize Work Efficiency, Time & Revenue
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slideUp">
            Helping Businesses Save 20+ Hours Per Week with AI-Powered Automation | Streamlining Customer Service, Boosting Engagement, and Cutting Costs for Scalable Growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
            <Button 
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="text-xl px-10 py-7"
            >
              See a Live Demo
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setIsSolutionFinderOpen(true)}
              className="text-xl px-10 py-7 animate-pulse hover:animate-none"
            >
              Find Your AI Solution
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => setIsStrategyCallOpen(true)}
              className="text-xl px-10 py-7"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How AI Business Managers Can Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "AI-Powered Voice Assistants",
                description: "Handle 90% of customer calls instantly, improving response times and cutting costs"
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Generative AI Chatbots",
                description: "Engage website visitors and social media users with human-like conversations"
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "AI Website Development",
                description: "Create dynamic, fast, and SEO-friendly websites that adapt to user behavior"
              },
              {
                icon: <Send className="h-8 w-8 text-primary" />,
                title: "SMS Marketing Automation",
                description: "Build lists, send personalized campaigns, and follow up on leads automatically"
              },
              {
                icon: <Instagram className="h-8 w-8 text-primary" />,
                title: "Instagram Comment Automation",
                description: "Turn comments and DMs into conversations that drive sales"
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Advanced Analytics Dashboards",
                description: "Gain actionable insights from customer interactions to improve performance"
              }
            ].map((solution, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => navigate("/voice-agents")}
              className="text-lg px-8"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                stat: "30%",
                label: "Cost Reduction for Customer Service Teams"
              },
              {
                stat: "90%",
                label: "Calls Handled Automatically"
              },
              {
                stat: "50%",
                label: "Increase in Lead Conversions"
              }
            ].map((stat, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">{stat.stat}</div>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forms and Dialogs */}
      <DemoRequestForm 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
      <StrategyCallForm 
        isOpen={isStrategyCallOpen} 
        onClose={() => setIsStrategyCallOpen(false)} 
      />
      <AISolutionFinder
        isOpen={isSolutionFinderOpen}
        onClose={() => setIsSolutionFinderOpen(false)}
      />
    </div>
  );
}
