import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction?: () => void;
}

export default function SolutionHero({ 
  title, 
  subtitle, 
  ctaText,
  ctaAction 
}: SolutionHeroProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {subtitle}
        </p>
        <Button 
          size="lg"
          onClick={ctaAction}
          className="text-lg px-8 py-6 h-auto group"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}