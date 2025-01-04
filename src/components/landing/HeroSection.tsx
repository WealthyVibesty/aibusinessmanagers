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
    <section className="relative flex flex-col items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      <div className="max-w-3xl mx-auto text-center pt-16 pb-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-[1.1] mb-12">
          Integrate AI Into Your Business
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 animate-slideUp mb-12 leading-relaxed max-w-2xl mx-auto" 
           style={{ animationDelay: "100ms" }}>
          Enhance Customer Service, Automate Billing, and More! AI is advancing faster than ever - don't get left behind.
        </p>

        <div className="flex flex-col items-center gap-6 animate-slideUp" 
             style={{ animationDelay: "200ms" }}>
          <Button
            size="lg"
            className="text-lg sm:text-xl w-full sm:w-auto px-12 py-7 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            onClick={() => navigate("/login")}
          >
            Get Started Now - Only $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg sm:text-xl w-full sm:w-auto px-12 py-7 rounded-full bg-white hover:bg-gray-50 border-2 shadow-sm hover:shadow-md transition-all group"
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