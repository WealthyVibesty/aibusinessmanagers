import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ElderlyHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
          AI-Powered Elderly Care Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
          Enhance senior care with intelligent monitoring, personalized assistance, 
          and proactive health management powered by artificial intelligence.
        </p>
        <Button 
          size="lg" 
          className="animate-slideUp"
          onClick={() => navigate("/checkout")}
        >
          Get Started Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}