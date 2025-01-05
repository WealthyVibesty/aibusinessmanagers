import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Calendar, Bell, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CardiologyLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Pacemaker Check Reminders",
      description: "Automate reminders for routine pacemaker or defibrillator follow-ups."
    },
    {
      title: "Stress Test Scheduling",
      description: "Help patients book and prepare for stress tests with clear instructions."
    }
  ];

  const benefits = [
    { text: "Improve adherence to critical cardiac care plans" },
    { text: "Free up staff to focus on complex cases" },
    { text: "Reduce missed appointments" },
    { text: "Enhance patient communication" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Cardiology Practice with AI Voice Agents"
        subtitle="Streamline patient care, improve adherence to cardiac care plans, and reduce administrative burden."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Cardiology Practices"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Cardiology Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading cardiology practices in delivering exceptional care with AI support
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}