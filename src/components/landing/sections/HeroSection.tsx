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
    <section className="relative flex flex-col items-center px-6 sm:px-8 lg:px-12 overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      <div className="w-full max-w-4xl mx-auto text-center pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary animate-slideUp leading-[1.1] mb-12">
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 animate-slideUp mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 animate-slideUp px-4">
          <Button
            size="lg"
            className="text-lg sm:text-xl px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            onClick={handleCTA}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}