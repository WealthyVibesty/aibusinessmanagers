import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/90 backdrop-blur-md">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 to-white -z-10" />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Statistic */}
        <div className="mb-8 sm:mb-12 animate-fadeIn">
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[slide_2s_linear_infinite] mb-2">
            376+
          </span>
          <span className="text-lg sm:text-xl text-muted-foreground">
            Businesses Transformed
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary animate-slideUp px-4">
          Your Business is Falling Behind – AI is the Answer. Let's Fix That, Starting Today.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slideUp px-4" 
           style={{ animationDelay: "100ms" }}>
          AI is Moving Faster Than Ever – Don't Get Left Behind. For Just $247, Let Us Help You Transform Your Business.
        </p>

        {/* CTA Button */}
        <div className="px-4">
          <Button
            size="lg"
            className="mt-8 sm:mt-12 text-base sm:text-lg w-full sm:w-auto group animate-slideUp"
            style={{ animationDelay: "200ms" }}
            onClick={() => navigate("/login")}
          >
            Get Started Now – Only $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}