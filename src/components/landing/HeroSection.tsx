import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-tight">
            Integrate AI Into Your Business
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 animate-slideUp leading-relaxed" 
             style={{ animationDelay: "100ms" }}>
            Enhance Customer Service, Automate Billing, and More! AI is advancing faster than ever - don't get left behind.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 animate-slideUp" 
             style={{ animationDelay: "200ms" }}>
          <Button
            size="lg"
            className="text-lg sm:text-xl w-full sm:w-auto px-8 py-6 rounded-xl group"
            onClick={() => navigate("/login")}
          >
            Get Started Now - Only $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg sm:text-xl w-full sm:w-auto px-8 py-6 rounded-xl bg-white group"
            onClick={handleTalkToAI}
          >
            Talk to Our AI Assistant
            <Mic className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}