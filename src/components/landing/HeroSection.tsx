import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  const handleTalkToAI = () => {
    window.open("https://elevenlabs.io/app/talk-to?agent_id=B6WMT12NTS3pKTWrpUaI", "_blank");
  };
  
  return (
    <section className="relative pt-12 min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-tight">
            Integrate AI Into Your Customer Service, Automate Billing, & So Much More!
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto animate-slideUp leading-relaxed" 
             style={{ animationDelay: "100ms" }}>
            AI is Moving Faster Than Ever – Don't Get Left Behind. For Just $247, Let Us Integrate AI Into Your Business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 animate-slideUp" 
             style={{ animationDelay: "200ms" }}>
          <Button
            size="lg"
            className="text-lg sm:text-xl w-full sm:w-auto group"
            onClick={() => navigate("/login")}
          >
            Get Started Now – Only $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg sm:text-xl w-full sm:w-auto group"
            onClick={handleTalkToAI}
          >
            Talk to AI Assistant
            <Mic className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}