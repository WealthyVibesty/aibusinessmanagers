import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AutomationLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
          Transform Your Business with AI Automation—Streamline Operations, Increase Profits, and Save Time!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp" style={{ animationDelay: "100ms" }}>
          Discover How We Helped a Print Shop Save 20+ Hours a Week, Eliminate Errors, and Boost Profits—And How We Can Do the Same for You!
        </p>
        <Button 
          size="lg" 
          className="animate-slideUp" 
          style={{ animationDelay: "200ms" }}
          onClick={() => navigate("/checkout")}
        >
          Book My Consultation Now ➡️
        </Button>
      </section>

      {/* What We Offer Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer: AI-Powered Automation That Works for You</h2>
        <p className="text-xl text-center mb-8">Imagine having an AI-powered assistant that:</p>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Answers customer inquiries instantly through calls, texts, or WhatsApp—24/7.",
            "Follows up with leads automatically—no more missed opportunities.",
            "Sends real-time updates to customers about their orders.",
            "Updates pricing dynamically based on supplier costs.",
            "Manages projects seamlessly in tools like Monday.com."
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="container px-4 py-16 mx-auto bg-muted rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">What We Did for the Print Shop</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 p-6">
            <h3 className="text-xl font-semibold mb-4">The Problem:</h3>
            <p className="text-lg text-muted-foreground">
              Manual processes slowed down production and pricing updates, while staff struggled to keep up with customer inquiries.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "AI Voice Agent Integration – We set up a system that answers customer calls, provides updates, and schedules follow-ups.",
              "Automated Pricing Updates – AI agents scraped supplier prices and updated pricing dynamically to protect profit margins.",
              "Twilio SMS Alerts – Customers received automatic updates about their orders at every stage.",
              "Project Management Automation – Integrated tasks into Monday.com to keep everything on track without manual oversight."
            ].map((solution, i) => (
              <Card key={i} className="p-6 animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <Rocket className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg">{solution}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Saved 20+ hours per week",
              "Boosted customer satisfaction with instant updates",
              "Increased profits by avoiding outdated pricing errors"
            ].map((result, i) => (
              <Card key={i} className="p-6 text-center animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-lg font-semibold">{result}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Who Is This For?</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Business Owners tired of manual workflows and missed opportunities",
            "Service Providers who want faster response times for leads",
            "E-commerce or Print Shops managing custom orders and projects",
            "Anyone looking to scale without adding extra staff"
          ].map((audience, i) => (
            <div key={i} className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg">{audience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Offer Section */}
      <section className="container px-4 py-16 mx-auto bg-muted rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started—AI Can Work for Your Business Too!</h2>
          <p className="text-xl mb-8">
            We're offering a 1-hour consultation ($250 value) where we'll:
          </p>
          <div className="space-y-4 mb-8">
            {[
              "Review your current workflows",
              "Pinpoint areas where AI can save time and increase revenue",
              "Provide a custom action plan to set up automations tailored to your business"
            ].map((step, i) => (
              <p key={i} className="text-lg animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                {step}
              </p>
            ))}
          </div>
          <Card className="p-6 mb-8">
            <p className="text-2xl font-bold text-primary">
              Limited-Time Offer: $250 Consultation + Free Workflow Blueprint!
            </p>
          </Card>
          <Button 
            size="lg" 
            className="animate-slideUp"
            onClick={() => navigate("/checkout")}
          >
            Book My Consultation Now ➡️
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Got Questions?</h2>
        <p className="text-lg mb-8">
          <Button 
            variant="link" 
            className="text-lg"
            onClick={() => navigate("/contact")}
          >
            Contact our support team
          </Button>
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Wait? Your Business Can't Afford to Fall Behind.</h2>
          <p className="text-xl text-muted-foreground">
            AI is the future—and it's moving fast. Don't let your competitors outpace you. Let's transform your business together.
          </p>
        </div>
      </section>
    </div>
  );
}