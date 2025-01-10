import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
}

export default function SolutionHero({ title, subtitle, ctaText = "Schedule a Demo" }: SolutionHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/checkout")}
          className="text-lg px-8 py-6 h-auto"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}