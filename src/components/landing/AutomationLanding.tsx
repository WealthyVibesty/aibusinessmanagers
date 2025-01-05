import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Tooth } from "lucide-react";

export default function AutomationLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
          Transform Your Dental Practice with AI Automation—Streamline Operations, Increase Patient Satisfaction, and Boost Revenue!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp" style={{ animationDelay: "100ms" }}>
          Discover How We Helped a Multi-Location Dental Practice Save 30+ Hours a Week, Reduce No-Shows by 60%, and Increase Treatment Acceptance—And How We Can Do the Same for You!
        </p>
        <Button size="lg" className="animate-slideUp" style={{ animationDelay: "200ms" }}>
          Book My Practice Assessment Now ➡️
        </Button>
      </section>

      {/* What We Offer Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer: AI-Powered Automation for Your Dental Practice</h2>
        <p className="text-xl text-center mb-8">Imagine having an AI-powered assistant that:</p>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Schedules appointments and handles patient inquiries 24/7",
            "Automatically verifies insurance and estimates patient portions",
            "Sends personalized treatment plan follow-ups",
            "Updates treatment fees based on insurance changes",
            "Manages patient recall and reactivation automatically"
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
        <h2 className="text-3xl font-bold text-center mb-12">What We Did for Growing Smiles Dental Group</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 p-6">
            <h3 className="text-xl font-semibold mb-4">The Challenge:</h3>
            <p className="text-lg text-muted-foreground">
              Manual processes overwhelmed staff, leading to missed appointments, delayed insurance verifications, and inconsistent patient follow-ups across multiple locations.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "AI Voice Assistant Integration – We implemented a system that handles appointment scheduling, confirmations, and patient inquiries 24/7.",
              "Insurance Verification Automation – AI agents verify insurance benefits and calculate patient portions automatically.",
              "Smart Patient Communication – Patients receive personalized treatment plan follow-ups and appointment reminders.",
              "Multi-Location Coordination – Automated systems ensure consistent patient care across all practice locations."
            ].map((solution, i) => (
              <Card key={i} className="p-6 animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <Tooth className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg">{solution}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Reduced no-shows by 60%",
              "Saved 30+ hours per week in administrative tasks",
              "Increased treatment acceptance by 40%"
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
            "Single-Location Dental Practices looking to scale efficiently",
            "Multi-Location Dental Groups seeking operational consistency",
            "Dental Service Organizations (DSOs) aiming to standardize processes",
            "Practice Owners wanting to reduce administrative overhead"
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
          <h2 className="text-3xl font-bold mb-8">Get Started—AI Can Transform Your Dental Practice!</h2>
          <p className="text-xl mb-8">
            We're offering a 1-hour practice assessment ($250 value) where we'll:
          </p>
          <div className="space-y-4 mb-8">
            {[
              "Review your current practice workflows",
              "Identify areas where AI can reduce overhead and increase production",
              "Provide a custom implementation plan for your practice"
            ].map((step, i) => (
              <p key={i} className="text-lg animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                {step}
              </p>
            ))}
          </div>
          <Card className="p-6 mb-8">
            <p className="text-2xl font-bold text-primary">
              Limited-Time Offer: $250 Assessment + Free Practice Blueprint!
            </p>
          </Card>
          <Button size="lg" className="animate-slideUp">
            Book My Practice Assessment Now ➡️
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Got Questions About Your Practice?</h2>
        <p className="text-lg mb-8">Contact us at [your email or phone number].</p>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Wait? Your Practice Can't Afford to Fall Behind.</h2>
          <p className="text-xl text-muted-foreground">
            AI is transforming dentistry—and it's moving fast. Don't let other practices in your area outpace you. Let's enhance your practice together.
          </p>
        </div>
      </section>
    </div>
  );
}