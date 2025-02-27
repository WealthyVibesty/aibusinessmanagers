
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText = "Schedule a Demo", 
  ctaAction 
}: HeroSectionProps) {
  const navigate = useNavigate();
  
  const handleCTA = () => {
    if (ctaAction) {
      ctaAction();
    } else {
      navigate("/checkout");
    }
  };
  
  return (
    <section className="relative flex flex-col items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      <div className="w-full max-w-4xl mx-auto text-center pt-20 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-tight sm:leading-[1.1] mb-6 sm:mb-12 px-2">
            {title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 animate-slideUp mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 animate-slideUp px-4">
          <Button
            size="lg"
            className="text-base sm:text-xl px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            onClick={handleCTA}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
