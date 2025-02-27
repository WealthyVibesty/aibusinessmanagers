
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add staggered animation effect on mount
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const ctaElement = ctaRef.current;
    
    if (titleElement && subtitleElement && ctaElement) {
      titleElement.classList.add("animate-slideUp");
      
      setTimeout(() => {
        subtitleElement.classList.add("animate-slideUp");
      }, 200);
      
      setTimeout(() => {
        ctaElement.classList.add("animate-slideUp");
      }, 400);
    }
    
    return () => {
      // Cleanup animations if component unmounts
      if (titleElement) titleElement.classList.remove("animate-slideUp");
      if (subtitleElement) subtitleElement.classList.remove("animate-slideUp");
      if (ctaElement) ctaElement.classList.remove("animate-slideUp");
    };
  }, []);
  
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
      
      {/* Animated background grid for visual interest */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f620_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-30" />
      
      <div className="w-full max-w-4xl mx-auto text-center pt-20 sm:pt-32 pb-12 sm:pb-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 
            ref={titleRef}
            className="opacity-0 text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight sm:leading-[1.1] mb-6 sm:mb-12 px-2 transition-all duration-700"
          >
            {title}
          </h1>

          <p 
            ref={subtitleRef}
            className="opacity-0 text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4 transition-all duration-700"
          >
            {subtitle}
          </p>
        </div>

        <div 
          ref={ctaRef}
          className="opacity-0 flex flex-col items-center gap-6 px-4 transition-all duration-700"
        >
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
