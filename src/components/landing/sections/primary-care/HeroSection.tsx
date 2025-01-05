import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mic } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  
  const handleTalkToAI = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.toggle('hidden');
      console.log('Toggling AI assistant widget');
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Revolutionize Your Primary Care Practice with AI-Powered Voice Agents
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform patient communication and practice efficiency. Say goodbye to long call wait times, 
          overwhelmed staff, and missed patient needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8"
          >
            Get Started Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={handleTalkToAI}
            className="text-lg px-8"
          >
            Talk to AI Assistant
            <Mic className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}