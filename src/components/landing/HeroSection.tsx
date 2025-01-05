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
    <section className="relative flex flex-col items-center px-6 sm:px-8 lg:px-12 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      {/* Top AI Assistant Button */}
      <Button
        variant="outline"
        size="sm"
        className="mt-6 text-sm rounded-full hover:bg-primary hover:text-white transition-all group"
        onClick={handleTalkToAI}
      >
        Have Questions? Talk to AI
        <Mic className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
      </Button>

      <div className="w-full max-w-4xl mx-auto text-center pt-16 pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-[1.1] mb-12">
            Integrate AI Into Your Business
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 animate-slideUp mb-12 leading-relaxed max-w-2xl mx-auto px-4" 
             style={{ animationDelay: "100ms" }}>
            Enhance Customer Service, Automate Billing, and More! AI is advancing everyday businesses faster than ever - stay ahead of the competition.
          </p>

          {/* Mid-section AI Assistant Button */}
          <Button
            variant="outline"
            size="lg"
            className="mb-8 text-lg rounded-full hover:bg-primary hover:text-white transition-all group animate-slideUp"
            onClick={handleTalkToAI}
            style={{ animationDelay: "150ms" }}
          >
            Learn More From Our AI Assistant
            <Mic className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-6 animate-slideUp px-4" 
             style={{ animationDelay: "200ms" }}>
          <Button
            size="lg"
            className="text-lg sm:text-xl w-full sm:w-auto px-12 py-7 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            onClick={() => navigate("/checkout")}
          >
            Get Started Now - Only $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg sm:text-xl w-full sm:w-auto px-12 py-7 rounded-full bg-white hover:bg-primary hover:text-white border-2 shadow-sm hover:shadow-md transition-all group"
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