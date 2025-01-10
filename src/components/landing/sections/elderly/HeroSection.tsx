import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ElderlyHeroSection() {
  const navigate = useNavigate();
  
  const handleTalkToAI = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.toggle('hidden');
      console.log('Toggling AI assistant widget');
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Elderly Care with AI Voice Agents
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Enhance senior care delivery with intelligent voice assistants that provide 24/7 support, 
          medication reminders, and emergency response capabilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={handleTalkToAI}
            className="text-lg px-8 py-6 h-auto"
          >
            Try Voice Demo
            <Mic className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}