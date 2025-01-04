import { Card } from "@/components/ui/card";
import OfferingCard from "./pricing/OfferingCard";
import BonusCard from "./pricing/BonusCard";
import PricingSummary from "./pricing/PricingSummary";
import ContactSection from "./pricing/ContactSection";
import { Book, Cpu, Bot } from "lucide-react";

export default function PricingDetailsSection() {
  const offerings = [
    {
      title: "Personalized AI Agent Workforce Implementation Roadmap",
      value: 1000,
      features: [
        "AI Voice Agent Profile Creation",
        "Workflow Automation Plan",
        "Task Delegation Strategy"
      ]
    },
    {
      title: "AI Voice Agent Profile Creation",
      value: 500,
      features: [
        "Custom Scripts",
        "Integration with Your Systems",
        "Training and Testing"
      ]
    },
    {
      title: "1-Hour Strategy Consultation",
      value: 250,
      features: [
        "Review your current workflows",
        "Pinpoint areas for AI implementation",
        "Custom action plan"
      ]
    }
  ];

  const bonuses = [
    {
      title: "AI Voice Customer Service Agent for Your Website",
      value: 250,
      description: "24/7 customer support, lead capture, and seamless CRM integration",
      features: [
        "24/7 Customer Support with FAQs and product details",
        "Automated lead capture system",
        "Seamless website and CRM integration"
      ]
    },
    {
      title: "AI Content Creation Toolkit",
      value: 300,
      description: "Generate high-quality content and optimize for SEO",
      features: [
        "AI Writing Assistant for blogs and social media",
        "Content Calendar Automation",
        "SEO Optimization Tools"
      ]
    },
    {
      title: "Custom AI Workflow Blueprint",
      value: 150,
      description: "Step-by-step implementation guide for your business"
    },
    {
      title: "AI-Powered Marketing Audit",
      value: 197,
      description: "Comprehensive analysis and optimization recommendations"
    },
    {
      title: "Exclusive Access to AI Tools Library",
      value: 100,
      description: "Curated collection of premium AI tools and resources"
    },
    {
      title: "Priority Implementation Assistance",
      value: 250,
      description: "Fast-track setup and implementation support"
    }
  ];

  const courses = [
    {
      title: "Using AI to Create Websites and Software",
      description: "Learn how to build websites and software using AI tools—no coding required.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
    },
    {
      title: "Creating AI Voice Agents and Connecting Them to Your CRM",
      description: "Master the art of building and integrating AI voice agents into your business workflows.",
      icon: <Bot className="h-8 w-8 text-primary" />,
    },
    {
      title: "Using Basic AI Tools to Automate Everything",
      description: "Discover how to use AI tools to handle repetitive tasks, analyze data, and explain complex concepts.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white/90 to-primary/5 backdrop-blur-md py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fadeIn leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What You'll Get for Just $247:
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slideUp">
              Transform your business with our comprehensive AI implementation package
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {offerings.map((offering, i) => (
              <OfferingCard key={i} index={i} {...offering} />
            ))}

            {/* Bonuses Section */}
            <div className="pt-8">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    🎁 Exclusive Bonuses (Total Value: $1,694+)
                  </h2>
                  <div className="grid gap-6">
                    {bonuses.map((bonus, i) => (
                      <BonusCard key={i} index={i} {...bonus} />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Lifetime Access Section */}
            <div className="pt-8">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                <div className="p-8 sm:p-10 space-y-10">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Lifetime Access to AI Training Courses
                    </h2>
                    <p className="text-xl text-primary font-semibold">
                      Value: $497+ (Included Free with Your Purchase)
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    {courses.map((course, i) => (
                      <Card 
                        key={i} 
                        className="group p-6 animate-slideUp hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {course.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </Card>
                    ))}
                  </div>

                  <Card className="p-6 text-center bg-gradient-to-r from-primary/5 to-accent/5 animate-fadeIn hover:shadow-lg transition-all duration-300" style={{ animationDelay: "400ms" }}>
                    <p className="text-xl font-semibold leading-relaxed">
                      And here's the best part: You'll get all future courses for free to train your team and stay ahead of the curve.
                    </p>
                  </Card>
                </div>
              </Card>
            </div>

            <PricingSummary />
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  );
}
