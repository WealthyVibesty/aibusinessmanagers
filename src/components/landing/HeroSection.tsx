import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="container px-4 py-24 mx-auto text-center space-y-8 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        AI is Moving Fast – But Starting Doesn't Have to Be Hard or Expensive.
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        Try Us for Free. If You Like What We Create, We'll Help You Implement It – No Pressure, No Regrets.
      </p>
      <Button
        size="lg"
        className="mt-8 text-lg group"
        onClick={() => navigate("/login")}
      >
        Get Started Now – Free
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </section>
  );
}