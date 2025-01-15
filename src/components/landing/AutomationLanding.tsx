import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AutomationLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-24 pb-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp leading-[1.2]">
            Transform Your Business with AI Automation—Streamline Operations, Increase Profits, and Save Time!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp leading-relaxed" style={{ animationDelay: "100ms" }}>
            Discover How We Helped a Print Shop Save 20+ Hours a Week, Eliminate Errors, and Boost Profits—And How We Can Do the Same for You!
          </p>
          <Button 
            size="lg" 
            className="animate-slideUp text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all" 
            style={{ animationDelay: "200ms" }}
            onClick={() => navigate("/checkout")}
          >
            Book My Consultation Now ➡️
          </Button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container px-4 py-20 mx-auto bg-white/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              What We Offer: AI-Powered Automation That Works for You
            </h2>
            <p className="text-xl text-muted-foreground">
              Imagine having an AI-powered assistant that:
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              "Answers customer inquiries instantly through calls, texts, or WhatsApp—24/7.",
              "Follows up with leads automatically—no more missed opportunities.",
              "Sends real-time updates to customers about their orders.",
              "Updates pricing dynamically based on supplier costs.",
              "Manages projects seamlessly in tools like Monday.com."
            ].map((benefit, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
            What We Did for the Print Shop
          </h2>
          
          <Card className="mb-8 p-8 bg-primary/5 border-primary/10">
            <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge:</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Manual processes slowed down production and pricing updates, while staff struggled to keep up with customer inquiries.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "AI Voice Agent Integration – We set up a system that answers customer calls, provides updates, and schedules follow-ups.",
              "Automated Pricing Updates – AI agents scraped supplier prices and updated pricing dynamically to protect profit margins.",
              "Twilio SMS Alerts – Customers received automatic updates about their orders at every stage.",
              "Project Management Automation – Integrated tasks into Monday.com to keep everything on track without manual oversight."
            ].map((solution, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-all animate-slideUp bg-white" style={{ animationDelay: `${i * 100}ms` }}>
                <Rocket className="h-10 w-10 text-primary mb-6" />
                <p className="text-lg leading-relaxed">{solution}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Saved 20+ hours per week",
              "Boosted customer satisfaction with instant updates",
              "Increased profits by avoiding outdated pricing errors"
            ].map((result, i) => (
              <Card key={i} className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-lg font-semibold leading-relaxed">{result}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="container px-4 py-20 mx-auto bg-white/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
            Who Is This For?
          </h2>
          <div className="space-y-6">
            {[
              "Business Owners tired of manual workflows and missed opportunities",
              "Service Providers who want faster response times for leads",
              "E-commerce or Print Shops managing custom orders and projects",
              "Anyone looking to scale without adding extra staff"
            ].map((audience, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">{audience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Offer Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Get Started—AI Can Work for Your Business Too!
            </h2>
            <p className="text-xl text-muted-foreground">
              We're offering a 1-hour consultation ($250 value) where we'll:
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Review your current workflows",
              "Pinpoint areas where AI can save time and increase revenue",
              "Provide a custom action plan to set up automations tailored to your business"
            ].map((step, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-lg leading-relaxed">{step}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <p className="text-2xl font-bold text-primary text-center">
              Limited-Time Offer: $250 Consultation + Free Workflow Blueprint!
            </p>
          </Card>

          <div className="text-center">
            <Button 
              size="lg" 
              className="animate-slideUp text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/checkout")}
            >
              Book My Consultation Now ➡️
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-20 mx-auto text-center bg-gradient-to-b from-white via-primary/5 to-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Got Questions?</h2>
            <Button 
              variant="link" 
              className="text-lg hover:text-primary transition-colors"
              onClick={() => navigate("/contact")}
            >
              Contact our support team
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Why Wait? Your Business Can't Afford to Fall Behind.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI is the future—and it's moving fast. Don't let your competitors outpace you. Let's transform your business together.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container px-4 py-20 mx-auto text-center bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
            Mid-Size and Large Companies Hire AI Business Managers To Maximize Work Efficiency, Time & Revenue
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We Assist Businesses Save 20+ Hours Per Week with AI-Powered Automation | Streamlining Customer Service, Boosting Engagement, and Cutting Costs for Scalable Growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/demo")}
            >
              See a Live Demo
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/solutions")}
            >
              Find Your AI Solution
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/strategy-call")}
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}