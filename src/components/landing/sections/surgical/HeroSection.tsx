import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SurgicalHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Surgical Practice with AI Voice Agents
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline pre and post-operative care communication while enhancing patient outcomes with intelligent AI assistance.
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/checkout")}
          className="text-lg px-8 py-6 h-auto"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}