import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Statistic */}
        <div className="mb-12 animate-fadeIn">
          <span className="block text-5xl md:text-6xl font-bold text-primary mb-2">
            272,299+
          </span>
          <span className="text-xl text-muted-foreground">
            Businesses Transformed
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary animate-slideUp">
          AI is Moving Fast – But Starting Doesn't Have to Be Hard or Expensive.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slideUp" 
           style={{ animationDelay: "100ms" }}>
          Try Us for Free. If You Like What We Create, We'll Help You Implement It – No Pressure, No Regrets.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="mt-12 text-lg group animate-slideUp"
          style={{ animationDelay: "200ms" }}
          onClick={() => navigate("/login")}
        >
          Get Started Now – Free
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}